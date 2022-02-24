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
        <Navbar />
        <div className='h-full max-w-screen-lg m-auto p-2 flex flex-col justify-between gap-y-10'>
          <div className="container h-full min-h-full">
            <Routes>
              <Route path ="/" element={
                  <Home />
              } />
              <Route path="/user/:login" element={ <User /> } />
              <Route path="/about" element={ <About /> } />  
              <Route path="/*" element={ <NotFound /> } />

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      </GithubProvider>
   
  );
}

export default App;
