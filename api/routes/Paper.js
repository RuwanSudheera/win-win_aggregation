const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    const questions = [
        {
            question: "What company developed the vocaloid Hatsune Miku?",
            answers: ["Crypton Future Media", "Sega", "Sony", "Yamaha Corporation"],
            correct: "Crypton Future Media",
            questionId: "4630606"
        },
        {
            question:
                "Which country, not including Japan, has the most people of japanese decent?",
            answers: ["Brazil", "China", "South Korea", "United States of America"],
            correct: "Brazil",
            questionId: "4795960"
        },
        {
            question: "Which sign of the zodiac comes between Virgo and Scorpio?",
            answers: ["Libra", "Gemini", "Taurus", "Capricorn"],
            correct: "Libra",
            questionId: "4321002"
        },
        {
            question: "Which of the following presidents is not on Mount Rushmore?",
            answers: [
                "John F. Kennedy",
                "Theodore Roosevelt",
                "Abraham Lincoln",
                "Thomas Jefferson"
            ],
            correct: "John F. Kennedy",
            questionId: "4442286"
        },
        {
            question: "What is Tasmania?",
            answers: [
                "An Australian State",
                "A flavor of Ben and Jerry's ice-cream",
                "A Psychological Disorder",
                "The Name of a Warner Brothers Cartoon Character"
            ],
            correct: "An Australian State",
            questionId: "4564430"
        }
    ];
    res.json(questions);
});



module.exports = router;
