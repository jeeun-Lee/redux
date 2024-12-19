const express=  require("express");
const cors = require("cors");
const mysql  = require("mysql2");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password:'12345',
    database:'product'
})

// test
db.connect(err =>{
    if(err){
        console.log("error : ",err);
        return;
    }
    console.log("success")

})

// API 엔드포인트 생성
app.get('/product', (req, res) => {
    db.query('SELECT * FROM product', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('데이터베이스 오류');
        } else {
            res.json(results);
        }
    });
});


app.post('/api/product', (req, res) => {
    const { name, num } = req.body;
    db.query('INSERT INTO product (name, num) VALUES (?, ?)', [name, num], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, name, num });
    });
});

app.put('/api/product/:id', (req, res) => {
    const { name, num } = req.body;
    const { id } = req.params;
    db.query('UPDATE product SET name = ?, num = ? WHERE id = ?', [name, num, id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ id, name, num });
    });
});

app.delete('/api/product/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM product WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Product deleted' });
    });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
