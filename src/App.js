import  Auth from './auth/Auth';
import Unauth from './auth/Unauth';
import YupValidations from './components/YupValidations';
import "./assets/styles/transaction.css";
import { BrowserRouter, Route, Routes,Navigate} from "react-router-dom";


const  App = ()=> {
 
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<YupValidations/>} /> */}
        <Route path="/public/*" element={<Unauth />} />
        <Route path="/*" element={<Auth />} />
        <Route path="/*" element={<Navigate to="/login" replace />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
