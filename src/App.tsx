import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import Loading from "./components/ui/Loadings";
import AppLayout from "./components/layout/AppLayout";

import { ROUTES } from "./types/route";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: 14,
          },
        }}
      />

      <AppLayout>
        <Routes>
          <Route path={ROUTES.Dashboard} element={<Dashboard />} />
          <Route path={ROUTES.Settings} element={<Settings />} />

          {/* Redirect for unknown routes */}
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
