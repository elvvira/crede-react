import {
	ButtonChange,
	ButtonGenerate,
	EditContainer,
	EditDisplay,
	EditImageUser,
	StyledEdit,
	StyledInputValues
} from './styles';
import BackContainer from '../../components/back-container/BackContainer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Edit = () => {
	const { state } = useLocation();
	const [newImage, setNewImage] = useState(state.userData.profileImage);
	const [userInfo, setUserInfo] = useState({
		name: state.userData.name,
		age: state.userData.age
	});

	return (
		<StyledEdit>
			<EditContainer>
				<BackContainer />
				<EditDisplay>
					<div>
						<EditImageUser src={newImage} alt='' />
						<ButtonGenerate
							onClick={() => {
								generateImage(setNewImage);
							}}
						>
							new image{' '}
						</ButtonGenerate>
					</div>
					<div>
						<div>
							<p>User: </p>
							<StyledInputValues
								type='text'
								name='name'
								id=''
								value={userInfo.name}
								onChange={e =>
									handleChange(userInfo, setUserInfo, 'name', e.target.value)
								}
							/>
						</div>
						<div>
							<p>Age: </p>
							<StyledInputValues
								type='text'
								name='age'
								id=''
								value={userInfo.age}
								onChange={e =>
									handleChange(userInfo, setUserInfo, 'age', e.target.value)
								}
							/>
						</div>
					</div>
				</EditDisplay>
				<ButtonChange
					onClick={() => {
						patchUser(state.userData.userId, userInfo);
					}}
				>
					change
				</ButtonChange>
			</EditContainer>
		</StyledEdit>
	);
};
const generateImage = setNewImage => {
	const randomNumber = 9;
	setNewImage(`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`);
};
const handleChange = (userInfo, setUserInfo, field, value) => {
	setUserInfo({
		...userInfo,
		[field]: value
	});
};
const fetchData = async (url, ...options) => {
	const request = await fetch(url, ...options);
	const data = await request.json();
	return data;
};

const patchUser = async (id, userInfo) => {
	await fetchData(
		`http://localhost:3000/api/user/${id}`,

		{
			method: 'PATCH',
			body: JSON.stringify(userInfo),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		}
	);
};
export default Edit;
