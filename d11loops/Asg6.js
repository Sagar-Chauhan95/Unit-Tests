/*55555
4444
333
22
1 */

let number ='';   // Assigning number as string

// Looping to get number of rows
for( let i=5; i>=1; i--){

    // looping to get string along with numbers of column.
    for(let j=i; j>=1; j--){
        number+=i;

    }
    console.log(number);    // Printing the whole string after completion of process
    number='';              // Reassigning the value of number for the next row.
}