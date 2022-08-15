/* Const */
const URL =`https://restcountries.com/v3.1/name/`;

/* State */

/* Cashed element Reference */
const $country = $('#name');
const $capital = $('#cap');
const $region = $('#reg');
const $lanuage = $('#lang')
const $form = $('form');
const $input = $('input[type="text"]');

/* Event Listener */
$form.on('submit',handleSubmit);

/* Functions */
function handleSubmit(event){
    event.preventDefault();

    const locEnt = $input.val();
    console.log('Submitted', locEnt);
    
    if(!locEnt) return;

    /* Promise */
    const promise = $.ajax(`${URL}${locEnt}`);
    promise.then(   
    function (data){
        // Succes CallBack
        console.log('Data: ',data);
        $country.text(data[0].name.common);
        $capital.text(data[0].capital);
        $region.text(data[0].continents);
        $lanuage.text(data[0].population);

    },
    function (error){
        // Failure CallBack
        console.log('Error: ' , error)

    })
}
