import { useEffect, useState } from 'react';
import UserCard from '../user-card/UserCard';
import { ListContainer } from './styled';

const UserList = () => {
	const [users, setUsers] = useState([]);
	console.log(users);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	if (users.length === 0) return <p>wait...</p>;

	return (
		<ListContainer>
			{users.map(user => {
				return <UserCard key={user.userId} {...user} />;
			})}
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
