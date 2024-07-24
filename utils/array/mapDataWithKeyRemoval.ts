
export function newImageShape(
  data: any[],
  imagekey: string = 'image',
): any[] {
  return data.map((item) => {
    for (const key in item) {
      if (typeof item[key] === 'string' && key === imagekey) {
      }
    }
    return item;
  });
}

function removeSubstring(
  str: string,
  subStringToRemoveIfExist: string,
): string {
  return str.replace(subStringToRemoveIfExist, '');
}
