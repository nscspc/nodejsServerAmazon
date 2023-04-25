// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");


// INIT
const PORT = process.env.PORT || 3000;
const app = express();// initializing express and saving it in app.
const DB = "mongodb+srv://saininaveen933:naveen1234@cluster0.lz9cegi.mongodb.net/?retryWrites=true&w=majority";
  // "mongodb+srv://rivaan:rivaan123@cluster0.wpyhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// middleware
app.use(express.json());// it parses incoming request with json format.
app.use(cors());// cors() adds header to the response from the api , so that api can be called from every place.
// without using cors() , there will be XMLHttpRequest error.
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

console.log("hello world");

app.listen(PORT, "0.0.0.0", () => {// as the android devices will not able to access , so we will define the IP(this IP(0.0.0.0) can be accessible to any device).
  console.log(`connected at port ${PORT}`);// `(BackTick) is used to implement string interpolation( ${PORT} ). 
});
