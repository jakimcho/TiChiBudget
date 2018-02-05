/**
 * http://usejsdoc.org/
 */
import React from 'react';
import User from '../../models/Person';


export default function UserView({person}){
	let uname = "";
	console.log("Username is - ", person.firstName);
	if (user.firstName === null || person.firstName === "") {
		uname = "No First Name";
	} else {
		uname = person.firstName;
	}
	return (
		<div>
			<h1>Welcome to User View </h1>
			<dl>
			  <dt>Username: </dt>
			  <dd>{person.userName}</dd>
				<dt>Password: </dt>
			  <dd>{person.password}</dd>
				<dt>First Name:</dt>
				<dd>{uname}</dd>
			</dl>
		</div>
	);
}
