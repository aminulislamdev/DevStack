import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navber from "./components/Navber"

const technologiesFetch = async() => {
  const res= await fetch ('/public/data.json');
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Footer></Footer>
    </>
  )
}

export default App
