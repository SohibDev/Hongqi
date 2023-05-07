import "./App.css";
import Card2 from "./components/Cards2";
import Card from "./components/Cards1";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <div className="container d-flex position-relative">
      <Card2 />
      <Card3 />
      </div>
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Footer />
    </>
  );
}

export default App;
