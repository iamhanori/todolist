let express = require('express');
let ejs = require('ejs');
let path = require('path');

let app = express();
let todoArr = [
    { id : 1, contents : 'movie', yesno : 'no'},
    { id : 2, contents : 'homework', yesno : 'no'},
    { id : 3, contents : 'sleep', yesno : 'no'}
]; // 빈 배열



app.use(express.static('public')); // public 폴더 공유
app.use(express.urlencoded({extended:false})); // 사용자
app.set('views', path.join(__dirname, 'views')); // views
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    console.log('/get이 시작');
    res.render('list', {datalist : todoArr}); // list.ejs
})

app.get('/insert', (req, res) => {
    console.log('/insert 이 시작');
    todoArr.push({contents: req.body.contents, yesno: req.body.yesno});
})

app.get('/post', (req, res) => {
    console.log('/post 이 시작');
    
})


app.get('/delete/:id', (req, res) => {
    console.log('/delete id' + res.id);
    console.log('/delete id' + res.id);
    todoArr.splice(res.id,1);
    console.log('deleted.' + res.id);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("3000 port");
})