
interface Summary{
    positionSize: number;
    breakEvenPrice: number;
    riskReward: number;
    totalGL: number;
    realizedGL: number;
    unrealizedGL: number;
}


export function Summary(props:Summary) {


    return(
        <div className="summary-wrapper">
            <h1 style={{paddingLeft: '20px'}} >SCALE SUMMARY</h1>
            <div className="column-wrapper" style={{padding: '20px'}} >
                <div className="column" style={{borderTop: '1px gray solid'}}>
                    <div>-</div>
                    Target 1 Position Size: <strong>${props.positionSize} </strong>
                    <div>-</div>
                    Realized Gain/Loss: <strong>${props.realizedGL} </strong>
                    <div>-</div>
                    Unrealized Gain/Loss: <strong>${props.unrealizedGL} </strong>
                    <div>-</div>
                    Total Gain/Loss: <strong>${props.totalGL} </strong>
                    <div>-</div>
                    Target 1 Break Even Price: <strong>${props.breakEvenPrice} </strong>
                    <div>-</div>
                    Target 1 Risk Reward: <strong>${props.riskReward} </strong>
                    <div>-</div>
                    {/* empty */}
                </div>
            </div>
        </div>
    );
}