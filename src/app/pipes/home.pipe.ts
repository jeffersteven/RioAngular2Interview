import {Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class FilterArrayPipe implements PipeTransform{
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.id.indexOf(args[0]) !== -1);
    }
}