/**
 * http://usejsdoc.org/
 */
import React from 'react';
import User from '../../model/User';


export default function UserView({user}){
	let uname = "";
	console.log("Username is - ", user.firstName);
	if (user.firstName === null || user.firstName === "") {
		uname = "No First Name";
	} else {
		uname = user.firstName;
	}
	return (
		<div>
			<h1>Welcome to User View </h1>
			<dl>
			  <dt>Username: </dt>
			  <dd>{user.userName}</dd>
				<dt>First Name:</dt>
				<dd>{uname}</dd>
			</dl>
		</div>
	);
}
