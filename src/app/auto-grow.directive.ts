import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(foclus)' : 'onFocus()',
        '(blur)'   : 'onBlur()'
    }
})
export class AutoGrowDirective{
    constructor(private el: ElementRef, private renderer: Renderer){
    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','300');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','100');
    }
}