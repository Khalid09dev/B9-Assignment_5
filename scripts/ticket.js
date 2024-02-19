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
}