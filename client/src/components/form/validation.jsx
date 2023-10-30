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
      return "Selecciona una dificultad";
    }
    return "";
  }
