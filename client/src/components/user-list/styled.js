import styled from 'styled-components';
const ListContainer = styled.div`
	width: 90%;
	border-radius: 1rem;
	background-color: white;
	margin-right: auto;
	margin-left: auto;
	padding-bottom: 1rem;
	position: relative;
	box-shadow: 1px 1px 10px 1px gray;
`;

const ContainerSearch = styled.div`
	width: 100%;
	border-top-right-radius: 1rem;
	border-top-left-radius: 1rem;
	height: 70px;
	background-color: #5740ba;
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	padding-top: 1rem;
`;
const Search = styled.div`
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;
	width: 40%;
	height: 40px;
	background-color: white;
`;
const StyledInput = styled.input`
	border-color: transparent;
	width: 200px;
`;
const StyledAddUser = styled.div`
	margin-top: 1rem;
	width: 20%;
	margin-right: auto;
	margin-left: auto;
	border-radius: 1rem;
	border-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	background-color: #5740ba;
	color: white;
`;
const IconUser = styled.img`
	filter: invert(1);
`;
export {
	ListContainer,
	ContainerSearch,
	Search,
	StyledInput,
	StyledAddUser,
	IconUser
};
