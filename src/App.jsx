import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Profile from "./components/Profile.jsx";
import ShimmerUi from "./components/Shimmer.jsx";
import Faq from "./components/Faq.jsx";
import userContext from "./utils/userContext.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";
//chunking

const Instamart = lazy(() => {
  return import("./components/Faq.jsx");
});

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Arghya",
    email: " arghya@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <userContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Arry-ease ",
              email: "arghya0017@gmail.com ",
            }}
          />
        ),
      },
      {
        path: "about",
        element: (
          <>
            {" "}
            <About />
            <Profile />
          </>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "faq",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <Faq />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
