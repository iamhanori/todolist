let express = require('express');
let ejs = require('ejs');
let path = require('path');

let todoArr = [
    {id : 1, contents : '영화보기', yesno : 'no'},
    {id : 2, contents : '집에가기', yesno : 'no'},
    {id : 3, contents : '잠자기', yesno : 'no'}
]; //빈 배열

let app = express();

app.use(express.static('public')); //public 폴더 공유
app.use(express.urlencoded( {extended:false})); // 사용자
app.set('views', path.join(__dirname, 'views')); // view 폴더
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get 시작');
    res.render('list',  {datalist: todoArr}); //list.ejs
});

app.get('/insert', (req, res) => {
    console.log("/insert get 시작");
    // 추가
    res.render('insert');
})

app.post('/insert', (req, res) => {
    console.log("/insert post 시작");
    todoArr.push({contents: req.body.contents, yesno: req.body.yesno});
})

app.get('/delete/:id', (req, res) => {
    console.log("/delete " + res.id);
    // 추가
    todoArr.splice(res.id,1);
    console.log("/delete ok" + res.id);
    res.redirect("/");
})

app.get('/edit/:id', (req, res) => {
    
})

app.listen(3000, () => {
    console.log(`3000포트 서버 시작`);
})