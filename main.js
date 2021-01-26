// login area

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("login-Area");
    loginArea.style.display = 'none';

    const transcaationArea = document.getElementById("transaction-area");
    transcaationArea.style.display = "block";
})


// deposit Button Event Handler

const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener('click',function(){

    const depositNumber = inputNumber("depositInput");

    addAmount("currentDeposit", depositNumber);
    addAmount("currentBalance", depositNumber);

    document.getElementById("depositInput").value = "";
})

// withdraw Button Event Handler

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click',function(){

    const withdrawNumber = inputNumber("withdrawInput");

    addAmount("currentWithdraw", withdrawNumber);
    addAmount("currentBalance", -1*withdrawNumber);

    document.getElementById("withdrawInput").value = null;

})


function inputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function addAmount(id, inputAmount){
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const total = currentAmountNumber + inputAmount;
    document.getElementById(id).innerText = total;
}