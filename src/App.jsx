import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import RecipeLists from "./components/RecipeList/RecipeLists";
import Banner from "./components/Banner/Banner";
// import Community from "./components/Community/Community";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Header from "./components/Header/Header";
// import { useState } from "react";


const App = () => {
  // const [loader,setLoader] = useState(true)
  return (
    <>
    <Header/>
    <Home/>
    <Banner/>
    <RecipeLists />
    {/* setLoader={setLoader} */}
      {/* {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>} */}
    {/* <Community/> */}
    <DownloadApp />
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App