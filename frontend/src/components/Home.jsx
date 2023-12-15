import arxenaLogo from "../assets/arxena-logo.png";
import img01 from "../assets/img_01.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function Home() {
  const navigate = useNavigate();
  const handlickformSign = () => {
    navigate("/Signup");
  };

  const handlickformLogin = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="px-6 py-4 flex justify-end space-x-4">
        <button
          className="px-11  text-lg py-2 bg-[#2474cc] font-semibold text-white rounded-full"
          onClick={handlickformSign}>
          Sign Up
        </button>

        <button
          className="px-11 hidden sm:block text-lg py-2 border text-[#2474cc] border-[#2474cc] font-semibold  rounded-full"
          onClick={handlickformLogin}>
          Log in
        </button>
      </nav>
      {/* Body */}
      <main className="grow">
        <div className="h-full flex flex-col justify-center items-center space-y-10">
          <div>
            <Link to="/">
              <img
                className="h-auto w-[35%] mx-auto block"
                src={arxenaLogo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-full">
            <input
              className="px-6 py-3 bg-slate-100 border-2 w-[90%] sm:w-[70%] md:w-[40%] rounded-full block mx-auto"
              placeholder="Search any company's org chart"></input>
          </div>
          <div>
            <img
              className="block mt-[3rem] h-auto w-[65%] mx-auto"
              src={img01}
              alt="open ai logo"
            />
          </div>
        </div>
      </main>
      {/* FOOTER */}
      <footer className="text-sm md:text-base text-center md:text-left px-10 py-6 flex flex-col md:flex-row justify-between space-y-9 md:space-y-0 items-center">
        <div className="order-last md:order-first">
          <p>OrgGPT - Talent Identification Software for Ambitious Companies</p>
          <p>
            <a
              className="text-blue-500 hover:underline underline-offset-1"
              href="#">
              Pricing
            </a>{" "}
            |{" "}
            <a
              className="text-blue-500 hover:underline underline-offset-1"
              href="#">
              Terms of Service
            </a>{" "}
            |{" "}
            <a
              className="text-blue-500 hover:underline underline-offset-1"
              href="#">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              className="text-blue-500 hover:underline underline-offset-1"
              href="#">
              How to Use
            </a>{" "}
            |{" "}
            <a
              className="text-blue-500 hover:underline underline-offset-1"
              href="#">
              Download Extension
            </a>
          </p>
        </div>
        {/* Social handles */}
        <div className="space-x-5 flex justify-center items-center text-2xl text-[#2474cc]">
          <a href="https://www.linkedin.com/company/arxena">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/arxenainc">
            <FaTwitterSquare />
          </a>
          <a href="https://facebook.com/arxenainc">
            <FaFacebookSquare />
          </a>
          <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA">
            <FaYoutube />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
