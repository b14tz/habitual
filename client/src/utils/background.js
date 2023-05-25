const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const colors = ["#BF547B", "#AC79F2", "#9196F2", "#B6C5F2", "#F2D0BD"];
const rndBorderRadius = () =>
  [...Array(4).keys()].map((x) => rnd(30, 85) + "%").join(" ") +
  " / " +
  [...Array(4).keys()].map((x) => rnd(30, 85) + "%").join(" ");

const createBlob = ({ id, x, y, color }) => {
  const card = document.querySelector(".card");
  const blob = document.createElement("div");
  blob.id = `blob-${id}`;
  blob.classList.add("blob");
  blob.style.top = `${y}%`;
  blob.style.left = `${x}%`;
  blob.style.backgroundColor = color;
  blob.style.scale = rnd(1.25, 2);
  blob.style.borderRadius = rndBorderRadius();
  card.appendChild(blob);
  animateBlob(id);
};

const animateBlob = (id) => {
  anime({
    targets: `#blob-${id}`,
    translateX: () => `+=${rnd(-25, 25)}`,
    translateY: () => `+=${rnd(-25, 25)}`,
    borderRadius: () => rndBorderRadius(),
    rotate: () => rnd(-25, 25),
    opacity: () => rnd(0.4, 0.8),
    delay: () => rnd(0, 1000),
    scale: () => rnd(1.25, 2),
    // direction: 'alternate',
    // loop: 1,
    duration: 2000,
    easing: "linear",
    complete: (anim) => animateBlob(id)
    // complete: anim => { anim.restart(); },
  }).play();
};

const genBlobs = () => {
  const card = document.querySelector(".card");
  card.innerHTML = "";
  [...Array(25).keys()].map((id) => {
    const x = rnd(25, 75);
    const y = rnd(25, 75);
    const color = colors[rnd(0, colors.length)];
    createBlob({ x, y, color, id });
  });
};

genBlobs();