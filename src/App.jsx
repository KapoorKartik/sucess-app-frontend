import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home";
import { MockTest } from "./pages/MockTest";
import { Questions } from "./pages/Questions";
// import Timer from "./components/Timer";
import { Route, Routes, useLocation } from "react-router-dom";
import { MockTestList } from "./pages/MockTestList";
import { Result } from "./pages/Result";
import { ExamListing } from "./pages/ExamListing";
import { SeeAnswers } from "./pages/SeeAnswers";
import { OtpAuth } from "./pages/OtpAuth";
import { Login } from "./pages/Login";

function App() {
  const location = useLocation();
  const currentPagePath =  location.pathname;
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<MyChart />} /> */}
        <Route path="/otp" element={<OtpAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<ExamListing />} />
        <Route path="/mockTestList" element={<MockTestList />} />
        <Route path="/mockTest/" element={<MockTest />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/seeAnswer" element={<SeeAnswers />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
      </Routes>
      {currentPagePath === "/" || currentPagePath === "/listing" ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
