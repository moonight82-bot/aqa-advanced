function printText(text, time) {
	setTimeout(() => {
		console.log(text);
	}, time);
}
printText('Hello after 5 seconds', 5000);