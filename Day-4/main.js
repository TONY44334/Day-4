var keys = document.querySelectorAll('.buttons span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.getElementById('text-area');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'AC') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal == '=') {
         
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			equation = equation.replace(/X/g, '*').replace(/÷/g, '/').replace(/%/g, '%');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
      else if (btnVal == 'C') {
          
          input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
          decimalAdded = false;
      }
      else if(btnVal == '+/-'){
         input.innerHTML = '-' + input.innerHTML;
         decimalAdded = false;
      }

		else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		else {
			input.innerHTML += btnVal;
		}
		
		e.preventDefault();
	} 
}


 