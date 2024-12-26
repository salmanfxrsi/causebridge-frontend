import { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser, signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CauseBridge Login";
  }, []);

  //   Login with Email And Password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   Google Login
  const handleGoogleLogin = async () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero py-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            We CauseBridge connects people needing support with those eager to
            help. Users can create, update, or delete posts for volunteer needs
            and join others’ opportunities. This intuitive platform fosters
            collaboration and community impact through seamless volunteer
            engagement.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control bg-[#52C303] w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-6 py-2">
              <button>Login</button>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="mt-[-12px] mx-8 mb-4 flex items-center justify-center gap-3 px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out hover:bg-gray-100"
          >
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium">
              Sign in with Google
            </span>
          </button>
          <label className="mb-8">
            <p className="label-text-alt text-center">
              Don&apos;t you have an account?{" "}
              <Link
                to={"/register"}
                className="text-[#52C303] font-medium underline"
              >
                Register Now
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
