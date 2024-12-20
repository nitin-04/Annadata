import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
    const error = useRouteError();

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="text-center bg-white shadow-lg rounded-lg p-8 max-w-lg">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h1>
                <p className="text-gray-700 mb-4">
                    We're sorry for the inconvenience. It seems an unexpected error has occurred.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="text-gray-800 font-medium">
                        <strong>Error Code:</strong> {error.status}
                    </p>
                    <p className="text-gray-800">
                        <strong>Details:</strong> {error.statusText || "Unknown Error"} - {error.message || "No additional information available."}
                    </p>
                </div>

                <Link
                    to="/"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};



export default Error;

