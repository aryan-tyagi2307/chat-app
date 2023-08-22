const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username},
      { headers: { "Private-Key": "22546560-3ba2-4da1-bdfe-169a15366944" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});


app.listen(3001);