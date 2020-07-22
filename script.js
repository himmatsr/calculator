class calculator{
	constructor(prevoperandtext, curroperandtext){
		this.prevoperandtext = prevoperandtext
		this.curroperandtext = curroperandtext
		this.clear()
	}
	clear(){
		this.prevoperand = ''
		this.curroperand = ''
		this.operator = undefined
	}
	deleteone(){
		this.curroperand = this.curroperand.toString().slice(0,-1)
	}
	appendnumber(number){
		if(number === '.' && this.curroperand.includes('.')) return
		this.curroperand = this.curroperand.toString() + number.toString()
	}
	operation(operator){

		if(this.curroperand === '') return
		if(this.prevoperand !== ''){
			this.compute()
		}
		this.operator = operator
		this.prevoperand = this.curroperand
		this.curroperand = ''
	}
	compute(){
		var ans
		var cur = parseFloat(this.curroperand)
		var pre = parseFloat(this.prevoperand)
		if(isNaN(cur) || isNaN(pre)) return
		switch(this.operator){
			case '+':
				ans = pre+cur
				break
			case '-':
				ans = pre-cur
				break
			case '/':
				ans = pre/cur
				break
			case '*':
				ans = pre*cur
				break
			default:
				return

		}
		this.curroperand = ans
		this.operator = undefined
		this.prevoperand =''
	}
	getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
  updatedisplay(){
  	this.curroperandtext.innerText = this.getDisplayNumber(this.curroperand)
  	if(this.operator!=null){
  		this.prevoperandtext.innerText = ` ${this.getDisplayNumber(this.prevoperand)} ${this.operator}`
  	}
  	else{
  		this.prevoperandtext.innerText =''
  	}
  }

}



const numberbtn = document.querySelectorAll('.number')
const operatorbtn = document.querySelectorAll('.op')
const equalbtn = document.querySelector('.equal')
const deletebtn = document.querySelector('.delete')
const clearbtn = document.querySelector('.clear')
const prevoperandtext = document.querySelector('.prev')
const curroperandtext = document.querySelector('.curr')

var c = new calculator(prevoperandtext, curroperandtext);

numberbtn.forEach(function(button){
	button.addEventListener('click', function(){
		
		c.appendnumber(button.innerText)
		
		c.updatedisplay()
		
	})
})

operatorbtn.forEach(function(button){
	button.addEventListener('click', function(){
		c.operation(button.innerText)
		c.updatedisplay()
		
	})
})

equalbtn.addEventListener('click', function(){
	c.compute()
	c.updatedisplay()
	
})

deletebtn.addEventListener('click', function(){
	c.deleteone()
	c.updatedisplay()
	
})

clearbtn.addEventListener('click', function(){
	c.clear()
	
	c.updatedisplay()
	
})































// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement
//     this.currentOperandTextElement = currentOperandTextElement
//     this.clear()
//   }

//   clear() {
//     this.currentOperand = ''
//     this.previousOperand = ''
//     this.operation = undefined
//   }

//   delete() {
//     this.currentOperand = this.currentOperand.toString().slice(0, -1)
//   }

//   appendNumber(number) {
//     if (number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
//   }

//   chooseOperation(operation) {
//     if (this.currentOperand === '') return
//     if (this.previousOperand !== '') {
//       this.compute()
//     }
//     this.operation = operation
//     this.previousOperand = this.currentOperand
//     this.currentOperand = ''
//   }

//   compute() {
//     let computation
//     const prev = parseFloat(this.previousOperand)
//     const current = parseFloat(this.currentOperand)
//     if (isNaN(prev) || isNaN(current)) return
//     switch (this.operation) {
//       case '+':
//         computation = prev + current
//         break
//       case '-':
//         computation = prev - current
//         break
//       case '*':
//         computation = prev * current
//         break
//       case '÷':
//         computation = prev / current
//         break
//       default:
//         return
//     }
//     this.currentOperand = computation
//     this.operation = undefined
//     this.previousOperand = ''
//   }

//   getDisplayNumber(number) {
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay
//     if (isNaN(integerDigits)) {
//       integerDisplay = ''
//     } else {
//       integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`
//     } else {
//       return integerDisplay
//     }
//   }

//   updateDisplay() {
//     this.currentOperandTextElement.innerText =
//       this.getDisplayNumber(this.currentOperand)
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     } else {
//       this.previousOperandTextElement.innerText = ''
//     }
//   }
// }


// const numberButtons = document.querySelectorAll('.number')
// const operationButtons = document.querySelectorAll('.op')
// const equalsButton = document.querySelector('.equal')
// const deleteButton = document.querySelector('.delete')
// const allClearButton = document.querySelector('.clear')
// const previousOperandTextElement = document.querySelector('.prev')
// const currentOperandTextElement = document.querySelector('.curr')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(demo => {
//   demo.addEventListener('click', () => {
//     calculator.appendNumber(demo.innerText)
//     calculator.updateDisplay()
//   })
// })

// operationButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.chooseOperation(button.innerText)
//     calculator.updateDisplay()
//   })
// })

// equalsButton.addEventListener('click', () => {
//   calculator.compute()
//   calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', () => {
//   calculator.clear()
//   calculator.updateDisplay()
// })

// deleteButton.addEventListener('click', () => {
//   calculator.delete()
//   calculator.updateDisplay()
// })