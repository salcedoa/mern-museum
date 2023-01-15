/* Helper functions for rendering information */

// converts date from UTC date time to custom format (1st Jan 2023)
export const convertDate = (date) => {
  let rawDate = new Date(date);
  return`${rawDate.getDate()} ${rawDate.toLocaleString('default', { month: 'short' })} ${rawDate.getFullYear()}`;
}