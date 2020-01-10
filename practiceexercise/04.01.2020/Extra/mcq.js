rightAnswers = Array('a','c','b','d','c');

function submitAnswers()
{   
    ans1 = carform.q1ans.value;
    ans2 = carform.q2ans.value;
    ans3 = carform.q3ans.value;
    ans4 = carform.q4ans.value;
    ans5 = carform.q5ans.value;
    
    submittedAnswers = Array(ans1, ans2, ans3, ans4, ans5);
    console.log(submittedAnswers);

    score = 0;
    for(i=0; i<rightAnswers.length; i++)
    {
        if(submittedAnswers[i] == rightAnswers[i])
        {
            score +=1;
        }
    }
    alert("Your Score is "+score+"/"+rightAnswers.length);
}

