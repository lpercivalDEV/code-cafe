// let thumbUp = document.getElementsByClassName("fa-check-circle");
let checker = document.getElementsByClassName("checker")
let orderText = document.getElementById("order");
let btns = document.querySelectorAll(".btn");
let submitOrder = document.getElementsByClassName("submit")[0];
let tally = document.getElementsByClassName("tally")[0];
let profitHold = 0;
let itemHold = [];
let dailySales ={
    items: "",
    profit: 0,
}

for(let i =0; i<btns.length; i++){
        btns[i].addEventListener("click", createOrder);
}

let curOrder = "";
let total = 0;
let final = document.getElementsByClassName("money")[0];
let sum = document.getElementsByClassName("summary")[0];

function createOrder(){
    let temp = this.value;
        curOrder += temp +", ";
        orderText.value = curOrder;
        sum.innerHTML = curOrder;

    let price = this.name;
    let num = parseFloat(price);
    total += num;
    final.innerHTML = total;
    itemHold = curOrder;
    profitHold = total;
    tally.value = total; 
}


let placedOrders = document.querySelectorAll(".message");
let custNames = document.querySelectorAll(".name");

for(let i=0; i<placedOrders.length; i++){
    placedOrders[i].addEventListener("click", orderComplete);
}

function orderComplete(){
    this.className= "completed";
}


//store items and profits in an object (does not save repeatedly yet :( ))
submitOrder.onclick = calcSales;

function calcSales(){
    dailySales.items += itemHold;
    dailySales.profit += profitHold;
    console.log(itemHold);
    console.log(profitHold);
    console.log(dailySales);
}

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         element.classList.add("complete");
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp,
//             'checker': checker
//           })
//         })
//         .then(response => {
//           if (response.ok)
//           thumbUp.addClass('complete')
//           return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(checker).forEach(function(element) {
//       element.addEventListener('click', function(){
//         element.classList.remove("hidden");
//         element.classList.add("complete");
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         const checker = this.parentNode.parentNode.childNodes[7].innerText
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp,
//             'checker': checker
//           })
//         })
//         .then(response => {
//           if (response.ok)
//           thumbUp.addClass('complete')
//           return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });


// name.classList.add("complete");
// order.classList.add("complete");

///======================================

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
