import styled from 'styled-components';

const StyledEdit = styled.div`
	width: 100%;
	height: 100vh;
	background-color: whitesmoke;
	padding-top: 2rem;
`;
const EditContainer = styled.div`
	width: 60%;
	height: 300px;
	border-radius: 1rem;
	background-color: white;
	margin-right: auto;
	margin-left: auto;
	padding-bottom: 1rem;
	box-shadow: 1px 1px 10px 1px gray;
	display: flex;
	flex-direction: column;
	align-items: center;
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
const EditDisplay = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 1rem;
	margin-bottom: 1rem;
`;
const EditImageUser = styled.img`
	width: 80%;
	border-radius: 2rem;
	border: 5px solid gray;
	margin-bottom: 0.5rem;
`;
const Button = styled.button`
	border: 1px solid gray;
	color: white;
	border-radius: 0.5rem;
	margin-left: 0.5rem;
`;
const StyledInputValues = styled.input`
	width: 200px;
`;
const ButtonChange = styled(Button)`
	background-color: #5740ba;
	width: 40%;
	height: 40px;
`;
const ButtonGenerate = styled(Button)`
	background-color: gray;
	width: 90px;
`;
export {
	StyledEdit,
	EditContainer,
	ContainerHeader,
	EditDisplay,
	EditImageUser,
	ButtonChange,
	ButtonGenerate,
	StyledInputValues
};
