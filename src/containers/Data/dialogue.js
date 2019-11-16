var sequence = [
    {
        id: 0,
        display: "Hello Joe",
        speaker: "jane"
    },
    {
        id: 1,
        display: "Good morning Jane, How are you doing today?",
        speaker: "joe"
    },
    {
        id: 2,
        display: "Well I guess I'm...",
        speaker: "jane",
        choices: [
            {
                display: "Having a terrible day",
                goto: 3,
            },
            {
                display: "Having a wonderful day",
                goto: 4,
            }
        ]
    },
    {
        id: 3,
        display: "Sorry to hear that",
        speaker: 'joe',
        mood: 'sad',
        goto: 5,
    },
    {
        id: 4,
        display: "Great news! Hope it stays that way",
        mood: 'happy',
        speaker: 'joe'
    },
    {
        id: 5,
        display: "Goodbye",
        speaker: "jane"
    }
];

export default sequence