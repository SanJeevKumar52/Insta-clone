import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Pagelayout from "./Layouts/PageLayouts/Pagelayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </Pagelayout>
  );
}

export default App;
