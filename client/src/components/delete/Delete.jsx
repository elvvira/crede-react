import {
	ButtonNo,
	ButtonYes,
	ButtonsContainerSelect,
	ContainerTrash,
	Message
} from './styles';

const Delete = ({ showTrash, setShowTrash, currentUserId, setUsers }) => {
	return (
		<ContainerTrash showTrash={showTrash}>
			<Message>¿Estás seguro? Esta acción no tiene vuelta atrás</Message>
			<ButtonsContainerSelect>
				<ButtonNo onClick={() => setShowTrash(false)}>cancel</ButtonNo>
				<ButtonYes
					onClick={() => {
						deleteUser(currentUserId, setUsers), setShowTrash(false);
					}}
				>
					yes
				</ButtonYes>
			</ButtonsContainerSelect>
		</ContainerTrash>
	);
};

const fetchData = async (url, ...options) => {
	const request = await fetch(url, ...options);
	const data = await request.json();
	return data;
};

const deleteUser = async (currentUserId, setUsers) => {
	const jsonData = await fetchData(
		`http://localhost:3000/api/user/${currentUserId}`,
		{
			method: 'DELETE'
		}
	);
	setUsers(jsonData);
};

export default Delete;
