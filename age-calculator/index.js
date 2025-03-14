const calculateBtn = document.getElementById("btn")
const birthday = document.getElementById("birthday")
const result = document.getElementById("result")

function calculateAge() {
    const birthValue = birthday.value;
    
    if(birthValue === "") {
        alert("Plese eneter your birthday")
    }
    else {
        const age = getAge(birthValue);
        console.log(age)
        result.innerText = age
    }
}

function getAge(birthValue) {
    const currentDate = new Date()
    const birthdayDate = new Date(birthValue)

    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    let month = currentDate.getMonth() - birthdayDate.getMonth()

    if(month < 0 || month == 0 && currentDate.getDate() < birthdayDate.getDate()) {
        age--;
    }

    month = Math.abs(month)

    if (age == 0) {
        return `Your age is ${month} ${month > 1 ? "months" : "month"} old `
    }

    else {
        return `Your age is ${age} ${age > 1 ? "years" : "year"} old and ${month} ${month > 1 ? "months" : "month"} old`;
    }
}

calculateBtn.addEventListener("click", calculateAge);