import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ScoreBoardPage from './pages/ScoreBoardPage';
import NotificationPage from './pages/NotificationPage';
import ChallengesPage from './pages/ChallengesPage';
import LoginAfterPage from './pages/LoginAfterPage';
import UserPage from './pages/UserPage';
import ShowQuiz from './pages/ShowQuiz';
import AdminRegisterPage from './pages/AdminRegisterPage';
import AdminLoginPage from './pages/AdminLoginPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MakeQuizPage from './pages/MakeQuizPage';



function App() {

  useEffect(() => {
    console.log('%c잠깐만!!', 'color: red; font-size: 55px; font-weight: bold;');
    console.log('%c개발자 도구 기능은 쓰지 마세요 ^^. 누군가 CTF INFO 사이트를 뜯어보려 하거나 해킹을 하려고 하는 행동은 절대로 안됩니다.', 'font-size: 20px;');
    console.log('%c만약 이 경고를 무시하시고 뭣 같은 짓을 하시면 고소미를 드실 수 있으니 주의해 주세요.', 'font-size: 20px;');
    console.log('%c-정보보안 동아리 INFO-', 'font-size: 20px;');

  }, []);

  return (
    <>
      <Route component={LoginPage} path={["/", "/login"]} exact />
      <Route component={LoginAfterPage} path="/loginafter" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ScoreBoardPage} path="/scoreboard" />
      <Route component={NotificationPage} path="/notification" />
      <Route component={ChallengesPage} path="/challenges" />
      <Route component={UserPage} path="/user" />
      <Route component={ShowQuiz} path="/quiz/:category/:num" />
      <Route component={AdminRegisterPage} path="/adminregister" />
      <Route component={AdminLoginPage} path="/adminlogin" />
      <Route component={FindPasswordPage} path="/findpassword" />
      <Route component={MakeQuizPage} path="/makequiz" />
    </>
  );
}

export default App;
