johnTeamScore = Array(1, 1, 1);
mikeTeamScore = Array(1, 1, 1);
maryTeamScore = Array(1, 1, 2);

function calculateAverage(teamScore)
{
    return result = (teamScore[0] + teamScore[1] + teamScore[2])/2;
}
avgJohnTeam = calculateAverage(johnTeamScore);
avgMikeTeam = calculateAverage(mikeTeamScore);
avgMaryTeam = calculateAverage(maryTeamScore);

if(avgJohnTeam > avgMikeTeam && avgJohnTeam > avgMaryTeam)
{
    console.log("John's Team is a WINNER");
}
else if(avgMikeTeam > avgJohnTeam && avgMikeTeam > avgMaryTeam)
{
    console.log("Mike's Team is a WINNER");
}
else if(avgMaryTeam > avgJohnTeam && avgMaryTeam > avgMikeTeam)
{
    console.log("Mary's Team is a WINNER");
}
else {
    console.log("It's a DRAW");
}