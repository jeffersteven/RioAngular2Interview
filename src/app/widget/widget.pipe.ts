import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myfilter'
})
@Injectable()
export class FilterArrayPipe implements PipeTransform{
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.id.indexOf(args[0]) !== -1);
    }
}