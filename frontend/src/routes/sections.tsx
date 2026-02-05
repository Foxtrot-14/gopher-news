import { lazy, Suspense } from "react";
import { ThreeDot } from "react-loading-indicators"
import { Outlet, useRoutes } from "react-router-dom"
import DashboardLayout from "../layouts/Dashboard";

export const Homepage = lazy(() => import("../pages/Home"))
export const Stories = lazy(() => import("../pages/Stories"))

export default function Router() {
  const loading = <ThreeDot color="#FFFF" size="medium" />

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
        { element: <Homepage />, index: true },
        { element: <Stories />, path: "story/:id" },
      ]
    }
  ]);
}
