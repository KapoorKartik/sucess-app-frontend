import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Footer } from "./components/footer/Footer";
import { Listing } from "./pages/Listing";
import { Home } from "./pages/Home";
import { MockTest } from "./pages/MockTest";
import { Questions } from "./pages/Questions";
// import Timer from "./components/Timer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mocktest/:testCodes" element={<MockTest />} />
        <Route path="/questions/:mockId" element={<Questions />} />
        <Route path="/listing" element={<Listing />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
      </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
