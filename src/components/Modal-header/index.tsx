import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import "./Modal-header.css";

const ModalHeader = (props: { open: boolean; onClose: () => void }) => {
  return (
    <div>
      <Modal open={props.open}  onClose={props.onClose}>
        <Box >          
            <ul 
            className="ancors-modal"
            
            >
            <button 
            onClick={props.onClose}
            className='close'>x</button>
              <li>
                <a className='items'>Sobre mim</a>
              </li>
              <li>
                <a className='items'>Serviços</a>
              </li>
              <li>
                <a className='items'>Localização</a>
              </li>
              <li>
                <a className='items'>Agende seu horário</a>
              </li>
            </ul>
          
        </Box>
      </Modal>
    </div>
  );
};

export default ModalHeader;
