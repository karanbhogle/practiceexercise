markAge = 20;
johnAge = 22;

function calculateBMI(mass,height)
{
    bmi = mass/(height*height);
    return bmi;
}

markMass = parseInt(prompt('Enter Mark\'s Mass'));
markHeight = parseInt(prompt('Enter Mark\'s Height'));

johnMass = parseInt(prompt('Enter John\'s Mass'));
johnHeight = parseInt(prompt('Enter John\'s Height'));

isMarkHigh = calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight);

console.log("Is Mark's BMI Higher? "+isMarkHigh);

