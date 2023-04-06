import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation/navigation.component';
const Temp = () => <div>Temp</div>;
const App = () => (

	<Routes>
		<Route
			path='/'
			element={<NavigationBar />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route path='shop' element={<Temp />} />
		</Route>
	</Routes>
);

export default App;
