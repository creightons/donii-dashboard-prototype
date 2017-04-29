const React = require('react'),
	TopCardRow = require('./top-card-row'),
	DonerGraph = require('./doner-graph');

function Content() {
	return (
		<div className='content'>
			<div className='card-container'>
				<TopCardRow />
				<DonerGraph />
			</div>
			<div className='timeline-container'>
				bye
			</div>
		</div>
	);
}

module.exports = Content;