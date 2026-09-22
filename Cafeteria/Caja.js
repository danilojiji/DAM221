// ==========================================
// MÓDULO 01: CAJA REGISTRADORA
// Investigar: let, const, funciones, arrays, reduce(), destructuring
// Objetivo: subtotal, IVA, total, agregarPedido()
// ==========================================

// Variables y constantes
let listaPedidos = [];
const TASA_IVA = 0.16; // 16% de IVA

// 1. Recibir comanda enviada desde el módulo Cliente
function recibirComandaCliente(comanda, folio = "#001") {
  comanda.forEach(({ nombre, precio, cantidad }) => {
    // Uso de DESTRUCTURING en el parámetro de arriba
    listaPedidos.push({
      producto: `${cantidad}x ${nombre} (${folio})`,
      precio: precio * cantidad
    });
  });
}

// 2. Función agregarPedido() para ingresos manuales en mostrador
function agregarPedido(producto, precio) {
  listaPedidos.push({
    producto: producto.trim(),
    precio: Number(precio)
  });
}

// 3. Calcular Totales usando reduce() y destructuring
function calcularTotales() {
  // REDUCE acumulando con destructuring de { precio }
  const subtotal = listaPedidos.reduce((acc, { precio }) => acc + precio, 0);
  const iva = subtotal * TASA_IVA;
  const total = subtotal + iva;

  return { subtotal, iva, total };
}

// 4. Ver los pedidos registrados actualmente en caja
function verTicket() {
  return listaPedidos;
}

// 5. Cobrar y reiniciar el ticket
function cobrarTicket() {
  const totales = calcularTotales();
  listaPedidos = []; // Vaciamos la lista tras cobrar
  return totales;
}

// Exportamos las funciones para que main.js las pueda usar
module.exports = {
  recibirComandaCliente,
  agregarPedido,
  calcularTotales,
  verTicket,
  cobrarTicket
};