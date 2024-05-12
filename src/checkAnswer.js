const check = (userAnswer, correctAnswer, name) => {
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n
Let's try again, ${name}`);
    }
};
export default check;