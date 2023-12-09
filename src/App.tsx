import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/sign-up/sign-up";
import { Theme } from "./context/ThemeProvider";
import { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { useTwitchAuth } from "./hooks/useTwitchAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const { theme } = useContext(Theme);
  const { authWithTwitch } = useTwitchAuth();

  useEffect(() => {
    authWithTwitch();
  });

  return (
    <div
      className={
        "box-border px-[6%] text-[3.18vw] sm:text-[1vw] min-h-[100vh] overflow-auto " +
        (theme === "dark" ? "text-[#f2f2f8] bg-[#1d212a]" : "")
      }
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
