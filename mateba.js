document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const optionA = document.getElementById('optionA');
    const optionB = document.getElementById('optionB');
    const optionC = document.getElementById('optionC');
    const scoreText = document.getElementById('score');
    const livesText = document.getElementById('lives');
    const newQuestionButton = document.getElementById('new-question');
  
    let score = 0;
    let lives = 5;
    const maxScore = 30; // Límite de puntuación
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function generateQuestion() {
      if (score >= maxScore || lives <= 0) {
        alert('¡Juego terminado! Tu puntuación final es: ' + score);
        window.location.href = "guia.html"; // Redirigir a la guía
        return;
      }
  
      const num1 = getRandomInt(1, 10);
      const num2 = getRandomInt(1, 10);
      const operations = ['+', '-', 'x', '÷'];
      const operation = operations[getRandomInt(0, operations.length - 1)];
  
      let correctAnswer;
      switch (operation) {
        case '+':
          correctAnswer = num1 + num2;
          break;
        case '-':
          correctAnswer = num1 - num2;
          break;
        case 'x':
          correctAnswer = num1 * num2;
          break;
        case '÷':
          correctAnswer = parseFloat((num1 / num2).toFixed(2));
          break;
      }
  
      questionText.textContent = `¿Cuánto es ${num1} ${operation} ${num2}?`;
  
      // Generar respuestas incorrectas y mezclarlas
      let answers = [correctAnswer];
      while (answers.length < 3) {
        const incorrectAnswer = getRandomInt(1, 20);
        if (!answers.includes(incorrectAnswer)) {
          answers.push(incorrectAnswer);
        }
      }
      answers = answers.sort(() => Math.random() - 0.5);
  
      optionA.textContent = `A: ${answers[0]}`;
      optionB.textContent = `B: ${answers[1]}`;
      optionC.textContent = `C: ${answers[2]}`;
  
      [optionA, optionB, optionC].forEach((button, index) => {
        button.onclick = () => {
          if (answers[index] === correctAnswer) {
            score++;
            scoreText.textContent = `Puntuación: ${score}`;
            if (score >= maxScore) {
              alert('¡Felicidades! Has alcanzado la puntuación máxima de 30.');
              window.location.href = "guia.html"; // Redirigir a la guía
              return;
            }
          } else {
            lives--;
            livesText.textContent = `Vidas: ${lives}`;
            if (lives === 0) {
              alert('¡Te has quedado sin vidas! Redirigiendo a la guía...');
              window.location.href = "guia.html"; // Redirigir a la guía
              return;
            }
          }
          generateQuestion();
        };
      });
    }
  
    newQuestionButton.addEventListener('click', generateQuestion);
  
    generateQuestion(); // Generar una pregunta al cargar la página
  });
  