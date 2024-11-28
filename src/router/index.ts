import { lazy } from "react";
import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { ROUTES } from "./type";

export const routeConfig: RouteObject[] = [
  {
    path: ROUTES.Dashboard,
    Component: AppLayout,

    children: [
      {
        index: true,
        Component: lazy(() => import("@/pages/Dashboard")),
      },
      {
        path: ROUTES.Transaction,
        Component: lazy(() => import("@/pages/Transactions")),
      },
      {
        path: ROUTES.Accounts,
        Component: lazy(() => import("@/pages/Accounts")),
      },
      {
        path: ROUTES.Investments,
        Component: lazy(() => import("@/pages/Investments")),
      },
      {
        path: ROUTES.CreditCard,
        Component: lazy(() => import("@/pages/CreditCards")),
      },
      {
        path: ROUTES.Loans,
        Component: lazy(() => import("@/pages/Loans")),
      },
      {
        path: ROUTES.Services,
        Component: lazy(() => import("@/pages/Services")),
      },
      {
        path: ROUTES.Privileges,
        Component: lazy(() => import("@/pages/Privileges")),
      },
      {
        path: ROUTES.Settings,
        Component: lazy(() => import("@/pages/Settings")),
        children: [
          {
            index: true,
            loader: async () => redirect(`${ROUTES.Settings}/profile`),
          },
          {
            path: "profile",
            Component: lazy(() => import("@/components/settings/EditProfile")),
          },
          {
            path: "security",
            Component: lazy(() => import("@/components/settings/Security")),
          },
          {
            path: "preferences",
            Component: lazy(() => import("@/components/settings/Preferences")),
          },
        ],
      },
      {
        path: "*",
        Component: lazy(() => import("@/pages/NotFound")),
      },
    ],
  },
];

export const router = createBrowserRouter(routeConfig);
