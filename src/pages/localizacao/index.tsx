import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Maps from "../../components/Mapa";
import './Localizacao.css'

const Localizacao = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          backgroundColor:'#9C8187',
          
        }}
      >
        <Header sobreMimAction={() => {}} />
      </Box>

      <Box      
        sx={{          
          margin: "0",
          width: "100vw",
          height: "66vh",
          backgroundSize: 'cover',
          backgroundColor: '#ddd2d2'            
        }}
      >
        <h3 className='titulo'>Localização</h3>
        <div className="localizacao-wrapper">
          <Maps/>
        </div>
      </Box>

      <Footer />
    </>
  );
};

export default Localizacao;
