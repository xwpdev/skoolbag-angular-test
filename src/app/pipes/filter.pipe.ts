import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if (!items) { return []; }

        if (!searchText) { return items; }

        searchText = searchText.toLowerCase();
        // custom search filter pipe to search in both name and address
        return items.filter(item => {
            if (item && (item.name || item.address)) {
                return item.name.toLowerCase().includes(searchText)
                    || item.address.street.toLowerCase().includes(searchText)
                    || item.address.suburb.toLowerCase().includes(searchText)
                    || item.address.postcode.toLowerCase().includes(searchText)
                    || item.address.state.toLowerCase().includes(searchText)
                    ;
            }
            return false;
        });
    }
}