if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/todo/sw.js")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then((_registration) => {
      console.log("Service Worker registered");
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

navigator.serviceWorker.controller?.postMessage({
  type: "data",
  payload: { name: "" },
});

navigator.serviceWorker.addEventListener("message", (event) => {
  if (event.data && event.data) {
    console.log("Response from service worker:", event.data);
  }
});
