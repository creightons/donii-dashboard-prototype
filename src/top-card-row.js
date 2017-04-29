const React = require('react');

function TopCardRow() {
	const userImpact = `
		Dear Sage - thank you so much for
		your generous donation of furniture.
		We're placing a family of 3 in
		transitional housing this week.
		We're so grateful for your support!
	`;

	return (
		<div className='card-row'>
			<div className='card flex-card total-value-card'>
				<div className='card-header'>
					Total Value
				</div>
				<div className='total-value-display'>
					$8,736.26
				</div>
			</div>
			<div className='card flex-card wishlist-card'>
				<div className='card-header'>
					Top Wishlist Items
				</div>
				<ul className='wish-list-summary'>
					<li className='wish-list-item'>Outerware</li>
					<li className='wish-list-item'>Appliances</li>
					<li className='wish-list-item'>Backpacks</li>
				</ul>
			</div>
			<div className='card flex-card user-impact-card'>
				<div className='card-header'>
					Recent User Impact
				</div>
				<p className='user-impact-story'>{userImpact}</p>
			</div>
		</div>
	);
}

module.exports = TopCardRow;