import { lazy, Suspense } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "@/layouts/Dashboard";

export const Home = lazy(() => import("@/pages/Home"));

export function Router() {
  const loading = <ThreeDot color="#32cd32" size="medium" text="" textColor="" />;

  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={loading}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Home />, index: true },
      ],
    },
  ]);
}
