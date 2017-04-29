const React = require('react'),
	Header = require('./header'),
	Sidebar = require('./sidebar'),
	Content = require('./content');

function App() {
	return (
		<div className='main-app'>
			<main className='main-content'>
				<Header />
				<Content />
			</main>
			<Sidebar />
		</div>
	);
}

module.exports = App;