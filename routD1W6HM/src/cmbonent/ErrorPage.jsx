import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" >
        <div className="flex flex-col items-center pt-40">
      <h1 className="font-bold text-red-700 text-5xl">Oops!</h1>
      <p className="pt-5 text-lg font-bold">Sorry, an unexpected error has occurred.</p>
      <p>
         <h2 className="font-bold text-5xl pb-6">404</h2>
        <i className="text-2xl">{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}