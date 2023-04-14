const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();
const PORT = process.env.PORT || 3000;

let list_no = "",
  items = ["Eat", "Sleep", "Code", "Repeat"];
let workItems = [];

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  
  let day = date.getDate();
  
  res.render("list", { listTitle: day, listItems: items });
});

app.post("/", function (req, res) {
  list_no = req.body.listno;
  if(req.body.list == "Work")
  {
    workItems.push(list_no);
    res.redirect("/work");
  }
  else
  {
    items.push(list_no);
    res.redirect("/");
  }
  
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", listItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
})

app.listen(PORT, function () {
  console.log("Server is running on port 3000");
});
