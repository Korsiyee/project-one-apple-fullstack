
/*
1, algorithm that add two numbers
it add only number value
 

2, 2 + 2=4
2 + 3=5

3, a + b=c

4, difine the fnction that take two arguments 
   IF the one of the two numbers are not number return error
   add the two numbers
   save the results on variable
   return results


function add(a, b){
    if(typeof a!=="number"|| typeof b!=="number"){
        return "the value you inter is not number. please inter number value";
    }
    var c=a + b;
    return c;
}

var sum=add( 4,3);
console.log(sum);*/ 



/*1 write the algorithm that calculate the foot ball total points
   for win=3
       draw=1
       los=0

2 3*3 + 3*1 + 3*0 =10


3 a*3 + b*1 + c*0=tolal

4 difine the fnction that take three arguments 
 IF the one of the two numbers are not number return error
   a*winpoint
   b*drawpoint
   c*lospoint
   add and save the result on variable
   return the result*/

   /*function footballpoints(a,b,c){
    if(isNaN(a)  || isNaN(b)  || isNaN(c)){
        return " the one of the two numbers are not number return error";
    }
    var total =a*3 + b*1 + c*0;
    return total;
   }
   var totalpoints= footballpoints(3,3,3);
   console.log(totalpoints);*/


   var students={
    firstname: "abeba",
    lastname: "chala",

    fullname: function(){
        return this.firstname + "  " + this.lastname;
    },
   }

   console.log(this.students);



   function students1(fn,ln){
    this.firstname=fn;
    this.lastname=ln;
    
     this.fullname= function(){
        return this.firstname + "  " + this.lastname;
    }
    

   }

   var chalaa=new students1("aaa","bbb");
   console.log(chalaa);