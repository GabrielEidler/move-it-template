import {useState, useEffect, useContext} from 'react';
import { NewStockForm } from './components/NewStockForm';
import { ScaleForm } from './components/ScaleForm';
import {Summary} from './components/Summary'
import Draggable from 'react-draggable';

import './styles/global.css'

function App() {

  // Any variable ending with a numeric value means that is a static variable that will need to become a dynamic array later on.

  const [initial_price, setInitial_price] = useState(0);  
  const [initial_shares, setInitial_shares] = useState(0);
  const [target_price_1, setTarget_price_1] = useState(0);
  const [target_shares_amount_1, setTarget_shares_amount_1] = useState(0);
  const [stop_price, setStop_price] = useState(0);


  //array variable for targets

  interface Target{
    price: Number, 
    shares: Number 
  }

  const [targetArray, setTargetArray] = useState<Array<Target>>([])

  const targetArrayHandler = (newObject:Target) => {
    // the object is ready when arrives here, the values are already set
    setTargetArray(() => [...targetArray, newObject ])
  } 
  
  // consequence variables
  const current_shares = initial_shares - target_shares_amount_1;
  const shares_change_1 = -target_shares_amount_1;
  const stop_change =  (initial_price - stop_price);
  const stop_totalGL = stop_change*initial_shares;
  const initial_position_size = current_shares*initial_price;
  const target_position_size_1 = current_shares*target_price_1;
  const change_1 = initial_price - target_price_1;
  const realizedGL = shares_change_1*change_1;
  const unrealizedGL = -current_shares*change_1;
  const totalGL = realizedGL + unrealizedGL;
  const break_even_price_1 = target_price_1 - (totalGL/current_shares);
  //(initial_price - (shares_change_1*target_price_1))/current_shares;
  const riskReward = (totalGL/stop_totalGL)
  // R:R is the current reward divided by the stop loss.

  // functions to gather user input:
  const getInitialPrice = (event_value : number) => {
    setInitial_price(event_value);
  }

  const getInitialShares = (event_value : number) => {
    setInitial_shares(event_value);
  }

  const getTargetPrice1= (event_value : number) => {
    setTarget_price_1(event_value);
  }

  const getTargetSharesAmount1= (event_value : number) => {
    setTarget_shares_amount_1(event_value);
  }

  const getStopPrice= (event_value : number) => {
    setStop_price(event_value);
  }
  
  return (
    <>
      <div className="header-bg"></div>
      <div className="container">
      <Draggable>
        <div className="box">
          < Summary
          //results:
          positionSize={target_position_size_1} 
          breakEvenPrice={break_even_price_1}
          riskReward={riskReward}
          totalGL={totalGL}
          realizedGL={realizedGL}
          unrealizedGL={unrealizedGL}
          />
        </div>
        
      </Draggable>


          

        < ScaleForm 
          //data extraction
          function_initial_price={(e:number) => {getInitialPrice(e)}}
          function_initial_shares={(e:number) => {getInitialShares(e)}}
          function_target_price_1={(e:number) => {getTargetPrice1(e)}}
          function_target_shares_amount_1={(e:number) => {getTargetSharesAmount1(e)}}
          function_stop_price={(e:number) => {getStopPrice(e)}} 
          />


          
      </div>
    </>
  );
}

export default App;
