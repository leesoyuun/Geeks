import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Email, Code, Nickname, Showname, Department, MoreInfo1, MoreInfo2, MoreInfo3, MoreInfo4, FinalPage} from './pages/private_info';

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
            <Route path="/MoreInfo1" element={<MoreInfo1/>}/>
            <Route path="/MoreInfo2" element={<MoreInfo2/>}/>
            <Route path="/MoreInfo3" element={<MoreInfo3/>}/>
            <Route path="/MoreInfo4" element={<MoreInfo4/>}/>
            <Route path="/FinalPage" element={<FinalPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;