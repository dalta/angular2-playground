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

Adding a new Subcomponent
=========================
A subcomponent will be present as a directive in a parent compoenent. 
To create and use a subcomponent,

1. Create a compoenent.html file
2. Create a Compoenent.ts file with templateUrl=app/**/compoenent.html
3. Add the directive in parent component's template.
4. In parent compoenent's module.ts file, import child compoenent and specify it in declarations.

Tips
=====
1. The name of a compoenent file should be `product.compoenent.ts`. 
2. The main compoenent is `app.compoenent.ts` 
3. Name the compoenent class will have suffix Compoenent e.g. `ProductComponent`
4. The selector for each compoenent should have a common prefix. E.g. `fx-` (Think ! compoenent is a custom directive of angular1)
4. Modules will be loaded automatically, no need to add `<script>` tag in index.html
5. In @Component selector defines compoenent's directive name (which is a custom html tag).