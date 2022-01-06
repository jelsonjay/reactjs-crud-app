import StudentList from './components/StudentList';
import StudentContextProvider from './contexts/StudentContext';
function App() {
	return (
		<StudentContextProvider>
			<div className='container-xl mt-4'>
				<div className='tabel-responsive'>
					<div className='table-wrapper'>
						<StudentList />
					</div>
				</div>
			</div>
		</StudentContextProvider>
	);
}

export default App;
