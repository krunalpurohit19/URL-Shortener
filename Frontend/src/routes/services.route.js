import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import ServicesPage from "../pages/ServicesPage";

export const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
