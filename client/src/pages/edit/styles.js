import styled from 'styled-components';

const StyledEdit = styled.div`
	width: 100%;
	height: 100vh;
	background-color: whitesmoke;
	padding-top: 2rem;
`;
const EditContainer = styled.div`
	width: 90%;
	height: 300px;
	border-radius: 1rem;
	background-color: white;
	margin-right: auto;
	margin-left: auto;
	padding-bottom: 1rem;
	box-shadow: 1px 1px 10px 1px gray;
`;
const ContainerHeader = styled.div`
	width: 100%;
	border-top-right-radius: 1rem;
	border-top-left-radius: 1rem;
	height: 70px;
	background-color: #5740ba;
	margin-bottom: 1rem;
	display: flex;
`;

export { StyledEdit, EditContainer, ContainerHeader };
