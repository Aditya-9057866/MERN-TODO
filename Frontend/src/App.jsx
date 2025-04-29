import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./Hero"

function App() {
  

  return (
    <>
      <Header />
      <main style={{minHeight:"93vh"}} className=" flex-grow">
       <Hero></Hero>
      </main>
     <Footer/>
    </>
  )
}

export default App
