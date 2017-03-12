import {
	EMPLOYEE_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state= INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			// action.payload === { prop: 'name', value: 'Jane' } 
			//key interpolation, NOT AN ARRAY!!
			//                    |  |  |  |
			//                    V  V  V  V
			return {...state, [action.payload.prop]: action.payload.value };
		default:
			return state
	}
}