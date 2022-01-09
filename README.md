# it-job-roles

`fetchRandomJobRole()`
The result will be in the form of json object including 2 properties: role & description

```
const itJobRoles = require("it-job-roles");
let result = itJobRoles.fetchRandomJobRole();
```

`showRandomJobRole()`
The result will be in the form of string: <role>\n<description>
  
```
const itJobRoles = require("it-job-roles");
console.log(itJobRoles.showRandomJobRole());
```

New job roles will be added as the time flows ! 
