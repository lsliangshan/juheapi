# juheapi

## 聚合数据

### 1. Introduction

聚合数据API集合

<br/>

### 2. Usage

```javascript
import { queryFapigxBulletin } from "juheapi";

queryFapigxBulletin({
  data: {
  key: 'e3e3ec2c1040cbfe29fcc19f75125825';
},
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded';
},
});
```

> Recommended Usage

```javascript
import { queryFapigxBulletin } from "juheapi/free";

// OR

import { queryFapigxBulletin } from "juheapi/free/queryFapigxBulletin";

queryFapigxBulletin({
  data: {
  key: 'e3e3ec2c1040cbfe29fcc19f75125825';
},
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded';
},
});
```
