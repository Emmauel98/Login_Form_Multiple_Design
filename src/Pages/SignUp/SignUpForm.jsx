import "./SignUp.css";
import mailIcon from "../Images/@.svg";
import frame from "../Images/Frame.svg";
// import myball from "../Images/ball.svg";
import web from "../Images/web.svg";
import web3 from "../Images/web3.svg";
import { useState } from "react";
const SignUpFormComponent = () => {
  const [changeTheme, setChangeTheme] = useState("Theme 1");
  

  return (
    <>
      <div
        className={`
        ${
          changeTheme === "Theme 1" ? "bg-black" : null
        } w-[100vw] h-[100vh] overflow-hidden
         flex justify-center items-center relative
          ${
           changeTheme === "Theme 2"
             ? " bg-gradient-to-tr from-[rgba(252,0,255,1)] via-[rgba(176,107,177,1)] to-[rgba(62,0,255,1)]"
             : null
         }
          ${
           changeTheme === "Theme 3"
             ? " bg-[url('/src/Pages/SignUp/Images/theme3Bg.svg')] bg-cover bg-[rgba(152,192,255,1)]" 
             : null
         }
         `}
      >
        <details
          className="fixed lg:top-[2rem] lg:left-[20vw]
         z-[300] left-[8vw] md:top-[4rem] bg-purple-500
         p-2 rounded-md shadow-sm shadow-white top-[2rem]"
        >
          <summary className=" cursor-pointer">Change theme</summary>
          <h1
            className=" cursor-pointer"
            onClick={(e) => setChangeTheme(e.target.innerText)}
          >
            Theme 1
          </h1>
          <h1
            className=" cursor-pointer"
            onClick={(e) => setChangeTheme(e.target.innerText)}
          >
            Theme 2
          </h1>
          <h1
            className=" cursor-pointer"
            onClick={(e) => setChangeTheme(e.target.innerText)}
          >
            Theme 3
          </h1>
        </details>
        {changeTheme === "Theme 3" ? null : (
          <img
            src={web3}
            alt="cosmos"
            className="absolute z-[400] lg:right-[1rem]
         lg:top-[1rem] lg:w-[45vw] lg:h-[45vh]
         md:w-[30%] md:top-[4rem] md:right-[.2rem]
         w-[30%] top-[3rem] right-[.3rem]"
          />
        )}
        <form
          action=""
          className={`
          ${
            changeTheme === "Theme 3"
              ? "bg-gradient-to-tl from-[rgba(225,225,225,0.4)] to-[rgba(255,255,255,0.2)] backdrop-filter backdrop-blur-3xl"
              : null
          }
          ${
            changeTheme === "Theme 2"
              ? "bg-gradient-to-tl from-[rgba(236,200,200,0.2)] via-[rgba(0,0,0,0.15)]to-[rgba(255,255,255,0.08)] backdrop-filter backdrop-blur-3xl"
              : null
          }
          ${
            changeTheme === "Theme 1"
              ? "bg-[rgba(130,130,130,0.22)] backdrop-filter backdrop-blur-3xl"
              : null
          }
              lg:w-[60vw] 
             h-[70vh] shadow-lg 
             ${
              changeTheme === "Theme 1"
                ? "shadow-[rgba(248,250,252,0.2)]"
                : null
            }
             ${
              changeTheme === "Theme 2"
                ? "shadow-[rgba(0,0,0,0.5)]"
                : null
            }
             
             rounded-md lg:pt-[3rem] relative w-[100%]
             mx-5 md:mx-8 lg:mx-0 pt-[3vh] ring-1 ring-slate-50`}
        >
          <h1
            className="font-['Arial'] lg:text-[3rem] text-center
            my-5 text-[2rem] md:text-[3rem]
            "
          >
            Login
          </h1>
          {changeTheme === "Theme 3" ? null : (
            <img
              src={web3}
              alt="cosmos"
              className="absolute z-[400] lg:left-[-18rem]
           lg:top-[5rem] lg:h-[40vh] lg:w-[40vw] md:w-[30%]
           md:top-[60vh] md:left-[-5rem] w-[40%] top-[60vh]
           left-[-3rem]"
            />
          )}
          <div className="flex justify-center items-center relative">
            <img
              src={mailIcon}
              alt=""
              className="absolute lg:left-[18vw]
              lg:bottom-[4.5vh] left-[7vw] bottom-[4vh]
              md:left-[7.8vw]"
            />
            <input
              type="email"
              required
              placeholder="Type your email here..."
              className="lg:w-[25vw] lg:h-[8vh] mb-5
             bg-transparent ring-1 ring-slate-100
             rounded-md placeholder:text-[rgba(255,255,255,0.8)]
             lg:pl-14 h-[8vh] md:h-[8vh] w-[80vw] md:ring-2 lg:ring-1
             pl-14 md:text-[1.5rem] lg:text-[1rem] md:pl-16"
            />
          </div>
          <div className="flex justify-center items-center relative">
            <img
              src={frame}
              alt=""
              className="absolute lg:left-[18vw]
              lg:bottom-[4.9vh] left-[7vw] bottom-[5vh]
              md:bottom-[4.4vh] md:left-[7.8vw]"
            />
            <input
              type="email"
              required
              placeholder="Type your password here..."
              className="lg:w-[25vw] lg:h-[8vh] mb-5
             bg-transparent ring-1 ring-slate-100
             rounded-md placeholder:text-[rgba(255,255,255,0.8)]
             lg:pl-14 h-[8vh] md:h-[8vh] w-[80vw] md:ring-2 lg:ring-1
             pl-14 md:text-[1.5rem] lg:text-[1rem] md:pl-16"
            />
          </div>
          <div
            className="float-right lg:mr-[17.5vw] clear-both
           mr-[5vw] md:text-[1.5rem] lg:text-[1rem] md:mr-[5.9vw]"
          >
            <a href="#" className="underline">
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              className={`lg:w-[25vw] lg:h-[8vh] lg:mb-10
            rounded-md
            lg:ml-[17.5vw] my-5 w-[80vw] h-[8vh] ml-[4vw]
            md:text-[2rem] lg:text-[1rem]
            ${
              changeTheme === "Theme 1"
                ? "bg-gradient-to-r from-[rgba(65,0,255,1)] to-[rgba(255,255,255,1)]"
                : null
            }
            ${
              changeTheme === "Theme 2"
                ? "bg-gradient-to-r from-[rgba(149,140,174,1)] to-[rgba(224,214,255,1)]"
                : null
            }
            ${
              changeTheme === "Theme 3"
                ? "bg-gradient-to-r from-[rgba(95,8,126,1)] to-[rgba(120,93,199,0.87)]"
                : null
            }
            `}
            >
              Login
            </button>
          </div>
        </form>
        {changeTheme === "Theme 3" ? null : (
          <img
            src={web}
            alt="ball2"
            className="absolute lg:w-[80vw] lg:h-[80vh]
         lg:right-[-10vw] lg:bottom-[-3vh] md:right-[-7vw]
         right-[-7vw] bottom-[3vh]"
          />
        )}
      </div>
    </>
  );
};

export default SignUpFormComponent;

// code of worship
// backdrop-blur-sm bg-white/30 lg:w-[60vw]

// bg-gradient-to-tl from-[rgba(236,200,200,0.2)] via-[rgba(0,0,0,0.15)]
//           to-[rgba(255,255,255,0.08)]
//           backdrop-filter backdrop-blur-3xl
