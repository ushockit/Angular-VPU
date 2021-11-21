import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'bigFirstLetter' })
export class BigFirstLetterPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }
}
