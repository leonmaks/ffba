export const sort = (dicarray, sortKey, reverse = false) => {
  const dic_ = {}
  Object.keys(dicarray).map(k_ => [k_, dicarray[k_]])
    .sort((first, second) => !reverse ?
      first[1][sortKey] - second[1][sortKey] :
      second[1][sortKey] - first[1][sortKey])
    .forEach(en_ => dic_[en_[0]] = en_[1])
  return dic_
}
