import { PipeTransform, Pipe } from '@angular/core';

// import { CorporateComponent } from '../corporate/corporate.component';

@Pipe({
    name: 'searchFilter'
})
export class DashboardFilterPipe implements PipeTransform {
    doctorSearch = false;
    corporateSearch = false;
    groupSearch = false;
    transform(listToFilter: any[], searchText: string, fields?: string[], method = 'includes'): any[] {
        if (!listToFilter) { return []; }
        if (!searchText) { return listToFilter; }
        if (!fields) {

            return listToFilter.filter(element => {
                return Object.keys(element).find((key) => {
                    if (!!element[key] && (typeof element[key] === 'string' ||
                        typeof element[key] === 'number')) {
                        return element[key].toString().toLowerCase()[method](searchText.toLowerCase());
                    } else if (element[key] instanceof Object) {
                        return Object.keys(element[key]).find((subKey) => {
                            if (!!element[key][subKey] && (typeof element[key][subKey] === 'string'
                                || typeof element[key][subKey] === 'number')) {
                                return element[key][subKey].toString().toLowerCase()[method](searchText.toLowerCase());
                            }
                        });
                    }
                });
            });
        }
        if (!!fields && fields.length) {
            // searchText = searchText.toLowerCase();
            const filteredByField = [];
            listToFilter.forEach(element => {
                fields.forEach(field => {
                    // console.log(field.includes(':'));
                    const refObject = field.split(':')[0];
                    const refSubObject = field.split(':')[1];
                    if (field.includes(':') && element[refObject] &&
                        element[refObject][refSubObject].toString().toLowerCase()[method](searchText.toLowerCase())
                    ) {
                        console.log('fromSub', element);

                        filteredByField.push(element);
                    } else if (element[field] &&
                        element[field].toString().toLowerCase()[method](searchText.toLowerCase())) {
                        console.log('fromSup', element);
                        filteredByField.push(element);
                    }
                });
            });
            // console.log('filteredByField', filteredByField);

            return filteredByField.filter((filterD, i, self) => self.indexOf(filterD) === i);
        }
    }
}
