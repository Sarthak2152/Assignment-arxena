import { Link } from "react-router-dom";
function SignUpForm() {
  return (
    <div className="shadow-xl rounded-md shadow-black/15 w-[80%] sm:w-[70%] md:w-[55%] mb-5 text-center">
      <form className="px-10 py-4">
        <h2 className="text-center text-xl font-thin ">
          Get started with 10 free org-chart credits. No credit card is needed.
        </h2>
        <input
          type="text"
          placeholder="Full name"
          className="w-full border mt-5 px-4 py-2 border-slate-200 rounded-md"
        />
        <input
          type="number"
          placeholder="Mobile number"
          className="w-full border mt-5 px-4 py-2 border-slate-200 rounded-md"
        />
        <input
          type="text"
          placeholder="Business Email"
          className="w-full border mt-5 px-4 py-2 border-slate-200 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border mt-5 px-4 py-2 border-slate-200 rounded-md"
        />
        <select
          className="w-full border mt-5 px-4 py-2 text-gray-400 border-slate-200 rounded-md"
          name="pets"
          id="pet-select">
          <option value="">I work for a</option>
          <option className="text-gray-700" value="recruitment-agency">
            Recruitment Agency
          </option>
          <option className="text-gray-700" value="corporate">
            Corporate
          </option>
        </select>
        <button className="px-14 text-lg py-3 mt-10 bg-[#2474cc] font-semibold text-white rounded-full hover:bg-[#2474cc]/90">
          Create Account
        </button>
        <p className="text-zinc-300 mt-4">
          <Link to="/login">
            Already registered?{" "}
            <span className="underline underline-offset-4 decoration-dotted	">
              Log in instead
            </span>
          </Link>
        </p>
        <p className="text-zinc-300 mt-4">
          Account lock: We discourage licence sharing. Your account will be
          accessible from this device only
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
