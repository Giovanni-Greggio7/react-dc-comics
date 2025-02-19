import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  const links = [
    { id: 1, text: 'CHARACTERS', url: '#', current: true },
    { id: 2, text: 'COMICS', url: '#', current: true },
    { id: 3, text: 'MOVIES', url: '#', current: true },
    { id: 4, text: 'TV', url: '#', current: true },
    { id: 5, text: 'GAMES', url: '#', current: true },
    { id: 6, text: 'COLLECTIBLES', url: '#', current: true },
    { id: 7, text: 'VIDEOS', url: '#', current: true },
    { id: 8, text: 'FANS', url: '#', current: true },
    { id: 9, text: 'NEWS', url: '#', current: true },
    { id: 10, text: 'SHOP', url: '#', current: true }
  ];


  return (
    <>
      <Header links={ links } />
      <Main />
      <Footer />
    </>
  )
}

export default App