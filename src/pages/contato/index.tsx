import { Box, Button, Input } from "@mui/material";
import Header from "../../components/Header";
import backgroundContato from "../../images/backgroundContato.png";
import cardTelefone from "../../images/card-telefone.png";
import cardEmail from "../../images/card-email.png";
import cardWhatsapp from "../../images/card-whatsapp.png";
import "./Contato.css";
import Footer from "../../components/Footer";
import MuiTextField from "../../components/MuiTextField";

const Contato = () => {
  return (
    <>
      <Box
        className="header-contato"
        sx={{
          backgroundImage: `url(${backgroundContato})`,
          width: "100vw",
          height: "70vh",
          backgroundSize: "cover",
          backgroundAttachment: "local",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
          minHeight: "500px",
        }}
      >
        <Header />
        <h1>Agende seu horário</h1>
      </Box>

      <Box className="card-background">
        <div className='card-wrapper'>
          <div className="card">
            <img src={cardTelefone} />
            <h4>Telefone</h4>
            <p>(--) 0000-0000</p>
          </div>
          <div className="card">
            <img src={cardEmail} />
            <h4>Email</h4>
            <p>ana_dellamatriz@hotmail.com</p>
          </div>
          <div className="card">
            <img src={cardWhatsapp} />
            <h4>Whatsapp</h4>
            <p>(--) 00000-0000</p>
          </div>
        </div>
      </Box >

      <Box className='entre-em-contato'>
        <h3>Entre em contato</h3>
        <div className='input-wrapper'>
          <div className='input'>
           <MuiTextField label='Nome'/>
           <MuiTextField label='Email'/>
           <MuiTextField label='Assunto'/>
           <MuiTextField label='Mensagem'/>
            <Button
            sx={{
              fontFamily: "Work Sans",
              color: "white",
              backgroundColor: "#BE9E9E",
              fontSize: "20px",
              borderRadius: "10px",
              padding: "5px 17px 5px 10px",
              transition: "2s, ease-in-out",
              fontWeight: "700",
              textAlign: "center",
              cursor:'pointer',
              width:'50%',
    
              "&:hover": {
                backgroundColor: "#a97683",
              }
            }}
            > ENVIAR</Button>          
          </div>
          <div className='horario-de-atendimento'></div>
        </div>
      </Box>

      <Footer/>
    </>
  );
};

export default Contato;
