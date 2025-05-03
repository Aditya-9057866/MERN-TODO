import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./Hero"
import {BrowserRouter, Route,Routes} from "react-router-dom"
import MyNotes from "./MyNotes/MyNotes"
function App() {
  

  return (
    
      <BrowserRouter>
      <Header />
      <main style={{ minHeight: "93vh" }} className=" flex-grow">
        <Routes>
        <Route path="/" Component={Hero}></Route>
        <Route path="/mynotes" Component={MyNotes}></Route>
        </Routes>
        
     
      </main>
        <Footer />
      </BrowserRouter>
        
    
  )
}

export default App
