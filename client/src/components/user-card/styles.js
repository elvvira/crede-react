import styled from 'styled-components';
const ContainerCard = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 5% 20% 10% 20% 10%;
	gap: 3rem;
	justify-content: center;
`;

const UserImage = styled.img`
	border-radius: 100%;
	width: 35px;
`;

const UserName = styled.h2`
	font-size: 1rem;
`;
export { UserImage, ContainerCard, UserName };
