import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Maps from "../../components/Mapa";
import { useNavigate } from "react-router-dom";
import "./Localizacao.css";

const Localizacao = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          backgroundColor: "#9C8187",
        }}
      >
        <Header sobreMimAction={() => navigate("/?scroll=sobreMim")} />
      </Box>

      <Box
        sx={{
          margin: "0",
          width: "100vw",
          height: "67vh",
          backgroundSize: "cover",
          backgroundColor: "#ddd2d2",
        }}
      >
        <h3 className="titulo">Localização</h3>
        <div className='localizazao-base'>
          <div className="localizacao-wrapper">
            <Maps />
          </div>
        </div>
      </Box>

      <Footer />
    </>
  );
};

export default Localizacao;
