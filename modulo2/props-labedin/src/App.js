import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import caminhao from './components/img/caminhao.png'
import CSN from './components/img/csn.png'
import minhaImg from './components/img/minhaImg.jpg'
import Seta from './components/img/Seta.png'
import email from './components/img/email.png'
import map from './components/img/map.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaImg} 
          nome="Klebson Bicalho de Sousa" 
          descricao="Oi, eu sou o Klebson Bicalho de Sousa. Sou aluno da Labenu. Gosto de estar com a família e passear em lugares onde tenho contato com a natureza."
        />
        
        <ImagemButton 
          imagem={Seta}
          texto="Ver mais"
        />
      </div>
     
      <div className="page-section-container">
        <CardPequeno 
          imagem={email} 
          texto='Email: '
          descricao="trovao@gmail.com"
        />
        
        <CardPequeno 
          imagem={map}
          texto='Endereço: '
          descricao="Rua 10 número 0"
        />
      </div>
     
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={caminhao} 
          nome="Ambev" 
          descricao="Motorista de caminhão!" 
        />
        
        <CardGrande 
          imagem={CSN} 
          nome="CSN" 
          descricao="Operador de Pocesso." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
