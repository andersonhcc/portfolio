import '../components/corpo1.css';
import vitao from '../images/vitao.png'



function Cabeca() {
    return (
      <>

      <div className="divCorpo">
          <p className="textoCorpo"> Aprenda a programar do zero e mude a sua vida para sempre! </p>
          <div className="divVitao">
          <img className="imgVitao" src={vitao}/>
          </div>
        

          </div>
       
      </>
    );
  }
  
  export default Cabeca;
  