const input = document.querySelector(".input")
const body = document.querySelector("body")

// Load in the initial state of the mode from the local stoage
input.checked = JSON.parse(localStorage.getItem("mode"))

// Call the updateBody function to get the first start
updateBody()

function updateBody() {
    if(input.checked) {
        body.style.background = "black" // set background to black by checking checked input
    }
    else {
        body.style.background = "white" // keep this is not checked
    }
}

// Add event listened to the input
input.addEventListener("input", () => {
    updateBody()
    updateLocalStorage()
})

// Update the local storage
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(input.checked));
}