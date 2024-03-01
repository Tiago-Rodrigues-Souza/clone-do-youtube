import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/index";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
