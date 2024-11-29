import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Efficiency from "./Components/Efficiency";
import Menu from "./Components/Menu";

const App = () => {
  return (
    //bootstrap container = 0.25 mark
    <div className="container-fluid">
      <Router>
        {/*bootstrap grid = 1 mark */}
        <div className="row">
          <div className="col-md-12">
            <Menu />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/*routes = 1.75 marks */}
            <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route path="/efficiency" element={<Efficiency />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
