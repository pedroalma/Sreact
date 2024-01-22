import Componet from '../Componet/Componet';
import logo from '../../img/logo.png';
import './Contato.css';
import M from '../../img/M.png'
import I from '../../img/I.png'
import G from '../../img/G.png' 
 function Contatos(){
    return(
       <contatos>
         <div className='Con'>
         <div className='com'>
             <img  className='um' src={logo} alt="" />
            <h1>Contatos</h1></div>
         <div className='raizcon'>
            <div className='conum'>
               <img src={M} alt="" />
               <h2>harry.potter.dev@gmail.com</h2>
            </div>
            <div className='conum'>
               <img src={I} alt="" />
               <h2>linkedin.com/in/harrypotterdev</h2>
            </div>
            <div className='conum'>
               <img src={G} alt="" />
               <h2>github.com/hpotterwizard</h2>
            </div>
            <div className='novo'>
               <Componet imag={m} descricao={ ou eletrônico é um método ou um sistema que permite compor, enviar e receber mensagens através de um sistema computacional online de comunicação de forma assíncrona}/>
            </div>
         </div>   
         </div>
       </contatos>
    )
 }

 export default Contatos;