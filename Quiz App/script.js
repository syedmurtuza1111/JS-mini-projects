document.addEventListener('DOMContentLoaded',()=>{

    const startBtn = document.getElementById('start-btn')
    const nextBtn = document.getElementById('next-btn')
    const RestartBtn = document.getElementById('restart-btn')

    const questionContainer = document.getElementById('question-container')
    const questionText = document.getElementById('question-text')
    const choicesList = document.getElementById('choices-list')


    const resultContainer = document.getElementById('result-container')
    const scoreDisplay = document.getElementById('score')


    const questions = [
        {
          question: "What is the capital of Japan?",
          choices: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
          answer: "Tokyo",
        },
        {
          question: "Who painted the Mona Lisa?",
          choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
          answer: "Leonardo da Vinci",
        },
        {
          question: "What is the largest planet in our solar system?",
          choices: ["Earth", "Jupiter", "Saturn", "Neptune"],
          answer: "Jupiter",
        },
        {
          question: "What is the chemical symbol for water?",
          choices: ["H2O", "O2", "CO2", "NaCl"],
          answer: "H2O",
        },
        {
          question: "Who directed the movie *Titanic*?",
          choices: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"],
          answer: "James Cameron",
        },
        {
          question: "What is the fastest land animal?",
          choices: ["Cheetah", "Lion", "Tiger", "Horse"],
          answer: "Cheetah",
        },
        {
          question: "What is the smallest prime number?",
          choices: ["1", "2", "3", "5"],
          answer: "2",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
          answer: "William Shakespeare",
        },
        {
          question: "What is the name of Harry Potter's pet owl?",
          choices: ["Hedwig", "Fawkes", "Crookshanks", "Scabbers"],
          answer: "Hedwig",
        },
        {
          question: "Who developed the theory of relativity?",
          choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
          answer: "Albert Einstein",
        },
        {
          question: "What is the main ingredient in guacamole?",
          choices: ["Avocado", "Tomato", "Onion", "Pepper"],
          answer: "Avocado",
        },
        {
          question: "Which ocean is the largest?",
          choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          answer: "Pacific Ocean",
        },
        {
          question: "Who is the Greek god of the sea?",
          choices: ["Zeus", "Hades", "Poseidon", "Apollo"],
          answer: "Poseidon",
        },
        {
          question: "What is the hardest natural substance on Earth?",
          choices: ["Gold", "Iron", "Diamond", "Quartz"],
          answer: "Diamond",
        },
        {
          question: "What is the name of the villain in *The Lion King*?",
          choices: ["Mufasa", "Scar", "Zazu", "Shenzi"],
          answer: "Scar",
        },
        {
          question: "Which element has the chemical symbol 'O'?",
          choices: ["Oxygen", "Gold", "Osmium", "Hydrogen"],
          answer: "Oxygen",
        },
        {
          question: "Which is the largest desert in the world?",
          choices: ["Sahara", "Antarctica", "Gobi", "Kalahari"],
          answer: "Antarctica",
        },
        {
          question: "What is the longest river in the world?",
          choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          answer: "Nile",
        },
        {
          question: "Who is the author of *Sherlock Holmes*?",
          choices: ["Agatha Christie", "J.K. Rowling", "Arthur Conan Doyle", "Mark Twain"],
          answer: "Arthur Conan Doyle",
        },
        {
          question: "What is the square root of 64?",
          choices: ["6", "7", "8", "9"],
          answer: "8",
        },
        {
          question: "What is the capital of Australia?",
          choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          answer: "Canberra",
        },
        {
          question: "Which gas do plants primarily absorb for photosynthesis?",
          choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
          answer: "Carbon Dioxide",
        },
        {
          question: "What is the currency of Japan?",
          choices: ["Yen", "Won", "Dollar", "Euro"],
          answer: "Yen",
        },
        {
          question: "Which superhero is known as the 'Caped Crusader'?",
          choices: ["Superman", "Batman", "Spider-Man", "Iron Man"],
          answer: "Batman",
        },
      ];
      

    let currentQuestionIndex = 0;
    let score = 0;  
      
    startBtn.addEventListener('click',startQuiz);
    nextBtn.addEventListener('click',()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQution()
        }else{
            showResult()
        }
    });

    RestartBtn.addEventListener('click',()=>{
        currentQuestionIndex=0;
        score=0;
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function startQuiz(){
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQution()
    }

    function showQution(){
        nextBtn.classList.add('hidden')
        questionText.textContent=questions[currentQuestionIndex].question
        choicesList.innerHTML=''
        questions[currentQuestionIndex].choices.forEach((choice)=>{
            const li =document.createElement('li')
            li.textContent = choice;
            li.addEventListener('click',()=>selectAnswer(choice))
            choicesList.appendChild(li)
        })


    }

    function selectAnswer(choice){
        const correctAnswer = questions[currentQuestionIndex].answer
        if(choice === correctAnswer){
            score++
        }

        nextBtn.classList.remove('hidden')

    }


    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent=`${score} out of ${questions.length}`
    }
});