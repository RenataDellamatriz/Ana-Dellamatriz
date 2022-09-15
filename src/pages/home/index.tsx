import { Box } from "@mui/material";
import "./Home.css";
import background from '../../images/background.png'
import Header from "../../components/Header";

const Home = () => {
  return (
    <Box 
    sx={{
      backgroundImage: `url(${background})`,
      width:'100vw',
      height:'100vh',
      backgroundSize:'cover',
      backgroundAttachment:'fixed', 
      position:'absolute'
      }}>
        <Header/>
        <h1 className='main-text'>Conhecimento e segurança para o tratamento da sua pele</h1>
    </Box>
  );
};

export default Home;
