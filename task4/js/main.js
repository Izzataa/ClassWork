// task-1
for (let i = 1; i <= 1000; i++) {
    let sum = 0;
    let num = i;
  
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  
    if (sum % 3 === 0 && i % 10 !== 3) {
      console.log(i);
    }
  }



// task-2
for (let i = 1; i <= 1000; i++) {
    if (i % 10 !== 3 && Math.floor(i / 10) % 10 !== 3 && Math.floor(i / 100) % 10 !== 3) {
      console.log(i);
    }
  }

// task-3
  let maxNumber = 0;
  let maxSum = 0;
  
  for (let i = 0; i <= 1000; i++) {
    let number = i;
    let sum = 0;
  
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
  
    if (sum >= 5 && sum <= 7 && i > maxNumber) {
      maxNumber = i;
      maxSum = sum;
    }
  }
  
  console.log("Ən böyük ədəd: " + maxNumber);