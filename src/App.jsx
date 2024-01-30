import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Pagelayout from "./Layouts/PageLayouts/Pagelayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [authUser, loading] = useAuthState(auth)
  return (
    <Pagelayout>
      <Routes>
        <Route path="/" element={authUser?<HomePage />:<Navigate to='auth'/>} />
        <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </Pagelayout>
  );
}

export default App;
