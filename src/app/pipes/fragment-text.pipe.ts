import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'fragment'
})

export class FragmentPipe implements PipeTransform {

transform(value: string, args: string[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 200;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
   }
}

// {{(archive.content.length>200)? (archive.content | slice:0:200)+'..':(archive.content)}}
