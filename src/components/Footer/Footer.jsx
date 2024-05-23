import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import Logo from "../Logo/Logo";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                            Kerala, 688006
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: cookbookie@app.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Recipes</div>
                    <span className="text">Ice Cream</span>
                    <span className="text">Desert</span>
                    <span className="text">Noodles</span>
                    <span className="text">Pizza</span>
           
                </div>
                <div className="col">
                    <span className="text">Home</span>
                    <span className="text">About Us</span>
                    <span className="text">Category</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        <Logo/>
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
