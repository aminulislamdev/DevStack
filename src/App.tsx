import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navber from "./components/Navber"
import Technologies from "./components/technologies/Technologies";
import { Suspense } from "react";

const technologiesFetch = async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Suspense fallback={'Loading.............'}>
        <Technologies technologiesFetch={technologiesFetch()}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App