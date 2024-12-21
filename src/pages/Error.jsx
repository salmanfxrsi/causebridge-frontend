import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="mt-80">
            <h1 className="text-5xl font-bold text-center">Page Not Found <span className="text-red-600">404</span></h1>
            <Link to='/' className="text-center bg-red-600 py-2 px-6 mx-auto block w-[200px] text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-8">Go Back To Home</Link>
        </div>
    );
};

export default Error;