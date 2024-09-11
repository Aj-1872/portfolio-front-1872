import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Work from "./component/Work";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Work",
        element: <Work />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
    ],
  },
  {
    path : "/",
    element : <Footer/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
