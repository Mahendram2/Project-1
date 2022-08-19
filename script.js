/* Const */
const URL =`https://restcountries.com/v3.1/name/`;

/* State */

/* Cashed element Reference */
const $main = $('main');
const $form = $('form');
const $input = $('input[type="text"]');

/* Event Listener */
$form.on('submit',handleSubmit);

/* Functions */

handleSubmit();

function handleSubmit(event){
  event &&  event.preventDefault();

    const locEnt = $input.val() || 'Brunei';
    console.log('Submitted', locEnt);
    
    if(!locEnt) return;

    /* Promise */
    const promise = $.ajax(`${URL}${locEnt}`);
    promise.then(   
    function (data){
        // Succes CallBack from function render
        console.log('Data: ',data);
        render(data)
    },
    function (error){
        // Failure CallBack
        console.log('Error: ' , error)

    })
}

// This will print the data
function render(countryData) {
    $main.html(`
      <h3>Country : ${countryData[0].name.common}</h3>
      <img src ="${countryData[0].flags.png}" alt="${countryData[0].name.common}" />
      <p>Capital: ${countryData[0].capital}</p>
      <p>Region: ${countryData[0].continents}</p>
      <p>Subregion: ${countryData[0].subregion}</p>
      <p>Population: ${countryData[0].population}</p>
      <p>Timezones: ${countryData[0].timezones}</p>
    `)
}