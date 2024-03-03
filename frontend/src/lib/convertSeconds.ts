const secondsToTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const secondsLeft = seconds - hours * 3600 - minutes * 60;

  const formattedHours =
    hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
  const formattedMinutes = `${minutes.toString().padStart(2, "0")}:`;
  const formattedSeconds = secondsLeft.toString().padStart(2, "0");

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};

export default secondsToTime;
