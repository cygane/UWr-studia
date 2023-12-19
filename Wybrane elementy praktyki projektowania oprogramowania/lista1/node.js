function div(a, b){
    return (Math.round(a/b - 0.5));
}

function sum(a){
    var suma = 0;
    while (a>0){
        suma += a%10;
        a = div (a, 10);
    }
    return suma;
}

function zad2(){
    for (let i = 1; i < 100000; i++){
        var number = i;
        var digit = 0;
        var iff = 0;
        while(number > 0){
            digit = number % 10;
            if (i%digit != 0){
                iff = 13;
                break;
            }
            number = div(number, 10);
        }
        if (i%sum(i) == 0 && iff == 0){
            console.log(i + "  "); 
        }
    }
}
//zad2();

function zad3(){
    for (let i = 2; i < 100000; i++){
        for (let j = 2; j < i;j++){
            if(i % j == 0){
                break;
            }
            if (j == i - 1){
                console.log(i + "  ");
            }
        }
    }
}
zad3();


