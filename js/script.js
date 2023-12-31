const inputBox = document.getElementById("date");
inputBox.max = new Date().toISOString().split("T")[0];

const displayResult = document.getElementById("result");


function calculateAge() {
	let birthDate = new Date(inputBox.value);

	let d1 = birthDate.getDate();
	let m1 = birthDate.getMonth() + 1;
	let y1 = birthDate.getFullYear();

	let today = new Date();

	let d2 = today.getDate();
	let m2 = today.getMonth() + 1;
	let y2 = today.getFullYear();
    
	let noOfYears = y2 - y1;
	let noOfDays, noOfMonths;
	if (m2 >= m1) {
		noOfMonths = m2 - m1;
	} else {
		noOfYears--;
		noOfMonths = m2 - m1 + 12;
	}
	if (d2 >= d1) {
		noOfDays = d2 - d1;
	} else {
		noOfMonths--;
		noOfDays = getDateInMonth(y1, m1) + d2 - d1;
	}
	if (noOfMonths < 0) {
		noOfMonths = 11;
		noOfYears--;
	}
	displayResult.innerHTML = `You are <span> ${noOfYears}
    </span> years
       <span>${noOfMonths} </span>months and <span>${noOfDays}</span> days old`;
}

function getDateInMonth(year, month) {
	return new Date(year, month, 0).getDate();
}
