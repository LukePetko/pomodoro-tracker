import { Notify } from "../../wailsjs/go/main/App";

const notify = (title: string, message: string) => {
  console.log(import.meta.env.VITE_APP_TYPE, title, message);
  if (import.meta.env.VITE_APP_TYPE === "WEB") {
    if (Notification.permission === "granted") {
      new Notification(title, { body: message });
      return;
    }
    if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, { body: message });
        }
      });
    }
  }

  if (import.meta.env.VITE_APP_TYPE === "DESKTOP") {
    Notify(title, message);
  }
};

export { notify };
