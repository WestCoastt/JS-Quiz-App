import React, { useState, useEffect } from "react";
import { Button, ListGroup, Card, Container } from "react-bootstrap";

function App() {
  const [quizArr, setQuizArr] = useState();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    fetch("https://js-quiz-357402.du.r.appspot.com/quiz")
      .then((res) => res.json())
      .then((json) => setQuizArr(json));
  }, []);

  return (
    <>
      <Container className="mt-3">
        {quizArr != null && (
          <>
            <Card className="card mb-3 p-3" style={{ fontSize: 16 }}>
              <h6>{quizArr[index].question}</h6>
              <ListGroup
                className="mt-2"
                activeKey=""
                onSelect={function (evt) {
                  if (evt === quizArr[index].correct) {
                    setAnswer({ [evt]: "success" });
                  } else {
                    setAnswer({
                      [evt]: "danger",
                      [quizArr[index].correct]: "success",
                    });
                  }
                }}
              >
                <ListGroup.Item
                  className="p-3"
                  variant={answer.a}
                  action
                  eventKey="a"
                >
                  {quizArr[index].answers.a}
                </ListGroup.Item>
                <ListGroup.Item
                  className="p-3"
                  variant={answer.b}
                  action
                  eventKey="b"
                >
                  {quizArr[index].answers.b}
                </ListGroup.Item>
                <ListGroup.Item
                  className="p-3"
                  variant={answer.c}
                  action
                  eventKey="c"
                >
                  {quizArr[index].answers.c}
                </ListGroup.Item>
                <ListGroup.Item
                  className="p-3"
                  variant={answer.d}
                  action
                  eventKey="d"
                >
                  {quizArr[index].answers.d}
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <div className="pt-3 d-flex justify-content-end">
              {index >= 1 && (
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => {
                    setIndex(index - 1);
                    setAnswer({});
                  }}
                >
                  이전
                </Button>
              )}

              {index < quizArr.length - 1 && (
                <Button
                  className="ms-2"
                  variant="success"
                  size="sm"
                  onClick={() => {
                    setIndex(index + 1);
                    setAnswer({});
                  }}
                >
                  다음
                </Button>
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
