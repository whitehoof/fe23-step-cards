// Import classes
import visitCardiologist from "../Classes/VisitCardiologist.js";
import visitDentist from "../Classes/VisitDentist.js";
import visitTherapist from "../Classes/VisitTherapist.js";

// Import API
import getVisits from "../API/getVisits.js";

async function renderVisits(token) {
    try {
        const allVisits = await getVisits(token);
        console.log(allVisits)
        allVisits.forEach(visit => {
            if (visit.doctor.toLowerCase() === "cardiologist") {
                const visitCard = new visitCardiologist(visit.fullName, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.pressure, visit.bmi, visit.disease, visit.age);
                visitCard.render();
            }

            if (visit.doctor.toLowerCase() === "dentist") {
                const visitCard = new visitDentist(visit.fullName, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.lastVisit);
                visitCard.render();
            }

            if (visit.doctor.toLowerCase() === "therapist") {
                const visitCard = new visitTherapist(visit.fullName, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.age);
                visitCard.render();
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default renderVisits;