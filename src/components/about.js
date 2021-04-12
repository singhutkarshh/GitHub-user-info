import { Auth0Context } from "@auth0/auth0-react";
import React from "react";

const About = ({ flag }) => {
  console.log(flag);
  return (
    <section>
      <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
        {" "}
        Developed By: Utkarsh Singh{" "}
      </h4>
      <p style={{ textAlign: "center" }}>
        <a href="https://github.com/singhutkarshh/Github-user-info">
          GitHub Source Code{" "}
        </a>
      </p>
      {flag && (
        <a href="https://github.com/john-smilga">
          <p style={{ textAlign: "center" }}>
            Project idea : https://github.com/john-smilga
          </p>
        </a>
      )}
    </section>
  );
};
export default About;
