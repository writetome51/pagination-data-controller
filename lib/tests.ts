import { PaginationDataController } from './index';
import { AppPaginator } from '@writetome51/app-paginator';


class TestPaginationDataController extends PaginationDataController {

	constructor(
		// begin injected dependencies...
		paginator: { data: any[], itemsPerPage: number, currentPageNumber: number },
		dataSource: {
			getData: (batchNumber: number, numberOfItemsToGet: number) => any[];
			getDataTotal: () => number;
		}
		// end injected dependencies.
	) {
		super(paginator, dataSource);
	}
}


class DataService {

	getData(batchNumber, numItemsToGet) {
		if (batchNumber === 1) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		if (batchNumber === 2) return [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	}


	getDataTotal(): number {
		return 20;
	}
}


let paginator = new AppPaginator();
let pageDataCtlr = new TestPaginationDataController(paginator, new DataService());
pageDataCtlr.itemsPerBatch = 10;
pageDataCtlr.itemsPerPage = 5;

pageDataCtlr.setCurrentPage(1);
console.log(paginator.currentPage);

pageDataCtlr.setCurrentPage(2);
console.log(paginator.currentPage);

pageDataCtlr.setCurrentPage(3);
console.log(paginator.currentPage);

pageDataCtlr.setCurrentPage(4);
console.log(paginator.currentPage);


pageDataCtlr.setCurrentPage(1);
console.log(paginator.currentPage);

