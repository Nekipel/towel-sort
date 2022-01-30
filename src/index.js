module.exports = function towelSort (matrix) {
  if ((matrix==undefined)||(!matrix)) return [];
  return [].concat(...matrix.map((item, i) => !(i % 2) ? item : item.reverse()))
}
