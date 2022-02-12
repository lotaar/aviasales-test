export const sortByPrice = (tickets) => {
  return tickets.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};

export const sortByTime = (tickets) => {
  return tickets.sort((a, b) => {
    let timeA = 0;
    let timeB = 0;

    a.segments.forEach((e) => {
      timeA += e.duration;
    });

    b.segments.forEach((e) => {
      timeB += e.duration;
    });
    if (timeA > timeB) {
      return 1;
    }
    return -1;
  });
};
