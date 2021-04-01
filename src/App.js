import logo from './logo.svg';
import './App.css';
import Layout from '../src/components/ui/layout/layout'
import {BrowserRouter}from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Layout/>
    </div>
    </BrowserRouter>
  );
}

export default App;
