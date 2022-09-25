import "./Header.css";
import { Box } from "@mui/system";
import image from "../../images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ModalHeader from "../Modal-header";
import { useState } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Button } from "@mui/material";

const Header = ({sobreMimScroll}:{sobreMimScroll:() => void}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="header">
      <div className="menu-logo-bar">
        <img className="logo" src={image} />
        <ModalHeader open={open} onClose={handleClose} />
        <MenuIcon
          onClick={handleOpen}
          className="menu-icon"
          sx={{
            color: "white",
            width: "35px",
            height: "35px",
            padding:'5px',
            display: { xs: "block", md: "none" },
            cursor:'pointer',
            borderRadius:'50%',
            '&:hover':{
              backgroundColor:'#AB9F9F'              
            }
          }}
        />
      </div>
      <ul className="ancors">
        <li>
          <a className='items' onClick={sobreMimScroll}>Sobre mim</a>
        </li>
        <li>
          <a className='items'>Serviços</a>
        </li>
        <li>
          <a className='items'>Localização</a>
        </li>
        <li>
          <Button
            startIcon={<EventAvailableIcon />}
            sx={{
              fontFamily: "Work Sans",
              color: "white",
              backgroundColor: "#866A70",
              fontSize: "15px",
              borderRadius: "20px",
              padding: "3px 12px",
              transition: '2s, ease-in-out',
              '&:hover':{
                backgroundColor:'#a97683'
              }
            }}
          >
            {" "}
            AGENDE SEU HORÁRIO{" "}
          </Button>
        </li>
      </ul>
    </Box>
  );
};

export default Header;
