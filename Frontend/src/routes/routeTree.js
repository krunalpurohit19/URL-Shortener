import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { authRoute } from "./auth.route";
import { dashboardRoute } from "./dashboard";
import { homepageRoute } from "./homepage";
import { aboutPageRoute } from "./aboutpage";
import { servicesRoute } from "./services.route";

export const rootRoute = createRootRoute({
  component: App,
});

export const routeTree = rootRoute.addChildren([
  homepageRoute,
  authRoute,
  dashboardRoute,
  aboutPageRoute,
  servicesRoute,
]);
