let input=document.getElementById('newinput');
let buttons= document.querySelectorAll('button');
let inputstring="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '=')
        {
            inputstring =eval(inputstring) ; //evaluate string mathematically
            input.value=inputstring
        }
        else if(e.target.innerHTML== 'AC')
        {
            inputstring="";
            input.value=inputstring;

        }
        else if(e.target.innerHTML== 'DEL')
        {
            inputstring=inputstring.substring(0,inputstring.length-1);
            input.value=inputstring;
        }
        else{
            inputstring += e.target.innerHTML;
            input.value=inputstring;
        }
    })
})