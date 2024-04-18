import './App.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ReactEssentials from "./components/react-essentials/ReactEssentials.jsx";
import Home from "./components/Home.jsx";
import TicTacToe from "./components/tic-tac-toe/TicTacToe.jsx";

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/react-essentials', element: <ReactEssentials/>},
    {path: '/tic-tac-toe', element: <TicTacToe/>},
]);

function App() {

    return <RouterProvider router={router}/>
}

export default App
