import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Footer } from "./components/footer/Footer";
import { Listing } from "./pages/Listing";
import { Home } from "./pages/Home";
import { MockTest } from "./pages/MockTest";
import { Questions } from "./pages/Questions";
import Timer from "./pages/Timer";

function App() {
  return (
    <div className="App">
      {/* <Test />  */}
      {/* <Home /> */}
      {/* <Listing /> */}
      {/* //* listing page complete */}
      {/* <MockTest /> */}
      {/* <Footer /> */}
      {/* <Timer /> */}
      <Questions />
    </div>
  );
}

export default App;
