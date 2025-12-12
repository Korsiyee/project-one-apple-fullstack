import React, { useEffect, useState } from "react";
import "./Iphone.css";

function Iphone() {
  const [iphone, setIphone] = useState([]);

  useEffect(() => {
    console.log("✅ Fetching from backend...");

    fetch("http://localhost:3001/iphone")
      .then((res) => {
        console.log("✅ Response Status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("✅ BACKEND DATA RECEIVED:", data);
        setIphone(data.products);
      })
      .catch((err) => {
        console.log("❌ FETCH FAILED:", err);
      });
  }, []);

  return (
    <div className="iphone-page">
      <h1 className="iphone-title">Iphones</h1>
      <p className="iphone-subtitle">The best for the brightest.</p>

      {iphone.length === 0 && (
        <p style={{ color: "red", fontSize: "20px" }}>
          ❌ No data loaded from backend
        </p>
      )}

      {Array.isArray(iphone) &&
        iphone.map((item) => (
          <div className="iphone-container" key={item.product_name}>
            <div className="iphone-image">
              <img
                src={item.product_img}
                alt={item.product_name}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            <div className="iphone-info">
              <img
                src={"../../../../server/images/iphone/iphone-se.png"}
                alt="img"
              />
              <h2>{item.product_name}</h2>
              <p className="brief">{item.product_brief_description}</p>
              <p className="price">Starting at {item.starting_price}</p>
              <p className="range">{item.price_range}</p>
              <a className="link" href={item.product_link}>
                Learn more
              </a>
            </div>
          </div>
        ))}

      {/* {iphone.map((item) => (
        <div className="iphone-container" key={item.product_name}>
          <div className="iphone-image">
            <img
              src={item.product_img}
              alt={item.product_name}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          <div className="iphone-info">
            <h2>{item.product_name}</h2>
            <p className="brief">{item.product_brief_description}</p>
            <p className="price">Starting at {item.starting_price}</p>
            <p className="range">{item.price_range}</p>
            <a className="link" href={item.product_link}>
              Learn more
            </a>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Iphone;
