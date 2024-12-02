import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";



const Applayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>);

};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
    },
    {
        path: "about/",
        element: <About />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);