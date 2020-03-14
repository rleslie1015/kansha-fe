import { createStore } from 'redux';
import { userReducer } from '../../store/reducers/user-reducer';

const testState = {
	user: {
		profile: {
			first_name: 'Test',
			last_name: 'User',
			org_name: 'Org 1',
			org_id: '1',
			job_title: 'admin',
			user_type: 'admin',
			department: 'admin',
		},
		isOnboarding: false,
		isOnboardingLoading: false,
		isLoggingIn: false,
		isUploading: false,
		isUpdating: false,
		error: null,
		authenticated: false,
	},
};

export const testAdminUser = createStore(userReducer, testState);
