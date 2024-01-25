import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import TTS from "./TTS";
import "./bgcolor.css";
import logo from "./envision.png";
import { toast } from "react-toastify";
import { applyColorblindFilter } from "../utils/colors";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [colorBlind, setColorBlind] = useState(true); // Set default value to true

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUser({
      name,
    });
  }, []);

  useEffect(() => {
    // You may need to implement the logic to control Colorblindly extension
    // based on the `colorBlind` state
  }, [colorBlind]);

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a
            aria-label="Click here to go to home page"
            className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0"
            onClick={() => {
              navigate("/home");
            }}
          >
            <img
              className="w-44"
              src={logo}
              alt="ReservedIn"
              border="0"
              width="50"
              height="50"
              margin="0"
              padding="0"
            />

            {/* <span className="ml-3 text-xl">ReservedIn</span> */}
          </a>
          <nav className="md:mr-0 md:ml-0 md:py-1 md:pl-2 md:border-1 md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <br />

            <button
              className="mr-2" // Added mb-2 for bottom margin
              aria-label="Click here to go to Job portal"
              onClick={() => navigate("/jobs")}
            >
              Jobs
            </button>

            <br />
            <button
              className="mr-2"
              aria-label="Click here to go to resume maker"
              onClick={() => navigate("/resume")}
            >
              Resume Builder
            </button>
            <br />
            <button
              className="mr-2"
              aria-label="This is blogpage"
              onClick={() => navigate("/blogs")} //make it products
            >
              Products
            </button>
            <br />
            <button
              className="mr-2"
              aria-label="This is for courses"
              onClick={() => navigate("/coursepage")}
            >
              Resourses
            </button>
            <br />
            <button
              className="mr-2"
              aria-label="This is mentorship page"
              onClick={() => navigate("/mentorship")}
            >
              Mentorships
            </button>
            <br />
            <button
              className="mr-2"
              aria-label="This is grievance page"
              onClick={() => navigate("/grievance")}
            >
              Grievance
            </button>
            <button
              className="mr-3"
              aria-label="This is about page"
              onClick={() => navigate("/about")}
            >
              About Us
            </button>

            <br />
          </nav>

          {/* {(localStorage.getItem("disabilityType") === "visually-impaired" ||
            localStorage.getItem("disabilityType") === "color-blind") && (
            <TTS />
          )} */}

          <button
            aria-label="to logout press logout"
            onClick={
              localStorage.getItem("userId")
                ? () => {
                    localStorage.removeItem("userId");
                    window.location.href = "/";
                  }
                : () => {
                    window.location.href = "/";
                  }
            }
            className="inline-flex items-center bg-blue-500 border-0 py-1 px-1 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-0 md:mt-0"
          >
            {localStorage.getItem("userId") ? "Logout" : "Login"}
          </button>

          <button
            onClick={() => {
              navigate("/settings");
            }}
            className="ml-1"
            aria-label="Setting page"
          >
            <img
              className="w-11 h-11 rounded-full"
              src={`https://ui-avatars.com/api/?name=${
                user.name || "Sainath Poojary"
              }`}
              alt=""
            />
          </button>
        </div>
      </header>
      {/* {(localStorage.getItem("disabilityType") === "visually-impaired" ||
        localStorage.getItem("disabilityType") === "color-blind") && (
        <div className="bg-gray-100 p-4 text-center">
          <button
            onClick={() => {
              fetch("http://127.0.0.1:8000/start/eyemoment")
                .then((res) => {
                  toast.success("Eye Movement Tracking Started");
                })
                .catch((err) => {
                  toast.error("Error in starting Eye Movement Tracking");
                });
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Eye Movement Tracking Start
          </button> */}
          {/* <button
            onClick={() => {
              fetch("http://127.0.0.1:8000/stop/eyemoment")
                .then((res) => {
                  toast.success("Eye Movement Tracking Stoped!");
                })
                .catch((err) => {
                  toast.error("Error in stopping Eye Movement Tracking");
                });
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Eye Movement Tracking Stop
          </button> */}

          {/* <button
            onClick={() => {
              fetch("http://127.0.0.1:8000/start/handgestures")
                .then((res) => {
                  toast.success("Hand Gestures  Tracking Started");
                })
                .catch((err) => {
                  toast.error("Error in startingHand Gestures Tracking");
                });
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Hand Gestures Tracking Start
          </button> */}
          {/* <button
            onClick={() => {
              fetch("http://127.0.0.1:8000/stop/handgestures")
                .then((res) => {
                  toast.success("Hand Gestures Tracking Stoped!");
                })
                .catch((err) => {
                  toast.error("Error in stopping Hand Gestures Tracking");
                });
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Hand Gestures Tracking Stop
          </button> */}
        {/* </div>
      )} */}
    </div>
  );
}

export default Navbar;
