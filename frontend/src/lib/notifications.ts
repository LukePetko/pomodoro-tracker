const notify = async (title: string, message: string) => {
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
    const { Notify } = await import("../../wailsjs/go/main/App");
    Notify(title, message);
  }
};

export { notify };
