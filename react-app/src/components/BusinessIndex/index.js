//react-app/src/components/BusinessIndex/index.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses, resetState } from "../../store/business";
import { NavLink } from "react-router-dom";
import BusinessCard from "../BusinessCard";
import "./BusinessIndex.css";

const BusinessesIndex = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const allBusinessesData = useSelector((state) => state.business.businesses);
  let allBusinesses;
  if (allBusinessesData) allBusinesses = Object.values(allBusinessesData);
  useEffect(() => {
    dispatch(thunkLoadAllBusinesses());
  }, [dispatch]);
  if (!allBusinesses) {
    return null;
  }

  return (
    <>
      <div className="homePageBox">
        <div className="aboutUsBox">
          {!sessionUser && (
            <>
              <div className="developerInfo">
                <h2>Welcome to Gulp!</h2>
                <h3>Project Repo Link :</h3>
                <a
                  className="RepoLink"
                  href="https://github.com/glwo/pong-grp10-proj"
                >
                  Click Here!
                </a>
                <h3>About the Developers :</h3>
                <div className="indivDeveloperInfo">
                  <div>
                    <i class="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/nedned1108"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Ned's Github
                    </a>
                    , <i class="fa-brands fa-linkedin"></i>{" "}
                    <a
                      href="https://www.linkedin.com/in/truong-nguyen-693575257/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Ned's LinkedIn
                    </a>
                  </div>
                  <div>
                    <i class="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/armynso"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Prap's Github
                    </a>
                    , <i class="fa-brands fa-linkedin"></i>{" "}
                    <a
                      href="https://www.linkedin.com/in/prapassorn-tinnabavorn-8505ba141/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Prap's LinkedIn
                    </a>
                  </div>
                  <div>
                    <i class="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/olegv3"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Oleg's Github
                    </a>
                    , <i class="fa-brands fa-linkedin"></i>{" "}
                    <a
                      href="https://www.linkedin.com/in/oleg-volkov-90b0b1184/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Oleg's LinkedIn
                    </a>
                  </div>
                  <div>
                    <i class="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/glwo"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Glen's Github
                    </a>
                    , <i class="fa-brands fa-linkedin"></i>{" "}
                    <a
                      href="https://www.linkedin.com/in/glen-wojnar-74449b269/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Glen's LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="businessHomePageBox">
          {allBusinesses.map((business) => (
            <BusinessCard business={business} key={business.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinessesIndex;
