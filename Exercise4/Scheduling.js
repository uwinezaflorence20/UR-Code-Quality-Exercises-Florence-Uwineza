function roundRobin(jobs, slice, index) {
  let time = 0;
  let queue = jobs.map((job, i) => ({ remaining: job, index: i }));

  while (true) {
    let current = queue.shift();
    let workTime = Math.min(current.remaining, slice);
    current.remaining -= workTime;
    time += workTime;

    if (current.index === index && current.remaining === 0) {
      return time;
    }

    if (current.remaining > 0) {
      queue.push(current);
    }
  }
}