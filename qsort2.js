function qsort(array, lo, hi) {
	if (array.length < 2) return array;
	if (lo === undefined) lo = 0;
	if (hi === undefined) hi = array.length - 1;

	if (lo < hi) {
		const pivotIndex = partition(array, lo, hi);
		qsort(array, lo, pivotIndex);
		qsort(array, pivotIndex + 1, hi);
	}

	return array;
}

function partition(array, lo, hi) {
	const pivotValue = array[Math.floor(lo + (hi - lo) / 2)];

	let i = lo - 1;
	let j = hi + 1;

	while (true) {
		do { i++ } while (array[i] < pivotValue);
		do { j-- } while (array[j] > pivotValue);

		if (i < j) {
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		} else {
			return j;
		}
	}
}

console.log(qsort([3,2,1]))
