function fibonnaciGenerator(n) {
for (var output = [0]; output.length < n; output[output.length - 1] + output[output.length -2]) {
    if (n === 1) {output.push(0)}
else if (n === 2) {output.push(0,1)}
}
return output[n];
    }

//Okay, so we need to have an array built that will create items that are always the product of multiplying the previous two arrays together. You have a variable that takes you have a variable that pushes an output that is always the last two positions added together. And then after which, each time, the positions that it takes is incremented up. 
//Second floor using a 4 control statement might be the correct way to go about this. If we can control the rate of growth, end number would have to be somehow relating to the return, and then the starting number would just be a simple 1, then we should be able to have a consistent rate of growth. The hard part would just be getting it to be that's parameters set based on the return that is input. 
//We need to be able to convert the length of the array into a position in which whatever is input on N can then be assigned to a position rather than a raw. 
//it calls a position on the array. And then we convert that into returning a number that we can actually use somehow. 