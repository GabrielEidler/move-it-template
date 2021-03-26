

export function NewStockForm() {
    

    return(
        <>
        <form action="/">
            <div className="banner">
                <h1>Start with a new Stock</h1>
            </div>
            <p className="top-info">Want to become a member of our Gym? Then start by filling our form to complete registration. We will contact you shortly to notify you about your membership card.</p>
            <div className="item">
                <p>Name<span className="required">*</span></p>
                <div className="name-item">
                <input type="text" name="name" placeholder="First" required/>
                <input type="text" name="name" placeholder="Last" required/>
                </div>
            </div>
            <div className="question">
                <p>Gender<span className="required">*</span></p>
                <div className="question-answer">
                <label><input type="radio" value="none" name="gender" required/> <span>Male</span></label>
                <label><input type="radio" value="none" name="gender" required/> <span>Female</span></label>
                </div>
            </div>
            <div className="item">
                <p>Your current weight (lbs)<span className="required">*</span></p>
                <input type="text" name="name"/>
            </div>
            <div className="item">
                <p>Desired weight (lbs)<span className="required">*</span></p>
                <input type="text" name="name" required/>
            </div>
            <div className="item">
                <p>Height<span className="required">*</span></p>
                <input type="text" name="name" required/>
            </div>
            <div className="item">
                <p>BMI<span className="required">*</span></p>
                <input type="text" name="name" required/>
            </div>
            <div className="item">
                <p>Home Address<span className="required">*</span></p>
                <input type="text" name="name" placeholder="Street address" required/>
                <div className="city-item">
                <input type="text" name="name" placeholder="City" required/>
                <input type="text" name="name" placeholder="Region" required/>
                <input type="text" name="name" placeholder="Postal / Zip code" required/>
                <select>
                    <option value="">Country</option>
                    <option value="1">Russia</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="4">Armenia</option>
                    <option value="5">USA</option>
                </select>
                </div>
            </div>
            <div className="item">
                <p>Email<span className="required">*</span></p>
                <input type="text" name="name" required/>
            </div>
            <div className="item">
                <p>Phone</p>
                <input type="text" name="name"/>
            </div>
            <div className="question">
                <p>Do you require a personal trainer?<span className="required">*</span></p>
                <div className="question-answer">
                <label><input type="radio" value="none" name="personal-trainer" required/> <span>Yes</span></label>
                <label><input type="radio" value="none" name="personal-trainer" required/> <span>No</span></label>
                </div>
            </div>
            <div className="question">
                <p>Have you been in a Gym before?<span className="required">*</span></p>
                <div className="question-answer">
                <label><input type="radio" value="none" name="gym-before" required/> <span>Yes</span></label>
                <label><input type="radio" value="none" name="gym-before" required/> <span>No</span></label>
                </div>
            </div>
            <div className="question">
                <p>Membership Type<span className="required">*</span></p>
                <div className="question-answer">
                <label><input type="radio" value="none" name="membership" required/> <span>Regular</span></label>
                <label><input type="radio" value="none" name="membership" required/> <span>Pro</span></label>
                <label><input type="radio" value="none" name="membership" required/> <span>VIP</span></label>
                </div>
            </div>
            <div className="btn-block">
                <button type="submit" >Apply</button>
            </div>
      </form>
        </>
    );
}