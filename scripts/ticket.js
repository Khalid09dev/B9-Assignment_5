function seatSelected() {
    /**ticket selecting functionality start */
    const availableSeat = document.getElementById('seat-left');
    const newSeat = Math.floor(availableSeat.innerText - 1);
    availableSeat.innerText = newSeat;
    
    const seatsLeft = document.getElementById('seat-left-now');
    seatsLeft.classList.remove('bg-[#F7F8F8]');
    
    const seatLeft = document.getElementById('seat-left-now');
    seatLeft.classList.add('bg-[#1DD100]', 'text-white');

    const seatSelected = document.getElementById('seat-selected');
    seatSelected.classList.add('text-[#1DD100]', 'font-medium');
    /**ticket selecting functionalities end */

    /**ticket pricing calculation section start */
    const seatNum = document.getElementById('seat-num');
    seatNum.innerText = 'A1';

    const ticketPrice = document.getElementById('ticket-price');
    ticketPrice.innerText = 550;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = 550;

    const enableCoupon = document.getElementById('coupon');
    enableCoupon.removeAttribute('disabled');
    const enableCpnBtn = document.getElementById('coupon-btn');
    enableCpnBtn.removeAttribute('disabled');

    const nextbtn = document.getElementById('next-btn');
    nextbtn.classList.remove('pointer-events-none');

    window.alert('Site under Construction: you can buy only one seat. Without this issue everything is okay');
}


// single seat select 
document.getElementById('seat-left-now').addEventListener('click', function() {
    this.disabled = true;
});
// single seat select 


function discount() {
    let totalPrice = document.getElementById('total-price');
    const price = totalPrice.innerText;
    totalPrice = price;

    const coupon = document.getElementById('coupon');
    if(coupon.value === 'Couple20') {
        const discountOff = totalPrice - (totalPrice / 100 * 20);
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = discountOff;
    }
    else if(coupon.value === 'NEW15') {
        const discountOff = totalPrice - (totalPrice / 100 * 15);
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = discountOff;
    }
    else{
        window.alert('Your coupon is invalid');
        // console.log('congratulations you have to pay full');
    }
}
