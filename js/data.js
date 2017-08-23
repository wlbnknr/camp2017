const getSummary = function (endpoint, containers) {

	const balanceContainer = document.querySelector(containers.balance);
	const fundsContainer = document.querySelector(containers.funds);
	const paymentsContainer = document.querySelector(containers.payments);

$.get('https://efigence-camp.herokuapp.com/api/' + endpoint, data => {

	const balanceValue = data.content[0].balance;
	const fundsValue = data.content[0].funds;
	const paymentsValue = data.content[0].payments;

	balanceContainer.innerText = balanceValue;
	fundsContainer.innerText = fundsValue;
	paymentsContainer.innerText = paymentsValue;
	// console.log(balanceValue, fundsValue, paymentsValue);
	});
}

const endpoint = "data/summary";
const containers = {
	balance: "#balance_quantity",
	funds: "#funds_quantity",
	payments: "#payments_quantity"
};

getSummary(endpoint, containers);

function getProducts () {

$.get('https://efigence-camp.herokuapp.com/api/data/products/', data => {

	for (let i = 0; i < data.content.length; i++)
		
		{

			const name = data.content[i].type;
			const currency = " " + data.content[i].currency;
			const amount = data.content[i].amount;
			const elements = data.content[i].elements;
		
			// console.log(name);

			$(".products").append(`<div class="product_box column small-12 medium-6">
                <img src="etc/${name}.png" class="icon"/>
                <div>
                  <h2>${name}</h2>
                  <span id="">${amount}</span><span id="">${currency}</span>
                </div>
              </div>`);
		}

});}

getProducts();

function getHistory () {

$.get('https://efigence-camp.herokuapp.com/api/data/history/', data => {

	for (let i = 0; i < data.content.length; i++)
		
		{

			const identifier = data.content[i].id;
			const date = data.content[i].date;
			const description = data.content[i].description;
			const category = data.content[i].category;
			const currency = data.content[i].currency;
			const amount = data.content[i].amount;
			const status = data.content[i].status;

			// console.log(date, description, currency, amount);

			$(".history").prepend(`<div class="history_box column small-12">
              <div class="history_date">${date}</div>
              <div class="history_transaction">
                <span id="transaction_location">${description}</span>
                <span id="transaction_type">${status}</span>
              </div>
              <div id="history_amount"><span>${amount} ${currency}</span>
              </div>
            </div>`);
		
		}

});}

getHistory();

