import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Email from './pages/private_info/Email';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Email/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;