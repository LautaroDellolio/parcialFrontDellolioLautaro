import { useState } from "react";

function Form({ onAddArtistas }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('')

    const handleError = () =>{
        return (
            <div>
                <h4></h4>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.length < 3 || nombre[0] == " " || apellido.length <= 6) {
            alert("Por favor chequea que la información sea correcta")
            }else{
            onAddArtistas({ nombre, apellido });
            setNombre("");
            setApellido("")
        }
    }
    return(
        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    )
}
export default Form;