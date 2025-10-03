import React, { useState } from 'react';
import styles from "../styles/Assignment1.module.css"

export default function MyForm(){
    const [Name, setName] = useState(''); //Name tracking
    const [Date, setDate] = useState(''); //Date tracking
    const [Vis, setVis] = useState(false); //Visibility
    const [Errors, setErrors] = useState({}); //Error tracking

    const Submit = (event) => {
        event.preventDefault();
        
        //Checks if the length of Name and Date are greater then 1 by converting it to a boolean expression, 0 = false
        if(Name.length && Date.length){ 
            setVis(true);
            return;
        }
        
        //The error checking will only run if a input is left empty
        const newErrors = {};
        if(!Name.length){ newErrors.Name = true; }
        if(!Date.length){ newErrors.Date = true; }
        setErrors(newErrors);
    };


    return (
    <>
        <div style={{textAlign: "center"}}>
            {!Vis && (<form onSubmit={Submit} className={styles['form-column']}>
            <input
                id="name"
                type="text"
                value={Name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                style={{background: Errors.Name ? "red" : "transparent"}}
            />
            <input 
                id="Birth Date" 
                type="date"
                value={Date}
                onChange={(event) => setDate(event.target.value)}
                placeholder="Enter your birth date"
                style={{background: Errors.Date ? "red" : "transparent"}}
            />
            {Object.keys(Errors).length != 0 && (<p>Please fill out blank inputs.</p>)}
            <button type="submit">Submit</button>
        </form>
        )}

        {Vis && (<p>Form Submitted</p>)}
        </div>
    </>
    );
}