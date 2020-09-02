import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})

export class OrderbyPipe implements PipeTransform {
  transform(value: any, args: string): any {
    return value.filter((x: any) => x.value.name.toLowerCase()
      .startsWith(args.toLowerCase()))
  }
}
