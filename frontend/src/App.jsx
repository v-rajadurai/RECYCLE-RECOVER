import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RagSignIn from './Component/Rag/Authorization/RagSignIn';
import RagSignUp from './Component/Rag/Authorization/RagSignUp';
import Home from './Component/Rag/HomePage/Home';
import RagAbout from './Component/Rag/About/RagAbout.jsx';
import FindRequest from './Component/Rag/Request/FindRequest';
import RagProfile from './Component/Rag/Profile/RagProfile.jsx';
import RagService from './Component/Rag/Service/RagService.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RagSignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<RagSignUp />} />
        <Route path="/ragabout" element={<RagAbout />} />
        <Route path="/findrequest" element={<FindRequest />} />
        <Route path="/ragprofile" element={<RagProfile />} />
        <Route path="/ragservice" element={<RagService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
