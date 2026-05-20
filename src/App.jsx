import { useState } from 'react';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import './App.css';

const personasDefault = [
    {id: 1, documento:"48354997", apellido:"Mancilla", nombres:"Benjamin", alumno: true, curso: "1ro", division: "1ra"},
    {id: 2, documento:"48689022", apellido:"Rodriguez", nombres:"Brian", alumno: false, curso: "2do", division: "2da"},
    {id: 3, documento:"48354503", apellido:"Suares", nombres:"Ezequiel", alumno: true, curso: "3ro", division: "3ra"},
    {id: 4, documento:"48354750", apellido:"Villaroel", nombres:"Elio", alumno: false, curso: "4to", division: "4ta"}

];

export default function App() {
  const [personas, setPersonas] = useState(personasDefault);
  const guardar = (persona) => {

    console.log(persona);

    let nuevasPersonas = [...personas];
    nuevasPersonas.push(persona);
    setPersonas(nuevasPersonas);
  }

  const eliminar = (persona_id) => {
  const nuevasPersonas = personas.filter((persona) =>
    persona.id != persona_id
  );
  console.log(nuevasPersonas)
  setPersonas(nuevasPersonas)
}

  return (
    <div className='App'>
      <h1>
      Componente App
      </h1>

      <div className='Contenedor'>

      <Formulario
      guardar = {(persona) => guardar (persona)}
      />
      <Listado
        personas = {personas}
        eliminar={(persona_id)=> eliminar(persona_id)}

      />


    </div>
    </div>
  )
}