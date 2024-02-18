export const isDeepEqual = (
  obj1: Object,
  obj2: Object,
  ...exceptions: string[]
) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length != keys2.length) {
    return false;
  }

  for (let key of keys1) {
    let isException = false;
    exceptions.map((exception) => {
      if (key === exception) {
        isException = true;
      }
    });
    if (isException) continue;
    if (
      typeof obj1[key as keyof typeof obj1] ===
      'object'
    ) {
      if (
        !keys2.includes(key) ||
        !isDeepEqual(
          obj1[key as keyof typeof obj1],
          obj2[key as keyof typeof obj2]
        )
      ) {
        return false;
      }
    } else {
      if (
        !keys2.includes(key) ||
        !(
          obj1[key as keyof typeof obj1] ===
          obj2[key as keyof typeof obj2]
        )
      ) {
        return false;
      }
    }
  }

  return true;
};
