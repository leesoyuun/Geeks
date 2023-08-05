import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Email, Code} from './pages/private_info';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Email/>}/>
            <Route path="/code" element={<Code/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;