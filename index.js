const { response } = require("express");
const express = require("express");
const mangaRouter = require("./router/naruto");
const app = express();


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

var myLogger = function(req, res, next) {
    console.log("LOGGED");
    next();
};
app.use(myLogger);

const requestTime = function(req, res, next) {
    date = new Date();
    console.log(date);
    next();
}
app.use(requestTime);
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    const tanggal = "Selamat Membaca Manga Episode Terbaru Dari Naruto Shippuden</br>" + "<p><small>Rquest at:" + date + "</small>";
    res.send(tanggal);
});
app.use(mangaRouter)

app.get("/", function(req, res) {
    const Manga = {
        No: 0001,
        Nama: "Naruto",
    };
    respon.render('home')
});

app.listen(3000, function() {
    console.log('server berjalan lancar');
});