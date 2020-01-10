bills = Array(124, 48, 268);
tips = []
billAmount = [];

getTips();
console.log("Tips : " + billAmount);
console.log("Total Bill : " + billAmount);









//List of Functions to calculate the tips and total bill amount

function getTips()
{
    for(i=0; i < bills.length; i++)
    {
        tips[i] = calculateTip(bills[i]);
        billAmount[i] = tips[i] + bills[i];
    }
}




function calculateTip(billAmount)
{
    if(billAmount < 50)
    {
        tipToBePaid = (billAmount * 20) / 100;
    }
    else if(billAmount < 200)
    {
        tipToBePaid = (billAmount * 15) / 100;
    }
    else if(billAmount > 200)
    {
        tipToBePaid = (billAmount * 10) / 100;
    }

    return tipToBePaid;
}