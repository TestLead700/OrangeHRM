class Practise
{
    LargestNumber():void{


    let arr1:number[] = [10, 5, 30, 15, 50];
let largest:number = arr1[0];

for(let i:number =0; i<arr1.length;i++)
{
   
    if(arr1[i] < largest)
    {
        largest = arr1[i];
}

}
console.log("largest number:"+largest);
}


///////Reverse a string

StringReverse():void{

    let str:string = "Kavya";
let res:string = "";
for(let i = str.length-1;i>=0;i--)
{
    res= res + str[i];

}

console.log("Reverse of string" + res);



}

///////Reverse characters in string

ReverseCharacters():void{

    let str:string = "I am learning Playwright"
    let words:string[] = str.split(" ");
    let result:string = "";
    for(let i:number = 0;i<words.length;i++)
    {
        let str1:string = words[i];
        let reversed:string = " ";

        for(let j:number = str1.length-1;j>=0;j--)
        {
            reversed = reversed + str1[j];
        }

        result = result + reversed + " ";
    }
console.log(result);

}

///////Reverse Words

ReverseWords():void{

    let str:string = "I am learning Playwright"
    let words:string[] = str.split(" ");
    let result:string = "";
    for(let i:number = words.length-1;i>=0;i--)
    {
        result = result + words[i] + " ";
    }
console.log(result);

}

///////Duplicate in string

DuplicateInString():void{

let str:string = "Kavya";
let result:string = "";

for(let i: number =0;i<str.length;i++)
{
    let char = str.charAt(i);
    if(str.indexOf(char) != str.lastIndexOf(char)){

        if(!result.includes(str[i]))
        {

        result = result + str[i];
        //break;
        }

    }

}

console.log("Non repeating character" + result);
}


DuplicateInArray():void{

let arr:number[] = [10 , 5, 10, 30, 40, 5];
let result:number[] = [];

for(let i: number =0;i<arr.length;i++)
{

    if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){

        if(!result.includes(arr[i]))
        {

        result.push(arr[i]);
        //break;
        }


    }

}

console.log("Non repeating character" + result);
}


/////// Duplicates in two arrays

DuplicatesInTwoArrays():void{

    let arr:number[] = [10 , 20, 30, 10, 5];
    let arr1:number[] = [10 , 50, 20, 10, 5];
    let result:number[] = [];
     for(let i:number = 0;i<arr.length;i++)
     {
       if(arr1.includes(arr[i])) 
       {
        if(!result.includes(arr[i]))

            result.push(arr[i]);
       }

       if(arr.includes(arr1[i])) 
       {
        if(!result.includes(arr1[i]))

            result.push(arr1[i]);
       }
    
     }
    
   console.log(result);

}

ToRemoveDuplicatesInString():void{

    let str:string = "Kavya";
    let result:string = " ";
    for(let i:number =0;i<str.length;i++)
    {
        let char = str.charAt(i);

        if(!result.includes(char))
        {
            result = result + str[i];
        }
    }

    console.log(result);
}

ReverseAnArray():void{

    let arr:number[] = [10, 20 , 30, 40, 50];
    let result:number[] = [];
    for(let i:number = arr.length-1;i>=0;i--)
    {
        result.push(arr[i]);
    }

    console.log(result);
}

MergeTwoArrays():void{

    let arr:number[] = [10, 20 , 30, 40, 50];

    let arr1:number[] = [10, 20 , 30, 40, 50];
    let result:number[] = [];
    for(let i:number = 0;i< arr.length;i++)
    {
        result.push(arr[i]);
    }

    for(let i:number = 0;i<arr1.length;i++)
    {
        result.push(arr1[i]);
    }

    console.log(result);


}

RemoveDuplicatesInArray():void{

let arr:number[] = [ 5, 10, 10, 20, 20]
let result:number[] = [];

for(let i:number = 0;i<arr.length;i++)
{


          if(!result.includes(arr[i]))
          {

            result.push(arr[i]);
          }

        
    
}

console.log(result);

}

Anagrams():void{
let str1:string = "eat";
let str2:string = "tea";
let result:string = "";
for(let i:number = 0;i<str1.length;i++)
{
    let char = str1.charAt(i);

    if((str2.includes(char)) && (str1.length == str2.length))
    {
        if(!result.includes("Strings are Anagrams"))
        result = result+"Strings are Anagrams";

    }

    else{
       if(!result.includes("Strings are not Anagrams"))
        result = result+"Strings are not Anagrams";
    }
}
console.log(result);
}

PrimeNumbers():void{

let num1:number = 30
for(let i:number = 2;i<=num1;i++)
{
let count:number = 0;
    for(let j:number = 1;j<= i;j++)
    {
    if(i%j == 0)
    {
        count = count+1;
    }
}
if(count !=  2)
    {
        console.log("number is prime" + i);
    }
}

}

PrimeNumbersInArray():void
{
    let arr:number[] = [5, 6, 7, 8, 9];
    for(let i:number =0;i<arr.length;i++)
    { let count:number = 0;
        let num:number = arr[i];

        for(let j:number = 1;j<= num;j++)
        {
           if(num%j == 0)
           {
            count = count+1;
           }
        }

        if(count !=2)
        {
            console.log("prime numbers" + num);
        }
    }
}

FindDuplicatesWithout():void
{
    let str:string = "semaphore";
    let arr:string[] = str.split("");

    for(let i:number = 0;i<arr.length;i++)
    { let count:number = 0;
        for(let j:number = i+1;j<arr.length;j++)
        {
            if(arr[i] == arr[j])
            {
                for(let k:number = j;k<arr.length;k++)
                {
                    arr[k] = arr[k+1];  
        
                    console.log(arr[i]);
                }
            }

        }
    }
}

RemoveDuplicatesWithout():void
{
    let str:string = "Naresh";
    let arr:string[] = str.split("");

    for(let i:number = 0;i<arr.length;i++)
    { let count:number = 0;
        for(let j:number = i+1;j<arr.length;j++)
        {
            if(arr[i] == arr[j])
            {
                for(let k:number = j;k<arr.length;k++)
                {
                    arr[k] = arr[k+1];  
        
                    arr.pop(); 
                }

                
            }

            
        }

    }

    console.log(arr);
}


FindNonRepeatingWithout():void{

    let str:string = "Kavya";
    let arr:string[] = str.split("");

    for(let i : number =0;i<arr.length;i++)
    {let count:number = 0;
        for(let j:number = 0 ; j<arr.length;j++)
        {
            if(i!=j && arr[i] == arr[j])
            {
             count = count+1;
            }
    
        }

        if(count == 0)
        {
            console.log(arr[i]);
            break;
        }
    }
}

RemoveConsonants():void{
let str:string = "naresh";
let result:string = "";
for(let i:number = 0;i<str.length;i++)
{

    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' )
    {
        result = result + str[i]; 
    }
}

console.log(result);
}

RemoveVowels():void{
let str:string = "semaphore";
let result:string = "";
for(let i:number = 0;i<str.length;i++)
{

    if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' )
    {
        result = result + str[i]; 
    }
}

console.log(result);
}

}



let P:Practise = new Practise();
P.RemoveVowels();

