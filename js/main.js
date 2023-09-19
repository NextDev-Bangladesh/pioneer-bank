//Login Button Event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const hideLogin = document.getElementById('login-form');
    hideLogin.style.display = "none";
    const showTransition = document.getElementById('transition-form');
    showTransition.style.display = 'block';
})

//Withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw').addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount")

    paypalAmount("currentWithdraw", withdrawNumber);
    paypalAmount("current-balance", -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
});

//Deposit button event handler
const depositBtn = document.getElementById('addAmount').addEventListener('click', function(){
    const depositNumber = getInputNumber("depositAmount")

    paypalAmount("current-balance", depositNumber);
    paypalAmount("currentDeposit", depositNumber);

    document.getElementById('depositAmount').value = "";
})

//Get Input Number
function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}
//Update Span Text
    function paypalAmount(id, depositNumber){
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}