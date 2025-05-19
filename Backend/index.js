const express = require("express");
const notes = require("./notes/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute.js")
const cors = require("cors");


const app = express();
dotenv.config();
connectDB();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json())
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});


app.use("/api/users", userRoute);



// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n.id == req.params.id)
//   console.log(req.params)
//   res.send(note)
// })

const PORT = process.env.PORT || 5100;
app.listen(PORT, console.log(`server started on port ${PORT} `));
