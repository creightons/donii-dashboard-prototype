const React = require('react'),
	Chartist = require('Chartist');

class DonerGraph extends React.Component {
	
	componentDidMount() {
		const data = {
		  labels: [
		  	'Kim M.',
		  	'Ella T.',
		  	'Tara H.',
		  	'Mike Z,',
		  	'Jill B.',
		  	'Jerome V.',
		  	'Mary A.',
		  	'Lance G.',
		  	'Una R.',
		  	'Allison P.',
		  ],
		  series: [
		    [
		    	42,
		    	37,
		    	35,
		    	31,
		    	28,
		    	22,
		    	20,
		    	20,
		    	19,
		    	15,
		    ]
		  ]
		};

		const options = {
		  low: 0
		};

		new Chartist.Bar('#doner-graph', data, options);
	}

	render() {
		return (
			<div className='card'>
				<div className='card-header'>
					Top Doners
				</div>
				<div id='doner-graph' />
			</div>
		);
	}
}

module.exports = DonerGraph;