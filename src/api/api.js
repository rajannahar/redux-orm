import data from './dummyData';

export function fetchData() {
	return new Promise((resolve, reject) => {
		resolve(data);
		reject(reject);
	});
}
