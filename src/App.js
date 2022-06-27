import Navbar from "./component/Navbar";
import Showcase from "./component/Showcase";
import Footer from "./helper/Footer";
import HomePage from "./page/HomePage";
import Selection from "./page/Selection";

function App() {
  return (
    <div className="black overflow-hidden">
      <Navbar />
      <HomePage />
      <Selection />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
