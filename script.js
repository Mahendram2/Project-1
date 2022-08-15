/* IPO - Input Process Output */

/* const - variable that never change/reassigned */
const URL =`https://restcountries.com/v3.1/name/`;

/* State - varibale that do change  */

/* cashed element refference */
const $country = $('#name');
const $capital = $('#cap');
const $region = $('#reg');
const $lanuage = $('#lang')
const $form = $('form');
const $input = $('input[type="text"]');

/* Event listener */
$form.on('submit',handleSubmit);

/* Functions */
function handleSubmit(event){
    event.preventDefault();

    const locEnt = $input.val();
    console.log('Submitted', locEnt);
    
    if(!locEnt) return;

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
// Promises in JavaScript

/* 
    A Promise is an Object we receive in exhange for the eventual
    success or failure of an asynchronous peocess

    Asynchronous : Two or more task running on differnt timelines 

    Asybc Programming allows us to keep a program running regardless
    if certain parts of that program need more time than other

*/

