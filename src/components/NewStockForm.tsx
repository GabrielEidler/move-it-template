

export function NewStockForm() {
    

    return(
        <form action="/">
                <div className="row">
                    <div className="input-wrapper">
                        <input type="text" name="name" placeholder="Tick" required/>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="name" placeholder="Play" required/>
                    </div>
                    <div className="input-wrapper">
                        <select required>
                            <option value="">Option 1</option>
                            <option value="1">Option 2</option>
                            <option value="2">Option 3</option>
                            <option value="3">Option 4</option>
                            <option value="4">Option 5</option>
                            <option value="5">Option 6</option>
                        </select>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="input-wrapper">
                        <input type="text" name="name" placeholder="Week Target" required/>
                    </div>
                    <div className="input-wrapper">
                        <select required>
                            <option value="">Option 1</option>
                            <option value="1">Option 2</option>
                            <option value="2">Option 3</option>
                            <option value="3">Option 4</option>
                            <option value="4">Option 5</option>
                            <option value="5">Option 6</option>
                        </select>
                    </div>
                    <div className="input-wrapper no-shadow">
                        <div className="radio-container">
                            <input type="radio" value="none" name="personal-trainer" required/> <label><span>Long</span></label>
                            <input type="radio" value="none" name="personal-trainer" required/> <label><span>Short</span></label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="input-wrapper">
                        <textarea  name="name" placeholder="About the stock..." required/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-wrapper">
                        <textarea name="name" placeholder="Goal Summary" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-wrapper no-shadow">
                        <button type="submit" >Continue</button>
                    </div>
                </div>
                
            {/* ROW */}
                {/* INPUT-TEXT */} 
                {/* INPUT-TEXT */} 
                {/* INPUT-SELECT */}
            {/* ROW */}
                {/* INPUT-TEXT */} 
                {/* INPUT-SELECT */} 
                {/* INPUT-RADIO */}
            {/* ROW */}
                {/* INPUT-TEXT */} 
            {/* ROW */}
                {/* INPUT-TEXT */} 
        </form>
    );
}