const express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
	res.render("./index.html", {});
});

app.listen(process.env.PORT, function(){
	console.log("Gradient app has started...");
});