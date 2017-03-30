import {fetchData} from '../api/api';

export function loadMockData() {
	return function(dispatch) {
		fetchData().then(data => {
			dispatch({
				type: "DATA_LOADED",
				payload: data
			})
		});
	}
}