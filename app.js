let express = require('express');
let ejs = require('ejs');
let path = require('path');

let todoArr = [
    { id: 1, contents: '영화 보기', yesno: 'no' },
    { id: 2, contents: '숙제 하기', yesno: 'no' },
    { id: 3, contents: '운동 하기', yesno: 'no' },
    { id: 4, contents: '노래 듣기', yesno: 'no' }
];

let count = 5;

let app = express();

app.use(express.static('public'));  // pulbic 폴더 공유
app.use(express.urlencoded({ extended: false }));  // 사용자 html 입력
app.set('views', path.join(__dirname, 'views'));    // 뷰 폴더
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get이 시작됨~~');
    res.render('list', { datalist: todoArr });   // list.ejs 화면에 출력
});

app.get('/insert', (req, res) => {
    console.log("/insert get 시작됨~");
    res.render('insert');
});

app.post('/insert', (req, res) => {
    console.log("/insert post 시작됨~");
    //배열에 입력 받은 값으로 객체를 만들어 추가
    let id_num = count++;
    todoArr.push({id:id_num, contents:req.body.contents, yesno: req.body.yesno});
    res.redirect("/");
});

app.get('/delete/:id', (req, res) => {
    console.log("/delete " + res.id);
    for(const i in todoArr) {
        if(todoArr[i].id == req.params.id) {
            console.log(todoArr[i].id + " " + i);
            todoArr.splice(i, 1);
        }
    }
    console.log("delete ok~~~ " + todoArr);
    res.redirect("/");
});

app.get('/edit/:id', (req, res) => {
    let editdata = [];
    console.log("/edit " + req.params.id);
    for(const i in todoArr) {
        if(todoArr[i].id == req.params.id) {
            console.log(todoArr[i].id + " " + i);
            editdata = todoArr[i];
            res.render('edit', {data: editdata}); //edit.ejs
        }
    }
})

app.post('/edit/:id',(req, res) => {
    let editdata = [];
    console.log("/edit " + req.params.id);
    if(req.body.contents && req.body.yesno) {
        console.log("수정 값 " + req.body.contents + " " + req.body.yesno);
    }

    //추가
    for (const i in todoArr) {
        if(todoArr[i].id == req.params.id) {
            todoArr.splice(i, 1, {id:req.params.id, contents:req.body.contents, yesno:req.body.yesno});
            console.log("수정 ok" + req.params.id);
        }
    }
    res.redirect("/");


})

app.listen(3000, () => {
    console.log("3000포트 서버가 시작됨");
});