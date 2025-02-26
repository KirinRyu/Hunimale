<script setup>
function handleClick() {
  window.open('/Cardápio.pdf', '_blank')
}
</script>

<template>

  <header class="barra-superior">
    <img class="logo" src="./assets/hunimale.png" alt="Logo da Marca">

    <div class="opcoes">
      <span class="titulo1">Home</span>
      <span class="titulo2">Sobre Nós</span>
      <span class="titulo1">Cardápio</span>
      <span class="titulo2">Contato</span>
    </div>

    <div class="icones">
      <font-awesome-icon class="iconeSuperior" icon="magnifying-glass" />
      <font-awesome-icon class="iconeSuperior" icon="cart-shopping" />
    </div>
  </header>

  <div class="Home">
    <img class="fundoHome" src="./assets/Home.png" alt="Home" draggable="false">
    <img class="infoHome" src="./assets/bolaBranca.png" alt="info da Home" draggable="false">
    <img class="imagemCafes" src="./assets/cafes1.png" alt="cafes" draggable="false">
  </div>

  <div class="About1">

    <img src="./assets/About1.png" alt="About" class="fundoAbout" draggable="false">
    
    <div class="row justify-content-evenly">
      <div class="col-4 left-about">
        <h2 class="title-about">Sobre o Hunimale Café</h2>
        <img class="imagemCao" src="./assets/cafechorro.jpg" alt="cachorro sapeca tomando cafe" draggable="false">
      </div>

      <div class="col-4 right-about">
        <span class="paragraph">
          No Hunimale Café, cada detalhe foi pensado para que você e seu pet. Aqui, proporcionamos:
        </span>

        <span class="paragraph">
          Cardápio Duplo: Deliciosas opções para você e refeições especialmente preparadas para o seu pet, 
          com ingredientes seguros e saudáveis.
        </span>

        <span class="paragraph">
          Sustentabilidade: Produtos feitos com ingredientes de origem responsável, reduzindo o impacto ambiental em cada detalhe
        </span>
        <span class="paragraph">
          Ambiente Acolhedor: Espaço confortável e pet-friendly, onde você e seu pet podem relaxar juntos.
        </span>

        <span class="paragraph">
          Experiência Completa: Além de comida boa, oferecemos um local para socialização, carinho e diversão para você e seu melhor
          amigo.
        </span>
        <span>Venha nos visitar e aproveite um momento especial!</span>
      </div>

    </div>

  </div>

  <div class="About2">
    <img src="./assets/About1.png" alt="About" class="fundoAbout" draggable="false">
    <div class="row justify-content-evenly">

      <div class="col-6 area-texto">
        <span class="titulo-area2">
          Missão
        </span>
        <p class="texto-area2">
          A Hunimale Café tem como missão proporcionar refeições nutritivas e saborosas recheadas de amor, visando o conforto e inclusão
          de todos os tipos de famílias, especialmente aquelas com integrantes de quatro patas.
        </p><br>

        <span class="titulo-area2">
          Visão
        </span>
        <p class="texto-area2">
          A empresa tem como objetivo principal o crescimento constante, para assim ser hábil de proporcionar uma experiência única aos 
          clientes em todo o país.
        </p><br>

        <span class="titulo-area2">
          Valores
        </span>
        <p class="texto-area2">
          Conforto, acessibilidade e atenção. Esses são os pilares da Hunimale Café: Nossos clientes serão sempre bem recebidos, nenhum 
          deles ficará de fora e todos serão vistos.
        </p><br>

      </div>

      <div class="col-4 area-imagem">
        <img class="imagemCaoConfuso" src="./assets/caomuie.jpg" alt="Cao com mulher" draggable="false">
      </div>

      <div class="parteCardapio">
        <img class="card" src="./assets/secaoCardapio.png" alt="acessar cardapio" draggable="false">
        <!--<span class="acessoCard">Ver Cardápio</span>-->
        <span 
         @click="handleClick"
         class="acessoCard">Ver o Cardápio</span>
      </div>

      <div class="parteContatos">
        <img class="imagemContratos" src="./assets/contatosImage.png" alt="Contatos">
        <div class="infosContato">
        
          <h1 class="tituloContato">Entre em contato!</h1>
          
          <div class="local">
            <font-awesome-icon icon="location-dot" class="iconeLocal" />
            <p class="localContato">
              Av. Washington Luís, 389 - Boqueirão, Santos - SP, 11055-001
            </p>
          </div>
          
          <div class="email">
            <font-awesome-icon icon="envelope" class="iconeEmail" />
            <p class="emailContato">Hunimale@cafesantos.com.br</p>
          </div>
          
          <div class="horario">
            <font-awesome-icon icon="clock" class="iconeHorario" />
            <div class="horarioContato">
              <p>De terça a sexta das 10h00 às 18h00 <br> De sábado e domingo das 9h00 às 19h00</p>
            </div>
          </div>
          
          <div class="telefone">
            <font-awesome-icon icon="phone-flip" class="iconeTelefone" />
            <p class="telefoneContato">(13) 99551-2717 - Horário Comercial</p>
          </div>

          <div class="redes">
            <font-awesome-icon class="insta" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="whats" icon="fa-brands fa-whatsapp" />
            <font-awesome-icon class="tiktok" icon="fa-brands fa-tiktok" />
          </div>
        
        </div>
      </div>
      
      <footer class="copyw">
        <img class="logo" src="./assets/hunimale.png" alt="logo">

        <div class="footerInfo">
          <span class="textCopy">Hunimale Café </span>
          <font-awesome-icon class="copyright" icon="copyright" />
        </div>

        <div class="footerInfo2">
          <span class="tVerde privacidade">Política de Privacidade</span>
          <span class="tMarrom produto">Política de Produto</span>
          <span class="tVerde termos">Termos de Uso</span>
        </div>

      </footer>
    </div>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kavoon&display=swap');

html, body {
  background-color: #9f5621;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  cursor: url('/cursor.cur'), auto !important;

  .barra-superior {
    justify-content: center;
    font-family: 'Kavoon', serif;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff4e8;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    gap: 5%;
    z-index: 999;

    .logo {
      margin-right: 16%;
    } 

    .opcoes {
      position: relative;
      display: flex;
      width: 40%;
      text-align: center;
      font-size: 130%;
      gap: 10%;
      top: 35%;
      height: 35%;

      .titulo1 {
        color: #2a7765;
  
        &:hover {
          border-bottom: 1px solid #215d4f;
          transition: all ease 0.8s;
          font-size: 110%;
          color: #215d4f;
        }
      }
  
      .titulo2 {
        color: #9f5621;
  
        &:hover {
          border-bottom: 1px solid #84481f;
          transition: all ease 0.8s;
          font-size: 110%;
          color: #84481f;
        }
      }
    }


    .icones {
      position: relative;
      display: flex;
      margin-left: 4%;
      font-size: 200%;
      gap: 50%;
      top: 33.5%;

      .iconeSuperior {
        color: #9f5621;

        &:hover {
          transition: all ease 0.8s;
          color: #6e3c18;
        }
      }
    }
  }

  // PARTE 1
  .Home {
    position: relative;
    left: -16.6%;
    top: 0;
    width: 100vw;

    .fundoHome {
      position: relative;
      height: 200px;
      width: 100%;
      height: auto;
      z-index: 0;
      user-select: none;
    }

    .infoHome {
      position: absolute;
      top: 15%;
      left: 6%;
      height: 60%;
      width: auto;
      z-index: 1;
    }

    .imagemCafes {
      user-select: none;
      position: absolute;
      top: 28%;
      right: 11%;
      border-radius: 50px;
      height: 35%;
      width: auto;
      z-index: 1;
      box-shadow:
        0 0 60px 40px #683917a3,
        0 0 100px 60px rgba(6, 6, 6, 0.101),
        0 0 140px 80px rgba(255, 227, 208, 0.122);
    }
  }

  // PARTE 2
  .About1 {
    position: absolute;
    left: 0;
    top: 110%;
    z-index: 2;

    .row {
      position: absolute;
      top: 8%;
      width: 100%;
      text-align: center;
      gap:15%;

      .left-about {
        margin-left: 6%;
        width: 20%;
        font-family: 'Kavoon', serif;
        color: #c56926;

        .title-about {
          border-bottom: 1px solid #c56926;
        }

        .imagemCao {
          border-radius: 100px;
          margin-top: 15%;
          margin-left: -10%;
          width: 180%;
          user-select: none;
        }
      }

      .right-about {
        text-align: start;
        font-family: 'Roboto', serif; 
        font-size: 20px;
        display: flex;
        flex-direction: column;
        color: #773e18;

        .paragraph {
          margin-top: 5%;
        }
      }
    }

    .fundoAbout {
      user-select: none;
      height: auto;
      width: 100%;
    }
  }

  // PARTE 3
  .About2 {
    position: absolute;
    left: 0;
    top:220%;
    z-index: 3;

    .fundoAbout {
      height: auto;
      width: 100%;
      user-select: none;
    }

    .row {
      position: absolute;
      top: -9%;
      width: 100%;
      margin-left: 4%;
      text-align: start;

      .area-texto {
        border-radius: 50px;
        background-color: #fed7cb;
        color: #773e18;
        max-width: 50%;
        height: auto;
        padding: 50px;
        display: flex;
        flex-direction: column;
        font-size: 27px;

        .titulo-area2 {
          font-family: 'Kavoon', serif;
        }

        .texto-area2 {
          font-family: 'Roboto', serif;
        }
      }

      .imagemCaoConfuso {
        width: 80%;
        border-radius: 50px;
        user-select: none;
      }
    }
  }

  // PARTE 4
  .parteCardapio {
    user-select: none;
    position: absolute;
    left: -5%;
    top:120%;
    z-index: 3;

    .card {
      width: 110%;
      height: auto;
    }

    .acessoCard {
      position: absolute;
      text-align: center;
      padding: 4px;
      top: 60%;
      left: 50%;
      height: 4.5%;
      width: 10%;
      transform: translate(-50%, -50%);
      background-color: #FF9AAF;
      color: #fff;
      border-radius: 10px;
      font-size: 165%;

      &:hover {
        background-color: #e18799;
      }
    }
  }

  // Parte 5
  .parteContatos {
    user-select: none;
    position: absolute;
    left: -5%;
    top: 290%;
    width: 100%;
    color: #fff4e8;

    .imagemContratos {
      width: 100%;
      height: auto;
    }

    .tituloContato {
      position: absolute;
      top: 10%;
      left: 55.5%;
      font-family: 'Kavoon', serif;
    }

    .local {
      position: absolute;
      top: 20%;
      left: 56%;
      display: flex;
      flex-direction: row;
      font-size: 25px;
      font-family: 'Roboto', serif;

      .iconeLocal {
        margin-top: 8px;
        margin-right: 15px;
      }
    }
    .email {
      position: absolute;
      top: 28%;
      left: 56%;
      display: flex;
      flex-direction: row;
      font-size: 25px;
      font-family: 'Roboto', serif;

      .iconeEmail {
        margin-top: 8px;
        margin-right: 15px;
      }
    }
    .horario {
      position: absolute;
      top: 36%;
      left: 56%;
      display: flex;
      flex-direction: row;
      font-size: 25px;
      font-family: 'Roboto', serif;

      .iconeHorario {
        margin-top: 28px;
        margin-right: 15px;
      }

      .horarioContato {
        display: flex;
        flex-direction: column;
      }
    }
    .telefone {
      position: absolute;
      top: 48%;
      left: 56%;
      display: flex;
      flex-direction: row;
      font-size: 25px;
      font-family: 'Roboto', serif;

      .iconeTelefone {
        margin-top: 8px;
        margin-right: 15px;
      }
    }

    .redes {
      display: flex;
      flex-direction: row;
      text-align: center;
      position: absolute;
      top: 55%;
      left: 63%;
      font-size: 40px;
      margin-top: 3%;
      gap: 70%;

      .tiktok:hover {
        color: #34F2F8;
        transition: all ease 0.6s;
      }

      .insta:hover {
        color: #E93693;
        transition: all ease 0.6s;
      }

      .whats:hover {
        color: #39DE48;
        transition: all ease 0.6s;
      }
    }
  }

  // Parte 6
  .copyw {
    position: absolute;
    top: 415%;
    left: -4%;
    user-select: none;
    background-color: #fff4e8;
    z-index: 5;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;

    .logo {
      height: 60%;
      width: auto;
    }

    .footerInfo {
      color: #9f5621;
      width: 10%;
      
      .textCopy {
        font-weight: 400;
      }
    }

    .footerInfo2 {
      width: 50%;
      font-size: 18px;

      .tVerde {
        color:#2a7765;
        margin-left: 10%;
      }

      .tMarrom {
        color: #9f5621;
        margin-left: 10%;
      }

      .privacidade:hover {
        text-decoration-line: underline;
      }

      .produto:hover {
        text-decoration-line: underline;
      }

      .termos:hover {
        text-decoration-line: underline;
      }
    }
  }

}

//Monitor Notebook
@media (max-width: 1600px) {

  .logo {
    margin-right: 10% !important
  }

  .opcoes {
    position: relative;
    top: 30% !important;
    height: 43% !important;
  }

  // PARTE 1
  .Home {
    position: relative;
    left: -8.3% !important;
    top: 0;
    width: 100vw;

    .fundoHome {
      position: relative;
      height: 200px;
      width: 100%;
      height: auto;
      z-index: 0;
    }

    .infoHome {
      position: absolute;
      top: 10% !important;
      left: 5% !important;
      height: 75% !important;
      width: auto;
      z-index: 1;
    }
  }

  // PARTE 2
  .About1 {

    .row {

      .left-about {
        width: 29% !important;
      
        .imagemCao {
          width: 150% !important;
        }
      }

      .right-about {
        font-size: 18px !important;
      }
    }
  }

  // PARTE 3
  .About2 {
    position: absolute;
    top: 225% !important;

    .row {

      .area-texto {
        padding-top: 40px !important;
        padding-bottom: 10px !important;
        font-size: 18px !important;
      }

      .imagemCaoConfuso {
        width: 85% !important;
      }
    }
  }

  // PARTE 4
  .parteCardapio {
    top: 125% !important;

    .acessoCard {
      font-size: 18px !important;
    }
  }

  // PARTE 5
  .parteContatos {
    .local {
      font-size: 23px !important;
    }

    .email {
      font-size: 23px !important;
      top: 32% !important;
    }

    .horario {
      font-size: 23px !important;
      top: 39% !important;
    }

    .telefone {
      font-size: 23px !important;
      top: 52% !important;
    }

    .redes {
      top: 60% !important;
    }

  }
}
</style>