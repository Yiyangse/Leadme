//프런트에서 호출할 주소를 적는다.한 주소당 하나의 기능 수행가능
//1. 할 일 추가 post /tasks
//2. 할 일 보여주기 get /tasks
//3. 할 일 수정하기 put /tasks/:id
//4. 할 일 삭제하기 delete /tasks/:id

const express = require("express");
const router = express.Router();
const userApi = require("./User.api"); // User.api 모듈 임포트

// 회원 관련 API 라우트 설정
router.use("/users", userApi);

// 필요 시 다른 API 라우트 추가
// router.use("/products", productApi);

module.exports = router;
