<script>

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
    <img class="fundoHome" src="./assets/Home.png" alt="Home">
    <img class="infoHome" src="./assets/bolaBranca.png" alt="info da Home">
    <img class="imagemCafes" src="./assets/cafes1.jpg" alt="cafes">
  </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kavoon&display=swap');

html, body {
  background-color: #9f5621;
  overflow-x: hidden;

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
      cursor: pointer;
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
        cursor: pointer;
        color: #2a7765;
  
        &:hover {
          border-bottom: 1px solid #215d4f;
          transition: all ease 0.8s;
          color: #215d4f;
        }
      }
  
      .titulo2 {
        cursor: pointer;
        color: #9f5621;
  
        &:hover {
          border-bottom: 1px solid #84481f;
          transition: all ease 0.8s;
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
        cursor: pointer;
        color: #9f5621;

        &:hover {
          transition: all ease 0.8s;
          color: #6e3c18;
        }
      }
    }
  }

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
    }

    .infoHome {
      position: absolute;
      top: 15%;
      left: 6%;
      height: 65%;
      width: auto;
      z-index: 1;
    }

    .imagemCafes {
      position: absolute;
      top: 23%;
      right: 9%;
      border-radius: 50px;
      height: 45%;
      width: auto;
      z-index: 1;
      box-shadow:
        0 0 60px 40px #683917a3,
        0 0 100px 60px rgba(6, 6, 6, 0.14),
        0 0 140px 80px rgba(125, 68, 28, 0.171);
    }
  
  }

}

//Monitor Notebook
@media (max-width: 1600px) {
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
}
</style>