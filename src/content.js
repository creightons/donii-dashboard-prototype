const React = require('react'),
	TopCardRow = require('./top-card-row'),
	DonerGraph = require('./doner-graph'),
	GroupTable = require('./group-table'),
	Timeline = require('./timeline');

function Content() {
	return (
		<div className='content'>
			<div className='card-container'>
				<TopCardRow />
				<DonerGraph />
				<GroupTable />
			</div>
			<div className='timeline-container'>
				<Timeline />
			</div>
		</div>
	);
}

module.exports = Content;