import { useNavigate } from 'react-router-dom';
import { ButtonBack, ContainerBack, IconBack } from './styles';

const BackContainer = () => {
	const navigate = useNavigate();
	return (
		<ContainerBack>
			<ButtonBack onClick={() => navigate('/')}>
				{' '}
				<IconBack src='images/arrow-left-solid.svg' alt='' />{' '}
			</ButtonBack>
		</ContainerBack>
	);
};
export default BackContainer;
