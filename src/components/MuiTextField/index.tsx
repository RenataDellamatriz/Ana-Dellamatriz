import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/system';
import './MuiTextField.css'

// const theme = createTheme({
//     palette: {
//         primary: {
//             main:'#fefefe'
//         },
        
//     }
// })

const MuiTextField = ({ label}: { label: string }) => {

//ThemeProvider ta deixando minha página em branco, arruma isso ae
  return(//  
  <TextField 
  label={label}   
  variant='outlined'  
  />    
)};

export default MuiTextField;
