/* Person = function(name, yearOfBirth, job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function()
    {
        console.log(2020 - this.yearOfBirth);
    }
}

Person.prototype.displayJob = function ()
{
    console.log(this.name + " is a " + this.job)
}

Person.prototype.lastname = "Smith";

john = new Person("John", 1990, "Teacher");
john.calculateAge();
john.balance = 200;
john.displayJob();

mark = new Person("Mark", 1997, "Intern");
mark.calculateAge();
mark.displayJob();

console.log(john.name + "'s Lastname is " + john.lastname);
console.log(mark.name + "'s Lastname is " + mark.lastname);



names = ["karan", "devansh", "kevin", "vaibhav"];
console.log(names);
 */









/* 
//Object create()
personProto = {
    calculateAge : function()
    {
        this.yearOfBirth = yearOfBirth;
    }
}


mary = Object.create(personProto);
mary.name = "Mary";
mary.yearOfBirth = 1970;
mary.job = "Teacher";

console.log(mary);

don = Object.create(personProto, {
    firstname : {value : "Don"},
    lastname : {value : "Caesar"},
    yearOfBirth : {value : 1990},
    job : {value : "Mafia"}
});

console.log(don);
 */










years = Array(1997, 1998, 1999, 2000, 2001);

function arrayOperation(arr, fn) 
{
    arrayResult = []

    for(i=0; i<arr.length; i++)
    {
        arrayResult.push(fn(arr[i]));
    }

    return arrayResult;
}

function calculateAge(year)
{
    return 2020 - year;
}

ages = arrayOperation(years, calculateAge);

console.log("Years in the Array : " + years);
console.log("Ages in the Array  : " + ages);