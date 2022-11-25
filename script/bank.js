function getInputValue(inputId){
    const inputFiled = document.getElementById(inputId)
    const inputAmountText = inputFiled.value
    const amountValue = parseFloat(inputAmountText);
    
    console.log(amountValue);
    // clear input filed
    inputFiled.value = ""
    return amountValue

}

// update total field
function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount
}
// current balance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    return previousBalanceTotal
}
// update balance
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = getCurrentBalance()
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{balanceTotal.innerText = previousBalanceTotal - amount}
}

document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeAmount = getInputValue('deposite-input')
    if(depositeAmount > 0){
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true)
    }
})
document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrowAmount = getInputValue('withdrow-input')
    if(withdrowAmount > 0){
        updateTotalField('withdrow-total', withdrowAmount);
        updateBalance(withdrowAmount, false)
    }
    
})
