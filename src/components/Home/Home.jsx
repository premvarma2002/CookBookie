import Header from "../Header/Header";
import "./Home.scss";
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <>
    <div className='home-scss'>
      <Header/>
    <div className="hero-content">
      <motion.div animate={{ x: 100 }}>
        <h5 className="desc">The Easiest Way  <br /> To Make Your  <br /> Favourite Meal</h5>
       <div className="para">  
        <p>Discover 1000+ best recipes in your hand with the best recipe.</p>
        <p>Help you to find the easiest way to cook.</p>
       
       <button className="btn ">Explore Recipes</button>
       </div>
      </motion.div>
      <motion.div animate={{ x: 100 }} className="image">
        <img src="./heroimg.png" alt="hero image" size={100} />
      </motion.div>
    </div>
    </div>
    </>
  )
}

export default Home;