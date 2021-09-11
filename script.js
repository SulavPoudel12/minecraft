let toolimg = document.querySelectorAll(".toolimg");
let comptoolimg = document.getElementById("comptoolimg");
playerlife = document.getElementById("playerlife");
complife = document.getElementById("complife");
compimg = document.getElementById("compmobimg");
winnerinfo = document.getElementById("winner");
console.log(playerlife.innerHTML);
select = document.getElementById("level");

playerselect = document.getElementById("youchoose");
compselect = document.getElementById("compchoose");
console.log(compselect);

for (item of toolimg) {
  item.addEventListener("click", (e) => {
    playertosrc = e.target;
    playervalue = parseInt(e.target.name);

    console.log(playervalue);
    if (select.value == "Developer") {
      if (playervalue == 2) {
        computervalue = 0;
      } else {
        computervalue = playervalue + 1;
      }
    } else {
      computervalue = Math.floor(Math.random() * 3);
    }

    playerselect.innerHTML = `Player Choose ${e.target.alt}`;
    e.target.style.background = "black";

    if (playervalue == computervalue) {
      console.log("draw");

      comptoolimg.src = playertosrc.src;
      compselect.innerHTML = `${select.value} choose ${e.target.alt}`;
      winnerinfo.innerHTML = "Draw Draw";
      setTimeout(() => {
        alert(`Draw Draw . Rematch
        ${playerselect.innerHTML}
              ${compselect.innerHTML}`);
        playertosrc.style.background = "none";
        setTimeout(() => {
          playerselect.innerHTML = "VS";
          compselect.innerHTML = "VS";
          winnerinfo.innerHTML = "VS";
          comptoolimg.src = "img/mobs/question.png";
        }, 300);
      }, 50);
    } else if (computervalue == 0 && playervalue == 1) {
      comptoolimg.src = "img/mobs/rock.png";
      console.log("playerwon");
      console.log("computerlose");
      compselect.innerHTML = `${select.value} choose Rock`;
      gamewin();
    } else if (computervalue == 1 && playervalue == 2) {
      comptoolimg.src = "img/mobs/paper.png";
      console.log("playerwon");
      console.log("computerlose");
      compselect.innerHTML = `${select.value} choose Paper`;
      gamewin();
    } else if (computervalue == 2 && playervalue == 0) {
      comptoolimg.src = "img/mobs/paper.png";
      console.log("playerwon");
      console.log("computerlose");
      compselect.innerHTML = `${select.value} choose Scissors`;
      gamewin();
    } else if (computervalue == 1 && playervalue == 0) {
      comptoolimg.src = "img/mobs/paper.png";
      console.log("computerwon");
      console.log("playerlose");
      compselect.innerHTML = `${select.value} choose Paper`;
      gameover();
    } else if (computervalue == 2 && playervalue == 1) {
      comptoolimg.src = "img/mobs/shears.png";
      console.log("computerwon");
      console.log("playerlose");
      compselect.innerHTML = `${select.value} choose Scissors`;
      gameover();
    } else if (computervalue == 0 && playervalue == 2) {
      comptoolimg.src = "img/mobs/rock.png";
      console.log("computerwon");
      console.log("playerlose");
      compselect.innerHTML = `${select.value} choose Rock`;
      gameover();
    }
  });

  function gameover() {
    if (parseInt(playerlife.innerHTML) > 1) {
      playerlife.innerHTML = playerlife.innerHTML - 1;
      winnerinfo.innerHTML = `${select.value} damaged player`;
      setTimeout(() => {
        alert(`${select.value} damaged you
        ${playerselect.innerHTML}
              ${compselect.innerHTML}`);
        setTimeout(() => {
          playerselect.innerHTML = "VS";
          compselect.innerHTML = "VS";
          winnerinfo.innerHTML = "VS";
          playertosrc.style.background = "none";
          comptoolimg.src = "img/mobs/question.png";
        }, 300);
      }, 100);
    } else {
      playerlife.innerHTML = playerlife.innerHTML - 1;
      winnerinfo.innerHTML = ` ${select.value} killed player`;
      setTimeout(() => {
        alert(`${select.value} killed you. GameOver
        ${playerselect.innerHTML}
              ${compselect.innerHTML}`);
        setTimeout(() => {
          playerselect.innerHTML = "VS";
          compselect.innerHTML = "VS";
          winnerinfo.innerHTML = "VS";
          playertosrc.style.background = "none";
          comptoolimg.src = "img/mobs/question.png";
          leveldown()
          // change()
        }, 300);
      }, 100);
    }
  }

  function gamewin() {
    if (parseInt(complife.innerHTML) > 1) {
      complife.innerHTML = complife.innerHTML - 1;
      winnerinfo.innerHTML = `Player damaged ${select.value}`;
      setTimeout(() => {
        alert(
          `${select.value} lose one heart
            ${playerselect.innerHTML}
            ${compselect.innerHTML}`
        );
        setTimeout(() => {
          playerselect.innerHTML = "VS";
          compselect.innerHTML = "VS";
          winnerinfo.innerHTML = "VS";
          playertosrc.style.background = "none";
          comptoolimg.src = "img/mobs/question.png";
        }, 300);
      }, 100);
    } else {
      complife.innerHTML = complife.innerHTML - 1;
      winnerinfo.innerHTML = `Player killed ${select.value}`;
      setTimeout(() => {
        alert(
          `You killed ${select.value} . You Win
              ${playerselect.innerHTML}
              ${compselect.innerHTML}
        `
        );
        setTimeout(() => {
          playerselect.innerHTML = "VS";
          compselect.innerHTML = "VS";
          winnerinfo.innerHTML = "VS";
          playertosrc.style.background = "none";
          comptoolimg.src = "img/mobs/question.png";
          // change()
          levelup()
        }, 300);
      }, 100);
    }
  }
  function change() {
    compimg.src = `img/mobs/${select.value}.png`;

    if (select.value == "Zoimbe") {
      complife.innerHTML = 2;
      playerlife.innerHTML = 10;
    } else if (select.value == "Ghast") {
      complife.innerHTML = 5;
      playerlife.innerHTML = 10;
    } else if (select.value == "Wither") {
      complife.innerHTML = 7;
      playerlife.innerHTML = 10;
    } else if (select.value == "Dragon") {
      complife.innerHTML = 10;
      playerlife.innerHTML = 10;
    } else {
      complife.innerHTML = 1;
      playerlife.innerHTML = 20;
    }
  }
}
let arrlvl = ['Zoimbe' , 'Ghast' , 'Wither', 'Dragon' , 'Developer']
console.log(arrlvl[0])
function levelup(){
  if (select.value == "Zoimbe") {
   select.value = arrlvl[1]
  } else if (select.value == "Ghast") {
    select.value = arrlvl[2]
  } else if (select.value == "Wither") {
    select.value = arrlvl[3]
  } else if (select.value == "Dragon") {
    select.value = arrlvl[4]
  } else if(select.value == "Developer") {
    select.value = arrlvl[4]
  }
  change()
}
function leveldown(){
  if (select.value == "Zoimbe") {
   select.value = arrlvl[0]
  } else if (select.value == "Ghast") {
    select.value = arrlvl[0]
  } else if (select.value == "Wither") {
    select.value = arrlvl[1]
  } else if (select.value == "Dragon") {
    select.value = arrlvl[2]
  } else if(select.value == "Developer") {
    select.value = arrlvl[3]
  }

  change()
}

// compval()
