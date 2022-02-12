export const numberOfTransfers = (number) => {
  switch (number) {
    case 0:
      return "Без пересадок";

    case 1:
      return "1 пересадка";

    case 2:
      return "2 пересадки";
    case 3:
      return "3 пересадки";

    case 4:
      return "4 пересадки";

    default:
      return number;
  }
};
