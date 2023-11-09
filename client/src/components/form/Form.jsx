import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import { createActivity } from '../../redux/actions';
import { validateNombre, validateCountry, validateDificultad, validateTemporada, validateDuration } from './validation';

function FormComponent() {
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    dificultad: '',
    duracion: '',
    temporada: '',
    countryName: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  const FormValid = () => {
    const errorsForm = {
    name:validateNombre(formData.name),
    dificultad:validateDificultad(formData.dificultad),
    duracion:validateDuration(formData.duracion),
    temporada:validateTemporada(formData.temporada),
    countryName:validateCountry(formData.countryName),
    }
    setErrors(errorsForm);
    return Object.values(errorsForm).every((error) => error === '');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (FormValid()) {
      try {
        const response = await createActivity(formData) 
             
      } catch (error) {
                
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
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <br />

        <label>
          Dificultad de la actividad:
          <select
            name="dificultad"
            value={formData.dificultad}
            onChange={handleInput}
          >
            <option value="">Selecciona una dificultad</option>
            <option value="Fácil">Fácil</option>
            <option value="Media">Media</option>
            <option value="Difícil">Difícil</option>
          </select>
        </label>
        {errors.dificultad && <p style={{ color: 'red' }}>{errors.dificultad}</p>}
        <br />

        <label>
          Duración de la actividad (min):
          <select
            name="duracion"
            value={formData.duracion}
            onChange={handleInput}
          >
            <option value="">Selecciona una duración (min)</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="90">90</option>
            <option value="120">120</option>
            <option value="150">150</option>
          </select>
        </label>
        {errors.duracion && <p style={{ color: 'red' }}>{errors.duracion}</p>}
        <br />


        <label>
          Temporada para la actividad:
          <select
            name="temporada"
            value={formData.temporada}
            onChange={handleInput}
          >
            <option value="">Selecciona una temporada</option>
            <option value="Primavera">Primavera</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
        
          </select>
        </label>
        {errors.temporada && <p style={{ color: 'red' }}>{errors.temporada}</p>}
        <br />

        
        <label>
          País:
          <select
            name="countryName"
            value={formData.countryName}
            onChange={handleInput}
          >
            <option value="">Selecciona un país</option>
            {countries.map((country) => (
              <option key={country.id} value={country.nombre}>
                {country.nombre}
              </option>
            ))}
          </select>
        </label>
        {errors.countryName && (
          <p style={{ color: 'red' }}>{errors.countryName}</p>
        )}
        <br />
        <br />

        <button type="submit" disabled={errors.length > 0}>Enviar</button>
      </form>
    </div>
  );
}

export default FormComponent;
