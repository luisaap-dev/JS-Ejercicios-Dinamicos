// Obtener los elementos HTML
const comunidad = document.getElementById("comunidad");
const provincia = document.getElementById("provincia");

// Definir las opciones de provincias para cada comunidad autónoma
const opcionesProvincia = {
  andalucia: ["Sevilla", "Málaga", "Cádiz"],
  aragon: ["Zaragoza", "Huesca", "Teruel"],
  asturias: ["Oviedo", "Gijón", "Avilés"],
  cantabria: ["Santander", "Torrelavega"],
  castilla_la_mancha: ["Toledo", "Albacete", "Ciudad Real"],
  castilla_y_leon: ["Valladolid", "León", "Salamanca"],
  cataluna: ["Barcelona", "Girona", "Tarragona"],
  comunidad_valenciana: ["Valencia", "Alicante", "Castellón"],
  extremadura: ["Badajoz", "Cáceres"],
  galicia: ["A Coruña", "Lugo", "Ourense","Pontevedra"],
  islas_baleares: ["Palma de Mallorca"],
  islas_canarias: ["Las Palmas", "Santa Cruz de Tenerife"],
  la_rioja: ["Logroño"],
  madrid: ["Madrid"],
  murcia: ["Murcia"],
  navarra: ["Pamplona"],
  pais_vasco: ["Bilbao", "San Sebastián", "Vitoria-Gasteiz"]
};

// Función para actualizar las opciones de provincias
function actualizarProvincias() {
  // Obtener la comunidad autónoma seleccionada
  const comunidadSeleccionada = comunidad.value;
  
  // Limpiar las opciones actuales de provincias
  provincia.innerHTML = "";
  
  // Si se seleccionó una comunidad autónoma, habilitar la lista de provincias y agregar las opciones correspondientes
  if (comunidadSeleccionada) {
    provincia.disabled = false;
    opcionesProvincia[comunidadSeleccionada].forEach(opcion => {
      const opcionHTML = `<option value="${opcion}">${opcion}</option>`;
      provincia.innerHTML += opcionHTML;
    });
  } else {
    // Si no se seleccionó una comunidad autónoma, deshabilitar la lista de provincias y agregar una opción por defecto
    provincia.disabled = true;
    const opcionHTML = `<option value="">Seleccione una comunidad autónoma primero</option>`;
    provincia.innerHTML = opcionHTML;
  }
}

// Agregar un evento change a la lista de comunidades autónomas para actualizar las opciones de provincias
comunidad.addEventListener("change", actualizarProvincias);