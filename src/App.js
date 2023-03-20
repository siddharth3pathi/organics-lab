import Aside from "./components/Aside"
import Header from "./components/Header";
import Section from "./components/Section"
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Aside />
      <main>
        <Header />
        <div className="main-aside">
          <Aside />
        </div>
        <Section />
        <Footer />
      </main>
    </div>
  );
}

export default App;
