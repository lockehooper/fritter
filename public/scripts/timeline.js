/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewTimeline(fields) {
	fetch(`/api/timeline`, {
		method: "GET",
		body: JSON.stringify(fields),
		headers: { "Content-Type": "application/json" },
	})
		.then(showResponse)
		.catch(showResponse);
}
