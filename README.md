# Meow-Sort [randomSortJS]
Github Page : https://github.com/pikpokjeon/meowSort [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fpikpokjeon%2FmeowSort&count_bg=%234D3A48&title_bg=%23CE00E9&icon=medium.svg&icon_color=%23FFFFFF&title=Github&edge_flat=false)](https://hits.seeyoufarm.com) 
NPM PAGE :https://www.npmjs.com/package/meow-sort [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmeow-sort&count_bg=%234D3A48&title_bg=%236C00E9&icon=medium.svg&icon_color=%23FFFFFF&title=NPM&edge_flat=false)](https://hits.seeyoufarm.com)
Random Sorting your Array's any type of Element or Object's Values 
#### UPDATE - 15/11/22 : Fixed issue.
---
## HOW TO USE
### Array
``` javascript
import {meowSort} from 'meow-sort'

const orderedArray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11], 13], 14 
const randomized = meowSort.random(orderedArray)
// [3, [ 10, 11 ], 1, 13, 8, [ 4, 5, 6 ], 7, 2, 9 ]
```
### Object
``` javascript
import {meowSort} from 'meow-sort'

const obj = {1:'A',2:'B',3:['C','D'],4:'E'}
const randomized = meowSort.random(obj)
// [ [ 'C', 'D' ], 'E', 'A', 'B' ]
```
####  Contributors
- pikpokjeon
- (welcome to contribute)

### Next version plan
- randomize in range