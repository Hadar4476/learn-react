const dateUtility = {
  formatDateKey(date, key) {
    const dateKeys = [
      {
        month: "long",
      },
      {
        day: "2-digit",
      },
    ];

    const dateKey = dateKeys.find((k) => k[key]);

    return key === "year"
      ? date.getFullYear()
      : date.toLocaleString("en-US", dateKey);
  },
  formatDate(date) {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }

    if (day.length < 2) {
      day = "0" + day;
    }

    return [year, month, day].join("-");
  },
};

export default dateUtility;
