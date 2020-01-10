//the mass should be taken in kg units and the height should be taken in metres.

mark = {
    fullName : 'Mark Anthony', 
    mass : 60, 
    height : 1.7,

    calculateBMI : function()
    {
        return this.mass / (this.height * this.height);
    }
};


john = {
    fullName : 'John Abraham', 
    mass : 80, 
    height : 1.7,
    calculateBMI : function()
    {
        return this.mass / (this.height * this.height);
    }
};


markBMI = Math.floor(mark.calculateBMI());
johnBMI = Math.floor(john.calculateBMI()); 


if(markBMI > johnBMI)
{
    console.log("Mark's BMI: "+ markBMI + " is higher than John' BMI: "+johnBMI);
}
else if(johnBMI > markBMI)
{
    console.log("John's BMI: "+ johnBMI + " is higher than Mark' BMI: "+markBMI);
}