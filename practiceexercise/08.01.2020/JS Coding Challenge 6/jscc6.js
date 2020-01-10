function fibonacci(n) {
    num1 = 0, num2 = 1, temp = 0;

    console.log(num1);
    console.log(num2);

    for(i=2; i<n; i++) {
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;
        console.log(temp);
    }
    
};

fibonacci(5);










num3 = 0, num4 = 1, temp2 = 0;
function recursiveFibonacci(n)
{
    console.log()
}

recursiveFibonacci(5);