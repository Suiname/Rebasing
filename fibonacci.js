function errorChecking(num){
	if (typeof num !== 'number') {
		throw new Error('Nope');
	} else if (num < 0 ) {
		throw new Error('Less than zero');
	} 
}

function fibonacci(num){
	try {
		errorChecking(num);
	} catch (error) {
		throw error;
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

	module.exports = {
		fibonacci
	};