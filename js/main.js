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
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw =  withdrawNumber + currentWithdrawNumber;

    document.getElementById("currentWithdraw").innerText = totalWithdraw;
    document.getElementById('withdrawAmount').value = "";

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const TotalBalance = currentBalanceNumber - totalWithdraw;

    document.getElementById("current-balance").innerText = TotalBalance;
});



//Deposit button event handler
const depositBtn = document.getElementById('addAmount').addEventListener('click', function(){
    const depositNumber = getInputNumber("depositAmount")         
    getDepositAmount("current-balance", depositNumber);
    getDepositAmount("currentDeposit", depositNumber);

    document.getElementById('depositAmount').value = "";
})

//Get Input Number
function getInputNumber(id, ){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}
//Update Span Text
    function getDepositAmount(id, depositNumber){
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}