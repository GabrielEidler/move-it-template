
interface TargetStop{
    type: string;
    function: Function;
}

export function TargetStop (props:TargetStop){


    return(
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
                    <div className="row">
                        <a onClick={() => {props.function()}} > + Add More {props.type}</a>
                    </div>
                </div>
                <p style={{paddingLeft: '10px',paddingRight: '10px', position: 'relative', top: '-10px'}}><strong>{props.type}</strong></p>
                <div className="column" style={{borderTop: '1px gray solid'}}>
                    <div className="row">
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Percentage Gain/Loss" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Current Gain/Loss" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="R:R" required/>
                        </div>
                    </div>
                </div>
            </div>
    )
}