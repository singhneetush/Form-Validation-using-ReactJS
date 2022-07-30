import React from 'react';
const Card = (formValues) => {
	return (
		<div className='container'>
			<div className='ui message success'>Signed in succesfully</div>
			<div className='ui divider'></div>
			<div>Username is :`${formValues.username} `</div>
			<div>Email is :`${formValues.email}` </div>
		</div>
	);
};
export default Card;
