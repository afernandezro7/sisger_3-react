import { LazyExoticComponent } from "react";
import { Envios } from "../pages/operations/Envios";
import { FileLoader } from "../pages/operations/FileLoader";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/loader",
    path: "loader",
    Component: FileLoader,
    name: "File Loader",
  },
  {
    to: "/envios",
    path: "/envios",
    Component: Envios,
    name: "Envios",
  },
];
