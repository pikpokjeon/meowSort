# Meow-Sort [randomSortJS][![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgjbae1212%2Fhit-counter&count_bg=%23900969&title_bg=%236C00E9&icon=medium.svg&icon_color=%23FFFFFF&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
Random Sorting your Array's any type of Element or Object's Values 
#### UPDATE - 10/11/22 : Register on NPM
---
## HOW TO USE
### Array
``` javascript
import {meowSort} from 'meow-sort'

const orderedArray = [1,2,3,4,5,6]
const randomized = meowSort.random(orderedArray)
console.log(randomized) // [5,3,4,1,6,2]
```
### Object
``` javascript
import {meowSort} from 'meow-sort'

const obj = {1:'A',2:'B',3:['C','D'],4:'E'}
const randomized = meowSort.random(obj)
console.log(randomized) // ['B',['C','D'],'A','E']
```
####  Contributors
- pikpokjeon
- (welcome to contribute)

### Next version plan
- randomize in range