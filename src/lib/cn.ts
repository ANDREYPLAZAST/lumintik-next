/** Compose conditional class names. Filters out falsy values and joins with spaces. */
export function cn(
  ...values: Array<string | number | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}
