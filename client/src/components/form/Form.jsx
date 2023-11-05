import FormButton from "../Button/FormButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
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

    const countries = useSelector((state) => state.countries);

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
        const validationErrors = {};
        validationErrors.nombre = validateNombre(form.nombre);
        validationErrors.dificultad = validateDificultad(form.dificultad);
        validationErrors.duracion = validateDuration(form.duracion);
        validationErrors.temporada = validateTemporada(form.temporada);

        return Object.values(validationErrors).every((error) => error === "");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form data:', form);
        console.log("handle");

        const validationErrors = {};
        validationErrors.nombre = validateNombre(form.nombre);
        validationErrors.dificultad = validateDificultad(form.dificultad);
        validationErrors.duracion = validateDuration(form.duracion);
        validationErrors.temporada = validateTemporada(form.temporada);

        setErrors(validationErrors);

        if (isFormValid(validationErrors)) {
            try {
                const response = await axios.post("/activities/post", form);
                console.log('Actividad creada:', response.data);
                // Puedes agregar lógica adicional aquí, como mostrar un mensaje al usuario.
            } catch (error) {
                console.error('Error al crear la actividad:', error);
                // Puedes manejar errores de solicitud aquí, como mostrar un mensaje de error al usuario.
            }
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
                    Duración de la actividad (min):
                    <select
                        name="duracion"
                        value={form.duracion}
                        onChange={handleSelectDuracion}
                    >
                        <option value="">Selecciona una duración</option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                        <option value="120">120</option>
                        <option value="150">150</option>
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
                        {countries.map((country) => (
                            <option key={country.id} value={country.nombre}>
                                {country.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <br />

                <FormButton
                    type="submit"
                    text='Enviar'
                    disabled={!isFormValid()}
                    onClick={handleSubmit}
                >{console.log("button")};</FormButton>
            </form>
        </div>
    );
}

export default Form;

