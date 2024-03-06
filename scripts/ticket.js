function seatSelect(pera1) {

    const seat =  document.getElementById(pera1);
    const currentColor = seat.style.backgroundColor;
    if(currentColor === '') {
        seat.style.backgroundColor = '#1DD100';

        //1 seat left num section 
        const a = document.getElementById('seat-left');
        const num = parseInt(a.innerText);
        const seatLeft = num - 1;
        a.innerText = seatLeft;

        //2 selected seat number 
        const b = document.getElementById('selectedSeatNum');
        const num2 = parseInt(b.innerText);
        const seatNum = num2 + 1;
        b.innerText = seatNum;

        //3 seat name section 
        if(seat.innerText.includes('A')) {
            const c = document.getElementById('seat-name');
            const defaultName = c.innerText;
            const newName = defaultName + ' ' + seat.innerText ;
            c.innerText = newName;
        }
        else {
            const c = document.getElementById('seat-name2');
            const defaultName = c.innerText;
            const newName = defaultName + ' ' + seat.innerText ;
            c.innerText = newName;
        }

        //4 seat price section 
        if(seat.innerText.includes('A')) {
            const d = document.getElementById('ticket-price');
            const price = parseInt(d.innerText);
            const newPrice = price + 550;
            d.innerText = newPrice;
        }
        else {
            const d = document.getElementById('ticket-price2');
            const price = parseInt(d.innerText);
            const newPrice = price + 550;
            d.innerText = newPrice;
        }

        //5 seat total price section 
        const total = document.getElementById('total-price');
        const d = document.getElementById('ticket-price');
        const price = parseInt(d.innerText);
        const d2 = document.getElementById('ticket-price2')
        const price2 = parseInt(d2.innerText);
        const totalPrice = price + price2;
        total.innerText = totalPrice;

        //6 coupon section 
        if(seatNum >= 4) {
            document.getElementById('coupon').removeAttribute('disabled');
            document.getElementById('coupon-btn').removeAttribute('disabled');
        }

        document.getElementById('coupon-btn').addEventListener('click', function (event) {
            event.stopPropagation();
            const couponInput = document.getElementById('coupon');
            if(couponInput.value === 'NEW15') {
                document.getElementById('coupon').setAttribute('disabled', true);
                document.getElementById('coupon-btn').setAttribute('disabled', true);
                const discount15 = totalPrice / 100 * 15;
                document.getElementById('discount-price').innerText = discount15;
                document.getElementById('grand-total').innerText = totalPrice - discount15; 
                document.getElementById('discount-section').classList.remove('hidden');
            }
            else if(couponInput.value === 'Couple20') {
                document.getElementById('coupon').setAttribute('disabled', true);
                document.getElementById('coupon-btn').setAttribute('disabled', true);
                const discount20 = totalPrice / 100 * 20;
                document.getElementById('discount-price').innerText = discount20;
                document.getElementById('grand-total').innerText = totalPrice - discount20;
                document.getElementById('discount-section').classList.remove('hidden');
            }
            else {
                alert('invalid coupon')
            }

        })

        // passenger info section
        const name = document.getElementById('input-name')
        const number = document.getElementById('input-number')
        if(name.value !== '' || number.value !== '') {
            document.getElementById('next-btn').removeAttribute('disabled', true);
        }

    }

    else {
        seat.style.backgroundColor = '';
        
        //1 seat left num section 
        const a = document.getElementById('seat-left');
        const num = parseInt(a.innerText);
        const seatLeft = num + 1;
        a.innerText = seatLeft;
        
        //2 selected seat number 
        const b = document.getElementById('selectedSeatNum');
        const num2 = parseInt(b.innerText);
        const seatNum = num2 - 1;
        b.innerText = seatNum;
        
        //3 seat name section 
        if(seat.innerText.includes('A')) {
            const c = document.getElementById('seat-name');
            const currentName = c.innerText;
            const newName = currentName.replace(seat.innerText, '');
            c.innerText = newName;
        }
        else {
            const c = document.getElementById('seat-name2');
            const currentName = c.innerText;
            const newName = currentName.replace(seat.innerText, '');
            c.innerText = newName;
        }

        //4 seat price section 
        if(seat.innerText.includes('A')) {
            const d = document.getElementById('ticket-price');
            const price = parseInt(d.innerText);
            const newPrice = price - 550;
            d.innerText = newPrice;
        }
        else {
            const d = document.getElementById('ticket-price2');
            const price = parseInt(d.innerText);
            const newPrice = price - 550;
            d.innerText = newPrice;
        }

        //5 seat total price section 
        const e = document.getElementById('total-price');
        e.innerText = 0;

        //6 coupon section 

        //7 grand total section

    }

}
