const React = require('react');

const donationData = [{
	date: 'Expected: 5/8/17',
	description: 'Laurie S. is donating 6 pairs of shoes',
}, {
	date: 'Expected: 5/8/17',
	description: 'Joey B. is donating a Macbook Air',
}, {
	date: 'Expected: 5/11/17',
	description: 'Tim L. is donating a couch',
}, {
	date: 'Expected: 5/15/17',
	description: 'Mary C. is donating some paintings',
}, {
	date: 'Expected: 5/16/17',
	description: 'Margaret is donating a mattress',
}];

function Timeline() {
	return (
		<div>
			<div className='timeline-header'>
				In-Progress Donations
			</div>
			<ul className='timeline'>
				{donationData.map(data => {
					return (
						<li className='card timeline-card'>
							<div className='timeline-expected-date'>
								{data.date}
							</div>
							<div className='timeline-donation-description'>
								{data.description}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

module.exports = Timeline;