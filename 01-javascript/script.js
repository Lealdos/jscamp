// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const technologyFilter = document.querySelector('#filter-technology')
const LocationFilter = document.querySelector('#location')
const experienceLevelFilter = document.querySelector('#experience-level')

const filter = document.querySelector('.search-filters')



technologyFilter.addEventListener('change', function () {
  const technologyFilterSelected = technologyFilter.value.toLowerCase()
  const jobsNodes = getNodes('article.job-listing-card');

  FilterSearch(technologyFilterSelected,jobsNodes)

})

LocationFilter.addEventListener('change', function () {
  const jobFilter = LocationFilter.value.toLowerCase()
  const jobsNodes = getNodes('article.job-listing-card');
  
  FilterSearch(jobFilter,jobsNodes)

})



function getNodes(containerSelector) {
  const containers = document.querySelectorAll(containerSelector);

  if (!containers) {
    console.error(`Error: No se encontró el elemento con el ID "${containerSelector}".`);
    return [];
  }

  return containers;
}




function FilterSearch (filterelement,NodeList) {

  NodeList.forEach(article => {
    const localeFilter = article.querySelector('small').textContent.toLowerCase();
 
    if (localeFilter.includes(filterelement)) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  });

}