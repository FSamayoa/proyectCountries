import Button from "../Button/Button";
import { useState } from "react";
import { validateNombre, validateDificultad } from "./validation";

function Form() {
    const [form, setForm] = useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: [],
        pais: [],

    })

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };


    const handleInputNombre = (event) => {
        const nombre = event.target.value;
        const error = validateNombre(nombre);
        setErrors({ ...errors, nombre: error });
        setForm({ ...form, nombre });
    };

    
    const handleSelectDifficult = (event) => {
        const dificultad = event.target.value;
        const error = validateDificultad(dificultad);
        setErrors({ ...errors, dificultad: error });
        setForm({ ...form, dificultad });
      }

    const handleChangeDuration = (event) => {
        setForm({
            ...form,
            duracion: event.target.value
        })
    }

    const handleSeasons = (event) => {
        if (event.target.checked) {
            setForm({
                ...form,
                temporada: [...form.temporada, event.target.value]
            })
        } else {
            setForm({
                ...form,
                temporada: form.temporada.filter(season => season !== event.target.value)
            })
            const { temporada, ...newErrors } = errors
            setErrors({ ...newErrors })
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Registra una actividad</h2>
                <br />
                <br />

                <input
                    placeholder="Actividad, ejem: Surf"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleInputNombre}
                />
                {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
                <br />

                <label>
                    Dificultad de la actividad:
                    <select>
                        <option value="">Selecciona dificultad</option>
                        <option value="Fácil">Fácil</option>
                        <option value="Dificultad Media">Dificultad Media</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                </label>
                <br />
                <label>
                    Duracion de la actividad:
                    <select>
                        <option value="">Tiempo en minutos</option>
                        <option value="30">30 minutos</option>
                        <option value="60">60 minutos</option>
                        <option value="90">90 minutos</option>
                        <option value="120">120 minutos</option>
                        <option value="150">150 o mas</option>
                    </select>
                </label>
                <br />
                <p>Temporada para la actividad:</p>
                <label>
                    Primavera
                    <input
                        type="checkbox"
                        value="Primavera"

                    />
                </label>
                <label>
                    | Verano
                    <input
                        type="checkbox"
                        value="Verano"

                    />
                </label>
                <label>
                    | Otoño
                    <input
                        type="checkbox"
                        value="Otoño"

                    />
                </label>
                <label>
                    | Invierno
                    <input
                        type="checkbox"
                        value="Invierno"

                    />
                </label>
                <br />
                <br />
                <input placeholder="Pais, ejem Brasil"></input>
                <br />
                <br />
                <Button type="submit" text='Enviar' />
            </form>
        </div>
    )
}

export default Form;