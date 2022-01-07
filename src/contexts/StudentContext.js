import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const StudentContext = createContext();

const StudentContextProvider = props => {
	const [students, setStudent] = useState([
		{
			id: uuidv4(),
			name: 'James Thompson',
			email: 'james@gmail.com',
			address: '12 Park Hills Rd,London, England',
			phone: '003-144-785-0123'
		},
		{
			id: uuidv4(),
			name: 'Joe Deo',
			email: 'joe@gmail.com',
			address: 'Lincon-in Green Street. 77, Leeds, England',
			phone: '(313) 555-5735'
		},
		{
			id: uuidv4(),
			name: 'Bond Smith',
			email: 'smith@outlook.com',
			address: 'Castlefield 85 Street, Manchester, England',
			phone: '0181-235-0805'
		},
		{
			id: uuidv4(),
			name: 'Phil Mike',
			email: 'phil@hotmail.com',
			address: 'Park Hills Street, 53, Liverpool, England',
			phone: '0101-703-3210'
		},
		{
			id: uuidv4(),
			name: 'Martin Blank',
			email: 'martinblank@mail.com',
			address: 'Via Monte Bianco 34, Turin, Italy',
			phone: '(480) 631-2097'
		}
	]);

	useEffect(() => {
		setStudent(JSON.parse(localStorage.getItem('students')));
	}, []);

	useEffect(() => {
		localStorage.setItem('students', JSON.stringify(students));
	});

	const sortedStudents = students.sort((a, b) => (a.name < b.name ? -1 : 1));

	const addStudent = (name, email, address, phone) => {
		setStudent([...students, { id: uuidv4(), name, email, address, phone }]);
	};

	const removeStudent = id => {
		setStudent(students.filter(student => student.id !== id));
	};

	const editStudent = (id, editedStudent) => {
		setStudent(
			students.map(student => (student.id === id ? editedStudent : student))
		);
	};

	return (
		<StudentContext.Provider
			value={{
				sortedStudents,
				students,
				addStudent,
				removeStudent,
				editStudent
			}}
		>
			{props.children}
		</StudentContext.Provider>
	);
};

export default StudentContextProvider;
