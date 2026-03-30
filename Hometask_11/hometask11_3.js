async function fetchTodo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const data = await response.json();
	return data;
}

async function fetchUser() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const data = await response.json();
	return data;
}

async function runAll() {
	try {
		const results = await Promise.all([fetchTodo(), fetchUser()]);
		const [todo, user] = results;

		console.log('Promise.all result:');
		console.log('Todo:', todo);
		console.log('User:', user);
	} catch (error) {
		console.error('Error in Promise.all:', error);
	}
}

runAll();

async function runRace() {
	try {
		const result = await Promise.race([fetchTodo(), fetchUser()]);

		console.log('Promise.race result:');
		console.log(result);
	} catch (error) {
		console.error('Error in Promise.race:', error);
	}
}

runRace();