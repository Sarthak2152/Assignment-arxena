import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div className="shadow-lg rounded-md shadow-black/15 w-[80%] sm:w-[70%] md:w-[45%] text-center">
      <form className="px-10 py-10">
        <h2 className="text-center text-2xl font-thin ">Welcome back!</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full border mt-5 px-4 py-2 border-slate-200 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border mt-5 px-4 py-2 border-slate-200 rounded-md"
        />
        <button className="px-14 text-lg py-3 mt-10 bg-[#2474cc] font-semibold text-white rounded-full hover:bg-[#2474cc]/90">
          Log in
        </button>
        <p className="text-zinc-300 mt-4">
          <a href="#">
            Forgot your password?{" "}
            <span className="underline underline-offset-4 decoration-dotted	">
              Reset it here
            </span>
          </a>
        </p>
        <p className="text-zinc-300 ">
          <Link to="/signup">
            Need an account?{" "}
            <span className="underline underline-offset-4 decoration-dotted	">
              Sign up for free
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
