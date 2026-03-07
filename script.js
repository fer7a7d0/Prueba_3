// ==========================================
// BASE DE DATOS INICIAL
// ==========================================
const productos = [
    { codigo: "122", descripcion:"ARGON LIQUIDO EN DEWARS" },
    { codigo: "130", descripcion:"M3. OXIGENO LIQUIDO DEWARE" },
    { codigo: "131", descripcion:"M3. NITROGENO LIQUIDO DEWARE" },
    { codigo: "133", descripcion:"NITROGENO LIQUIDO DEWAR 22 PSI" },
    { codigo: "138", descripcion:"M3 NITROGENO DEWAR ABIERTO" },
    { codigo: "141", descripcion:"INFRA COLD NUGGET" },
    { codigo: "204", descripcion:"OXIDO NITROSO" },





];




// ==========================================
// ELEMENTOS
// ==========================================
const inputBusqueda = document.getElementById("busqueda");
const resultadoDiv = document.getElementById("resultado");

// ==========================================
// FUNCIONES
// ==========================================

// Normalizar texto (ignorar mayúsculas y acentos)
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Generar tabla
function generarTabla(lista, tipo) {

    let claseColor = tipo === "exacto" ? "verde" : "naranja";

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
    `;

    lista.forEach(p => {
        html += `
            <tr>
                <td class="${claseColor}">${p.codigo}</td>
                <td>${p.descripcion}</td>
            </tr>
        `;
    });

    html += "</tbody></table>";

    resultadoDiv.innerHTML = html;
    resultadoDiv.className = "resultado " + tipo;
    resultadoDiv.style.display = "block";
}

// Buscar
function buscar() {

    const valor = normalizar(inputBusqueda.value);

    // Si está vacío, borrar resultados
    if (valor === "") {
        resultadoDiv.style.display = "none";
        resultadoDiv.innerHTML = "";
        return;
    }

    const coincidencias = productos.filter(p =>
        normalizar(p.codigo).includes(valor) ||
        normalizar(p.descripcion).includes(valor)
    );

    if (coincidencias.length === 0) {
        resultadoDiv.innerHTML = `
            <p class="naranja">No se encontraron resultados.</p>
        `;
        resultadoDiv.className = "resultado parcial";
        resultadoDiv.style.display = "block";
        return;
    }

    // Verificar coincidencia exacta
    const exactas = coincidencias.filter(p =>
        normalizar(p.codigo) === valor ||
        normalizar(p.descripcion) === valor
    );

    if (exactas.length > 0) {
        generarTabla(exactas, "exacto");
    } else {
        generarTabla(coincidencias, "parcial");
    }
}

// ==========================================
// EVENTO
// ==========================================
inputBusqueda.addEventListener("input", buscar);