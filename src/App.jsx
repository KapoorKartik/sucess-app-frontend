import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Footer } from "./components/footer/Footer";
import { Listing } from "./pages/Listing";
import { Home } from "./pages/Home";
import { MockTest } from "./pages/MockTest";
import { Questions } from "./pages/Questions";
// import Timer from "./components/Timer";
import { Route, Routes, useLocation } from "react-router-dom";
import { MockTestList } from "./pages/MockTestList";

function App() {
  const location = useLocation();
  const currentPagePath =  location.pathname;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/mocktestlist" element={<MockTestList />} />
        <Route path="/mocktest/:testCodes" element={<MockTest />} />
        <Route path="/questions/:mockId" element={<Questions />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
      </Routes>
      {currentPagePath === "/" || currentPagePath === "/listing" ?  <Footer /> : null}
       
    </div>
  );
}

export default App;
