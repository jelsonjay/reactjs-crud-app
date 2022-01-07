import React, { useContext, useState, useEffect } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { StudentContext } from '../contexts/StudentContext';
import EditForm from './Edit';

function Student({ student }) {
	const { removeStudent } = useContext(StudentContext);

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	useEffect(() => {
		handleClose();
	}, [student]);

	return (
		<>
			<td>{student.name}</td>
			<td>{student.email}</td>
			<td>{student.address}</td>
			<td>{student.phone}</td>
			<td>
				<OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
					<button
						onClick={handleShow}
						className='btn text-warning btn-act'
						data-toggle='modal'
					>
						<i className='material-icons'>&#xE254;</i>
					</button>
				</OverlayTrigger>
				<OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
					<button
						onClick={() => removeStudent(student.id)}
						className='btn text-danger btn-act'
						data-toggle='modal'
					>
						<i className='material-icons'>&#xE872;</i>
					</button>
				</OverlayTrigger>
			</td>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Student</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditForm theStudent={student} />
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

export default Student;
