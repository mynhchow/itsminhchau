window.onload = game();

function game() {
  const initial = [1, 2, 4, 5, 6, 3, 8, 7, 6, 2, 3, 4, 1, 5, 8, 7];
  const game = document.getElementById("game");

  for (let i = 0; i < initial.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-num", initial[i]);
    card.addEventListener("click", function(e) {
      flip(e);
      check();
    });
    let frontface = document.createElement('img')
    frontface.setAttribute('src','./img.png')
    frontface.setAttribute('class', 'font-face')
    
    card.append(frontface)
    game.append(card);
  }

  function flip(e) {
    let value = e.target.dataset.num;
    e.target.innerHTML = value;
    e.target.classList.add("flipped");
  }

  function check() {
    let elments = document.querySelectorAll(".flipped");
    if (elments.length === 2) {
      if (elments[0].dataset.num === elments[1].dataset.num) {
        elments.forEach(item => {
          item.classList.remove("flipped");
          item.classList.add("done");
        });
      } else {
        setTimeout(function() {
          elments.forEach(item => {
            item.innerHTML = "";
            item.classList.remove("flipped");
          });
        }, 1000);
      }
    }
  }
}
