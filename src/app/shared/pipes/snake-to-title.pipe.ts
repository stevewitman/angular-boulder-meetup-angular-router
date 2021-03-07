import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeToTitle',
})
export class SnakeToTitlePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return this.humanize(value);
  }

  humanize(str) {
    var i,
      frags = str.split('_');
    for (i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
}
