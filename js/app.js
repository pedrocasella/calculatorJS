//document.addEventListener('contextmenu', event => event.preventDefault());
//result operation compiler

function result(){
    localStorage.setItem('numberRight', display.value.replace(localStorage.getItem('numberLeft'), '').replace('+', '').replace('-', '').replace('x', '').replace('÷', ''))
    const left = parseFloat(localStorage.getItem('numberLeft'))
    const right = parseFloat(localStorage.getItem('numberRight'))


    //Sum operation
    if(localStorage.getItem('operation') == 'sum'){
        display.value = left + right
    }

    //subtraction operation

    if(localStorage.getItem('operation') == 'minus'){
        display.value = left - right
    }

    //multiplication operation

    if(localStorage.getItem('operation') == 'multiplication'){
        display.value = left * right
    }

    //division operation

    if(localStorage.getItem('operation') == 'division'){
        display.value = left / right
    }


    localStorage.clear('numberLeft')
    localStorage.clear('numberRight')

}

document.addEventListener('DOMContentLoaded', ()=>{
    localStorage.clear('numberLeft')
    localStorage.clear('numberRight')
    localStorage.clear('operation')
   
    //operations in virtual keyboard

        const sumButton = document.getElementById('sum-btn')
        const minusButton = document.getElementById('minus-btn')
        const multiplyButton = document.getElementById('multiply-btn')
        const divisionButton = document.getElementById('division-btn')
        const clearButton = document.getElementById('clear')

        sumButton.addEventListener('click', ()=>{
            if(localStorage.getItem('operation') == null){
                const display = document.getElementById('display')

                localStorage.setItem('operation', 'sum')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' + '
            }
        })

        minusButton.addEventListener('click', ()=>{
            if(localStorage.getItem('operation') == null){
                const display = document.getElementById('display')

                localStorage.setItem('operation', 'minus')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' - '
            }
        })

        multiplyButton.addEventListener('click', ()=>{
            if(localStorage.getItem('operation') == null){
                const display = document.getElementById('display')

                localStorage.setItem('operation', 'multiplication')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' x '
            }
        })

        divisionButton.addEventListener('click', ()=>{
            if(localStorage.getItem('operation') == null){
                const display = document.getElementById('display')

                localStorage.setItem('operation', 'division')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' ÷ '
            }
        })

        clearButton.addEventListener('click', ()=>{
            display.value = ''
            localStorage.clear('numberLeft')
            localStorage.clear('numberRight')
        })

        //clear


    
})


document.addEventListener('keydown', (e)=>{

    const key = e.keyCode
        const display = document.getElementById('display')
        console.log(key)
        if(key == '96'){
            display.value += '0'
        }
        if(key == '97'){
            display.value += '1'
        }
        if(key == '98'){
            display.value += '2'
        }
        if(key == '99'){
            display.value += '3'
        }
        if(key == '100'){
            display.value += '4'
        }
        if(key == '101'){
            display.value += '5'
        }
        if(key == '102'){
            display.value += '6'
        }
        if(key == '103'){
            display.value += 7
        }
        if(key == '104'){
            display.value += 8
        }
        if(key == '105'){
            display.value += 9
        }

        if(key == '110'){
            display.value += '.'
        }

        //Operators

        if(localStorage.getItem('operation') == null){

            if(key == '107'){
                localStorage.setItem('operation', 'sum')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' + '
            }

            if(key == '109'){
                localStorage.setItem('operation', 'minus')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' - '
            }

            if(key == '106'){
                localStorage.setItem('operation', 'multiplication')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' x '
            }

            if(key == '111'){
                localStorage.setItem('operation', 'division')
                localStorage.setItem('numberLeft', display.value)
                display.value += ' ÷ '
            }
        }

        //result

        if(key == '13'){
           result()
        }

        //Clear

        if(key == '8'){
           display.value = ''
           localStorage.clear('numberLeft')
           localStorage.clear('numberRight')
        }
})

//Virtual keyboard

function Number0(){
    display.value += '0'
}

function Number1(){
    display.value += '1'
}

function Number2(){
    display.value += '2'
}

function Number3(){
    display.value += '3'
}

function Number4(){
    display.value += '4'
}

function Number5(){
    display.value += '5'
}

function Number6(){
    display.value += '6'
}

function Number7(){
    display.value += '7'
}

function Number8(){
    display.value += '8'
}

function Number9(){
    display.value += '9'
}

function point(){
    display.value += '.'
}

