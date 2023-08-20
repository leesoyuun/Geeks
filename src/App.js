import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { MoreInfo, FinalPage, Register, LiveNumber} from './pages/private_info';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/MoreInfo" element={<MoreInfo/>}/>
            <Route path="/FinalPage" element={<FinalPage/>}/>
            <Route path="/LiveNumber" element={<LiveNumber/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;