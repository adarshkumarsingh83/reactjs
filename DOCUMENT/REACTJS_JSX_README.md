# JSX
---
* JavaScript Xml 
* xml code for the component and elements 
* it can have attribute and child elements in xml code 



### Jsx code
```
import React from 'reactt'

const Wish = () => {

    reurn (
          <div className='dummyClass'>
            <h1>Some thigns</h1>
          </div>
    	)

}

```

### Non jsx code 

```
import React from 'reactt'

const Wish = () => {

    reuturn React.createElement(
          'div',
          {id:'someid',className:'dummyClass'},
          React.createElement('h1',{id:'someid'},'some things ')

    	)
}

```