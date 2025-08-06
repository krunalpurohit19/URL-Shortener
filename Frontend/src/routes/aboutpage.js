import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import AboutPage from "../pages/AboutPage";

export const aboutPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
