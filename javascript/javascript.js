        //First Problem
        /*Write a program that prints the numbers from 1 to 100. But for multiples 
        of three, print "Fizz" instead of the number and for the multiples of five, 
        print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".*/
       for(let i=1;i<=100;i++)
       {
           if(i%3===0 && i%5===0)
              console.log("FizzBuzz");
            else if(i%3===0 && i%5!=0)
              console.log("Fizz");
            else if(i%5===0 && i%3!=0)
              console.log("Buzz");
            else
              console.log(i);
        }

        //Second Problem
        /*Write a function that checks if a given string 
        is a palindrome */
        function isPalindrome(str)
        {
            const len = str.length;
            for(let i=0;i<len/2;i++)
                {
                 if(str[i]!=str[len-i-1])
                    return false;
                }
            return true;
        }
        console.log(isPalindrome("malayalam"));

       //Third Problem
       /*Write a function that takes an array of numbers 
       and returns the largest number.*/
       function maximum(arr1)
       {
            let max=-10000;
            for(let i=0;i<arr1.length;i++)
            {
                if(arr1[i]>max)
                max=arr1[i];
            }
           return max;
       }
       let arr=[26,53,78,96,81,43,19];
       console.log(maximum(arr));
 
        //Fourth Problem
        /*Write a function that takes a string and returns an object with each character as a key 
        and its number of occurrences as the value.*/
        function count(str)
        {
            let obj={};
            for(let i=0;i<str.length;i++)
                {
                 if(obj[str[i]])
                    obj[str[i]]++;
                 else
                    obj[str[i]]=1;
                }
             return obj;
        }
        console.log(count("Welcome"));

        //Fifth Problem
        /*Write a function that takes a string and returns
         the longest word in the string.*/
         function longestWord(str)
         {
            let arr=str.split(" ");
            let max=0,longword;
            for(let i=0;i<arr.length;i++)
                {
                  if(arr[i].length>max)
                    {
                       max=arr[i].length;
                       longword=arr[i];
                    }
                }
                  return longword;
         }
         console.log(longestWord("I am a Fullstack Developer"));

        //Sixth Problem
        /*Write a function that takes a number as input and 
        returns its factorial.*/
        function fact(num)
        {
            let fact=1;
            for(let i=1;i<=num;i++)
            {
                fact=fact*i;
            }
          return fact;
        }
        console.log(fact(5));

        //Seventh Problem
        /*Write a function that converts a temperature 
        from Celsius to Fahrenheit.*/
        function celsiustofahrenheit(celsius)
        {
            let fahrenheit=(celsius*9/5)+32;
         return fahrenheit;
        }
        console.log(celsiustofahrenheit(27));

        //Eighth Problem
        /*Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
        find the one that is missing from the array.*/
        function missingNumber(arr)
        {
                let sum=0;
                for(let i=0;i<arr.length;i++)
                    {
                    sum+=i;
                    }
                let sum2=0;
                for(let i=0;i<arr.length;i++)
                    {
                        sum2+=arr[i];
                    }
                        return sum-sum2;
        }
            console.log(missingNumber([0,1,2,3,4,5,6]));

    
                
