import styled from 'styled-components';

const ContainerTrash = styled.div`
	position: absolute;
	background-color: #5740ba;
	border-radius: 1rem;
	/* border: 5px solid #c1523a; */
	left: 200px;
	top: 100px;
	display: flex;
	width: 50%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	text-align: center;
	color: white;
	display: ${({ showTrash }) => (showTrash ? 'block' : 'none')};
`;

const ButtonsContainerSelect = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
`;

const Button = styled.button`
	border-radius: 1rem;
	padding: 0.5rem;
	width: 60px;
`;
const ButtonYes = styled(Button)`
	border: 1px solid white;
	color: white;
`;
const ButtonNo = styled(Button)`
	background-color: #c23314;
	color: black;
	font-weight: bold;
`;
const Message = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
`;
export { ContainerTrash, Message, ButtonsContainerSelect, ButtonYes, ButtonNo };
