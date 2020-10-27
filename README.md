# infowargame-frontend
- 인포워게임의 프론트엔드입니다. 
## 개발배경
2019년에 CTFd라는 퍼블릭 레포를 사용하여 CTF를 진행하였고 이 과정에서 동아리만의 자체 CTF사이트가 있었으면 좋겠다는 생각에 개발을 시작하게 되었습니다.
## 개발과정
처음으로 맡게 된 큰 프로젝트라 그 전까지 공부한 새로운 기술들을 적용하고자 하였고, ducks 패턴으로 react-redux와 redux-saga를 적용시켰습니다.
그리고 보안을 신경쓰기 위해서 쿠키에 토큰을 저장하는 방식을 도입해 보안을 높였습니다.
대부분의 api는 API 호출 함수 파일을 따로 두어 Redux-saga로 처리하였으며, 
스타일링은 js파일 안에 한꺼번에 스타일링을 하는 Stlyed-components 방식을 적용시켜 프로젝트 파일의 용량을 보다 작게 하고자 하였습니다. 
이 외에 페이지의 뷰를 보다 개선하기 위하여 Google fonts도 사용하였습니다. 
## 기대효과
페이지를 운영해 나가면서 INFO 동아리원이 문제를 출제하기 위하여 스스로 연구하며 취약점을 분석하며 학습해 나가는 결과를 얻을 수 있고, 
외부 사용자들은 INFO CTF사이트에서 정보보안과 관련된 여러 분야의 CTF 문제를 풀음으로써 정보보안의 여러 분야들을 경험하고, 정보보안에 대한 지식들을 공부할 수 있습니다.
## 기술스택
- React.js
- Styled-Component
- React-Redux (Ducks 패턴)
- Redux-saga
- Axios
## API 명세
https://www.notion.so/0a6df669b4fb4be3bd5b287a172434b2?v=7ba83e59afb8426f827db0580d2c1f7a (v1) - 사용 X
https://www.notion.so/cddefc2cf9ee43d38c3e3cfbc1e17906?v=0b6ab71570404dab8db4cb4847a7172b (v2)
## 구현화면 보는 곳
https://www.notion.so/INFO-CTF-WarGame-0ef0cf4d6cb44ebdb552c07395e085ed
