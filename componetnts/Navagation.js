import React, { useState } from 'react';
import styles from '../styles/Assignment1.module.css'
import MyForm from "@/componetnts/Form"
import Counter from "@/componetnts/Counter"

export default function Navigation() 
{
    const [Vis, setVis] = useState(false); //Option visibility
    const [Flag, setFlag] = useState(0); //Flag counter
    const [Hover, setHover] = useState(true);

    //Handles Toggleing between flags and reseting to 0
    const ToggleFlags = (value) => {
        setFlag((prev) => (prev === value ? 0 : value));
    };

    //Toggles navagation visibility
    const ToggleVis = () => {
        setVis(!Vis)
    };

    return (
        <>
            <button onClick={ToggleVis} style={{marginLeft: "20px", marginBottom: "10px", outline: "2px solid #000000", padding: "5px"}}>Navigation</button>
            <div style={{marginLeft: "10px"}}>
                {Vis && (
                    <div className={styles['navagation-column']}>
                        <button onClick={() => ToggleFlags(1)}>{Flag == 1 ? 'Hide Forms' : 'Show Forms'}</button>
                        <button onClick={() => ToggleFlags(2)}>{Flag == 2 ? 'Hide reactive box' : 'Show reactive box'}</button>
                        <button onClick={() => ToggleFlags(3)}>{Flag == 3 ? 'Hide counter' : 'Show counter'}</button>
                    </div>
                )}
            </div>

            <div>
                {Flag == 1 && (<MyForm></MyForm>)}
                {Flag == 2 && (
                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
                    style={{width: "150px", height: "150px",background: Hover ? "Blue" : "Green", transition: "background 0.3s ease", 
                    margin: "Auto"}}>
                    </div>
                )}
                {Flag == 3 && (<Counter></Counter>)}
            </div>
            
        </>
    );
}