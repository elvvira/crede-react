import styled from 'styled-components';
const ContainerCard = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 5% 20% 8% 20% 20%;
	gap: 2rem;
	justify-content: center;
	margin-bottom: 0.2rem;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 90%;
		transform: translate(5%);
		height: 1px;
		background-color: rgb(240, 240, 240);
		bottom: -3px;
	}
`;

const UserImage = styled.img`
	border-radius: 100%;
	width: 40px;
	border: 2px solid ${({ active }) => (active ? '#5740ba' : '#C1523A')};
`;

const UserName = styled.h2`
	font-size: 1rem;
`;
const ContainerButton = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
const ButtonProperties = styled.button`
	height: 40px;
	padding: 1rem;
	border-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	background-color: transparent;
`;
export {
	UserImage,
	ContainerCard,
	UserName,
	ButtonProperties,
	ContainerButton
};
