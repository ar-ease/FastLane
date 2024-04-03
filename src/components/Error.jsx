import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>OOPS...</h1>
      <h2>something went wrong.maybe this page does not exist anymore</h2>
      <h2>{err.status + " : " + err.statusText}</h2>
    </>
  );
};
export default Error;
