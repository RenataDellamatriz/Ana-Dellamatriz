import { Box } from "@mui/material";
import "./Home.css";
import background from "../../images/background.png";
import Header from "../../components/Header";
import SaibaMais from "../../components/Saiba-mais";
import SwiperContent from "../../components/Swiper";
import React, { useRef } from "react";

const Home = () => {
  const especialidades = useRef<HTMLDivElement>(null);

  const scrollToEspecialidades = (
    elementref: React.RefObject<HTMLDivElement>
  ) => {
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
        <Header />
        <div className="main-content">
          <h1 className="main-text">
            Conhecimento e segurança para o tratamento da sua pele
          </h1>
          <SaibaMais onClick={() => scrollToEspecialidades(especialidades)} />
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
    </>
  );
};

export default Home;
