import {
	ButtonChange,
	ButtonGenerate,
	EditContainer,
	EditDisplay,
	EditImageUser,
	StyledEdit
} from './styles';
import BackContainer from '../../components/back-container/BackContainer';
import { useLocation } from 'react-router-dom';

const Edit = () => {
	const { state } = useLocation();

	return (
		<StyledEdit>
			<EditContainer>
				<BackContainer />
				<EditDisplay>
					<div>
						<EditImageUser src={state.userData.profileImage} alt='' />
						<ButtonGenerate>generate image</ButtonGenerate>
					</div>
					<div>
						<div>
							<p>User: </p>
							<input type='text' name='' id='' value='jijiji' />
							<ButtonChange>change</ButtonChange>
						</div>
						<div>
							<p>Email: </p>
							<input type='text' name='' id='' value='jijiji' />
							<ButtonChange>change</ButtonChange>
						</div>
					</div>
				</EditDisplay>
			</EditContainer>
		</StyledEdit>
	);
};
export default Edit;
