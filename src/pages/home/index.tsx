import { Box, Button } from "@mui/material";
import "./Home.css";
import background from "../../images/background.png";
import Header from "../../components/Header";
import SaibaMais from "../../components/Saiba-mais";
import SwiperContent from "../../components/Swiper";
import React, { useRef } from "react";
import AnaDellamatrizFoto from "../../images/anadellamatriz.png";
import Footer from "../../components/Footer";


const Home = () => {
  const especialidades = useRef<HTMLDivElement>(null);
  const sobreMim = useRef<HTMLDivElement>(null);

//scrollar até algum ponto da página
  const scrollTo = (elementref: React.RefObject<HTMLDivElement>) => {
    if (elementref?.current) {
      window.scrollTo({
        top: elementref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundAttachment: "local",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "500px",
          position: "relative",
        }}
      >
        <Header sobreMimScroll={() => scrollTo(sobreMim)} />
        <div className="main-content">
          <h1 className="main-text">
            Conhecimento e segurança para o tratamento da sua pele
          </h1>
          <SaibaMais onClick={() => scrollTo(especialidades)} />
        </div>
        <svg
          className="wave1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#E2CECE"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>

      <Box className="especialidades" ref={especialidades}>
        <h2>Especialidades</h2>
        <SwiperContent />
      </Box>

      <Box className="sobre" ref={sobreMim}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#D0C0C0"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,138.7C672,160,768,192,864,202.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="sobre-wrapper">
          <div className="sobre-texto">
            <h3>Sobre</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <img className="AnaDellamatrizFoto" src={AnaDellamatrizFoto} />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="sobreWaveFim"
        >
          <path
            fill="#DDD2D2"
            fill-opacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,176C672,160,768,160,864,181.3C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="agende-seu-horario-wrapper">
          <div>
            <p>QUER SABER MAIS?</p>
            <h4>agende seu horário</h4>
          </div>
          <Button
            sx={{
              fontFamily: "Work Sans",
              color: "white",
              backgroundColor: "#866A70",
              fontSize: "10px",
              borderRadius: "20px",
              padding: "5px 17px 5px 10px",
              transition: "0.2s, ease-in-out",
              fontWeight: "700",
              textAlign: "center",
              cursor: "pointer",
              width: "150px",
              margin: " auto",

              "&:hover": {
                backgroundColor: "#a97683",
              },
            }}
          >
            Clique aqui
          </Button>
        </div>
      </Box>
      <Box sx={{ width: "100vw", height: "50vh", minHeight: "500px" }}></Box>

    <Footer/>
    </>
  );
};

export default Home;
