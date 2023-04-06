const App = () => {
	const categories = [
		{ id: 1, title: 'hats' },
		{ id: 2, title: 'jackets' },
		{ id: 3, title: 'sneakers' },
		{ id: 4, title: 'women' },
		{ id: 5, title: 'men' },
	];
	return (
		<div className='categories-container'>
			{categories.map(({ title }) => (
				<div className='category-container'>
					{/* <img/> */}
					<div className='category-body-container'>
            <h2>{title}</h2>
						<p>shop now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
