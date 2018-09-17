function fibonacci(num){
	if (typeof num !== 'number') {
		return 'Nope';
	} else if (num < 0 ) {
		return 'Less than zero';
	} 

	var a = 1, b = 0, temp;
  
	while (num >= 0){
	  temp = a;
	  a = a + b;
	  b = temp;
	  num--;
	}
  
	return b;
  }