import React from "react";
import { Container } from "react-bootstrap";

export default function Docs() {
  return (
    <Container className="mt-3">
      <h3>사용 방법</h3>
      <p>
        자바스크립트 퀴즈 프로젝트를 만들어 보세요! 아래의 코드를 사용하여 JSON
        형식의 데이터를 불러 올 수 있습니다.
      </p>
      <iframe
        title="code"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=verminal&wt=none&l=javascript&width=768&ds=true&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=9px&ph=22px&ln=false&fl=1&fm=JetBrains+Mono&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=fetch%28%2522https%253A%252F%252Fjs-quiz-357402.du.r.appspot.com%252Fquiz%2522%29%250A%2520%2520%2520%2520%2520.then%28%28res%29%2520%253D%253E%2520res.json%28%29%29%250A%2520%2520%2520%2520%2520.then%28%28json%29%2520%253D%253E%2520console.log%28json%29%29"
        style={{
          width: 540,
          maxWidth: "100%",
          height: 300,
          border: 0,
          transform: "scale(1)",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </Container>
  );
}
