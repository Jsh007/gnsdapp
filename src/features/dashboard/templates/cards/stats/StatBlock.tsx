import './StatBlock.css';

import {Language, PeopleAlt} from '@mui/icons-material';

import React from 'react';
import Stat from './Stat';

// Import {type StatProps} from 'types/propTypes';
// import Stat from '../../../../../components/cards/Stat';

/*
1. Template Level components should solely exist for rendering data on the Ui using Components (Atoms, molecules and Organisms)
2. They should simply receive that data to render and pass it on to the components for rendering;
modifying (injecting and removing fields) the data if necessary, performing conditonal checks to determine what data to pass on to what component
or what component to render at a gven time.
2. They should have no idea how the data is being used or processed by the components.

This Template fetches (or Receives) a data prop of type <array of objects> ([{},{}]) with the following structure:
[
{
  id: Number,
  label: String
  value: Number
  timestamp: Date
  icon: String (Icon label name) - you can include this field in the DB
}
]
some of the fields like; icon should be injected into the various data objects from here because it doesn't come with it from the Backend

*/

function StatBlock() {
	/*
	This data will be receved in the props or fetchedd from RTK Global state in production
	*/
	const statData = [
		{
			id: 1,
			label: 'Total Signups',
			value: 3,
			iconType: 'user',
			icon: 'group',
		},
		{
			id: 2,
			label: 'Total Domains',
			value: 32,
			iconType: 'domain',
			icon: 'globe',
		},
		{
			id: 3,
			label: 'Signups Today',
			value: 1,
			iconType: 'user',
			icon: 'group',
		},
		{
			id: 4,
			label: 'Domains Today',
			value: 12,
			iconType: 'domain',
			icon: 'globe',
		},
	];
	return (
		<div className='stat-block'>
			{/* <h3>Stat Block Widget</h3> */}
			{statData.map((item, index) => (
				<Stat key={item.id} data={item} />
			))}
			{/* <Stat
					key={item.id}
					data={item}
					icon={
						item.iconType === 'user' ? (
							<PeopleAlt className='card-icon' style={{fontSize: 60}} />
						) : (
							<Language className='card-icon' style={{fontSize: 60}} />
						)
					}
				/>
			))} */}

			{/* <Stat />
			<Stat />
			<Stat /> */}
		</div>
	);
}

export default StatBlock;
