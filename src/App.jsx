import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; 
import "./index.css";
import Footer from "./components/Footer";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
// import Input from "./components/reusable/Input";

const AppLayOut = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/', element: <AppLayOut />,
    children: [
		{ index: true, element: <Login /> }, // مؤقتا لغاية مانشوف ايه ال هيبقا هوووم 
		{ path: 'login', element: <Login /> },
		{path:'SignUp', element: <SignUp />}
	]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
