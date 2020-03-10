import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import heart from '../../../assets/heart.png';

function MostRecog() {
	const [filter, setFilter] = useState('weeks');
	const [rank, setRank] = useState([]);
	const [count, setCount] = useState();

	console.log(rank, 'this is the rank');
	console.log(filter, 'filter');

	useEffect(() => {
		axiosWithAuth()
			.get(`/reports/top?type=recipient&limit=5&time=${filter}`)
			.then(res => {
<<<<<<< HEAD
				setRank(res.data.employees);
				setCount(res.data.count);
				console.log(res);
||||||| merged common ancestors
				console.log(res);
=======
				// console.log(res);
>>>>>>> e7ef5a6ffa6e4e0b6e16cb52d9b49dc9c4867c60
			})
			.catch(err => {
				console.log(err);
			});
<<<<<<< HEAD
	}, [filter]);

	const handleTime = e => {
		e.preventDefault();
		setFilter(e.target.value);
	};

	return (
		<div className="most-recog-container">
			<select
				onChange={handleTime}
				style={{
					border: 'none',
					fontWeight: 'bold',
					color: 'black',
					fontSize: '2rem',
					width: '25rem',
				}}
				id="cars">
				<option value="weeks">Weekly Leader Board</option>
				<option value="months">Monthly Leader Board</option>
				<option value="years">Yearly Leader Board</option>
			</select>

			{rank.map(person => {
				return (
					<div
						className="most-recog-individual"
						key={person.recipient}>
						<img
							className="most-rec-profile-pic"
							src={person.profile_picture}
							alt="most thanked individual"></img>
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
							<p>
								{person.count}
								<img
									className="heart-img"
									src={heart}
									alt="heart icon"
								/>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
||||||| merged common ancestors
	}, []);
	return (
		<div>
			<h1>andrew was here</h1>
		</div>
	);
=======
	}, []);
	return <div></div>;
>>>>>>> e7ef5a6ffa6e4e0b6e16cb52d9b49dc9c4867c60
}
export default MostRecog;
