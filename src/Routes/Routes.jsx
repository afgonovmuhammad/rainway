import { lazy } from "react";

export const Layout = lazy (()=> import("..//Layout/Layout.jsx"))
export const Home = lazy(() => import ("../Pages/Home/Home.jsx"));
export const Process = lazy(() => import ('../Pages/Process/Process.jsx'));
export const Company = lazy(() => import ('../Pages/Company/Company.jsx'));
export const Why_us = lazy(() => import ('../Pages/Why_us/Why_us.jsx'));
export const Error = lazy(() => import ('../Pages/Error/Error.jsx'));
