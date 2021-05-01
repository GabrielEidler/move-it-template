
interface TargetStop{
    type: string;
    function: Function;
    index: number;
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
                <p style={{paddingLeft: '15px',paddingRight: '0px', position: 'relative', top: '-20px', minWidth: '15%', fontSize: '24px'}}><strong>{props.type} {props.index}</strong></p>
                <div className="column" style={{borderTop: '1px gray solid'}}>
                    {/* EMPTY */}
                </div>
            </div>
    )
}