import Componet from '../Componet/Componet';
import logo from '../../img/logo.png';
import './Contato.css';
import M from '../../img/M.png'
import I from '../../img/I.png'
import G from '../../img/G.png' 
 function Contatos(){
    return(
       <contatos>
       <div className='ponto'>
            <div className='novo'>
               <Componet imag={M}/>
            </div>
            <div className='novo'>
               <Componet imag={I}/>
            </div>
            <div className='novo'>
               <Componet imag={G}/>
            </div>
      </div>     
       </contatos>
    )
 }

 export default Contatos;