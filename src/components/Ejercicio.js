import React, {useState} from 'react';
import './Ejercicio.css';


function Ejercicio( {title} ) {
    const [aumentar, setAumentar] = useState(0);

    const incrementar = () => {
        setAumentar(aumentar + 1);
    }

    return (
        <div className="ejercicio">
            <button onClick={incrementar}>Aumentar</button>
            <p> {aumentar} </p>

            <h1> {title} </h1>
        </div>
    )
}

export default Ejercicio
