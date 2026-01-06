const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Booking = require("./models/Booking");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas connect (fixed)
mongoose.connect(
   "mongodb+srv://elishneupane9_db_user:Sainamaina%231@cluster1.8ynoiv5.mongodb.net/?appName=cluster1/"
)
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.log("MongoDB Atlas connection error:", err));

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

app.post("/book", async (req, res) => {
  console.log("Enquiry Detail:", req.body);

  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
