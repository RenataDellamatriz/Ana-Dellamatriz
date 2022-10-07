import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Localizacao = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          background:
            "linear-gradient(0deg, rgba(207,207,207,1) 0%, rgba(101,97,97,1) 100%)",
        }}
      >
        <Header sobreMimAction={() => {}} />
      </Box>

      <Box      
        sx={{          
          margin: "0",
          width: "100vw",
          height: "70vh",
          background:
            "linear-gradient(0deg, rgba(207,207,207,1) 0%, rgba(101,97,97,1) 100%)",
        }}
      >
        <h3 className='localizacao-titulo'>Localização</h3>
        <div className="localizacao-wrapper"></div>
      </Box>

      <Footer />
    </>
  );
};

export default Localizacao;
