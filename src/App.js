import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ProductPage from "./pages/ProductPage";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cancellationpolicypage":
        title = "";
        metaDescription = "";
        break;
      case "/termsandconditionspage":
        title = "";
        metaDescription = "";
        break;
      case "/productpage":
        title = "";
        metaDescription = "";
        break;
      case "/productlistingpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/cancellationpolicypage"
        element={<CancellationPolicyPage />}
      />
      <Route
        path="/termsandconditionspage"
        element={<TermsAndConditionsPage />}
      />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/productlistingpage" element={<ProductListingPage />} />
    </Routes>
  );
}
export default App;
