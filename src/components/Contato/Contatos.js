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
         </div>   
         </div>
       </contatos>
    )
 }

 export default Contatos;