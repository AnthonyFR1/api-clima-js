let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'TU-API.KEY'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value
  if (ciudad) {
    fetchDatosClima(ciudad)
  }
})


function fetchDatosClima(ciudad) {

  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`, () =>{})
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}


function mostrarDatosClima(data) {
  console.log(data);
  const divDatosClima = document.getElementById('datosClima')
  divDatosClima.innerHTML=''

  const ciudadNombre = data.name
  const paisNombre = data.sys.country
  const temperatura = data.main.temp
  const humedad = data.main.humidity
  const descripcion = data.weather[0].description
  const icono = data.weather[0].icon

  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

  const temperaturaInfo = document.createElement('p')
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)} °C`

  const humedadIndo = document.createElement('p')
  humedadIndo.textContent = `La húmedad es de: ${humedad}%`

  const descripcionInfo = document.createElement('p')
  descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

  const iconoInfo = document.createElement('img')
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`


  ///  ESTO SIRVE PARA AGREGARLE LOS HIJOS AL DIV (P Y H2)
  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(descripcionInfo)
  divDatosClima.appendChild(iconoInfo)
  divDatosClima.appendChild(humedadIndo)
}
