const seat = document.getElementsByClassName("busSeat");
const seatColor = new Array(seat.length).fill(false);
const availableSeat = document.getElementById("availableSeat");
let availableSeatValue = availableSeat.innerText;

let seatNumber = document.getElementById("seat-number");
let seatClass = document.getElementById("seat-class");
let seatPrice = document.getElementById("seat-price");

let seatCountNumber = document.getElementById("seat-count-number");

let totalPrice = document.getElementById("total-price");
let discountPrice = document.getElementById("discount-price");
let selectSeatCount = 0;
let price = 0;

let busSeatArrangement = [];

for (let i = 0; i < seat.length; i++) {
  seat[i].addEventListener("click", function () {
    if (seatColor[i]) {
      seat[i].style.backgroundColor = "#F7F8F8";
      seat[i].style.color = "black";
      seatColor[i] = false;
      availableSeatValue++;
      availableSeat.innerHTML = availableSeatValue;
      selectSeatCount--;
      seatCountNumber.innerHTML = selectSeatCount;

      let seatIndex = busSeatArrangement.indexOf(seat[i].innerText);
      seatNumber.removeChild(seatNumber.children[seatIndex]);
      seatClass.removeChild(seatClass.children[seatIndex]);
      seatPrice.removeChild(seatPrice.children[seatIndex]);

      price = selectSeatCount * 550;
      totalPrice.innerHTML = price;
      discountPrice.innerHTML = price;

      busSeatArrangement = busSeatArrangement.filter(
        (seats) => seats != seat[i].innerText
      );
    } else {
      if (selectSeatCount < 4) {
        seat[i].style.backgroundColor = "#1DD100";
        seat[i].style.color = "white";
        seatColor[i] = true;
        availableSeatValue--;
        availableSeat.innerHTML = availableSeatValue;
        let seatNumberInnerValue = seat[i].innerText;

        const seatName = document.createElement("p");
        const seatclass = document.createElement("p");
        const seatprice = document.createElement("p");

        seatName.innerHTML = seatNumberInnerValue;
        seatclass.innerHTML = "Economy Class";
        seatprice.innerHTML = 550;

        seatNumber.appendChild(seatName);
        seatClass.appendChild(seatclass);
        seatPrice.appendChild(seatprice);

        selectSeatCount++;
        seatCountNumber.innerHTML = selectSeatCount;

        price = selectSeatCount * 550;
        totalPrice.innerHTML = price;
        discountPrice.innerHTML = price;

        busSeatArrangement.push(seat[i].innerText);
      }
    }
  });
}

const coupon = document.getElementById("coupon");
const apply = document.getElementById("apply");
const couponContainer = document.getElementById("coupon-container");

apply.addEventListener("click", function () {
  if (coupon.value === "NEW15") {
    discountPrice.innerHTML = price - price * 0.15;
    couponContainer.style.display = "none";
  } else if (coupon.value === "Couple 20") {
    discountPrice.innerHTML = price - price * 0.2;
    couponContainer.style.display = "none";
  }
});
