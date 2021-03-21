var fruit ={
    name:"Orange",
    price :30,
    Quantity : 2,
    total: function(price,Quantity){ 
        cost = price*Quantity 
        return this.total=cost
    }
}
fruit.total(30,2)
console.log(fruit.Quantity + " " + fruit.name + " for KES " + cost.toFixed(2))

  
  var ball = {                 //object
      type : "football",
      color : "white & black ",
      size : "big",
      purpose: function() { // method 
            return   "The "  + this.size +" " + this.color + " " + this.type + " is used for soccer "          // function
      }            
  };
  console.log(ball.purpose())

var chair ={ // object
          type : "rocking chair",
          material : "wooden",
          price : 50.00 ,
          behaviour : function(){// method
           return " The " + this.material + " "+ this.type + " " + " is worth " + this.price +" "+ " UGX and it is for relaxing "//function 
        }

};
console.log(chair.behaviour())
