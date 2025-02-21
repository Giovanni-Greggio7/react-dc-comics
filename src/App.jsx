import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Links from "./data/links"
import Comics from "./data/comics"

function App() {

  const links = Links
  const comics = Comics

  return (
    <>
      <Header links={links} />
      <Main comics={comics}/>
      <Footer />
    </>
  )
}

export default App