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
	const midpoint = Math.floor(lo + (hi - lo) / 2);
	const pivotValue = array[midpoint];

	let i = lo - 1;
	let j = hi + 1;

	while (true) {
		do {
			i++;
		} while (array[i] < pivotValue);
		do {
			j--;
		} while (array[j] > pivotValue);

		if (i < j) {
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		} else {
			return j;
		}
	}
}

// O(n log n) time
// O(1) space
// Assumes all numbers in array are part of the sequence (n, n+1, n+2, ...)
function findIt(array) {
	if (!array || !array.length) throw new Error("Needs array");

	// O(n log n) but it destroys the input array
	// because it's an in-place sort.
	qsort(array);

	let runningSum = 0;

	for (var i = 0; i < array.length; i++) {
		const theLastNumber = array[i];
		const theSumWithoutDuplicates = theLastNumber * (theLastNumber + 1) / 2;

		runningSum += theLastNumber;

		if (runningSum > theSumWithoutDuplicates) {
			return runningSum - theSumWithoutDuplicates;
		}
	}

	throw new Error("No duplicates found.");
}

function binarySearch(array, value) {
	let min = 0;
	let max = array.length - 1;

	while (min < max) {
		let midpoint = Math.floor(min + (max + min) / 2);

		if (array[midpoint] === value) {
			return midpoint;
		} else if (array[midpoint] < value) {
			min = midpoint;
		} else {
			max = midpoint;
		}
	}
	return -1;
}

// 1. Array of integers
// 2. Integers are in the range 1..n
// 3. Integers are not necessarily part of the sequence (n, n+1, n+2, ... n+n)
// 4. Length of array is n + 1
//
// Can we use a divide and conquer approach?
// Binary search assumes the input is sorted or mostly sorted. We
// can't make that kind of guarentee here. That means we can't reduce
// the problem in half by comparing the actual integers in the array
// to each other. Is there another way we can reduce the problem in half?
//
// One way we could reduce the problem in half is by asking how many
// items should fall within some subrange, then comparing that answer
// with how many items actually fall within that subrange. If there are
// more items in the subrange
function findItAnotherWay(array) {
	let floor = 1; // Integers range from 1..n
	let ceiling = array.length - 1;

	while (floor < ceiling) {
		const distance = ceiling - floor;
		const midpoint = Math.floor(floor + (distance) / 2);
		const lowerRangeFloor = floor;
		const lowerRangeCeiling = midpoint;
		const upperRangeFloor = midpoint + 1;
		const upperRangeCeiling = ceiling;

		const distinctPossibleIntegersInLowerRange =
			lowerRangeCeiling - lowerRangeFloor + 1;

		const itemsInLowerRange = 0;
		array.forEach(function(item) {
			if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
				itemsInLowerRange += 1;
			}
		});

		if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
			floor = lowerRangeFloor;
			ceiling = lowerRangeCeiling;
		} else {
			floor = upperRangeFloor;
			ceiling = upperRangeCeiling;
		}
	}

	return floor;
}

module.exports = { findIt, findItAnotherWay };
