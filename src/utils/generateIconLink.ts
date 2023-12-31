// take in a number and return formatted link https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png

export const generateIconLink = (iconNumber: number): string => {
  return `https://developer.accuweather.com/sites/default/files/${
    iconNumber < 10 ? `0${iconNumber}` : iconNumber
  }-s.png`;
};
