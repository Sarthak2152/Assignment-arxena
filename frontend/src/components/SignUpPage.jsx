import img1 from "../assets/mannan.webp";
import arxenaLogo from "../assets/arxena-logo.png";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
function FormContainer() {
  return (
    <div className="min-h-screen w-full flex flex-row">
      {/* FORM */}
      <section className=" w-full sm:w-[70%]">
        <header className="px-6 py-6">
          <Link to="/">
            <img
              className="h-auto w-[10rem] mr-auto block"
              src={arxenaLogo}
              alt="logo"
            />
          </Link>
        </header>
        <div className="flex mt-2 items-start justify-center">
          <SignUpForm />
        </div>
      </section>
      {/* TESTIMONIAL */}
      <section className="hidden min-h-full sm:block w-[30%] bg-gradient-to-b from-white to-blue-300">
        <div className="mt-[5rem] px-5">
          <img
            className="block mx-auto rounded-full w-[9rem] h-auto"
            src={img1}
            alt="logo"
          />
          <blockquote className="italic mt-[3rem]">
            Arxena helps me map with large F100 accounts saving me hours of
            manual work for resourcing projects.
          </blockquote>
          <p className="mt-[4rem]">
            <strong>Mannan Pacha</strong> | Manager - Ernst & Young
          </p>
          <p className="text-2xl text-[#2474cc] mt-4">
            <a href="https://www.linkedin.com/in/mannanpacha1988">
              <FaLinkedin />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default FormContainer;
