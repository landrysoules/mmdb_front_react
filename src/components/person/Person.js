/* @flow */

import React from 'react';
import { IMAGE_PROFILE_PATH_ORIGINAL } from '../../constants/paths';
import PersonalInfo from './PersonalInfo';
import Img from 'react-image';
import SocialLinksContainer from './social_links/SocialLinksContainer';
import { ClipLoader } from 'react-spinners';

const Person = ({ personData }) => {
	return (
		<div className="row">
			<div className="col-md-2" />
			<div className="col-md-2">
				<Img
					width="302px"
					height="453px"
					src={`${IMAGE_PROFILE_PATH_ORIGINAL}/${personData.profile_path}`}
					alt="person's profile"
					loader={<ClipLoader />}
				/>
				<PersonalInfo data={personData} />
			</div>
			<div className="col-md-6">
				<div className="row">
					<div className="col-md-1" />
					<div className="col-md-10">
						<span>
							<h2>
								{personData.name} <SocialLinksContainer id={personData.id} />
							</h2>
						</span>
						<h2>Biography</h2>
						<p>{personData.biography}</p>
					</div>
					<div className="col-md-1" />
				</div>
			</div>
			<div className="col-md-2" />
		</div>
	);
};

export default Person;
