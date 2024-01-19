import logo from '../../img/logo.png';
import './Habilidades.css';
import R from '../../img/R.png';
import J from '../../img/J.png';
import C from '../../img/C.png';
import H from '../../img/H.png';
import S from '../../img/S.png';
import N from '../../img/N.png';
     function Habilidades(){
        return(
          <habilidades>
            <div className='ha'>
            <div className='com'>
                <img className='um' src={logo} alt="" />
                <h1>Habilidades</h1></div>
            <div className='raizicom'>
                <div className='icom'>
                  <h2>ReactJS</h2>  
                  <img src={R} alt="" />
                </div>
                <div className='icom'>
                  <h2>JavaScript</h2>  
                  <img src={J} alt="" />
                </div>
                <div className='icom'>
                  <h2>CSS 3 </h2>  
                  <img src={C} alt="" />
                </div>
                <div className='icom'>
                  <h2>HTML 5</h2>  
                  <img src={H} alt="" />
                </div>
                <div className='icom'>
                  <h2>DB Relacional</h2>  
                  <img src={S} alt="" />
                </div>
                <div className='icom'>
                  <h2>NodeJS</h2>  
                  <img src={N} alt="" />
                </div>
            </div>    
            </div>
          </habilidades>
        )
     }
export default Habilidades;     