  // Obtener los elementos de la imagen, el video y el audio
  const imgs = document.querySelectorAll('img');

  // Agregar evento click a cada imagen
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    const video = img.nextElementSibling;
    const audio = video.nextElementSibling;

    img.addEventListener('click', () => {
      // Ocultar la imagen
      img.classList.add('show-image');

      // Hacer visible el video y reproducirlo
      video.style.display = 'block';
      video.play();

      // Reproducir el audio
      audio.currentTime = 0; // Reiniciar el audio si ya se había reproducido antes
      audio.play();
    });

    video.addEventListener('ended', () => {
      // Mostrar la imagen nuevamente al final del video
      img.classList.remove('show-image');
    });
  }