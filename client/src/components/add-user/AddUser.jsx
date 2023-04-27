import { ButtonAdd, ButtonAddContainer, Close, ContainerAdd } from './styles';

const AddUser = (addUser, setAddUser) => {
	return (
		<ContainerAdd addUser={addUser}>
			<Close onClick={() => setAddUser(false)}>x</Close>
			<div>
				<div>
					<p>user:</p>
					<input type='text' />
				</div>
				<div>
					<p>email:</p>
					<input type='text' />
				</div>
				<div>
					<p>active:</p>
					<input type='checkbox' />
				</div>
			</div>
			<ButtonAddContainer>
				<ButtonAdd>+ agregar</ButtonAdd>
			</ButtonAddContainer>
		</ContainerAdd>
	);
};
export default AddUser;
