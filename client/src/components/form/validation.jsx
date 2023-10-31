export function validateNombre(nombre) {
    if (nombre.trim() === "") {
      return "El nombre es requerido";
    } else if (nombre.length < 3){
        return "El nombre es muy corto";
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
      return "Selecciona la duracion del evento";
    }
    return "";
  }


  export function validateTemporada(temporada) {
    if (temporada.length === 0) {
      return "Debes seleccionar al menos una temporada";
    }
    return "";
  }