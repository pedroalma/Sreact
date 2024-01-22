import logo from '../../img/logo.png';
import './Index.css';
import { Link } from 'react-router-dom';
 function Index(){
    return(
        <index>
          <div className='indexM'>
           <div><h1>oi, me chamo <samp>Harry!</samp></h1> 
             <h3>sou desenvolvedor full stack</h3></div>
                 <img src={logo} alt="logo" className='img'/>
           </div>
           <div className='fundo'>
            {/* <h2> Sobre mim  <samp>|</samp>  Meus Projetos  <samp>|</samp>  Habilidades  <samp>|</samp>  Contato  </h2>  */}
            <Link to="sobremim">Sobre mim</Link>
            <Link to="meusprojetos">Meus Projetos</Link>
            <Link to="habilidades"> Habilidades</Link>
            <Link to="contatos"> Contato</Link>
           </div>    
        </index>
        

    )
 }
export default Index;