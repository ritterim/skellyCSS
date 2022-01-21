const skeletons = document.querySelectorAll('.skeleton');

if (skeletons) {
  skeletons.forEach((skelly) => {
    let lineCount = parseInt(skelly.dataset.lines);
    let opacity = skelly.dataset.opacity
      ? parseFloat(skelly.dataset.opacity)
      : null;

    let color = skelly.dataset.color ? skelly.dataset.color : null;

    if (!lineCount && skelly.innerHTML.trim().length == 0) {
      lineCount = 1;
    }

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('span');
      line.classList.add('skeleton__line');

      if (skelly.dataset.animation === 'true') {
        const animationElement = document.createElement('span');
        animationElement.classList.add('skeleton--animation');
        line.append(animationElement);
      }

      skelly.append(line);
    }

    if (opacity && opacity <= 1) {
      const lines = skelly.querySelectorAll('.skeleton__line');
      lines.forEach((line) => (line.style.opacity = opacity));
    }

    if (color) {
      const lines = skelly.querySelectorAll('.skeleton__line');
      lines.forEach(line => line.style.setProperty('--skelly-color', color));
      
    }
  });
}

const skeletonImages = document.querySelectorAll('.skeleton-image');

if (skeletonImages) {
  skeletonImages.forEach((skelly) => {
    let animation = skelly.dataset.animation === 'true';
    let opacity = skelly.dataset.opacity
      ? parseFloat(skelly.dataset.opacity)
      : null;

    if (animation === true) {
      const animationElement = document.createElement('span');
      animationElement.classList.add('skeleton--animation');
      skelly.append(animationElement);
    }

    if (opacity && opacity <= 1) skelly.style.opacity = opacity;
  });
}
