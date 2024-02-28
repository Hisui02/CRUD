

function confirmacion() {
    if (window.confirm("¿Seguro que quieres eliminar a este empleado?")) {
        console.log("Usuario eliminado con éxito")
    } else {
        console.log("Operación abortada")
    }
}