const React = require('react');

function TableHeaderRow({ headers }) {
	return (
		<div className='table-row'>
			{headers.map(title => {
				return (
					<div className='table-cell table-cell-header'>{title}</div>
				);
			})}
		</div>
	);
}

function TableRow({ entries }) {
	return (
		<div className='table-row'>
			{entries.map(entry => {
				return (
					<div className='table-cell table-cell-item'>{entry}</div>
				);
			})}
		</div>
	);
}

function GroupTable() {
	const headers = [ 'Team', 'Member Count', 'Top Doner Category' ];
	const rows = [
		[ 'Alpha', 3, 'Instruments' ],
		[ 'Beta', 5, 'Appliances' ],
		[ 'Gamma', 2, 'Clothes' ],
		[ 'Delta', 3, 'Books' ],
		[ 'Epsilon', 6, 'Furniture' ],
	];

	return (
		<div className='card'>
			<div className='card-header'>
				Employee Doner Groups
				<div className='table'>
					<TableHeaderRow headers={headers} />
					{rows.map(row => {
						return <TableRow entries={row} />
					})}
				</div>
			</div>
		</div>
	);
}

module.exports = GroupTable;