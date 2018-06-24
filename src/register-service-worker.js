export default function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const serviceWorkerURL = `./service-worker.js`;

      navigator.serviceWorker
        .register(serviceWorkerURL)
        .then(
          function(registration) {
            // Registration was successful
            console.log(
              "My new ServiceWorker registration successful with scope: ",
              registration.scope
            );
          },
          function(err) {
            // registration failed :(
            console.log("ServiceWorker registration failed: ", err);
          }
        )
        .catch(function(err) {
          console.log(err);
        });
    });
  }
}
