import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
    const error = useRouteError();

    return (
        <div className="error-page">
            <h1>Oops! Something went wrong.</h1>
            <h5>{error.status}</h5>
            <p>We apologize for the inconvenience. An error has occurred.</p>
            <p>
                <strong>Error details:</strong> {error.statusText} {error.message } {error.status}
            </p>
            <Link to="/" className="back-home-link">
                Go back to Home
            </Link>
        </div>
    );
};

export default Error;

