function fibonacci(num){
	if (typeof num !== 'number') {
		return 'Nope';
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