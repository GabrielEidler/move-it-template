import { TargetStop } from "./TargetStop"
import {useState} from 'react'

export function ScaleForm() {
    const [target, setTarget] = useState(0);

    const addTarget= () => {
        /* for every click, add a counter to target and stop */
        setTarget(target + 1);
        
    }

    return(
        <form action="/">
            <h2>Scale1</h2>
            <div className="column-wrapper" style={{padding: '20px'}} >
                <div className="column" style={{borderTop: '1px gray solid'}}>
                    <div className="row">
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Price" required/>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Shares" required/>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Fees" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Reason" required/>
                        </div>
                    </div>
                </div>
                <p style={{paddingLeft: '10px',paddingRight: '10px', position: 'relative', top: '-10px'}}><strong>In</strong></p>
                <div className="column" style={{borderTop: '1px gray solid'}}>
                    {/* empty */}
                </div>
            </div>

        < TargetStop type="Target" function={()=>{addTarget()}}/>
            {/* render a new target for every target */}
            <h2>number of targets and stops:{target}</h2>
            {Array(target).fill(<TargetStop type="Target" function={() => {}} />)}
        < TargetStop type="Stop" function={()=>{addTarget()}}/>
            {/* render a new target for every stop */}
            
        </form>
    );
}