import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/services/sortable.directive';

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.css']
})
export class BooksManagementComponent {
  	books$: Observable<Book[]>;
	total$: Observable<number>;
	

	@ViewChildren(NgbdSortableHeader) headers: any;
	public items: Array<{ field: string }> = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];

  constructor(public service:BooksService,
	private modalService: NgbModal){
    this.books$ = service.books$;
		this.total$ = service.total$;
  	}
  	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header:any) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
	openPopUp(content:any){
		this.modalService.open(content, { size: 'lg' })
	}
	
}
