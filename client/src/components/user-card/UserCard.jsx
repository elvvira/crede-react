import { useNavigate } from 'react-router-dom';
import {
	ButtonProperties,
	ContainerButton,
	ContainerCard,
	UserImage,
	UserName
} from './styles';

const UserCard = ({ user, setShowTrash, setCurrentUserId }) => {
	const navigate = useNavigate();

	const { name, email, profileImage, active } = user;
	return (
		<ContainerCard>
			<UserImage active={active} src={profileImage} alt='' />
			<UserName>{name}</UserName>
			<div>
				<p>{active ? 'Active' : 'Inactive'}</p>
			</div>
			<p>{email}</p>
			<ContainerButton>
				<ButtonProperties>
					<img
						onClick={() => navigate('/edit', { state: { userData: user } })}
						src='images/pen-to-square-solid.svg'
						alt=''
					/>
				</ButtonProperties>

				<ButtonProperties>
					<img
						onClick={() => {
							setShowTrash(true);
							setCurrentUserId(user.userId);
						}}
						src='images/trash-solid.svg'
						alt=''
					/>
				</ButtonProperties>
				<ButtonProperties>
					<img
						onClick={() => navigate('/info', { state: { userData: user } })}
						src='images/circle-info-solid.svg'
						alt=''
					/>
				</ButtonProperties>
			</ContainerButton>
		</ContainerCard>
	);
};
export default UserCard;
