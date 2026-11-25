let arr:number[] = [10, 5, 30, 15, 50];


for(let i:number =0; i<arr.length;i++)
{
    for(let j:number =i+1; j<arr.length;j++)

{
    
    
    if(arr[i]< arr[j])
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}

}
console.log("Second Highest:"+arr);


