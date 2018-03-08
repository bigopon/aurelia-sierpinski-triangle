import { inlineView, bindable } from 'aurelia-framework';


export class MyComponent {
}
bindable('firstName')(MyComponent);
inlineView('<template>${firstName}<template>')(MyComponent);