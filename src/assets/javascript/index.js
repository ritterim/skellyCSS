const skeletons = document.querySelectorAll(".skeleton");

if (skeletons) {
  skeletons.forEach((skelly) => {
    let lineCount = parseInt(skelly.dataset.lines);

    let animation = skelly.dataset.animation === "true";

    if (!lineCount && skelly.innerHTML.trim().length == 0) {
      lineCount = 1;
    }

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("span");
      line.classList.add("skeleton__line");
      if (animation === true) {
        const animationElement = document.createElement("span");
        animationElement.classList.add("skeleton--animation");
        line.append(animationElement);
      }
      skelly.append(line);
    }
  });
}

const skeletonImages = document.querySelectorAll(".skeleton-image");

if (skeletonImages) {
  skeletonImages.forEach((skelly) => {
    let animation = skelly.dataset.animation === "true";

    if (animation === true) {
      const animationElement = document.createElement("span");
      animationElement.classList.add("skeleton--animation");
      skelly.append(animationElement);
    }
  });
}
