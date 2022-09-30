import './Footer.css'
import Logo from "../../images/Logo.png";
import { Box } from '@mui/system';

const Footer = () => {
    return(
        
        <Box className="footer">
        <div className="footer-wrapper">
          <img src={Logo} className="logo" />
          <div className='footer-texto'>
          <div className="footer-localização">
            <h5>LOCALIZAÇÃO</h5>
            <p>
              R. Edvard Carmilo, 926 - Jardim Celeste, São Paulo - SP, 05528-001
            </p>
          </div>
          <div className="footer-contato">
            <h5>CONTATO</h5>
            <p>Telefone: (--)0000-0000</p>
              <p> Email: ana_dellaamtriz@hotmail.com</p>
             <p>Whatsapp:(00)00000-0000</p>
          </div>
          </div>
        </div>
      </Box>
      
    )

    
}

export default Footer;