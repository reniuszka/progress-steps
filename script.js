// what we want to bring from DOM
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

// which one is Active by default

let currectActive = 1;

//want to listen for the click on next and then want to run a function

next.addEventListener('click', () => {
  currectActive++;
  // max 4
  if (currectActive > circles.length) {
    currectActive = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currectActive--;
  // min 1
  if (currectActive < 1) {
    currectActive = 1;
  }
  // call a function update
  update();
});

// for each circle i want to check to see if the idx is less than the current active, if yes then I want to add a class of Active
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currectActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  //now we have many active circles so want to handle the progress bar, so line up the lines

  const actives = document.querySelectorAll('.active');
  console.log(actives.length, circles.length);
  // 1/3 = 33% when actives.lenght=2 and circles.length = 4
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // disabling the buttons

  if (currectActive === 1) {
    prev.disabled = true;
  } else if (currectActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
