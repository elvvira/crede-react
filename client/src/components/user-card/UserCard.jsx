import {
	ButtonProperties,
	ContainerButton,
	ContainerCard,
	UserImage,
	UserName
} from './styles';

const UserCard = ({ name, email, profileImage, active }) => {
	return (
		<ContainerCard>
			<UserImage src={profileImage} alt='' />
			<UserName>{name}</UserName>
			<div>
				<p>{active ? 'Active' : 'Inactive'}</p>
			</div>
			<p>{email}</p>
			<ContainerButton>
				<ButtonProperties>
					<img src='images/pen-to-square-solid.svg' alt='' />
				</ButtonProperties>

				<ButtonProperties>
					<img src='images/trash-solid.svg' alt='' />
				</ButtonProperties>
				<ButtonProperties>
					<img src='images/circle-info-solid.svg' alt='' />
				</ButtonProperties>
			</ContainerButton>
		</ContainerCard>
	);
};
export default UserCard;
