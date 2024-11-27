import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loading from "./components/ui/loading";
import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import { ROUTES } from "./types/route";
import Settings from "./pages/Settings";
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
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
