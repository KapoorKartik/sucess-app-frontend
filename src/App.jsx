import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Footer } from "./components/footer/Footer";
import { Test } from "./components/test/Test";

function App() {
  return (
    <div className="App">
      <Test />
      <Footer />
    </div>
  );
}

export default App;
