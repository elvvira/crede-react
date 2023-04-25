import { ContainerCard, UserImage, UserName } from './styles';

const UserCard = ({ name, email, profileImage, active }) => {
	return (
		<ContainerCard>
			<UserImage src={profileImage} alt='' />
			<UserName>{name}</UserName>
			<div>
				<p>{active ? 'Active' : 'Inactive'}</p>
			</div>
			<p>{email}</p>
			<button>delete</button>
		</ContainerCard>
	);
};
export default UserCard;
