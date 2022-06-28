import Navbar from "./component/Navbar";

import Footer from "./helper/Footer";
import Display from "./page/Display";
import HomePage from "./page/HomePage";
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="black overflow-hidden">
    <BrowserRouter>
    <Navbar />
    
      <Routes>
      <Route path="/" exact element={<HomePage />} />
        <Route path="/display" exact element={<Display />} />
      </Routes>
    </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
