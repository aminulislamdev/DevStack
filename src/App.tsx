import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navber from "./components/Navber"
import Technologies from "./components/technologies/Technologies";
import { Suspense, useState } from "react";
import type ITechnologies from "./components/types/Technologies";

const technologiesFetch = async (): Promise<ITechnologies[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const [technologiesFetchPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Suspense fallback={'Loading.............'}>
        <Technologies technologiesFetch={technologiesFetchPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App