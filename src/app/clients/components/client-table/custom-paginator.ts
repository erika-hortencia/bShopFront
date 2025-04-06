import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable({
    providedIn: 'root'
})
export class CustomPaginator extends MatPaginatorIntl {
    override itemsPerPageLabel = 'Items per page';
    override nextPageLabel = 'Next page';
    override previousPageLabel = 'Previous page';
    override firstPageLabel = 'First page';
    override lastPageLabel = 'Last page';
}