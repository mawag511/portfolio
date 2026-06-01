import './App.css';
import './i18n';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { AboutMe } from './components/AboutMe.js';
import { Work } from './components/Work.js';
import { Footer } from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById("loading");
  if(loader){
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 1000)
  }
  return (
    !loading && (
      <div className="App">
        <NavBar />
        <Banner />
        <AboutMe />
        <Work />
        <Footer />
      </div>
    )
  );
}

export default App;
