
/**
 * Created by Anshul Aggarwal1 on 04-07-2016.
 */


var x =0,i=0,opp;
var num1,num2;

fnctn = function(arg1){

    document.getElementById("output").innerHTML+= arg1;

}


reset = function(){
    document.getElementById("output").innerHTML=" ";
}
operand = function(arg1)
{
    if(arg1!='='){
    opp=arg1;
    num1= Number (document.getElementById("output").innerHTML);
        document.getElementById("output").innerHTML="";
        x=0;
    }

    else{
        num2=Number (document.getElementById("output").innerHTML);
        x=0;
        var ans;
        if(opp=='+')
        {
            ans= num1+ num2;
        }

        else if(opp=="-")
        {
            ans=num1-num2;
        }
        else if(opp=="/")
        {
            ans=num1/num2;
        }
        else if(opp=="*")
        {
            ans=num1*num2;
        }


        document.getElementById("output").innerHTML=Math.round(ans*100)/100;
    }
}









