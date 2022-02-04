

export function sortByTime(a, b) {
    let timeA = 0;
    let timeB = 0;
  
    a.segments.forEach(e => {
      timeA += e.duration;
    });
  
    b.segments.forEach(e => {
      timeB += e.duration;
    });
  
    if (timeA > timeB) {
      return 1;
    }
    return -1;
  }