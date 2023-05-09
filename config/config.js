const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gopisureshakula:123456789AGS@cluster0.ii6ynqx.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useNewUrlParser: true,
        // //     useUnifiedTopology: true,
        // // useCreateIndex: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
