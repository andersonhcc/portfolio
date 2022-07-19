import ReactDOM from 'react-dom';
import { render } from "react-dom";
import '../components/corpo2.css';
import css3 from '../images/css3.png';
import ts from '../images/ts.png';
import react from '../images/react.png';
import js from '../images/js.png';
import reactnative from '../images/react-native.png';
import php from '../images/php.png';
import laravel from '../images/laravel.png';
import node from '../images/node.png';
import aulareact from '../images/Aula-REACT.png';
import aulats from '../images/Aula-TS..png';
import aulacss3 from '../images/Aula-CSS3..png';
import {BsCheckLg} from 'react-icons/bs';


 



function Cabeca() {
    return (
      <>
      
      <div className="divCorpo1">
          <p className="subTexto"> Somos a escola de programação mais completa do país. São mais de 150 aulas que te ensinarão linguagens e técnicas para desenvolver qualquer site, loja virtual, sistema ou aplicativo Android e IOS que você puder imaginar!</p>
          
          <button className="buttonComece"> <p className="textComece"> COMECE AGORA </p></button>
          
          <h1 className="texto1"> Todas as linguagens em um curso só! </h1>
          <h2 className="texto2"><p>São mais de 150 aulas divididas em 16 linguages de programação e bibliotecas para atender às suas principais dúvidas.</p> 
          Você precisa encontrar mais clientes?
          <b> Precisa aprender novas linguagens?</b>
          <b> Quer ir do zero até o profissional?</b>
          </h2> 
        
        </div>

        <div className="Images"> 
          
          <img className="border images--ajeitando1" src ={css3}/>
          <img className="border images--ajeitando " src={js}/>
          <img className="border images--ajeitando " src={ts}/>
          <img className="border images--ajeitando " src={react}/>
    
        </div>

        <div className="Images1">

          <img className="border images--ajeitando1" src={node}/>
          <img className="border images--ajeitando " src={php}/>
          <img className="border images--ajeitando " src={laravel}/>
          <img className ="border images--ajeitando " src={reactnative}/>
        
        


        </div>

          
        <div className="oque">
        
        <h1 className="esperando"> O que você está esperando? </h1>
          
          
          <h2 className="alunos"><b>Somos mais de 200 alunos, conectados através da nossa plataforma. </b> 
        
          
           Dentro do nosso fórum você encontrará as melhores soluções, além de poder criar um perfil profissional e montar equipes com outros programadores!
          </h2>         
          <button className="button-comece"> COMECE AGORA </button>




          <div className="cliqueaqui"> 
          
            <h3 className="testando22"> Clique para assistir alguns dos nossos conteúdos exclusivos. </h3>
          
          
          </div>

        </div>

     
        
        <div className="Aulas">
          
          <img className="imgaula" src ={aulareact}/>
          <img className="imgaula" src={aulats}/>
          <img className="imgaula" src={aulacss3}/>
    
        </div>


        <div className="comece-aprender">

            <div className="comece-aprender2">
          <h1 className="texto-comece1"> Comece a aprender agora!</h1>
          <p className="texto-comece2"> Tenha acesso imediato ao conteúdo mais completo sobre progamação,vendas,automatizações,
            negociações e geração de riqueza.
          </p>

          </div>
        </div>



        <div className="mensal-centralizar">
          <div className="mensal"> 
        
            <div className="con-mensal"> 
            
              <p className="textmensal">MENSAL</p>

              <p className="textmensal2">$79,90</p>
              <p className="textmensal3" style={{fontWeight:'700'}}> <BsCheckLg/>Assista 4 aulas ao vivo por mês.</p>
              <p className="textmensal3" style={{fontWeight:'700'}}> <BsCheckLg/> Direito a todas as aulas desde o início</p>
              <p className="textmensal3" style={{fontWeight:'700'}}> <BsCheckLg/> Banco com mais de 400 aulas.</p>
              <p className="textmensal3" style={{fontWeight:'700'}}><BsCheckLg/> Mais de 10 linguagens diferentes.</p>
              <p className="textmensal3" style={{fontWeight:'700'}}> <BsCheckLg/> Acesso ao nosso fórum.</p>
              <p className="textmensal3" style={{fontWeight:'700'}}> <BsCheckLg/> Aulas novas toda a semana.</p>
            
            
            
            </div>

            <button className="buttoncomeceaqui">COMECE AGORA</button>

            </div>


        </div> 
        
        <div className ="borda"></div>

        <br/>
        
      <p className='mensal-centralizar perguntasfrequentes'> Perguntas frequentes </p>
       
      </>
    );
  }
  
  export default Cabeca;
  