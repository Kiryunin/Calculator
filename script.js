const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
// ПОЛЯ ВВОДА ЧИСЕЛ

const buttonPlus = document.getElementById('buttonPlus')
const buttonMinus = document.getElementById('buttonMinus')
const buttonMultiplication = document.getElementById('buttonMultiplication')
const buttonDivision = document.getElementById('buttonDivision')
// КНОПКИ ОПЕРАЦИЙ

const enterResult = document.getElementById('result')
// ПОЛЕ ВЫВОДА ИТОГОВОГО ЧИСЛА

buttonPlus.onclick = function(functionOne){
    const result = Number(input1.value) + Number(input2.value)
    if (result < 0){
        enterResult.style.color = 'red'
    } else if (result == 0){
        enterResult.style.color = 'black'
    }
    else{
        enterResult.style.color = 'green'
    }
    enterResult.textContent = result
}
buttonMinus.onclick = function(){
    const result = Number(input1.value) - Number(input2.value)
    if (result < 0){
        enterResult.style.color = 'red'
    } else if (result == 0){
        enterResult.style.color = 'black'
    }
    else{
        enterResult.style.color = 'green'
    }
    enterResult.textContent = result
}
buttonMultiplication.onclick = function(){
    const result = Number(input1.value) * Number(input2.value)
    if (result < 0){
        enterResult.style.color = 'red'
    } else if (result == 0){
        enterResult.style.color = 'black'
    }
    else{
        enterResult.style.color = 'green'
    }
    enterResult.textContent = result
}
buttonDivision.onclick = function(){
    const result = Number(input1.value) / Number(input2.value)
    if (result < 0){
        enterResult.style.color = 'red'
    } else if (result == 0){
        enterResult.style.color = 'black'
    }
    else{
        enterResult.style.color = 'green'
    }
    enterResult.textContent = result
}
// ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ (ОПЕРАЦИИ И ЦВЕТ ЧИСЛА)