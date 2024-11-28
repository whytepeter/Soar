import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import Loading from "./components/base/Loading";
import ErrorBoundary from "./components/base/ErrorBoundary";
import { router } from "./router";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
