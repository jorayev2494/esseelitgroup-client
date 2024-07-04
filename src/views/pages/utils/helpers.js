export function useDate() {
  const separator = (value, to, from = '/') => value.replaceAll(from, to)

  const formatDate = (date = new Date()) => {
    const year = date.toLocaleString('default', { year: 'numeric' });
    const month = date.toLocaleString('default', {
      month: '2-digit',
    });

    const day = date.toLocaleString('default', {day: '2-digit'});
  
    return [year, month, day].join('-');
  }

  const dateFromTimestamp = timestamp => new Date(timestamp * 1000);

  const convertToDateTimeLocalString = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  function padTwoDigits(num) {
    return num.toString().padStart(2, "0");
  }
  
  function dateInYyyyMmDdHhMmSs(date, dateDiveder = "-", hoursAndMinuteDiveder = ":") {
    
    return (
      [
        date.getFullYear(),
        padTwoDigits(date.getMonth() + 1),
        padTwoDigits(date.getDate()),
      ].join(dateDiveder) +
      " " +
      [
        padTwoDigits(date.getHours()),
        padTwoDigits(date.getMinutes()),
        padTwoDigits(date.getSeconds()),
      ].join(hoursAndMinuteDiveder)
    );
  }

  const dateInDdMmYyyyHhMmSs = (date, dateDiveder = "-", hoursAndMinuteDiveder = ":") =>  dateInDdMmYyyy(date, dateDiveder) + " " + dateInHhMmSs(date, hoursAndMinuteDiveder);

  function dateInHhMmSs(date, hoursAndMinuteDiveder = ":") {
    return (
      [
        padTwoDigits(date.getHours()),
        padTwoDigits(date.getMinutes()),
        padTwoDigits(date.getSeconds()),
      ].join(hoursAndMinuteDiveder)
    );
  }

  function dateInDdMmYyyy(date, dateDiveder = "-") {
    return (
      [
        padTwoDigits(date.getDate()),
        padTwoDigits(date.getMonth() + 1),
        date.getFullYear(),
      ].join(dateDiveder)
    );
  }

  const dateTimeFromTimestamp = timestamp => convertToDateTimeLocalString(new Date(timestamp * 1000));

  return {
    separator,
    formatDate,
    dateFromTimestamp,
    dateTimeFromTimestamp,
    convertToDateTimeLocalString,
    dateInYyyyMmDdHhMmSs,
    dateInDdMmYyyyHhMmSs,
    dateInHhMmSs,
    dateInDdMmYyyy,
  }
}

export function useString() {
  const strCropper = (str, length, tail = '...') => {
    if (str.length > length) {
      str = str.slice(0, length);
      str += tail;
    }

    return str;
  }

  return {
    strCropper,
  }
}