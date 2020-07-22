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






