// import * as React from "react";
// import * as  ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import "./index.css";
// import router from "./router";

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<AuthProvider>
// 			<RouterProvider router={router} />
// 		</AuthProvider>
// 	</React.StrictMode>
// );

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
