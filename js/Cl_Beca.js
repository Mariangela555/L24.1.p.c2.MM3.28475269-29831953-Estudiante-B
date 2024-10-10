import Cl_Estudiante from "Cl_Estudiante.js";

export default class Cl_Beca extends Cl_Estudiante {
    constructor(nombre, acumNota, cantmateria) {
        super(nombre, acumNota, cantmateria);
    }
   
   
   
    beca() {
        if (this.promedio() > 15)
            return `${this.nombre} recibe una beca de $30.00`;
        else if (this.promedio() <= 15 && this.promedio() > 10)
            return `${this.nombre} recibe una beca de $20.00`;
        else if (this.promedio() < 10)
            return `${this.nombre} no le corresponde beca`;
    }
}