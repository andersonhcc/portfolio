import React, {useState} from 'react';
import '../components/partefinal.css';
import like from '../images/svg0.svg';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';



function App() {



    return (
      <>

        <div className="todos"> 
          
          <div className="tamanho" style={{cursor: 'pointer'}}>
          
            <div className="objetoss">Fidelidade</div>
            <div className="container"> <p style={{marginLeft: '20px'}}>Não exigimos fidelidade.
              <br/>  <br/>
             Ao adquirir nossa assinatura no modelo de mensalidade, você pode cancelar quando quiser, sem que seja necessário continuar por mais de um mês.
             <br/> </p></div>
             
            <div className="objetoss" >Por onde começar? Quais aulas assistir?</div>  
            <div className="objetoss" >Formas de Pagamento</div>   
            <div className="objetoss" >Cancelamento</div>   

          
          </div>
        
             
        </div> 



      <br/>  <br/> 

      <div className ="bordaa"></div>  

      <br/>   <br/>   <br/> 
               
      <div className="centralizando" style={{fontSize:'28px', marginTop: '-20px', color:'white'}}> <AiOutlineInstagram/> <AiFillYoutube/></div>
      <br/> 
       <div className="centralizando"><p style={{color:'white',fontFamily:'Poppins', fontSize:'13px'}} > © 2022 O Novo Programador - Todos os Direitos Reservados </p> </div> 
     
    

      </>
    );
  }
  
  export default App;
  