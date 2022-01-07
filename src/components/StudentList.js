import React, { useContext, useState, useEffect } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import Student from './Student';
import { Modal, Button, Alert } from 'react-bootstrap';
import AddForm from './Add';
import Pagination from './Pagination';

function StudentList() {
	const { sortedStudents } = useContext(StudentContext);

	const [showAlert, setShowAlert] = useState(false);

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	//const handleShowAlert = () => setShowAlert(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [studentsPerPage] = useState(3);

	const handleShowAlert = () => {
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 1000);
	};

	useEffect(() => {
		handleClose();
		return () => {
			handleShowAlert();
		};
	}, [sortedStudents]);

	const indexOfLastStudent = currentPage * studentsPerPage;
	const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
	const currentStudents = sortedStudents.slice(
		indexOfFirstStudent,
		indexOfLastStudent
	);
	const totalPagesNum = Math.ceil(sortedStudents.length / studentsPerPage);

	return (
		<>
			<div className='table-title'>
				<div className='row'>
					<div className='col-sm-6'>
						<h2>Student Information</h2>
					</div>
					<div className='col-sm-6'>
						<Button
							onClick={handleShow}
							className='btn btn-success'
							data-toggle='modal'
						>
							<i className='material-icons'>&#xE147;</i>{' '}
							<span>Add New Student</span>
						</Button>
					</div>
				</div>
			</div>

			<Alert show={showAlert} variant='success'>
				Student List Updated Succefully!
			</Alert>

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
					{currentStudents.map(student => (
						<tr key={student.id}>
							<Student student={student} />
						</tr>
					))}
				</tbody>
			</table>

			<Pagination
				pages={totalPagesNum}
				setCurrentPage={setCurrentPage}
				currentStudents={currentStudents}
				sortedStudents={sortedStudents}
			/>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Student</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddForm />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close Button
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default StudentList;
