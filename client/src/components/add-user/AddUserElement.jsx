import {
	AddImage,
	ButtonAddContainer,
	ButtonGender,
	Close,
	ContainerActive,
	ContainerAdd,
	ContainerAddImage,
	ContainerText
} from './styles';

const AddUserElement = ({ setAddUser }) => {
	return (
		<ContainerAdd>
			<Close onClick={() => setAddUser(false)}>x</Close>

			<ContainerText>
				<ContainerAddImage>
					<AddImage
						src='https://randomuser.me/api/portraits/men/6.jpg'
						alt=''
					/>
					<div>
						<p>generete image:</p>
						<ButtonGender>Men</ButtonGender>
						<ButtonGender>Woman</ButtonGender>
					</div>
				</ContainerAddImage>
				<div>
					<p>user:</p>
					<input type='text' />
				</div>
				<div>
					<p>email:</p>
					<input type='text' />
				</div>
				<ContainerActive>
					<p>active:</p>
					<input type='checkbox' />
				</ContainerActive>
			</ContainerText>

			<ButtonAddContainer>+ agregar</ButtonAddContainer>
		</ContainerAdd>
	);
};

// const fetchData = async (url, ...options) => {
// 	const request = await fetch(url, ...options);
// 	const data = await request.json();
// 	return data;
// };

// const addNewUser = async (name, email) => {
// 	await fetchData(`http://localhost:3000/api/user`, {
// 		method: 'POST',
// 		body: JSON.stringify({ name: name, email: email }),
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json'
// 		}
// 	});
// };
export default AddUserElement;
