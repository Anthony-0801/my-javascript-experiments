document.write("<p>Print numbers from 1 to 100 </p>");
    for (i=0; i<=100; i++) {
        document.write(i + " ");
    }

document.write("<p>Print the sum of all even numbers from 1-10</p>")
    let num = 10;
    let sum = 0;
    document.write("<p>Printing numbers from 1 to 10</p>");
    for (i = 0; i <= num; i++) {
        document.write(" " + i);
       if (i % 2 == 0) {
           sum += i;
        }
    }
    document.write("<br><br><p>The sum of even numbers from 1 to 10: </p>" + sum);