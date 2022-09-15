import "./Header.css";
import { Box } from "@mui/system";
import image from "../../images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ModalHeader from "../Modal-header";
import { useState } from "react";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Button } from "@mui/material";

const Header = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="header">
      <div className="menu-logo-bar">
        <img className="logo" src={image} />
        <ModalHeader 
        open={open}
        onClose={handleClose}
        />
        <MenuIcon
          onClick={handleOpen}
          className="menu-icon"
          sx={{
            color: "white",
            width: "30px",
            height: "30px",
            display: { xs: "block", md: "none" },
          }}
        />
      </div>
      <ul className="ancors">
        <li>
          <a>Sobre mim</a>
        </li>
        <li>
          <a>Serviços</a>
        </li>
        <li>
          <a>Localização</a>
        </li>
        <li>
          <Button className='agende-seu-horario' startIcon={<EventAvailableIcon/>} > AGENDE SEU HORÁRIO </Button>
        </li>
      </ul>
    </Box>
  );
};

export default Header;
