import React from 'react'
import './App.css';
import Header from '../components/Header/Header'
import Body from '../components/Body/Body';
import Statisticas from '../components/Statisticas/Statisticas'
function App() {
  return (
    <div style={{display:'flex', width:'90vw', justifyContent:'space-evenly', marginTop:70}}>
      <div>
        <Header />
        <Body />
      </div>
      <Statisticas />
    </div>
  );
}

export default App;
