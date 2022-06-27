import Navbar from "./component/Navbar";
import Showcase from "./component/Showcase";
import Footer from "./helper/Footer";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div className="black">
      <Navbar />
      <HomePage />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
