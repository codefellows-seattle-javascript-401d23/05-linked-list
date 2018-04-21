LinkedList Data Structure

version 1.0.0 

This program follows a list data structure that allows easy access to modifying an array. 

To access the module you will need chain LinkedList with the desired function. 


.insertAtHead(value) takes in one parameter that inserts the value at the begining of an array.

```arr1 = [];

arr1.LinkedList.insertAtHead(4);

console.log(arr1); // [4]```

.insertAtTail(value) takes in one parameter that inserts the value at the end of an array. 

```arr1 = [1, 2];

arr1.LinkedList.insertAtTail(4);

console.log(arr1); // [1, 2, 4]```


### LinkedList.find(value)

This method takes in one parameter and will search for the specified value. Will return null if value does not exist. 

```arr1 = [1, 2, 4];

var num = arr1.LinkedList.find(4);

console.log(num); // 4```


### LinkedList.remove(value) 

This method takes in one parameter and removes the specified value from the list. Will return null if no value is found.  

```arr1 = [1, 2, 4, 5, 6];

var num = arr1.LinkedList.remove(4);

console.log(arr1); // [1, 2, 5, 6]```


### LinkedList.pop()

This method removes the last item in a string. Will return null if array is empty. 

```arr1 = [1, 2, 4, 5, 6];

var num = arr1.LinkedList.pop();

console.log(arr1); // [1, 2, 4, 5]```


### linkedList.map()

This method will search through every value in an array.

```arr1 = [1, 2, 3, 4];

console.log(arr1.LinkedList.map());
// 1
// 2
// 3
// 4```


## Testing

Insure that npm is updated and Node is installed. To utilize the testing functionality for this package, type in ```npm run test``` in the terminal. 



Update Log: 
2:00pm - 5/6 methods are functioning 

Developers: Josiah Green, Judy Vu, Vinicio Sanchez