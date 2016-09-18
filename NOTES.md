Module
=========
In TS the file itself becomes a module. To import a class,

```javascript
import {ProductComponent} from './products'
```

in products.ts

```typescript
export class ProductComponent{
    //code goes here
}
```

Tips
=====
1. The name of a compoenent file should be `product.compoenent.ts`. 
2. The main compoenent is `app.compoenent.ts` 
3. Name the compoenent class will have suffix Compoenent e.g. `ProductComponent`
4. The selector for each compoenent should have a common prefix. E.g. `fx-` (Think ! compoenent is a custom directive of angular1)
4. Modules will be loaded automatically, no need to add `<script>` tag in index.html
5. In @Component selector defines compoenent's directive name (which is a custom html tag).