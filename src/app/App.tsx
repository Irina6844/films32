import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
