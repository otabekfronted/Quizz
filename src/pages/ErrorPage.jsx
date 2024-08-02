import { Button, Result } from "antd";
import { useRouteError, useNavigate } from "react-router-dom";
import "../index.css"; // Import the CSS file

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    // Default values
    let status = "500";
    let title = "";
    let subTitle = (
        <h3 className="error-subtitle">
            Looks like we hit a bump in the road. Click below to get back on
            track!
        </h3>
    );

    // Check the error status and set the appropriate values
    if (error.status === 404) {
        status = "404";
        title = "404";
        subTitle = (
            <h3 className="error-subtitle-404">
                Whoops! It seems like this page has gone on a quest of its own.
                Journey back to the homepage to find what you're looking for!
            </h3>
        );
    }

    return (
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            extra={
                <Button type="primary" onClick={() => navigate("/")}>
                    Back Home
                </Button>
            }
        />
    );
};

export default ErrorPage;
