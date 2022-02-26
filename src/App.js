import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./components/users/User"

import { GithubProvider } from './context/GithubContext'



function App() {
  return (
      <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <div>
          <div className="mx-auto max-w-screen-lg">
            <Routes>
                <Route path ="/" element={
                    <Home />
                } />
                <Route path="/user/:login" element={ <User /> } />
                <Route path="/about" element={ <About /> } />  
                <Route path="/*" element={ <NotFound /> } />

            </Routes>
          </div>
        </div>
        <Footer />
        </div>
      </Router>
      </GithubProvider>
   
  );
}

export default App;
