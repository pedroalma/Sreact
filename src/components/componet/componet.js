import './Componet.css';
    function Componet({imag,descricao}) {
        return(
      
        <>
        <img src={imag} alt="logo" />
        <h1>{descricao}</h1>
       </>

        )
    }

  export default Componet;  