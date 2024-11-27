import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ROUTES } from "./types/route";

import Loading from "./components/base/Loading";
import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Privileges from "./pages/Privileges";
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
          <Route path={ROUTES.Transaction} element={<Transactions />} />
          <Route path={ROUTES.Accounts} element={<Accounts />} />
          <Route path={ROUTES.Investments} element={<Investments />} />
          <Route path={ROUTES.CreditCard} element={<CreditCards />} />
          <Route path={ROUTES.Loans} element={<Loans />} />
          <Route path={ROUTES.Services} element={<Services />} />
          <Route path={ROUTES.Privileges} element={<Privileges />} />
          <Route path={`${ROUTES.Settings}/:tab`} element={<Settings />} />

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
