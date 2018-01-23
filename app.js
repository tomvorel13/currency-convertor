// UI Variables
const form = document.querySelector("form");
const inputCZ = document.querySelector("#czk");
const inputUSD = document.querySelector("#usd");
const button = document.querySelector(".btn");
const result = document.querySelector("#result");
const popup = document.querySelector("#popup");

//Other variables
let usdRate = 0.0483675;

button.addEventListener("click", e => {
	if (inputCZ.value === "" || inputCZ.value === isNaN) {
		popup.classList.add("alert-danger");
		popup.classList.add("alert");
		popup.textContent = "Not a valid number";

		setTimeout(popupGone, 2000);
	} else {
		let finalAmount = (inputCZ.value * usdRate).toFixed(2);
		finalAmount = `$${finalAmount}`;
		//Display the result
		result.innerHTML = `<h1 class="display-1 text-center">${finalAmount}</h1>`;
		//Reset form
		inputCZ.value = "";
	}

	e.preventDefault();
});

//Making the popup disappear
const popupGone = () => {
	popup.style.display = "none";
};
