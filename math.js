var firstNumber;
        var secondNumber;
        var number1;
        var number2;
        var sum;

    SVGStringList   
        firstNumber = window.prompt( "Enter first integer");

        secondNumber = window.prompt( "Enter second integer");
    
        number1 = parseInt( firstNumber );
        number2 = parseInt( secondNumber );

        sum = number1 + number2;

        document.writeln( "<h1> The sum is " + sum + "</h1>");