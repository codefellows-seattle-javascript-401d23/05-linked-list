## Linked List Methods

### Installation and use
- Installation: clone this repo and include it in your file structure
    - `git clone <repo>`
- Each method can be used directly on any linked list created (see examples below)
- Test can be run via the following command:
    - `npm run test`

### Included Methods:
- `const list = new LinkedList`
    - Creates new linked list
    - Ex. <br/>`list => {head: null}`
    
- `.createNewListItem(value)`
    - Creates a new list item onto the end of the list. Will return your new list
    - Ex. <br/>`list.createNewListItem(5)`<br/>`list => {head: {value: 5, next: null}}`

- `.pop()`
    - Removes the most deeply nested item from the linked list (akin to the last item in an array) and replaces that value with 'null'
    - Ex. <br/>`list => 
    { head: {
        value: 5, 
        next: { value: 9, next: null } } }`<br/>
    <br/>`list.pop()`<br/>Returns `list => {head: {value: 5, next: null}}`
    
- `.remove(value)`
    - Removes the value from the list as specified by the input parameter
    - Ex. <br/>`list => 
    { head: {
        value: 5, 
        next: { value: 9, next: null } } }`<br/>
    <br/>`list.remove(5)`<br/>Returns `list => {head: {value: 9, next: null}}`

- `.map(callback)` (pure)
    - Applies the input callback to all items in the list and returns the new list
    - Ex. <br/>`list => 
    { head: {
        value: 5, 
        next: { value: 9, next: null } } }`<br/>
    <br/>`list.map(x => x * 2)`<br/>Returns `{ head: {
                                            value: 10, 
                                            next: { value: 18, next: null } } }`
                                            
- `.reduce(callback[, initialValue])`
    - Takes in a callback and an optional initial value. Reduce will apply the callback to all items in the list and return an integer. If no initial value is specified, the initial value will be set to the value of the head object.
    - Ex. (No starting value)<br/>`list => 
    { head: {
        value: 5, 
        next: { value: 9, next: null } } }`<br/>
    <br/>`list.reduce((a, b) => a + b)`<br/> Returns `14`
     - Ex. (With starting value)<br/>`list => 
     { head: {
         value: 5, 
         next: { value: 9, next: null } } }`<br/>
     <br/>`list.reduce((a, b) => a + b, 5)`<br/> Returns `19`

