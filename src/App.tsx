import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AppRouter />
          <Analytics />
        </>
      )}
    </>
  );
}
