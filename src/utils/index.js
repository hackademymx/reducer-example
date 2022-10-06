export const loginPet = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("login completado");
    }, 2000)
  );
