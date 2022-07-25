const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(process.env.DB_URL, function (error, client) {
  db = client.db("quizapp");

  app.listen(8080, function () {
    console.log("listening on 8080");
  });
});

app.get("/quiz", function (req, res) {
  db.collection("quiz")
    .find()
    .toArray(function (err, result) {
      res.json(result);
    });
});

// app.get("/insert", function (req, res) {
//   db.collection("quiz").insertOne([
//     {
//       id: 1,
//       question: "변수에 대한 설명으로 옳지 않은 것은?",
//       answers: {
//         a: "하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다.",
//         b: "변수에 값을 저장하는 것을 참조, 변수에 저장된 값을 읽어 들이는 것을 할당이라 한다.",
//         c: "변수를 선언할 때는 var, let, const 키워드를 사용한다.",
//         d: "변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라 한다.",
//       },
//       correct: "b",
//     },
//   ]);
//   res.send("inserted");
// });
