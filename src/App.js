import {Grid} from '@material-ui/core'
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <Grid 
      className="App" 
      container 
      direction='column' 
      justifyContent='center' 
      alignItems='center'  
    >
      <h1> URL SHORTENER </h1>
        <Search /> 
    </Grid>
  );
}

export default App;
