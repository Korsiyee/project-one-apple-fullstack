import React from "react";
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
