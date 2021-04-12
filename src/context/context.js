import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios"; // Library for fetch request

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();
//Provider,Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [isloading, setIsLoading] = useState(false);
  const [requests, setRequests] = useState(0);
  const [error1, setError1] = useState({ show: false, msg: "" });

  const SearchGithubUser = async (user) => {
    //toggleError to default
    toggleError(false, "");
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((error) => {
      console.log(error);
    });
    if (response) {
      setGithubUser(response.data);

      //repos fetch

      const { login, followers_url } = response.data;
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((response) => {
        setRepos(response.data);
      });

      //followers fetch

      axios(`${followers_url}?per_page=100`).then((response) => {
        setFollowers(response.data);
      });
    } else {
      toggleError(true, `No Matching User Found!`);
    }
    checkRequests();
    setIsLoading(false);
  };

  //check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        setRequests(data.rate.remaining);
        if (data.rate.remaining == 0) {
          toggleError(true, `Sorry! 60 request limit over ,Wait for an Hour`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleError = (show, msg) => {
    setError1({ show: show, msg: msg });
  };
  //error
  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error1,
        SearchGithubUser,
        isloading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
