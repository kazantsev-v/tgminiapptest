const express = require(`express`);
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4499;

const https = require('node:https');
const fs = require('node:fs');

const certDir = `/etc/letsencrypt/live`;
const domain = `why13idontknow.hopto.org`;

app.use(morgan("dev"));
app.use(express.static(`public`));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO THE BASIC EXPRESS APP WITH AN HTTPS SERVER");
});

const options = {
  key: fs.readFileSync(`${certDir}/${domain}/privkey.pem`),
  cert: fs.readFileSync(`${certDir}/${domain}/fullchain.pem`)
};

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`App listening on https://localhost:${port}`);
});

// ��������� ��
let mongoose = require('mongoose');
mongoose.connect('mongodb://91.108.243.98:27017/tgweb', {
    authSource: "admin",
    user: "olegsky",
    pass: "Cat190808_190808!"
});

// �����
let usersSchema = new mongoose.Schema({
    userid: String,
    theme: String,
    name: String
});

let User = mongoose.model('users', usersSchema);

// ������� ������������
app.get(`/search`, async function (req, res) {
    console.log("yesssssssssssssssssssssssssssssss")
    let theme = req.query.theme;
    console.log(theme)
    let user = await User.findOne({theme: theme});
    console.log(user)
    res.send(user);
});
