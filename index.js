let paused = false;
const likes = {};

let comForm = document.getElementById("comment-form");

comForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!paused) {
    const value = e.target["0"].value;
    e.target["0"].value = "";
    let commentNode = document.createElement("li");
    commentNode.innerText = value;
    document.getElementById("list").appendChild(commentNode);
  }
});

let numberCount = parseInt(document.getElementById("counter").innerText);

function increment() {
  if (!paused) {
    numberCount += 1;
    document.getElementById("counter").innerText = `${numberCount}`;
  }
}

function decrement() {
  if (!paused) {
    numberCount -= 1;
    document.getElementById("counter").innerText = `${numberCount}`;
  }
}

let ticker = setInterval(() => {
  increment();
}, 1000);
ticker;

function invokeTicker() {
  setInterval(() => {
    increment();
  }, 1000);
}

let upButton = document.getElementById("+");
upButton.addEventListener("click", increment);

let downButton = document.getElementById("-");
downButton.addEventListener("click", decrement);

// this is for the heart button
let heart = document.getElementById("<3");

heart.addEventListener("click", () => {
  if (!paused) {
    if (likes[`${numberCount}`]) {
      likes[`${numberCount}`] += 1;
      let numLikes = likes[`${numberCount}`];
      document.getElementById(
        `${numberCount}`
      ).innerText = `${numberCount} has ${numLikes} likes`;
    } else {
      likes[`${numberCount}`] = 1;
      let numLikes = likes[`${numberCount}`];
      let likeNode = document.createElement("li");
      likeNode.id = `${numberCount}`;
      likeNode.innerText = `${numberCount} has ${numLikes} likes`;
      document.getElementsByClassName("likes")[0].appendChild(likeNode);
    }
  }
});

const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", () => {
  if (paused === false) {
    clearInterval(ticker);
    pauseButton.innerText = "resume";
    paused = true;
  } else {
    invokeTicker();
    pauseButton.innerText = "pause";
    paused = false;
  }
  document.getElementById("pause").innerText = pauseButton.innerText;
});
