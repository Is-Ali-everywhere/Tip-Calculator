
// 🌟 APP: Tip Calculator

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById("billTotalInput")
const tipInputDiv = document.getElementById("tipInput")
const totalPople = document.getElementById("numberOfPeople")
const peoples = document.getElementById("perPersonTotal")


// Get number of people from number of people div

let numberOfPeople = Number(totalPople.innerText)
const calculateBill = () => {
    let bill = Number(billInput.value)
  
    let tip = Number(tipInputDiv.value)/100  
  
    let totalTip = bill * tip  
  
    let totalAmount = totalTip + bill
  
    let perPersonTotaldiv = totalAmount / numberOfPeople
  
    peoples.innerText = `$${perPersonTotaldiv.toFixed(2)}`
  }
  
  const increasePeople = () => {
    numberOfPeople += 1 
  
    totalPople.innerText = numberOfPeople
    calculateBill()
  }
  const decreasePeople = () => {
    if (numberOfPeople <= 1){
            return
    }
    numberOfPeople -= 1
    totalPople.innerText = numberOfPeople
    calculateBill()
  }