import {Route, Routes} from 'react-router';
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnBoardingPage.jsx";
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './lib/axios.js';

const App = () => {
  const {data:authData, isLoading, error} = useQuery({
    queryKey: ["authUser"],
    queryFn: async() => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry: false, // auth check
  });
  
  const authUser = authData?.user;

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/notifications" element={<NotificationsPage/>} />
        <Route path="/call" element={<CallPage/>} />
        <Route path="/chat" element={<ChatPage/>} />
        <Route path="/onboarding" element={<OnboardingPage/>} />
      </Routes>
    </div>
  )
}

export default App