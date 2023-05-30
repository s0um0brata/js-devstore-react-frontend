import "./Footer.scss";
import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the internet. It has revolutionized the way businesses operate by providing a platform for customers to shop from the comfort of their own homes.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">65/4, Satyen Roy Road, Behala, Kolkata 700034</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone : 7003668305</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email : chandadeep8@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>

                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatres</span>
                <span className="text">Projectors</span>

            </div>
            <div className="col">
                <div className="title">Pages</div>

                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>

            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2023 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt="payment"/>
            </div>
        </div>
    </footer>;
};

export default Footer;
