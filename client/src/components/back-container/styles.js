import styled from 'styled-components';

const ContainerBack = styled.div`
	width: 100%;
	border-top-right-radius: 1rem;
	border-top-left-radius: 1rem;
	height: 70px;
	background-color: #5740ba;
	margin-bottom: 1rem;
	display: flex;
`;
const ButtonBack = styled.button`
	background-color: transparent;
	border-color: transparent;
	margin-left: 1rem;
`;
const IconBack = styled.img`
	filter: invert(1);
`;
export { ContainerBack, ButtonBack, IconBack };
