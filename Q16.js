/*Question 16: 17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

// Create a new Date object with the current date and time
const now = new Date();

//The padStart() method is used to add leading zeros to the month, date, hour, and minute values if they are less than 10, to ensure that they are two digits long.

// Format the date-time string as YYYY-MM-DD HH:mm
const formattedTime1 = `${now.getFullYear()}-${(now.getMonth() + 1)
  .toString()
  .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now
  .getHours()
  .toString()
  .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
console.log(formattedTime1);

// Format the date-time string as DD-MM-YYYY HH:mm
const formattedTime2 = `${now.getDate().toString().padStart(2, "0")}-${(
  now.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}-${now.getFullYear()} ${now
  .getHours()
  .toString()
  .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
console.log(formattedTime2);

// Format the date-time string as DD/MM/YYYY HH:mm
const formattedTime3 = `${now.getDate().toString().padStart(2, "0")}/${(
  now.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}/${now.getFullYear()} ${now
  .getHours()
  .toString()
  .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
console.log(formattedTime3);
