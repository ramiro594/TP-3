import { agregarSuperheroe, mostrarSuperheroes } from "./utils.mjs";

// Definir las rutas de los archivos
const archivoOriginal = "./datos/superheroes.txt";
const archivoNuevos = "./datos/agregarSuperheroes.txt";

// Agregar nuevos superhéroes
agregarSuperheroe(archivoOriginal, archivoNuevos);

// Mostrar la lista de superhéroes ordenada
mostrarSuperheroes(archivoOriginal);
