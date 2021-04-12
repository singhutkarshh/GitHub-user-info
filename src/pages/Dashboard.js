import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import About from "../components/about.js";
const Dashboard = () => {
  const { isloading } = React.useContext(GithubContext);
  if (isloading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt=""></img>
        <About flag="" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
      <About flag="" />
    </main>
  );
};
export default Dashboard;
