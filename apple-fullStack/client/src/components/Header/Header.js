import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Header.css";
import logo from "../../images/icons/logo.png";
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-links-wrapper">
        <ul>
          {/* ✅ Home */}
          <li>
            <Link to="/">
              <img className="logo-link" src={logo} alt="logo" />
            </Link>
          </li>
          <li><Link to="/mac">Mac</Link></li>
          <li><Link to="/iphone">iPhone</Link></li>
          <li><Link to="/ipad">iPad</Link></li>
          <li><Link to="/watch">Watch</Link></li>
          <li><Link to="/tv">TV</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li>
            <Link to="/search">
              <img className="search-link" src={search} alt="search" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img className="cart-link" src={cart} alt="cart" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;








//AIzaSyCR2ZQy5FLcYZ_NPaodvS6VYIHRjPBFuPA    this is google API key

//the following url  is to make reqest from youtube channel to apple's channel

/*https://www.googleapis.com/youtube/v3/search?key=AIzaSyCR2ZQy5FLcYZ_NPaodvS6VYIHRjPBFuPA&c
hannelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=dat
e&maxResults=6*/

/**please insert all the information in a white page of the uploaded
 *  screenshot to the above backend code including iphone image without 
 * the man picture and it must have this structure when i fech it from
 *  backend to frontend and when i click on iphone link it display the structure 
 * that similar with the above screenshot by feching all information. and also write
 *  the react code that i use to fech this information on my frontend. the following is
 *  the my frontend */

 


/*const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const PORT = 3001;
app.listen(PORT, () => console.log(✅ Server running on port ${PORT}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

// ✅ MySQL connection
const mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "bonsa",
  password: "ko728916",
  database: "bonsa",
  multipleStatements: true
});

// ✅ Connect
mysqlConnection.connect(err => {
  if (err) console.error("❌ MySQL Error:", err);
  else console.log("✅ MySQL Connected");
});

// ✅ TABLE CREATION ROUTE
app.get("/install", (req, res) => {
  const products = 
    CREATE TABLE IF NOT EXISTS products (
      product_id INT PRIMARY KEY AUTO_INCREMENT,
      product_url VARCHAR(255) NOT NULL,
      product_name VARCHAR(255) NOT NULL
    );
  ;

  const productsDescription = 
    CREATE TABLE IF NOT EXISTS productsDescription (
      description_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      product_brief_description TEXT NOT NULL,
      product_description TEXT NOT NULL,
      product_img VARCHAR(255) NOT NULL,
      product_link VARCHAR(255) NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    );
  ;

  const productsPrice = 
    CREATE TABLE IF NOT EXISTS productsPrice (
      price_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      starting_price VARCHAR(255) NOT NULL,
      price_range VARCHAR(255) NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    );
  ;

  mysqlConnection.query(products, err => {
    if (err) return res.send(err);
    mysqlConnection.query(productsDescription, err => {
      if (err) return res.send(err);
      mysqlConnection.query(productsPrice, err => {
        if (err) return res.send(err);
        res.send("✅ All tables created successfully!");
      });
    });
  });
});

// ✅ INSERT IPHONE DATA INTO ALL TABLES
app.post("/addiphone", (req, res) => {

  const {
    iphoneId,
    imgPath,
    iphoneLink,
    iphoneTitle,
    briefDescription,
    startprice,
    priceRange,
    fullDescription
  } = req.body;

  // ✅ 1. Insert into PRODUCTS
  const insertProduct = 
    INSERT INTO products (product_url, product_name)
    VALUES (?, ?)
  ;

  mysqlConnection.query(
    insertProduct,
    [iphoneId, iphoneTitle],
    (err, result) => {
      if (err) return res.send(err);

      const product_id = result.insertId;

      // ✅ 2. Insert into DESCRIPTION
      const insertDesc = 
        INSERT INTO productsDescription
        (product_id, product_brief_description, product_description, product_img, product_link)
        VALUES (?, ?, ?, ?, ?)
      ;

      mysqlConnection.query(
        insertDesc,
        [product_id, briefDescription, fullDescription, imgPath, iphoneLink],
        err => {
          if (err) return res.send(err);

          // ✅ 3. Insert into PRICE
          const insertPrice = 
            INSERT INTO productsPrice
            (product_id, starting_price, price_range)
            VALUES (?, ?, ?)
          ;

          mysqlConnection.query(
            insertPrice,
            [product_id, startprice, priceRange],
            err => {
              if (err) return res.send(err);
              res.send("✅ iPhone successfully inserted into all tables!");
            }
          );
        }
      );
    }
  );
});        please insert  all the information in a white page of the uploaded screenshot to  the above backend code including iphone image without the man picture and it must have this structure when i fech it from backend to frontend and when i click on iphone link it display the structure that similar with the above screenshot by feching all information. and also write the react  code that i  use to fech this information on my frontend.  the following is the my frontend                                                                      import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Header.css";
import logo from "../../images/icons/logo.png";
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-links-wrapper">
        <ul>
          {/* ✅ Home */
/*         <li>
            <Link to="/">
              <img className="logo-link" src={logo} alt="logo" />
            </Link>
          </li>
          <li><Link to="/mac">Mac</Link></li>
          <li><Link to="/iphone">iPhone</Link></li>
          <li><Link to="/ipad">iPad</Link></li>
          <li><Link to="/watch">Watch</Link></li>
          <li><Link to="/tv">TV</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li>
            <Link to="/search">
              <img className="search-link" src={search} alt="search" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img className="cart-link" src={cart} alt="cart" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;                                                                                                                                              import React from "react";
import "./Footer.css";
function Footer(){
    return(
        <div>
             <footer className="footer-wrapper">
        <div className="upper-text-wrapper">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24‑month installment loan with
            Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or
            Verizon. <a href="">Full terms apply</a>.
          </p>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links-wrapper1">
            <h3>Shop and Learn</h3>
            <ul>
              <li><a href="">mac</a></li>
              <li><a href="">ipad</a></li>
              <li><a href="">iphone</a></li>
              <li><a href="">watch</a></li>
              <li><a href="">Tv</a></li>
              <li><a href="">music</a></li>
              <li><a href="">Airpods</a></li>
              <li><a href="">Homepods</a></li>
              <li><a href="">ipod touch</a></li>
              <li><a href="">Accessories</a></li>
              <li><a href="">gift cards</a></li>
            </ul>
          </div>
          <div className="footer-links-wrapper2">
            <h3>Services</h3>
            <ul>
              <li><a href="">Apple Music</a></li>
              <li><a href="">Apple News+</a></li>
              <li><a href="">Apple TV+</a></li>
              <li><a href="">Apple Arcade</a></li>
              <li><a href="">Apple Card</a></li>
              <li><a href="">iCloud</a></li>
              <h3>Account</h3>
              <li><a href="">Manage Your Apple ID</a></li>
              <li><a href="">Apple Store Account</a></li>
              <li><a href="">iCloud.com</a></li>
            </ul>
          </div>
          <div className="footer-links-wrapper3">
            <h3>Apple Store</h3>
            <ul>
              <li><a href="">Find a Store</a></li>
              <li><a href="">Genius Bar</a></li>
              <li><a href="">today at Apple</a></li>
              <li><a href="">Apple Camp</a></li>
              <li><a href="">Field Tri</a>p</li>
              <li><a href="">Apple Store App</a></li>
              <li><a href="">Refurbished and Clearance</a></li>
              <li><a href="">financing</a></li>
              <li><a href="">Apple Trade in</a></li>
              <li><a href="">Order Status</a></li>
              <li><a href="">shopping Help</a></li>
            </ul>
          </div>
        </div>
        <div className="flag-wrapper">
          <p>
            more ways to shop:
            <a href="">Find an Apple Store or other retailer</a>near you .Or
            call 1-800-MY-APPLE
          </p>
        </div>
        <div className="copyright-wrapper">
          <p>Copyright © 2019 Apple Inc. All rights reserved.</p>
          <p>
            <a href="">Privacy Policy</a> <a href="">Terms of Use</a>
            <a href="">Sales and Refunds</a> <a href="">Legal</a>
            <a href="">Site Map</a>
          </p>
          <p>United States</p>
        </div>
      </footer>
        </div>

    );
}

export default Footer;                                                                                                                                                  import React from "react";
import "./Section.css";
import laptop from "../../images/home/mac-laptop.jpg";
import watch from "../../images/icons/watch-series5-logo.png";
import apple from "../../images/icons/apple-card-logo.png";
import tv from "../../images/icons/apple-tv-logo.png";
import servant from "../../images/icons/servant-logo.png";
import ipad from "../../images/icons/new-ipad-logo.png";

function Section() {
  return (
    <div>
      <main className="main-highlight-wrapper">
        <div className="mac-discription">
          <p className="model">16-inch model</p>
          <h1>MacBook Pro</h1>
          <p className="product-discription">The best for the brightest</p>
          <a className="mac-link" href="">
            Learn more Buy{" "}
          </a>
        </div>
        <div className="mac-figure">
          <img src={laptop} />
        </div>
      </main>

      <section className="iphone-wrapper">
        <p className="iphone-model">iPhone 11 pro</p>
        <p className="iphone-discription">
          Pro cameras. Pro display. Pro performance
        </p>
        <p className="iphone-price">from $25.95/mo. or $599 with trade-in.</p>
        <a href="">Learn more Buy </a>
      </section>

      <section className="iphone11-wrapper">
        <p className="iphone11-model">iPhone 11</p>
        <p className="iphone11-price">From $16.62/mo. or $399 with trade‑in.</p>
        <a href="">Learn more Buy </a>
      </section>

      <section className="forth-highlight-section">
        <div className="left-side-wrapper1">
          <img src={watch} />
          <p>
            With the new Always-On Retina display. <br />
            You’ve never seen a watch like this.
          </p>
          <a href="">Learn more Buy </a>
        </div>
        <div className="right-side-wrapper1">
          <img src={apple} />
          <p>
            Get 3% Daily Cash on purchases <br />
            from Apple using Apple Card.
          </p>
          <a href="">Learn more Buy </a>
        </div>
      </section>

      <section className="fifth-highlight-section">
        <div className="left-side-wrapper2">
          <img src={tv} />
          <img className="servant-logo" src={servant} />
          <p>
            <a href="">Watch the trailer</a> <a href=""></a>
          </p>
        </div>
        <div className="right-side-wrapper2">
          <p className="airpods-model">AirPods Pro</p>
          <p>Magic like you’ve never heard.</p>
          <a href="">earn more Buy </a>
        </div>
      </section>

      <section className="sixth-highlight-section">
        <div className="left-side-wrapper3">
          <p>16-inch model</p>
          <p className="macbook-model">MacBook Pro</p>
          <p>The best for the brightest.</p>
          <a href="">Learn more Buy </a>
        </div>
        <div className="right-side-wrapper3">
          <img src={ipad} />
          <p>
            Like a computer. Unlike any <br />
            computer.
          </p>
          <a href="">Learn more Buy </a>
        </div>
      </section>
    </div>
  );
}

export default Section;
 import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import YouTubeVideos from "./components/YouTube/YouTubeVideos";
import Footer from "./components/Footer/Footer";

// ✅ CAPITALIZED imports and usage MUST match
import Mac from "./components/pages/Mac";
import Iphone from "./components/pages/Iphone";
import Ipad from "./components/pages/Ipad";
import Watch from "./components/pages/Watch";
import Tv from "./components/pages/Tv";
import Music from "./components/pages/Music";
import Support from "./components/pages/Support";
import Four04 from "./components/pages/Four04";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="*" element={<Four04/>}/>
      </Routes>

      <YouTubeVideos />
      <Footer />
    </>
  );
}

export default App;                                                                                                                                                     import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
 
);



 */ 