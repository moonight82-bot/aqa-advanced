function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
		(response) => response.json()
	);
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then(
		(response) => response.json()
	);
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then(
		(response) => response.json()
	);
}
const racePromise = Promise.race([fetchTodo(), fetchUser()]);

racePromise
	.then((result) => {
		console.log('Promise.race result:');
		console.log(result);
	})
	.catch((error) => {
		console.error('Error in Promise.race:', error);
	});