import React from 'react';
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
