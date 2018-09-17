function fibonacci(num, memo){
	memo = memo || {};
	if (memo[num]) return memo[num];
	
	var a = 1, b = 0, temp;
  
	while (num >= 0){
	  temp = a;
	  a = a + b;
	  b = temp;
	  num--;
	}
  
	return b;
  }