export default function compareArrays(array1, array2) {
  if (
    array1.lenght === array2.lenght &&
    array1.every((element, index) => element === array2[index])
  ) {
    return true;
  } else {
    return false;
  }
}
