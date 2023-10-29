import Button from "../Button/Button";

function Form() {
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
                <Button text='Enviar'/>
            </form>
        </div>
    )
}

export default Form;