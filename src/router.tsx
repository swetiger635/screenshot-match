import { createBrowserRouter, Navigate, useSearchParams, type RouteObject } from "react-router";

import { RootLayout, NotFoundComponent, ErrorComponent } from "./routes/__root";
import { Index } from "./routes/index";
import { AuthPage } from "./routes/auth";
import { AuthenticatedLayout } from "./routes/_authenticated/route";
import { AppPage } from "./routes/_authenticated/app";

// Legacy /auth?mode=signup links keep working.
function LegacyAuthRedirect() {
  const [params] = useSearchParams();
  return <Navigate to={params.get("mode") === "signup" ? "/sign-up" : "/sign-in"} replace />;
}

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/sign-in", element: <AuthPage mode="signin" /> },
      { path: "/sign-up", element: <AuthPage mode="signup" /> },
      { path: "/auth", element: <LegacyAuthRedirect /> },
      {
        element: <AuthenticatedLayout />,
        children: [{ path: "/app", element: <AppPage /> }],
      },
      { path: "*", element: <NotFoundComponent /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
