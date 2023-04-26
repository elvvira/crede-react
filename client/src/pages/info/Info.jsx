import { useLocation } from 'react-router-dom';
import {
	InfoContainer,
	StyledActive,
	StyledHeader,
	UserImgInfo,
	UserInfoContainer
} from './styled';
import BackContainer from '../../components/back-container/BackContainer';

const Info = () => {
	const { state } = useLocation();
	console.log(state);
	return (
		<StyledHeader>
			<InfoContainer>
				<BackContainer></BackContainer>
				<UserInfoContainer>
					<div>
						<UserImgInfo src={state.userData.profileImage} alt='' />
						<StyledActive active={state.userData.active}>
							{state.userData.active ? 'Active' : 'Inactive'}
						</StyledActive>
					</div>

					<div>
						<h2>
							<span>{state.userData.title} </span>
							{state.userData.name}
						</h2>
						<p>
							Age: <span>{state.userData.age}</span>
						</p>
						<p>
							User Name: <span>{state.userData.username}</span>
						</p>
						<p>
							Email: <span>{state.userData.email}</span>
						</p>
					</div>
				</UserInfoContainer>
			</InfoContainer>
		</StyledHeader>
	);
};
export default Info;
