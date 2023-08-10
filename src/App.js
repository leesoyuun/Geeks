import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Email, Code, Nickname, Showname, Department, StudentID, MoreInfo} from './pages/private_info';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Email/>}/>
            <Route path="/code" element={<Code/>}/>
            <Route path="/nickname" element={<Nickname/>}/>
            <Route path="/showname" element={<Showname/>}/>
            <Route path="/department" element={<Department/>}/>
            <Route path="/MoreInfo" element={<MoreInfo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;