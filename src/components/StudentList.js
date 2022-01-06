import React, { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import Student from './Student';

function StudentList() {
	const { students } = useContext(StudentContext);

	return (
		<>
			<div className='table-title'>
				<div className='row'>
					<div className='col-sm-6'>
						<h2>Student Information</h2>
					</div>
					<div className='col-sm-6'>
						<a
							href='#addEmployeeModal'
							className='btn btn-success'
							data-toggle='modal'
						>
							<i className='material-icons'>&#xE147;</i>{' '}
							<span>Add New Employee</span>
						</a>
					</div>
				</div>
			</div>
			<table className='table table-striped table-hover'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Adress</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{students.map(student => (
						<tr key={student.id}>
							<Student student={student} />
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default StudentList;
