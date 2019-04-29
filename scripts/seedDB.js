const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description: "What the Rich Teach Their Kids about Money That the Poor and Middle Class Do Not!",
    image: "https://books.google.com/books/content/images/frontcover/kwBvDwAAQBAJ?fife=w400-h600",
    link: "https://play.google.com/store/books/details/Robert_T_Kiyosaki_Rich_Dad_Poor_Dad_Plata_Publishi?id=kwBvDwAAQBAJ",
    date: new Date(Date.now())
  }
];

db.googlebooks
  .remove({})
  .then(() => db.googlebooks.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " books inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
