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

const MuiTextField = ({ label, name }: { label : string ; name : string}) => {

//ThemeProvider ta deixando minha página em branco, arruma isso ae
  return(//  
  <TextField 
  name={name}
  label={label}   
  variant='outlined'  
  />    
)};

export default MuiTextField;
