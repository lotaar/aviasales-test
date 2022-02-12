import { addMinutes, format } from "date-fns";

export const dateToTime = (date) => {
  return format(date, "HH:mm");
};

export const formatDurationText = (startDateString, durationMinutes) => {
  const startDate = new Date(startDateString);
  const endDate = addMinutes(startDate, durationMinutes);

  return `${dateToTime(startDate)} - ${dateToTime(endDate)}`;
};

export const convertMinsToHrsMins = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? "0" + h : h; // (or alternatively) h = String(h).padStart(2, '0')
  m = m < 10 ? "0" + m : m; // (or alternatively) m = String(m).padStart(2, '0')
  return `${h}:${m}`;
};
