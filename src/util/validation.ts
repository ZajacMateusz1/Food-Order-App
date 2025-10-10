export function isNotEmpty(value: string) {
  if (value.trim().length > 0) return true;
  return false;
}
export function isEmail(value: string) {
  const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
  return emailRegex.test(value);
}
export function isValidZipCode(value: string) {
  const zipCodeRegex = /^\d{2}-\d{3}$/;
  return zipCodeRegex.test(value);
}
