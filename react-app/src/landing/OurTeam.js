import React from 'react';
import ty from './images/ty.png';
import cori from './images/cori.png';
import sydney from './images/sydney.png';
import andrew from './images/andrew.png';
import leslie from './images/leslie.png';
import gustavo from './images/gustavo.png';
import matt from './images/matt.png';
import nick from './images/nick.png';
import ahmar from './images/ahmar.png';
import gizella from './images/gizella.png';
import dribbble from './images/dribbble.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import website from './images/website.png';

export default function OurTeam() {
	return (
		<div className="root">
			<div className="ourTeam">
				<p>Our Team!</p>
			</div>
			<div className="paper">
				<div className="div">
					<div item className="profilePic">
						<img src={cori} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/coriagogo">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/pearl-paris/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div className="profilePic">
						<img src={ty} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/TyLippe">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div item xs className="iconItem">
							<a href="https://www.linkedin.com/in/ty-lippe-1432b3194/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div className="profilePic">
						<img src={sydney} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/srsimps19">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/sydney-crumley/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div className="profilePic">
						<img src={andrew} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/drewgoenner">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/andrew-goenner-7947a059/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div item className="profilePic">
						<img src={leslie} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/rleslie1015">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/leslie-rodriguez1994/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div item className="profilePic">
						<img src={gustavo} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/gisturiz">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/gisturiz/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div className="profilePic">
						<img src={matt} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/TamaHills">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/matthew-masters-463422191/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div className="profilePic">
						<img src={nick} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://github.com/NicholasTruson">
								<img src={github} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/nicholas-truson-167599191/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="bottomRow">
					<div className="profilePic">
						<img src={ahmar} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="http://ahmarsworld.blackwidowtech.com/">
								<img src={website} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItems">
							<a href="https://www.linkedin.com/in/ahmar-mansoor-4455b6191/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>

				<div className="div">
					<div item className="profilePic">
						<img src={gizella} alt="" className="pic" />
					</div>
					<div className="iconBox">
						<div className="iconItem">
							<a href="https://dribbble.com/gizellaortiz">
								<img src={dribbble} alt="" className="icons" />
							</a>
						</div>
						<div className="iconItem">
							<a href="https://www.linkedin.com/in/gizella-o-824a13161/">
								<img src={linkedin} alt="" className="icons" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
