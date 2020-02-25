const thaiMonths = {
  1: 'ม.ค.',
  2: 'ก.พ.',
  3: 'มี.ค.',
  4: 'เม.ย.',
  5: 'พ.ค.',
  6: 'มิ.ย.',
  7: 'ก.ค.',
  8: 'ส.ค.',
  9: 'ก.ย.',
  10: 'ต.ค.',
  11: 'พ.ย.',
  12: 'ธ.ค.',
}

/**
 *
 * @param {Date} date
 */
export function getThaiDate(date) {
  const day = date.getDate()
  const month = thaiMonths[date.getMonth() + 1]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}
