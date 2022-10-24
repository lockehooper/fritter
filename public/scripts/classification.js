/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewCurrentClassification(fields) {
	fetch("/api/classification").then(showResponse).catch(showResponse);
}

function createClassification(fields) {
	fetch("/api/classification", {
		method: "POST",
		body: JSON.stringify(fields),
		headers: { "Content-Type": "application/json" },
	})
		.then(showResponse)
		.catch(showResponse);
}

function editClassification(fields) {
	fetch(`/api/classification`, {
		method: "PUT",
		body: JSON.stringify(fields),
		headers: { "Content-Type": "application/json" },
	})
		.then(showResponse)
		.catch(showResponse);
}

function deleteClassification(fields) {
	fetch(`/api/classification`, { method: "DELETE" }).then(showResponse).catch(showResponse);
}
