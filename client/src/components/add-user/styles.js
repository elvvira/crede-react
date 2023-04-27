import styled from 'styled-components';

const ContainerAdd = styled.div`
	position: absolute;
	width: 30%;
	height: 320px;
	bottom: 1rem;
	left: 35%;
	border-radius: 1rem;
	border: 2px solid #5740ba;
	background-color: white;
	box-shadow: 1px 1px 10px 1px gray;
	color: #5740ba;
	display: block;
`;
const Close = styled.button`
	background-color: #5740ba;
	border-radius: 1rem;
	color: white;
	position: relative;
	right: -10%;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;
const ButtonAddContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 40px;
	background-color: #5740ba;
	border-bottom-right-radius: 0.8rem;
	border-bottom-left-radius: 0.8rem;
	bottom: 0;
	font-size: 1rem;
	color: white;
	font-weight: bold;
	text-align: center;
	padding-top: 0.5rem;
`;
const ContainerText = styled.div`
	margin-left: 1.5rem;
`;
const ContainerAddImage = styled.div`
	display: flex;
`;
const AddImage = styled.img`
	width: 60px;
	height: 60px;
	background-color: gray;
	margin-right: 10px;
`;

const ButtonGender = styled.button`
	background-color: #5740ba;
	box-shadow: 1px 1px 5px 0px gray;

	color: white;
	margin-right: 7px;
	border-radius: 1rem;
`;
const ContainerActive = styled.div`
	display: flex;
`;
export {
	ContainerAdd,
	ButtonAddContainer,
	Close,
	ContainerText,
	AddImage,
	ContainerAddImage,
	ButtonGender,
	ContainerActive
};
