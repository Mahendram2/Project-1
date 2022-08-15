/* IPO - Input Process Output */

/* const - variable that never change/reassigned */
const URL ='https://restcountries.com/v3.1/name/';

/* State - varibale that do change  */

/* cashed element refference */
const $title = $('#name');
const $year = $('#cap');
const $rated = $('#curr');
const $form = $('form');
const $input = $('input[type="text"]');

/* Event listener */
$form.on('submit',handleSubmit);

/* Functions */
function handleSubmit(event){
    event.preventDefault();

    const title = $input.val();
    console.log('Submitted');
    
    if(!title) return;
    const promise = $.ajax(`${URL}${title}`);
    promise.then(   
    function (data){
        // Succes CallBack
        console.log('Data: ',data);
        $title.text(data.name);
        $year.text(data.capitol);
        $rated.text(data.currencies.name);

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

