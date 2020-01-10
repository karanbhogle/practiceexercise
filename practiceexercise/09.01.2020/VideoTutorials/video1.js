function interviewQuestion(job){
    if(job == "designer"){
        return function(name){
            console.log("Hey " + name + ", how is the UX design?");
        }
    }

    else if(job == "teacher"){
        return function(name){
            console.log("What subject do you teach, " + name + "?");
        }
    }

    else{
        return function(name){
            console.log("How are you today, " + name + "?");
        }
    }
}


designerQuestion = interviewQuestion("designer");
designerQuestion("Johnbhai Designer");

interviewQuestion("teacher")("Naresh");
interviewQuestion("engineer")("Paresh");