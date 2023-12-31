/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Book } from '../models/book';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(books: Book[], column: SortColumn, direction: string): Book[] {
	if (direction === '' || column === '') {
		return books;
	} else {
		return [...books].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}

function matches(book: Book, term: string) {
	return (
		book.Name.toLowerCase().includes(term.toLowerCase()) ||
    book.Author.toLowerCase().includes(term.toLowerCase()) ||
    book.Topic.toLowerCase().includes(term.toLowerCase())
	);
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _books$ = new BehaviorSubject<Book[]>([]);
	private _total$ = new BehaviorSubject<number>(0);

	private _state: any = {
		page: 1,
		pageSize: 15,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};
  constructor() {
		this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(200),
				switchMap(() => this._search()),
				delay(200),
				tap(() => this._loading$.next(false)),
			)
			.subscribe((result:any) => {
				this._books$.next(result.countries);
				this._total$.next(result.total);
			});

		this._search$.next();
	}

  get books$() {
		return this._books$.asObservable();
	}
	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	get pageSize() {
		return this._state.pageSize;
	}
	get searchTerm() {
		return this._state.searchTerm;
	}

	set page(page: number) {
		this._set({ page });
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	set sortColumn(sortColumn: SortColumn) {
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: SortDirection) {
		this._set({ sortDirection });
	}

	private _set(patch: Partial<any>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}

	private _search(): Observable<any> {
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		// 1. sort
		let countries = sort(BOOKS, sortColumn, sortDirection);

		// 2. filter
		countries = countries.filter((country) => matches(country, searchTerm));
		const total = countries.length;

		// 3. paginate
		countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		return of({ countries, total });
	}
}




export const BOOKS: Book[] = [
	{
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'Russia',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		Name: 'USA',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	}
];

