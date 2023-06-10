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
  galicia: ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
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
  const comunidadSeleccionada = comunidad.value;
  
  provincia.innerHTML = ""; // Limpiar las opciones actuales de provincias
  
  if (comunidadSeleccionada) {
    provincia.disabled = false; // Habilitar la lista de provincias
    
    opcionesProvincia[comunidadSeleccionada].forEach(opcion => {
      const opcionElemento = document.createElement("option");
      opcionElemento.value = opcion;
      opcionElemento.textContent = opcion;
      provincia.appendChild(opcionElemento);
    });
  } else {
    provincia.disabled = true; // Deshabilitar la lista de provincias
    
    const opcionElemento = document.createElement("option");
    opcionElemento.value = "";
    opcionElemento.textContent = "Seleccione una comunidad autónoma primero";
    provincia.appendChild(opcionElemento);
  }
}

// Agregar un evento change a la lista de comunidades autónomas para actualizar las opciones de provincias
comunidad.addEventListener("change", actualizarProvincias);
