

export default function tarjeta({documento, apellido, nombres, alumno, curso, division, eliminar}) {
    return (
        <div className="Tarjeta"
        style={
            {flexDirection: "column", border: "1px solid black", margin: "10px", padding: "10px", backgroundColor: alumno ? "lightgreen" : "lightcoral",
            color : alumno ? "darkgreen" : "darkred"
        }}
        >
            <span className="Eliminar" onClick={() => eliminar()} >x</span>
            
            <h2>{documento}</h2>
            <h3>{apellido}, {nombres}</h3>
            <h4>{curso}, {division}</h4>
        </div>
    )
}