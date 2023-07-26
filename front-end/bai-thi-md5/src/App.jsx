import {useState} from 'react'
// import './App.css'
import BasicTable from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Detail from "./pages/Detail.jsx";
import Add from "./pages/Add.jsx";
import Delete from "./pages/Delete.jsx";
import Edit from "./pages/Edit.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route path='/' element={<BasicTable/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/detail/:idTour' element={<Detail/>}/>
            <Route path='/delete/:idTour' element={<Delete/>}/>
            <Route path='/edit/:idTour' element={<Edit/>}/>
        </Routes>
    )
}

export default App
