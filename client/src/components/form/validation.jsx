export function validateNombre(nombre) {
  if (nombre.trim() === "") {
      return "El nombre es requerido";
  } else if (nombre.length < 3) {
      return "El nombre debe contener al menos 3 caracteres";
  }
  return "";
}

export function validateDificultad(dificultad) {
  if (dificultad === "") {
      return "Selecciona la dificultad del evento";
  }
  return "";
}

export function validateDuration(duracion) {
  if (duracion === "") {
      return "Selecciona la duración del evento";
  }
  return "";
}

export function validateTemporada(temporada) {
  if (temporada.length === 0) {
      return "Debes seleccionar una temporada";
  }
  return "";
}

export function validateCountry(country) {
  if (country.length === 0) {
      return "Debes seleccionar un pais";
  }
  return "";
}
