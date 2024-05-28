import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import RecipeLists from "./components/RecipeList/RecipeLists";
import Banner from "./components/Banner/Banner";
// import Community from "./components/Community/Community";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Header from "./components/Header/Header";
import Favourites from "./pages/Favourites/Favourites";
import Recipes from "./pages/Recipes/Recipes";
// import { useState } from "react";


const App = () => {
  // const [loader,setLoader] = useState(true)
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/favourites" component={Favourites} />
      </Routes>
    <Home/>
    <Banner/>
    <RecipeLists />

    <DownloadApp />
    <Newsletter/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App