import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/HomePage/AuthPage/AuthPage";
import Pagelayout from "./Layouts/PageLayouts/Pagelayout";


function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Pagelayout>
  );
}

export default App;
