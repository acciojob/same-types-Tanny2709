function isSameType(value1, value2) {
  // Check if both are NaN (NaN !== NaN is true)
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Else compare their typeof
  return typeof value1 === typeof value2;
}
