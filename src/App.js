import { Component } from 'react';
import './App.css';
import Contatos from './components/Contato/Contatos';
import Habilidades from './components/Habilidades/Habilidades';
import Sobremim from './components/Sobremim/Sobremim';
 import Index from "./components/Index/Index";
import Meusprojetos from './components/Meusprojetos/Meusprojetos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "sobremim",
    element: <Sobremim/>
  },
  {
    path: "Meusprojetos",
    element: <Meusprojetos/>
  },
  {
    path: "Habilidades",
    element: <Habilidades/> 
  },
  {
    path: "Contatos",
    element: <Contatos/>
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
