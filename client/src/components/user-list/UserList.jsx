import { useEffect, useState } from 'react';
import UserCard from '../user-card/UserCard';
import {
	ContainerSearch,
	IconUser,
	ListContainer,
	Search,
	StyledAddUser,
	StyledInput
} from './styled';
import Delete from '../delete/Delete';

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [showTrash, setShowTrash] = useState(false);
	const [addUser, setAddUser] = useState(false);
	const [currentUserId, setCurrentUserId] = useState('');

	console.log(currentUserId);
	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	if (users.length === 0) return <p>wait...</p>;

	return (
		<ListContainer>
			<ContainerSearch>
				<Search>
					<StyledInput type='text' name='' id='' placeholder='Buscar...' />
					<img src='images/magnifying-glass-solid.svg' alt='' />
				</Search>
			</ContainerSearch>

			{users.map(user => {
				return (
					<UserCard
						key={user.userId}
						user={user}
						showTrash={showTrash}
						setShowTrash={setShowTrash}
						setCurrentUserId={setCurrentUserId}
					/>
				);
			})}
			<Delete
				setShowTrash={setShowTrash}
				currentUserId={currentUserId}
			></Delete>
			<StyledAddUser>
				<IconUser src='images/user-plus-solid.svg' alt='' />
				<p>Agregar</p>
			</StyledAddUser>
		</ListContainer>
	);
};

const fetchData = async (url, ...options) => {
	const request = await fetch(url, ...options);
	const data = await request.json();
	return data;
};

const getAllUsers = async setUsers => {
	const data = await fetchData('http://localhost:3000/api/user', {
		method: 'GET'
	});
	setUsers(data);
};

export default UserList;
