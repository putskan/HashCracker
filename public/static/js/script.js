import { passwords } from './passwords.js';
let md5InputElem = document.getElementById('md5-input');
let crackedPassElem = document.getElementById('cracked-password');
let crackButtonElem = document.getElementById('crack-button');
function crack(md5) {
    let formattedMd5 = '_'.concat(md5);
    if (passwords.hasOwnProperty(formattedMd5)) {
        return passwords[formattedMd5];
    }
    return '';
}
function handleUICrackRequest() {
    crackedPassElem.innerText = 'Loading...';
    let md5 = md5InputElem.value;
    console.log(typeof md5);
    console.log(md5);
    let pass = crack(md5);
    if (pass !== '') {
        crackedPassElem.innerText = pass;
    }
    else {
        crackedPassElem.innerText = 'Crack Failed';
    }
}
/* in the previous project - optimize get element by od and remove comments*/
/* in the previous project - optimize get element by od and remove comments*/
/* in the previous project - optimize get element by od and remove comments*/
/* in the previous project - optimize get element by od and remove comments*/
/* in the previous project - optimize get element by od and remove comments*/
/*<!-- OPTIMIZE BG -->*/
if (crackButtonElem) {
    crackButtonElem.onclick = handleUICrackRequest;
}
