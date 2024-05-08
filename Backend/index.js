const express = require("express");
const allproductsRoutes = require("./routes/nproducts.routes");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/", allproductsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
