import Button from "../Button/Button";
import { useState } from "react";

function Form() {
    const [form, setForm] = useState({
        actividad: "",
        dificulta: "",
        duracion: "",
        temporada: "",
        pais: [],

    })


    return (
        <div>
            <form>
                <h2>Registra una actividad</h2>
                <br />
                <br />
                <input placeholder="Actividad, ejem: Surf"></input>
                <br />
                <input placeholder="Dificultad, ejem: Media"></input>
                <br />
                <input placeholder="Duracion en minutos, 50"></input>
                <br />
                <input placeholder="Temporada, ejem Primavera"></input>
                <br />
                <input placeholder="Pais, ejem Brasil"></input>
                <br />
                <br />
                <Button link = '/form' text='Enviar'/>
            </form>
        </div>
    )
}

export default Form;