import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import  { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
      <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
