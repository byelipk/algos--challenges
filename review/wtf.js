function findSmallestRange(queues) {
  let minDiffSoFar = Infinity;
  let minRangeSorFar = [Infinity, -Infinity];

  const K = queues.length;
  const workQueue = [];

  let emptyQueuesCount = 0;
  let previousMinQueueIndex = null;

  while (emptyQueuesCount < K) {

    for (let queueIndex = 0; queueIndex < K; queueIndex += 1) {

      if (previousMinQueueIndex && queueIndex !== previousMinQueueIndex) {
        continue;
      }

      const queue = queues[queueIndex];

      if (queue.length) {
        workQueue.push({value: queue.shift(), q: queueIndex});

        if (queue.length === 0) {
          emptyQueuesCount += 1;
        }
      }

      if (workQueue.length === K) {
        break;
      }
    }

    // Sort work queue
    workQueue.sort((a,b) => a.value - b.value);

    console.log('QUEUES:', queues);
    console.log('WORKER Q:', workQueue);

    // Find diff between min and max
    const diff =  Math.abs(workQueue[workQueue.length - 1].value - workQueue[0].value);

    // Update minDiffSoFar if we've found a smaller range of values
    if (diff < minDiffSoFar) {
      minDiffSoFar = diff;
      minRangeSorFar[0] = workQueue[0].value;
      minRangeSorFar[1] = workQueue[workQueue.length - 1].value;
    }

    if (emptyQueuesCount < K) {
      while (workQueue.length === K) {
        const previousMin = workQueue.shift();
        if (queues[previousMin.q].length) {
          previousMinQueueIndex = previousMin.q;
        }
        else {
          workQueue.push(previousMin);
        }
      }
    }

    console.log('CURR DIFF:', diff);
    console.log('MIN DIFF:', minDiffSoFar);
    console.log('MIN RANGE:', minRangeSorFar);
    console.log();

  }

  return minRangeSorFar;
}

list1 = [4, 10, 15, 24, 26];
list2 = [0, 9, 12, 20];
list3 = [5, 18, 22, 30];

console.log(findSmallestRange([list1, list2, list3]));
