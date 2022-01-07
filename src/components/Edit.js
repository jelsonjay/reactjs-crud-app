import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { StudentContext } from '../contexts/StudentContext';

const Edit = ({ theStudent }) => {
	const id = theStudent.id;

	const [name, setName] = useState(theStudent.name);
	const [email, setEmail] = useState(theStudent.email);
	const [address, setAddress] = useState(theStudent.address);
	const [phone, setPhone] = useState(theStudent.phone);

	const { editStudent } = useContext(StudentContext);

	const editedStudent = { id, name, email, address, phone };

	const handleSubmit = e => {
		e.preventDefault();
		editStudent(id, editedStudent);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Full Name'
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='email'
					placeholder='Email Address'
					name='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					as='textarea'
					placeholder='Address'
					rows={3}
					name='address'
					value={address}
					onChange={e => setAddress(e.target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Phone'
					name='phone'
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
			</Form.Group>
			<Button variant='success' type='submit' block>
				Edit Student
			</Button>
		</Form>
	);
};

export default Edit;
