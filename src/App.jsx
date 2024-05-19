import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import RecipeLists from "./components/RecipeList/RecipeLists";
import Banner from "./components/Banner/Banner";
import Community from "./components/Community/Community";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import { useState } from "react";


const App = () => {
  const [loader,setLoader] = useState(true)
  return (
    <>
    <Home/>
    <Banner/>
    <RecipeLists setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>}
    <Community/>
    <DownloadApp />
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App