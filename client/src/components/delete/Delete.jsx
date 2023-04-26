import {
	ButtonNo,
	ButtonYes,
	ButtonsContainerSelect,
	ContainerTrash,
	Message
} from './styles';

const Delete = ({ setShowTrash, currentUserId }) => {
	return (
		<ContainerTrash showTrash={showTrash}>
			<Message>¿Estás seguro? Esta acción no tiene vuelta atrás</Message>
			<ButtonsContainerSelect>
				<ButtonNo onClick={() => setShowTrash(false)}>cancel</ButtonNo>
				<ButtonYes onClick={() => deleteUser(currentUserId)}>yes</ButtonYes>
			</ButtonsContainerSelect>
		</ContainerTrash>
	);
};

const fetchData = async (url, ...options) => {
	const request = await fetch(url, ...options);
	const data = await request.json();
	return data;
};

const deleteUser = async currentUserId => {
	const data = await fetchData(
		`http://localhost:3000/api/user/${currentUserId}`,
		{
			method: 'DELETE'
		}
	);
	setUsers(data);
};

export default Delete;
