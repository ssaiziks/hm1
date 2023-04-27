let num1 = prompt("Введите число")
let num2 = prompt("Введите число")

if (num1 > num2) {
    alert(num1 + " больше чем " + num2)
}else if (num1 < num2) {
    alert(num1 + " меньше чем " + num2)
}else {
    alert(" равны ")
}

let color = prompt('ВВЕДИТЕ ЦВЕТ',);

    switch (color) {
        case 'red':
            alert('stop');
            break;
            case 'yellow':
            alert('wait');
            break;

            case 'green':
            alert('go');
            break;
        default:
            alert('unknown color');
    }

const userName = prompt("Введите свое имя");
const userSurName = prompt("Введите свое фамилие")

let congratulation = userName + " " + userSurName;
alert("Hello, dear:" + congratulation)

