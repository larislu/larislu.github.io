import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Router,
  useSearchParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Artwork from "./pages/Artwork";
import NavBar from "./components/NavBar";

// TODO
// - refreshing on a non-root page 404s

function App() {
  const [searchParams] = useSearchParams();

  const renderPage = () => {
    const page = searchParams.get("page");
    console.log("page", page);
    switch (page) {
      case "/home":
        return <Home />;
      case "/resume":
        return <Resume />;
      case "/projects":
        return <Projects />;
      case "/artwork":
        return <Artwork />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavBar />
      {renderPage()}
    </div>
  );
}

export default App;
