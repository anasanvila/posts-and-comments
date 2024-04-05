import { useRouteError } from "react-router";
import useEffect from "react";

const ErrorPage = ({ text }) => {
  const error = useRouteError();
  useEffect(() => text("ErrorPage"));
  let title = "Error";
  let message = "Something went wrong";

  if (error.status == 500) {
    message = error.data.message;
  }

  if (error.status == 404) {
    message = "couldn't find page";
  }

  return (
    <div>
      <h1>{title}</h1>
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorPage;
