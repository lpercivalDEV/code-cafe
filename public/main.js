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
