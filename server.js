const path = require('path');
const express = require('express');
const cloudinary = require("cloudinary").v2
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utilities/helpers.js')
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const cloudinaryConfig = cloudinary.config({
//   cloud_name: process.env.CLOUDNAME,
//   api_key: process.env.CLOUDAPIKEY,
//   api_secret: process.env.CLOUDINARYSECRET,
//   secure: true
// })

// app.get("/get-signature", (req, res) => {
//   const timestamp = Math.round(new Date().getTime() / 1000)
//   const signature = cloudinary.utils.api_sign_request(
//     {
//       timestamp: timestamp
//     },
//     cloudinaryConfig.api_secret
//   )
//   res.json({ timestamp, signature })
// })

// app.post("/store-photo", async (req, res) => {
//   const expectedSignature = cloudinary.utils.api_sign_request({ public_id: req.body.public_id, version: req.body.version }, cloudinaryConfig.api_secret)

//   if (expectedSignature === req.body.signature) {
//     await fse.ensureFile("./postData.json")
//     const existingData = await fse.readFile("./postData.json", "utf8")
//     await fse.outputFile("./data.txt", existingData + req.body.public_id + "\n")
//   }
// })

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.listen(process.env.PORT || 3001)