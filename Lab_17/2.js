document.addEventListener("DOMContentLoaded", () => {
  const feedbackArea = document.getElementById("game-feedback");
  const winMessageArea = document.getElementById("win-message");
  const attemptsLog = document.getElementById("attempts-log");

  guessTheNumberGame();

  function guessTheNumberGame() {
    let playAgain = true;

    while (playAgain) {
      clearUI();

      const targetNumber = Math.floor(Math.random() * 101);
      let attempts = 0;
      let guessed = false;

      console.log(`--- Нова гра ---`);
      console.log(`(Підказка для тестування: загадане число - ${targetNumber})`);

      while (!guessed) {
        let userInput = prompt("Вгадайте число від 0 до 100:");

        if (userInput === null) {
          alert("Гру скасовано.");
          feedbackArea.textContent = "Гру скасовано.";
          guessed = true;
          playAgain = false;
          continue;
        }

        let userGuess = parseInt(userInput, 10);

        if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
          const feedback = "Будь ласка, введіть число в діапазоні від 0 до 100.";
          alert(feedback);
          feedbackArea.textContent = feedback;
          continue;
        }

        attempts++;
        const now = new Date();
        const dateStr = now.toLocaleDateString('uk-UA').split('.').join('.');
        const timeStr = now.toLocaleTimeString('uk-UA');
        const timestamp = `${dateStr} ${timeStr}`;

        let logMessage;
        let logClass; 

        if (userGuess === targetNumber) {
          guessed = true;
          logMessage = `${timestamp} Спроба ${attempts}: число ${userGuess} – ВІРНО`;
          logClass = "correct";
          
          const winText = `За ${attempts} спроб ви вгадали число ${targetNumber}!`;

          console.log(logMessage);
          alert(winText);
          
          winMessageArea.textContent = winText;
          feedbackArea.textContent = "🎉 Перемога! 🎉";
          
          addLogMessage(logMessage, logClass);
          
          playAgain = confirm("Спробувати ще раз зіграти в гру?");

        } else {
          logMessage = `${timestamp} Спроба ${attempts}: число ${userGuess} – не вірно`;
          logClass = "incorrect";

          const diff = Math.abs(targetNumber - userGuess);
          let feedback = "";

          if (diff > 50) {
            feedback = "дуже холодно";
          } else if (diff > 30) {
            feedback = "холодно";
          } else if (diff > 15) {
            feedback = "тепліше";
          } else if (diff > 5) {
            feedback = "гаряче";
          } else {
            feedback = "дуже гаряче";
          }
          
          console.log(logMessage);
          alert(feedback);
          
          feedbackArea.textContent = feedback;
          addLogMessage(logMessage, logClass);
        }
      }
    }

    alert("Дякуємо за гру! До зустрічі!");
    feedbackArea.textContent = "Дякуємо за гру! До зустрічі!";
  }

  function addLogMessage(message, cssClass) {
    const li = document.createElement("li");
    li.textContent = message;
    if (cssClass) {
      li.className = cssClass;
    }
    attemptsLog.prepend(li);
  }

  function clearUI() {
    feedbackArea.textContent = "";
    winMessageArea.textContent = "";
    attemptsLog.innerHTML = "";
  }
});