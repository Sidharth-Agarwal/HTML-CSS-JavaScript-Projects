const calculateBtn = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipAmount = document.getElementById("tip")
const totalAmount = document.getElementById("total")

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipAmount.value;
    const totalBill = billValue * (1 + tipValue / 100)
    console.log(totalBill)
    console.log(totalAmount)
    totalAmount.innerText = totalBill.toFixed(2)
}

calculateBtn.addEventListener("click", calculateTotal);