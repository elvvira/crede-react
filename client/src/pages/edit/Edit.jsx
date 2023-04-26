import { useNavigate } from 'react-router-dom';

import { EditContainer, StyledEdit } from './styles';
import BackContainer from '../../components/back-container/BackContainer';

const Edit = () => {
	const navigate = useNavigate();

	return (
		<StyledEdit>
			<EditContainer>
				<BackContainer></BackContainer>
				<div>user</div>
			</EditContainer>
		</StyledEdit>
	);
};
export default Edit;
