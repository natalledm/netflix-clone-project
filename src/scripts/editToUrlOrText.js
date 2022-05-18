export function textToUrl(name) {
  const removeExtraSpaces = name.trim();
  const lowercaseAll = removeExtraSpaces.toLowerCase();
  const newName = lowercaseAll.replaceAll(" ", "-");

  return newName;
}

export function urlToText(name) {
  const removeExtraSpaces = name.trim();
  const newName = removeExtraSpaces.replaceAll("-", " ");
  const uppercaseInitials = newName.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase(),
  );

  return uppercaseInitials;
}
