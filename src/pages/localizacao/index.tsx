import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Localizacao = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(0deg, rgba(207,207,207,1) 0%, rgba(101,97,97,1) 100%)",
        }}
      >
        <Header />
      </Box>
      <Box className='main-content-localizacao'
        sx={{
          width: "100vw",
          height: "70vh",
          background:
            "linear-gradient(180deg,rgba(255, 255, 255, 1) 0%,rgba(226, 206, 206, 1) 100%",
        }}
      >
        <h3>Localização</h3>
        <div className="localizacao-wrapper"></div>
      </Box>
      <Footer />
    </>
  );
};

export default Localizacao;
