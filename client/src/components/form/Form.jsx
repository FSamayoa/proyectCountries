import Button from "../Button/Button";
import { useState } from "react";
import {
    validateNombre,
    validateDificultad,
    validateDuration,
    validateTemporada,
} from "./validation";

function Form() {
    const [form, setForm] = useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: [],
        pais: [],

    })

    const [disabled, setDisabled] = useState(true);

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        // Realiza las validaciones y actualiza el estado de errores
        const validationErrors = {};
        validationErrors.nombre = validateNombre(form.nombre);
        validationErrors.dificultad = validateDificultad(form.dificultad);
        validationErrors.duracion = validateDuration(form.duracion);
        validationErrors.temporada = validateTemporada(form.temporada);

        setErrors(validationErrors);
        setDisabled(
            !Object.values(form).every((value) => value !== "") ||
            Object.values(errors).some((error) => error !== "")
        );

        if (
            Object.values(validationErrors).every((error) => error === "") &&
            Object.values(form).every((value) => value !== "")
        ) {
           // Aquí enviar los datos al backend

        }
    };


    const handleInputNombre = (event) => {
        const nombre = event.target.value;
        const error = validateNombre(nombre);
        setErrors({ ...errors, nombre: error });
        setForm({ ...form, nombre });
        updateDisabled();
    };


    const handleSelectDifficult = (event) => {
        const dificultad = event.target.value;
        const error = validateDificultad(dificultad);
        setErrors({ ...errors, dificultad: error });
        setForm({ ...form, dificultad });
        updateDisabled();
    }

    const handleSelectDuration = (event) => {
        const duracion = event.target.value;
        const error = validateDuration(duracion);
        setErrors({ ...errors, duracion: error });
        setForm({ ...form, duracion });
        updateDisabled();
    }

    const handleSeasons = (event) => {
        const temporadaValue = event.target.value;
        const isSeasonChecked = event.target.checked;

        if (isSeasonChecked) {
            const newTemporada = [...form.temporada, temporadaValue];
            setForm({ ...form, temporada: newTemporada });
            setErrors({ ...errors, temporada: validateTemporada(newTemporada) });
        } else {
            const newTemporada = form.temporada.filter((season) => season !== temporadaValue);
            setForm({ ...form, temporada: newTemporada });
            setErrors({ ...errors, temporada: validateTemporada(newTemporada) });
        }
        updateDisabled();

    }

    const updateDisabled = () => {
        const isDisabled = Object.values(errors).some((error) => error !== "") ||
            Object.values(form).some((value) => value === "");
    
        setDisabled(isDisabled);
    };


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
                    <select
                        name="dificultad"
                        value={form.dificultad}
                        onChange={handleSelectDifficult}
                    >
                        <option value="Fácil">Fácil</option>
                        <option value="Dificultad Media">Dificultad Media</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                </label>
                {errors.dificultad && <p style={{ color: "red" }}>{errors.dificultad}</p>}
                <br />
                <label>
                    Duracion de la actividad:
                    <select
                        name="duracion"
                        value={form.duracion}
                        onChange={handleSelectDuration}
                    >
                        <option value="30">30 minutos</option>
                        <option value="60">60 minutos</option>
                        <option value="90">90 minutos</option>
                        <option value="120">120 minutos</option>
                        <option value="150">150 o mas</option>
                    </select>
                </label>
                {errors.duracion && <p style={{ color: "red" }}>{errors.duracion}</p>}
                <br />
                <p>Temporada para la actividad:</p>
                <label>
                    Primavera
                    <input
                        type="checkbox"
                        value="Primavera"
                        checked={form.temporada.includes("Primavera")}
                        onChange={handleSeasons}
                    />
                </label>
                <label>
                    | Verano
                    <input
                        type="checkbox"
                        value="Verano"
                        checked={form.temporada.includes("Verano")}
                        onChange={handleSeasons}
                    />
                </label>
                <label>
                    | Otoño
                    <input
                        type="checkbox"
                        value="Otoño"
                        checked={form.temporada.includes("Otoño")}
                        onChange={handleSeasons}
                    />
                </label>
                <label>
                    | Invierno
                    <input
                        type="checkbox"
                        value="Invierno"
                        checked={form.temporada.includes("Invierno")}
                        onChange={handleSeasons}
                    />
                </label>
                <br />
                <br />
                <input placeholder="Pais, ejem Brasil"></input>
                <br />
                <br />
                <Button
                    type="submit"
                    text='Enviar'
                    disabled={disabled}
                />{console.log("boton")}
            </form>
        </div>
    )
}

export default Form;