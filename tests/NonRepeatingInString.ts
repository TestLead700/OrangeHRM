let str:string = "Kavya";
let result:string = "";

for(let i: number =0;i<str.length;i++)
{
    let char = str.charAt(i);
    if(str.indexOf(char) != str.lastIndexOf(char)){

        result = result + str[i];
        //break;

    }

}

console.log("Non repeating character" + result);