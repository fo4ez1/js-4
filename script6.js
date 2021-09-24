
let a = prompt("Введите первое число",'');
let num1 = parseInt(a);
let b = prompt("Введите второе число",'');
let num2 = parseInt(b);
{
  while (num1!=0 && num2!=0)
     if(num1>num2){
     num1 = num1%num2;
     }
     else  {
     num2= num2%num1;
  }
 document.write(num1 + " и " + num2 );
}