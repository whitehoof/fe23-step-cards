// VARIABLES
import {btnLogin, btnCreate, btnOut, headerLogo, headerLogoExit} from "./variables.js";
import {formLogin, mainBlock} from "./variables.js";

//	FUNCTIONS:
import { filterCards, filtersReset } from "./functions/filter.js";
import checkToken from "./functions/checkToken.js";
import logOut from "./functions/logOut.js";
import login from "./functions/login.js";
import isToken from "./functions/isToken.js";

import ModalLogOut from "./Classes/ModalLogOut.js";
import ModalLogin from "./Classes/ModalLogin.js";


// Перевірка на те, чи є токен при загрузці сторінки
document.addEventListener("DOMContentLoaded", async () => {
	await isToken();
})


// єдиний слухач для всіх фільтрів:
document.querySelector('.filters__wrapper').addEventListener('input', () => {
	filterCards('.mainblock .container');
});

// слухач для кнопки очищення фільтрів:
document.querySelector('#filter-reset').addEventListener('click', filtersReset);


/*
//робота з формою
formLogin.addEventListener('submit', async (e) => {
	e.preventDefault();
	await login();
});
*/



