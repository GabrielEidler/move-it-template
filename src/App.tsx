import React from 'react';
import { NewStockForm } from './components/NewStockForm';
import { ScaleForm } from './components/ScaleForm';

import './styles/global.css'

function App() {
  return (
    <>
      <div className="header-bg"></div>
      <div className="container">
        {/* < NewStockForm />  */}
        < ScaleForm />
      </div>
    </>
  );
}

export default App;
