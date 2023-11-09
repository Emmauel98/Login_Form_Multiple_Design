import { Route, Routes } from 'react-router-dom';
// import Login from './Pages/SignUp__Page/Index';
import Sign_Up_Form from './Pages/SignUp/Index';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' Component={Sign_Up_Form} />
    </Routes>
    </>
  )
}

export default App
