import { Button } from "@mui/material";
import "./Saiba-mais.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SaibaMais = () => {
  return (
    <div className='saiba-mais'>
      <Button
      startIcon={<KeyboardArrowDownIcon/>}
        sx={{
          fontFamily: "Work Sans",
          color: "white",
          backgroundColor: "#866A70",
          fontSize: "15px",
          borderRadius: "20px",
          padding: "5px 17px 5px 10px",
          transition: "2s, ease-in-out",
          fontWeight: "700",  
          textAlign:'center',        
          
          "&:hover": {
            backgroundColor: "#a97683",
          },
        }}
      >
        SAIBA MAIS
      </Button>
    </div>
  );
};

export default SaibaMais;
