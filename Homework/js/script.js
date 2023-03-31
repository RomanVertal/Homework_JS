

let sum = ((num1) => {

    let allSum = num1;
  
    function f(num2) {
      allSum += num2;
      return f;
    }
  
    f.toString = function() {
      return allSum;
    };
  
    return f;
  })



//   console.log(sum(4)(14))
//   console.log(sum(4)(14)(7))
//   console.log(sum(4)(14)(7)(5))

  alert(sum(4)(14))
  alert(sum(4)(14)(7))
  alert(sum(4)(14)(7)(5))

  