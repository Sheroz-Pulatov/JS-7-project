let cars = [28000, 5000, 11000, 12000, 16000, 8000, 7000, 22000, 45000, 80000, 55000, 20000];
let hello = alert('Welcome to our UBBA Auto Show')
let from = prompt('Name the amount from 0$!');
let upto = prompt('Name the amount to your budget !');
let balance = cars.filter(item => from <= item && item <= upto);

if (balance[0] > 0) {
    let num_car = prompt('What price did you choose:  ' + balance + '$');
    if (num_car) {
        let is_selected = confirm('Have you chosen a car by price category ? (ok or cancel) ');
        if (is_selected) {
            let end = confirm('You have chosen a car worth ' + num_car + '$ do you want to buy ?');
            if (end) {
                let name_us = prompt('Enter name for identity verification !').trim().toLowerCase()
                if (name_us) {
                    let bot = confirm('Name: ' + name_us + ' Price: ' + num_car + '$ Confirmation !')
                    if (bot) {
                        alert('Successfully')
                    } else {
                        alert(' You entered incorrectly ! (or reload site)');
                    }
                } else {
                    alert(' You entered incorrectly ! (or reload site)');
                }
            } else {
                alert(' You entered incorrectly ! (or reload site)');
            }
        } else {
            alert('You canceled the order or something is wrong, reload the page !')
        }
    } else {
        alert('You canceled the order or something is wrong, reload the page !')
    }
} else {
    alert('There are no cars below $5000!')
}

