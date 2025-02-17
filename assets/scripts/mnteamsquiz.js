let allTeams = [];
let filteredTeams = [];
let currentQuestion = null;
let correctAnswer = null;

document.addEventListener("DOMContentLoaded", function() {
   fetch("/assets/scripts/teams.json")
       .then(response => response.json())
       .then(data => {
       allTeams = data;
       populateYearDropdown();
       })
       .catch(error => console.error("Failed to load teams.json:", error));
});

$(document).ready(function() {
   $("#year-filter").on("change", function() {
       filterTeams(); // re-filter when year cutoff changes
   });
});

function populateYearDropdown() {
   // Gets all unique years so there is no redundant years in the dropdown
   let years = [...new Set(allTeams.map(team => team["Last Participated"]).filter(y => y))].sort((a, b) => b - a);
   let $yearFilter = $("#year-filter").empty();
   $yearFilter.append(`<option value="0">All Teams</option>`);
   $.each(years, function (index, year) {
     $yearFilter.append(`<option value="${year}">${year}</option>`);
   });
}

function filterTeams() {
   let selectedYear = parseInt($("#year-filter").val());
   // Filter teams based on the selected year (0 = show all teams)
   filteredTeams = selectedYear === 0 ? allTeams : allTeams.filter(team => team["Last Participated"] >= selectedYear);
}

function startQuiz() {
   filterTeams();
   generateQuestion();
   $("#quiz-container").show();
   $("#feedback").text("");
}

function generateQuestion() {
   $("#feedback").text("");
   if (filteredTeams.length === 0) return;

   let difficulty = $("#quiz-difficulty").val();
   let questionType = $("#question-type").val();
   currentQuestion = filteredTeams[Math.floor(Math.random() * filteredTeams.length)];

   // Determine the type of question (name -> number OR number -> name)
   if (questionType === "name-to-number") {
       $("#question").html(`What is the team number of <br><h1>${currentQuestion["Team Nickname"]}?</h1>`);
       correctAnswer = currentQuestion["Team Number"];
   } else {
       $("#question").html(`Which team is <br><h1>${currentQuestion["Team Number"]}?</h1>`);
       correctAnswer = currentQuestion["Team Nickname"];
   }

   if (difficulty === "easy") {
       $("#options").show();
       $("#input-container").hide();

       // Find three wrong answers
       let wrongAnswers = filteredTeams
           .filter(team => {
               return questionType === "name-to-number"
                   ? team["Team Number"] !== currentQuestion["Team Number"]
                   : team["Team Nickname"] !== currentQuestion["Team Nickname"];
           })
           .sort(() => 0.5 - Math.random())
           .slice(0, 3);

       // Mix wrong answers with the correct one
       let options = [...wrongAnswers, currentQuestion]
           .sort(() => 0.5 - Math.random())
           .map(team => {
               let optionText = questionType === "name-to-number" ? team["Team Number"] : team["Team Nickname"];
               return `<button class='quiz-option' onclick='checkAnswer("${optionText}")'>${optionText}</button>`;
           })
           .join(" ");

       $("#options").html(options);
   } else if (difficulty === "medium") {
       $("#options").hide();
       $("#input-container").show();
       $("#answer-input").val("").focus();
   }
}

function checkAnswer(selected) {
   $(".quiz-option").prop("disabled", true);

   let feedbackText = selected == correctAnswer ? "Correct!" : `Wrong! The correct answer was: ${correctAnswer}`;
   $("#feedback").text(feedbackText).removeClass("correct incorrect").addClass(selected == correctAnswer ? "correct" : "incorrect");

   setTimeout(function() {
       generateQuestion();
       $(".quiz-option").prop("disabled", false);
   }, 2000); // Disable buttons and show feedback after 2 seconds
}

function submitAnswer() {
   let userAnswer = $("#answer-input").val().trim();
   checkAnswer(userAnswer);
}