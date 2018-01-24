// UI Variables
const form = document.querySelector("form");
const inputCZ = document.querySelector("#czk");
const inputUSD = document.querySelector("#usd");
const button = document.querySelector(".btn");
const result = document.querySelector("#result");
const popup = document.querySelector("#popup");
const currOption = document.querySelector("#currOption");
const optCZK = document.querySelector("#optCZK");
const optUSD = document.querySelector("#optUSD");

//Other variables
let usdRate = 0.0483675;

//Function for changing options
function changeOptions(opt1, opt2) {
	opt1.classList.add("selected");
	opt2.classList.remove("selected");
}

optUSD.addEventListener("click", () => {
	changeOptions(optUSD, optCZK);
});
optCZK.addEventListener("click", () => {
	changeOptions(optCZK, optUSD);
});

button.addEventListener("click", e => {
	if (inputCZ.value === "" || inputCZ.value === isNaN) {
		popup.classList.add("alert-danger");
		popup.classList.add("alert");
		popup.textContent = "Not a valid number";

		setTimeout(popupGone, 2000);
	} else if (optCZK.classList.contains("selected")) {
		let finalAmount = (inputCZ.value * usdRate).toFixed(2);
		result.innerHTML = `<h1 class="display-1 text-center">$${finalAmount}</h1>`;
		inputCZ.value = "";
	} else if (optUSD.classList.contains("selected")) {
		let finalAmount = (inputCZ.value / usdRate).toFixed();
		result.innerHTML = `<h1 class="display-1 text-center">${finalAmount} CZK</h1>`;
		inputCZ.value = "";
	}

	e.preventDefault();
});

//Making the popup disappear
const popupGone = () => {
	popup.style.display = "none";
};
