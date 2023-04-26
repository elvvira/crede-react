import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100%;
	height: 100vh;
	background-color: whitesmoke;
	padding-top: 2rem;
`;
const InfoContainer = styled.div`
	width: 90%;
	height: 300px;
	border-radius: 1rem;
	background-color: white;
	margin-right: auto;
	margin-left: auto;
	padding-bottom: 1rem;
	box-shadow: 1px 1px 10px 1px gray;
`;

const UserImgInfo = styled.img`
	width: 100%;
	border-radius: 1rem;
	border: 1px solid gray;
`;
const StyledActive = styled.div`
	text-align: center;
	font-size: 0.8rem;
	margin-top: 0.5rem;
	color: ${({ active }) => (active ? '#5740ba' : '#gray')};
`;
const UserInfoContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 2rem;
`;
export {
	StyledHeader,
	InfoContainer,
	UserInfoContainer,
	UserImgInfo,
	StyledActive
};
