export interface Errors {
    nombre?: string;
    email?: string;
    descripcion?: string;
  }
  
  export const validateForm = (nombre: string, email: string, descripcion: string): Errors => {
    const errors: Errors = {};
    if (!nombre) errors.nombre = 'El nombre es obligatorio';
    if (!email) errors.email = 'El correo es obligatorio';
    if (!descripcion) errors.descripcion = 'La descripción es obligatoria';
    return errors;
  };
  