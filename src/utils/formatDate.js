export function formatDate(dateStr) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateStr);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear().toString().substr(-2); // Get last two digits of the year

  return `${day} ${monthNames[monthIndex]} ${year}`;
}
