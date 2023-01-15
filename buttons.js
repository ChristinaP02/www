let button = document.querySelector('#button');
button.addEventListener('click', () => {
    document.querySelector('#biography').style.visibility='visible';
    document.querySelector('#photos').style.visibility='hidden';
    document.querySelector('#works').style.visibility='hidden';
    document.querySelector('#links').style.visibility='hidden';
})

let button1 = document.querySelector('#button1');
button1.addEventListener('click', () => {
    document.querySelector('#photos').style.visibility='visible';
    document.querySelector('#biography').style.visibility='hidden';
    document.querySelector('#links').style.visibility='hidden';
    document.querySelector('#works').style.visibility='hidden';
})
let button2 = document.querySelector('#button2');
button2.addEventListener('click', () => {
    document.querySelector('#photos').style.visibility='hidden';
    document.querySelector('#biography').style.visibility='hidden';
    document.querySelector('#links').style.visibility='hidden';
    document.querySelector('#works').style.visibility='visible';
})
let button3 = document.querySelector('#button3');
button3.addEventListener('click', () => {
    document.querySelector('#photos').style.visibility='hidden';
    document.querySelector('#biography').style.visibility='hidden';
    document.querySelector('#links').style.visibility='visible';
    document.querySelector('#works').style.visibility='hidden';
})
let button4 = document.querySelector('#button4');
button4.addEventListener('click', () => {
    document.querySelector('#photos').style.visibility='hidden';
    document.querySelector('#biography').style.visibility='hidden';
    document.querySelector('#links').style.visibility='hidden';
    document.querySelector('#works').style.visibility='hidden';
    document.querySelector('#managment').style.visibility='visible';
})
let early_life= document.querySelector('#early_life');
early_life.addEventListener('click', () => {
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message1').style.visibility='visible';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message4').style.visibility='hidden';
    document.querySelector('#message14').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='hidden';
    
})
let sign_in= document.querySelector('#sign_in');
sign_in.addEventListener('click', () => {
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='visible';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message14').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message1').style.visibility='hidden';
    
})
let books= document.querySelector('#books');
books.addEventListener('click', () => {
    document.querySelector('#message13').style.visibility='visible';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message1').style.visibility='hidden';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message4').style.visibility='hidden';
    document.querySelector('#message14').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='hidden';
})

let later_life = document.querySelector('#later_life');
later_life.addEventListener('click', () => {
    document.querySelector('#message14').style.visibility='visible';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message1').style.visibility='hidden';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message4').style.visibility='hidden';
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='hidden';
})

let literary_life = document.querySelector('#literary_life');
literary_life.addEventListener('click', () => {
    document.querySelector('#message14').style.visibility='hidden';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message1').style.visibility='hidden';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message4').style.visibility='hidden';
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='visible';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='hidden';
})
let reputation = document.querySelector('#reputation');
reputation.addEventListener('click', () => {
    document.querySelector('#message14').style.visibility='hidden';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message1').style.visibility='hidden';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message4').style.visibility='hidden';
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='visible';
    document.querySelector('#message5').style.visibility='hidden';
})


let career = document.querySelector('#career');
career.addEventListener('click', () => {
    document.querySelector('#message2').style.visibility='visible';
    document.querySelector('#message1').style.visibility='hidden';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message4').style.visibility='hidden';
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message14').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='hidden';
})



let novels = document.querySelector('#novels');
novels.addEventListener('click', () => {
    document.querySelector('#message4').style.visibility='visible';
    document.querySelector('#message1').style.visibility='hidden';
    document.querySelector('#message3').style.visibility='hidden';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message14').style.visibility='hiiden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='hidden';
})



let portraits = document.querySelector('#portraits');
portraits.addEventListener('click', () => {
    document.querySelector('#message3').style.visibility='visible';
    document.querySelector('#message1').style.visibility='hidden';
    document.querySelector('#message2').style.visibility='hidden';
    document.querySelector('#message4').style.visibility='hidden';
    document.querySelector('#message13').style.visibility='hidden';
    document.querySelector('#message14').style.visibility='hidden';
    document.querySelector('#message15').style.visibility='hidden';
    document.querySelector('#message16').style.visibility='hidden';
    document.querySelector('#message5').style.visibility='hidden';
})


