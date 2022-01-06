import React from 'react';

function Student({ student }) {
	return (
		<>
			<td>{student.name}</td>
			<td>{student.email}</td>
			<td>{student.address}</td>
			<td>{student.phone}</td>
			<td>
				<a href='#editEmployeeModal' className='edit' data-toggle='modal'>
					<i className='material-icons' data-toggle='tooltip' title='Edit'>
						&#xE254;
					</i>
				</a>
				<a href='#deleteEmployeeModal' className='delete' data-toggle='modal'>
					<i className='material-icons' data-toggle='tooltip' title='Delete'>
						&#xE872;
					</i>
				</a>
			</td>
		</>
	);
}

export default Student;
