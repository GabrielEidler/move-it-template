import { TargetStop } from "./TargetStop"
import {useState} from 'react'

interface Scaleform{
    function_initial_price: Function;
    function_initial_shares : Function;
    function_target_price_1 : Function;
    function_target_shares_amount_1 : Function;
    function_stop_price : Function;
}


export function ScaleForm(props:Scaleform) {
    const [target, setTarget] = useState(1);
    const [stop, setStop] = useState(1);

    const addTarget= () => {
        /* for every click, add a target */
        setTarget(target + 1);
        
    }

    const addStop= () => {
        /* for every click, add a  stop */
        setStop(stop + 1);
        
    }

    return(
        <form action="/">
            <h1 style={{paddingLeft: '20px'}} >Scale1</h1>
            <div className="column-wrapper" style={{padding: '20px'}} >
                <div className="column" style={{borderTop: '1px gray solid'}}>
                    <div className="row">
                        <div className="input-wrapper">
                            <input type="number" name="name" placeholder=" I. Price" onChange={event => props.function_initial_price(event.target.value)} required/>
                            
                        </div>
                        <div className="input-wrapper">
                            <input type="number" name="name" placeholder="I. Shares" onChange={event => props.function_initial_shares(event.target.value)} required/>
                        </div>
                        <div className="input-wrapper">
                            <input type="number" name="name" placeholder="Target Price 1" onChange={event => props.function_target_price_1(event.target.value)} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Target Share Amount 1" onChange={event => props.function_target_shares_amount_1(event.target.value)} required/>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Stop Price" onChange={event => props.function_stop_price(event.target.value)} required/>
                        </div>
                    </div>
                </div>
                <p style={{paddingLeft: '10px',paddingRight: '10px', position: 'relative', top: '-20px', fontSize: '28px'}}><strong>IN</strong></p>
                <div className="column" style={{borderTop: '1px gray solid'}}>
                    {/* empty */}
                </div>
            </div>

            {/* render a new target for every target */}
            {Array.from(Array(target), (_,i) => <TargetStop key={i} index={i} type="Target" function={()=>{addTarget()}} />)}

            {/* render a new target for every target */}
            {Array.from(Array(stop), (_,i) => <TargetStop key={i} index={i} type="Stop" function={()=>{addStop()}} />)}
                
        </form>
    );
}