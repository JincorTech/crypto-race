const formatTS = (ts) => {
  const unix = Math.floor(ts / 1000);
  const h = Math.floor(unix / 3600);
  const m = Math.floor((unix % 3600) / 60);
  const s = Math.floor(unix % 3600 % 60);

  const withZero = (num) => (num < 10 ? `0${num}` : num);

  return { h: withZero(h), m: withZero(m), s: withZero(s) };
};

export default { formatTS };
