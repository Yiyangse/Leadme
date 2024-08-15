const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// MongoDB 연결 설정
const mongoURI=process.env.MONGODB_LOCAL;
mongoose
    .connect(mongoURI)
    .then(() => console.log('Mongoose connected'))
    .catch((err) => console.log("DB connected fail",err));

// // 기본 라우트
// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// 포트 열기 서버 시작
app.listen(5000, () => console.log(`Server running on port 5000`));
