window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // Getting the inputs from the dom
  const amountUI = document.getElementById('loan-amount');
  const yearsUI = document.getElementById('loan-years');
  const rateUI = document.getElementById('loan-rate');

  // Creating default values
  let amount = 400000;
  let years = 30;
  let rate = 3.2;

  // Populating UI with default values
  amountUI.value = amount;
  yearsUI.value = years;
  rateUI.value = rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIvals = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(currentUIvals);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let interest = values.rate / 100 / 12;
  let numOfPayments = values.years * 12;

  let monthlyPaymentPart1 = principle * interest;
  let monthlyPaymentPart2 = 1 - Math.pow(1 + interest, -numOfPayments);

  let monthlyPaymentFinal = monthlyPaymentPart1 / monthlyPaymentPart2;
  return monthlyPaymentFinal.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPaymentLabel = document.getElementById('monthly-payment');
  monthlyPaymentLabel.innerText = monthly;
}
