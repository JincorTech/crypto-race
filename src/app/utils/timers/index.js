const formatTS = (ts) => {
  const unix = Math.floor(ts / 1000);
  const h = Math.floor(unix / 3600);
  const m = Math.floor((unix % 3600) / 60);
  const s = Math.floor(unix % 3600 % 60);

  const withZero = (num) => (num < 10 ? `0${num}` : num);

  return {
    h: h > 0 ? withZero(h) : '00',
    m: m > 0 ? withZero(m) : '00',
    s: s > 0 ? withZero(s) : '00'
  };
};

export default { formatTS };
