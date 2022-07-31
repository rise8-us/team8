import initialize from "./utils/initialize";

(async () => {
  const app = initialize();

  await app.start(process.env.PORT || 3000);

  // eslint-disable-next-line no-console
  console.debug("Team8 is running!");
})();
