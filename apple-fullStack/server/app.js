const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");   // ✅ ADD THIS

const app = express();

// ✅✅✅ ENABLE CORS (THIS FIXES YOUR ERROR)
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


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
  const products = `
    CREATE TABLE IF NOT EXISTS products (
      product_id INT PRIMARY KEY AUTO_INCREMENT,
      product_url VARCHAR(255) NOT NULL,
      product_name VARCHAR(255) NOT NULL
    );
  `;

  const productsDescription = `
    CREATE TABLE IF NOT EXISTS productsDescription (
      description_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      product_brief_description TEXT NOT NULL,
      product_description TEXT NOT NULL,
      product_img VARCHAR(255) NOT NULL,
      product_link VARCHAR(255) NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    );
  `;

  const productsPrice = `
    CREATE TABLE IF NOT EXISTS productsPrice (
      price_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      starting_price VARCHAR(255) NOT NULL,
      price_range VARCHAR(255) NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    );
  `;

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


app.get("/seed-iphone", (req, res) => {
  const productQuery = `
    INSERT INTO products (product_url, product_name)
    VALUES ('iphone', 'iPhone SE')
  `;

  mysqlConnection.query(productQuery, (err, result) => {
    if (err) return res.send(err);

    const product_id = result.insertId;

    const descQuery = `
      INSERT INTO productsDescription
      (product_id, product_brief_description, product_description, product_img, product_link)
      VALUES (?, ?, ?, ?, ?)
    `;

    mysqlConnection.query(
      descQuery,
      [
        product_id,
        "Lots to love. Less to spend.",
        "The best for the brightest.",
        "/images/iphone/iphone-se.png",
        "/iphone/se"
      ],
      err => {
        if (err) return res.send(err);

        const priceQuery = `
          INSERT INTO productsPrice
          (product_id, starting_price, price_range)
          VALUES (?, ?, ?)
        `;

        mysqlConnection.query(
          priceQuery,
          [product_id, "$399", "From $9.54/mo. or $229 with trade-in"],
          err => {
            if (err) return res.send(err);
            res.send("✅ iPhone SE inserted successfully!");
          }
        );
      }
    );
  });
});



app.get("/iphone", (req, res) => {
  const query = `
    SELECT 
      products.product_name,
      productsDescription.product_brief_description,
      productsDescription.product_img,
      productsDescription.product_link,
      productsPrice.starting_price,
      productsPrice.price_range
    FROM products
    JOIN productsDescription 
      ON products.product_id = productsDescription.product_id
    JOIN productsPrice 
      ON products.product_id = productsPrice.product_id
  `;

  mysqlConnection.query(query, (err, results) => {
    if (err) {
      console.log("❌ FETCH ERROR:", err);
      return res.status(500).json({ error: err });
    }

    res.json({ products: results });
  });
});

/*// ✅ INSERT IPHONE DATA INTO ALL TABLES
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
  const insertProduct = `
    INSERT INTO products (product_url, product_name)
    VALUES (?, ?)
  `;

  mysqlConnection.query(
    insertProduct,
    [iphoneId, iphoneTitle],
    (err, result) => {
      if (err) return res.send(err);

      const product_id = result.insertId;

      // ✅ 2. Insert into DESCRIPTION
      const insertDesc = `
        INSERT INTO productsDescription
        (product_id, product_brief_description, product_description, product_img, product_link)
        VALUES (?, ?, ?, ?, ?)
      `;

      mysqlConnection.query(
        insertDesc,
        [product_id, briefDescription, fullDescription, imgPath, iphoneLink],
        err => {
          if (err) return res.send(err);

          // ✅ 3. Insert into PRICE
          const insertPrice = `
            INSERT INTO productsPrice
            (product_id, starting_price, price_range)
            VALUES (?, ?, ?)
          `;

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
});*/





