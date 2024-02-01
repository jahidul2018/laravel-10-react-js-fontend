import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ProtectedLayout from "./components/ProtectedLayout";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <GuestLayout />,
	},

	{
		path: "/",
		element: <ProtectedLayout />,
	},
]);

export default router;
