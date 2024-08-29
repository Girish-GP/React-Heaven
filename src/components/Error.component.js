import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <p>Something went wrong</p>
      <p>{err?.status}</p>
      <p>{err?.statusText}</p>
      <p>{err?.error?.message}</p>
      <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*QOZm9X5er1Y0r5-t"></img>
    </div>
  );
};
export default ErrorComponent;
