import React from 'react';
import heart from '../../../assets/heart.png';

function RecogList({ rank, count }) {
	return (
		<ul className="recog-list-container">
			{rank.map((person, idx) => {
				return (
					<li className="most-recog-individual" key={idx}>
						<img
							className="most-rec-profile-pic"
							src={person.profile_picture}
							alt="most thanked individual"></img>
						<div className="most-rec-name-to-heart">
							<div className="most-recog-name">
								<p>{`${
									person.first_name
								} ${person.last_name[0].toUpperCase()}`}</p>
							</div>
							<div className="most-recog-progress">
								<progress
									value={person.count}
									max={count}></progress>
							</div>
							<div className="most-recog-heart">
								<p>{person.count} </p>
								<img
									className="heart-img"
									src={heart}
									alt="heart icon"
								/>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default RecogList;
