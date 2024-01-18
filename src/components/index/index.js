import logo from '../../img/logo.png';
import './index.css';
 function index(){
    return(
        <index>
          <div className='indexM'>
           <div><h1>oi, me chamo <samp>Harry!</samp></h1> 
             <h3>sou desenvolvedor full stack</h3></div>
                 <img src={logo} alt="logo" className='img'/>
           </div>
           <div className='fundo'>
            <h2> Sobre mim  <samp>|</samp>  Meus Projetos  <samp>|</samp>  Habilidades  <samp>|</samp>  Contato  </h2> 
           </div>    
        </index>
        

    )
 }
export default index;