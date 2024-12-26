import { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { setUser, signInWithGoogle, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
      document.title = "CauseBridge Registration";
    }, []);

  //   Register with Email And Password
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Check for uppercase letter
    if (!/^(?=.*[A-Z]).+$/.test(password))
      return toast.error("Use minimum one uppercase letter");

    // Check for lower letter
    if (!/^(?=.*[a-z]).+$/.test(password))
      return toast.error("Use minimum one lowercase letter");

    // Check for length
    if (password.length < 6) return toast.error("Use minimum 6 characters");

    createUser(email, password)
      .then((result) => {
        setUser(result.user);

        // updating user profile
        updateUserProfile(name, photoURL);
        setUser({ ...result.user, displayName: name, photoURL: photoURL });
        toast.success("Registration Successful");
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
        toast.success("Registration Successful");
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
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            We CauseBridge connects people needing support with those eager to
            help. Users can create, update, or delete posts for volunteer needs
            and join others opportunities. This intuitive platform fosters
            collaboration and community impact through seamless volunteer
            engagement.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                placeholder="photo url"
                className="input input-bordered"
                name="photoURL"
                required
              />
            </div>
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
              <button>Register</button>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="mt-[-12px] mx-8 mb-4 flex items-center justify-center gap-3 px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out hover:bg-gray-100"
          >
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium">
              Sign up with Google
            </span>
          </button>
          <label className="mb-8">
            <p className="label-text-alt text-center">
              Already you have an account?{" "}
              <Link
                to={"/login"}
                className="text-[#52C303] font-medium underline"
              >
                Login Now
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
