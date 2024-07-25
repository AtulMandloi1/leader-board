import React from 'react';
import Headers from './compoment/Headers'
import Name from './compoment/Name';
import Mainbox from './compoment/Mainbox';
import Baner from './compoment/Baner';
import Footer from './compoment/Footer';

const App = () => {

  return (
    <div style={{height:'100vh'}}>
      <Headers />
      <Name />
      <Mainbox />
      <Baner />
      <Footer/>
    </div>
  )
}

export default App