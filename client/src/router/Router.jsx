import { Route, Routes } from 'react-router-dom';
import Info from '../pages/info/Info';
import Home from '../pages/home/Home';
import Delete from '../components/delete/Delete';
import Edit from '../pages/edit/Edit';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'/info'} element={<Info />} />

			<Route path={'/edit'} element={<Edit />} />
		</Routes>
	);
};
export default Router;
