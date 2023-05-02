import React, {useState} from 'react'
import './SelectorDeClases.css'


const SelectorDeClases = () => {
    const[nombreClase, setNombreClases] = useState('');
    const clases = ['claseA', 'claseB', 'claseC'];

    return(
        <div className='col-md-6'>
            <div className = {nombreClase}>

                <blockquote>
                    <p className='display-4 mb-0'>
                        Vivir es nacer a cada instante
                    </p>
                    <footer className='blockquote-footer text-right'>Erich Fromm.</footer>
                </blockquote>
            </div>

        { clases.map((name, index) => (
            <button key={index} onClick={() => setNombreClases(name)}>
                {name}
            </button>
        ))}


        </div>
    );
};

export default SelectorDeClases;