import styled from 'styled-components';

const ContainerAdd = styled.div`
	position: absolute;
	width: 20%;
	height: 300px;
	bottom: 1rem;
	border-radius: 1rem;
	border: 2px solid #5740ba;
	background-color: white;
	box-shadow: 1px 1px 10px 1px gray;
	color: black;
	display: ${({ addUser }) => (addUser ? 'block' : 'none')};
`;
const Close = styled.button`
	border: 1px solid black;
	position: relative;
	right: 100px;
	margin-top: 1rem;
`;
const ButtonAddContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 40px;
	background-color: #5740ba;
	border-bottom-right-radius: 0.8rem;
	border-bottom-left-radius: 0.8rem;
	bottom: 0;
	font-size: 2rem;
`;
const ButtonAdd = styled.button`
	color: white;
	font-weight: bold;
`;
export { ContainerAdd, ButtonAddContainer, ButtonAdd, Close };
