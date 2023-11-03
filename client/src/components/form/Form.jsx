import Button from "../Button/Button";
import { useState } from "react";
import {
    validateNombre,
    validateDificultad,
    validateDuration,
    validateTemporada,
} from "./validation";

function Form() {
    
    const [disabled, setDisabled] = useState(true);
    const [form, setForm] = useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: [],
        pais: "",
    });

    const [errors, setErrors] = useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
    });


    const handleInputNombre = (event) => {
        const nombre = event.target.value;
        setForm({ ...form, nombre });
        setErrors({ ...errors, nombre: validateNombre(nombre) });
    };

    const handleSelectDificultad = (event) => {
        const dificultad = event.target.value;
        setForm({ ...form, dificultad });
        setErrors({ ...errors, dificultad: validateDificultad(dificultad) });
    };

    const handleSelectDuracion = (event) => {
        const duracion = event.target.value;
        setForm({ ...form, duracion });
        setErrors({ ...errors, duracion: validateDuration(duracion) });
    };

    const handleCheckboxTemporada = (event) => {
        const temporadaValue = event.target.value;
        const isChecked = event.target.checked;
        const updatedTemporada = [...form.temporada];

        if (isChecked) {
            updatedTemporada.push(temporadaValue);
        } else {
            const index = updatedTemporada.indexOf(temporadaValue);
            if (index !== -1) {
                updatedTemporada.splice(index, 1);
            }
        }

        setForm({ ...form, temporada: updatedTemporada });
        setErrors({ ...errors, temporada: validateTemporada(updatedTemporada) });
    };

    const handleSelectPais = (event) => {
        const pais = event.target.value;
        setForm({ ...form, pais });
    };

    function isFormValid() {
        // Realiza las validaciones
        const validationErrors = {};
        validationErrors.nombre = validateNombre(form.nombre);
        validationErrors.dificultad = validateDificultad(form.dificultad);
        validationErrors.duracion = validateDuration(form.duracion);
        validationErrors.temporada = validateTemporada(form.temporada);
      
        // Verifica si hay errores
        return Object.values(validationErrors).every((error) => error === "");
      }

    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Realiza las validaciones y actualiza el estado de errores
        const validationErrors = {};
        validationErrors.nombre = validateNombre(form.nombre);
        validationErrors.dificultad = validateDificultad(form.dificultad);
        validationErrors.duracion = validateDuration(form.duracion);
        validationErrors.temporada = validateTemporada(form.temporada);
      
        setErrors(validationErrors);
      
        // Verifica si hay errores
        if (Object.values(validationErrors).every((error) => error === "")) {
          // Deshabilita el botón de envío
          setDisabled(false);
        } else {
          // Habilita el botón de envío
          setDisabled(true);
        }
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
                        onChange={handleSelectDificultad}
                    >
                        <option value="">Selecciona una dificultad</option>
                        <option value="Fácil">Fácil</option>
                        <option value="Dificultad Media">Dificultad Media</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                </label>
                {errors.dificultad && <p style={{ color: "red" }}>{errors.dificultad}</p>}
                <br />

                <label>
                    Duración de la actividad:
                    <select
                        name="duracion"
                        value={form.duracion}
                        onChange={handleSelectDuracion}
                    >
                        <option value="">Selecciona una duración</option>
                        <option value="30">30 minutos</option>
                        <option value="60">60 minutos</option>
                        <option value="90">90 minutos</option>
                        <option value="120">120 minutos</option>
                        <option value="150">150 o más</option>
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
                        onChange={handleCheckboxTemporada}
                    />
                </label>
                <label>
                    | Verano
                    <input
                        type="checkbox"
                        value="Verano"
                        checked={form.temporada.includes("Verano")}
                        onChange={handleCheckboxTemporada}
                    />
                </label>
                <label>
                    | Otoño
                    <input
                        type="checkbox"
                        value="Otoño"
                        checked={form.temporada.includes("Otoño")}
                        onChange={handleCheckboxTemporada}
                    />
                </label>
                <label>
                    | Invierno
                    <input
                        type="checkbox"
                        value="Invierno"
                        checked={form.temporada.includes("Invierno")}
                        onChange={handleCheckboxTemporada}
                    />
                </label>
                {errors.temporada && <p style={{ color: 'red' }}>{errors.temporada}</p>}
                <br />

                <label>
                    País:
                    <select
                        name="pais"
                        value={form.pais}
                        onChange={handleSelectPais}
                    >
                        <option value="">Selecciona un país</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                        {/* Agrega más opciones de países según sea necesario */}
                    </select>
                </label>
                <br />
                <br />

                <Button
                    type="submit"
                    text='Enviar'
                    disabled={!isFormValid()}
                ></Button>
            </form>
            
        </div>
    );
}

export default Form;


