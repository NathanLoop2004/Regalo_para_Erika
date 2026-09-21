window.onload = () => {
  // Ocultar animaciones de flores al inicio
  const flowersContent = document.getElementById("flowers-content");
  const startScreen = document.getElementById("start-screen");
  const loveMessage = document.getElementById("love-message");
  const springMessage = document.getElementById("spring-message");
  const giftBtn = document.getElementById("gift-btn");

  // Asegurarse de que las flores y los mensajes estén ocultos al inicio
  if (flowersContent) flowersContent.style.display = "none";
  if (loveMessage) loveMessage.style.opacity = 0;
  if (springMessage) springMessage.style.opacity = 0;

  // Al hacer clic en el botón
  if (giftBtn) {
    giftBtn.addEventListener("click", () => {
      // Animar salida del botón
      startScreen.style.opacity = 0;
      setTimeout(() => {
        startScreen.style.display = "none";
        // Mostrar mensaje romántico
        loveMessage.classList.add("show");
        loveMessage.style.opacity = 1;
        // Después de 6.5s, ocultar mensaje y mostrar flores
        setTimeout(() => {
          loveMessage.classList.remove("show");
          loveMessage.classList.add("hide");
          loveMessage.style.opacity = 0;
          setTimeout(() => {
            loveMessage.style.display = "none";
            if (flowersContent) flowersContent.style.display = "";

            setTimeout(() => {
              if (springMessage) {
                springMessage.classList.add("show");
                springMessage.style.opacity = 1;
              }
            }, 1500);
          }, 1200);
        }, 6500);
      }, 700);
    });
  }
};
