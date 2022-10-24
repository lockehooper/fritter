/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewTimeline(fields) {
	fetch(`/api/timeline?type=${fields.type}`).then(showResponse).catch(showResponse);
}
