// import dayjs from 'dayjs';

// /**
//  * Converts a timestamp to a date string in the format 'YYYY-MM-DD HH:MM' using the Day.js library.
//  *
//  * @param {number} timestamp - The timestamp to convert.
//  * @return {string} The formatted date string, or an empty string if the provided timestamp is not valid.
//  */
// export default function formatDate(timestamp) {
//   if (!timestamp || isNaN(timestamp)) {
//     return '';
//   }

//   const date = dayjs(timestamp*1000);
//   const formattedDate = date.format('YYYY-MM-DD HH:mm');

//   return formattedDate;
// }

/**
 * Converts a timestamp to a date string in the format 'YYYY-MM-DD HH:MM'.
 *
 * @param {number} timestamp - The timestamp to convert.
 * @return {string} The formatted date string.
 */
export default function formatDate(timestamp) {
  if (!timestamp || isNaN(timestamp)) {
    return ''
  }

  const date = new Date(timestamp*1000)
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)

  return `${year}-${month}-${day} ${hours}:${minutes}`
}
