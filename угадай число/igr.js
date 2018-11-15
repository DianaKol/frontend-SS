let name = prompt('Привет, как тебя зовут?');

while (name == '' || name == null) {
    name = prompt('Привет, как тебя зовут?');
    }

    alert(name + ', я загадала число от 1 до 100. Попробуйте отгдаать его за наименьшее колиечество попыток' );

let namber =Math.ceil( Math.random() * 100);
    let guess = prompt('какое число я загадал?');
let namberofgueses = 0;
    while (guess != namber){
        if (guess > namber) {
            guess = prompt('много, попробуй еще');
            namberofgueses = namberofgueses +1;
        }
        if (guess<namber) {
            guess = prompt('Мало, попробуй еще');
            namberofgueses = namberofgueses + 1;
        }
        
    }
    alert('Ты угадал число, поздравляю!  ' + namber + '. Тебе понадобилось '+ namberofgueses + ' попыток' );
