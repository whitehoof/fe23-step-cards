// API:
import postVisit					from "./API/postVisit.js";
import getVisits					from "./API/getVisits.js";

//	CLASSES:
import Visit						from "./Classes/Visit.js";
import VisitCardiologist			from "./Classes/VisitCardiologist.js";
import VisitDentist					from "./Classes/VisitDentist.js";
import VisitTherapist				from "./Classes/VisitTherapist.js";

//	FUNCTIONS:
import {filterCards, filtersReset} from "./functions/filter.js";



// єдиний слухач для всіх фільтрів:
document.querySelector('.filters__wrapper').addEventListener('input', () => {
		filterCards('.mainblock .container');
});

// слухач для кнопки очищення фільтрів:
document.querySelector('#filter-reset').addEventListener('click',filtersReset);