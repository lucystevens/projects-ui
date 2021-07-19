import './App.css';
import HomePage from 'components/pages/HomePage/HomePage';
import { Box, Container } from '@material-ui/core';

function App() {

  return (
    <>
    <Box className="top-bar"
        display="flex"
        p={2}
        alignItems="center" 
        justifyContent="space-between">

          <Box>
            <h1 className="name">Luke Stevens</h1>
          </Box>
          <Box>
            <h1 className="name">PROJECTS</h1>
          </Box>
      </Box>
      <Container maxWidth="lg">
        <HomePage></HomePage>
      </Container>

    </>
  );
}

export default App;
