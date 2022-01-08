import { lazy, LazyExoticComponent } from "react";
import { LoginPage } from "../modules/auth/login/pages/LoginPage";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  private: boolean;
  children?: Route[];
}

const DashboardRoutes = lazy(
  () =>
    import(
      /* webpackChunkName: "Dashboard" */ "../modules/dashboard/routes/DashboardRoutes"
    )
);

export const routes: Route[] = [
  {
    to: "/login",
    path: "login",
    Component: LoginPage,
    private: false,
    name: "Login",
  },
  {
    to: "/home",
    path: "/*",
    Component: DashboardRoutes,
    private: true,
    name: "home",
  },
];
