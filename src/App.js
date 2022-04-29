//Bring in Theme Provider
import { ThemesProvider } from "./context/ThemeContext";

import Header from "./components/Header"
import Herosection from "./components/Herosection";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <ThemesProvider>
      <div className="App">
        <Header />
        <Herosection />
        <Products />
        <Contact />
        <Footer />
      </div>
    </ThemesProvider>
    </>
  );
}

export default App;
