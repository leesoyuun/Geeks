import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MoreInfo, FinalPage, Register, LiveNumber, SmokingStat} from './pages/private_info';
import  { Home, MyPage,ProfileView, Save }  from './pages/main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/FinalPage" element={<FinalPage/>}/>
            <Route path="/LiveNumber" element={<LiveNumber/>}/>
            <Route path="/SmokingStat" element={<SmokingStat/>}/>
            <Route path="/MoreInfo" element={<MoreInfo/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path='/MyPage' element={<MyPage/>}/>
            <Route path='/ProfileView' element={<ProfileView/>}/>
            <Route path='/Save' element={<Save/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;