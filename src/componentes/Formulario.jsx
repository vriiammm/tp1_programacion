import { useState } from 'react';

export default function Formulario({guardar}) {

const [documento, setDocumento] = useState("");
const [apellido, setApellido] = useState("");
const [nombres, setNombres] = useState("");
const [rol, setRol] = useState("-1");
const [curso, setCurso] = useState("-1");
const [division, setDivision] = useState("-1");

    const hanlderSubmit = (e) => {
        e.preventDefault();
        // console.log({documento, apellido, nombres, rol});

        const alumno = rol == "alumno";
        
        const persona = {
            documento,
            apellido,
            nombres,
            alumno,
            division,
            curso
        };
        guardar(persona);
    }
    return (
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={hanlderSubmit}>

                <input type="text" 
                placeholder="Documento" 
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                />

                <input type="text" 
                placeholder="Apellidos" 
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                />
                
                <input type="text" 
                placeholder="Nombres" 
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                />
                <select 
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}


                >
                    <option value="-1" disabled>Seleccionar rol</option>
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>

                <select 
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                >
                    <option value="-1" disabled>Curso</option>
                    <option value="1ro">1ro</option>
                    <option value="2do">2do</option>
                    <option value="3ro">3ro</option>
                    <option value="4to">4to</option>
                    <option value="5to">5to</option>
                    <option value="6to">6to</option>
                    <option value="7mo">7mo</option>

                </select>

                <select 
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                >
                    <option value="-1" disabled>División</option>
                    <option value="1ra">1ra</option>
                    <option value="2da">2da</option>
                    <option value="3ra">3ra</option>
                    <option value="4ta">4ta</option>
                    <option value="5ta">5ta</option>
                    <option value="6ta">6ta</option>
                    <option value="7ma">7ma</option>
                    <option value="8va">8va</option>
                    <option value="9na">9na</option>

                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}