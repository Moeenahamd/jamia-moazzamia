/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Book } from '../models/book';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { HttpClient } from '@angular/common/http';
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
	debugger
	return (
		book.name.toLowerCase().includes(term.toLowerCase()) ||
		book.author.toLowerCase().includes(term.toLowerCase()) ||
		book.topic.toLowerCase().includes(term.toLowerCase())
	);
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
	books:Book[] = [];
	private baseUrl = 'http://localhost:3000';
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
  constructor(private http: HttpClient,) {
	
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

	getBooks(): Observable<Book[]> {
		return this.http.get<Book[]>(this.baseUrl + '/books')
	}
	getBookById(id:number): Observable<Book> {
		return this.http.get<Book>(this.baseUrl + '/books/'+id)
	}

  	get books$() {
		this.http.get<Book[]>(this.baseUrl + '/books').subscribe((res:any)=>{
			this.books = res;
		})
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
		let countries = sort(this.books, sortColumn, sortDirection);
		debugger
		// 2. filter
		countries = countries.filter((country) => matches(country, searchTerm));
		const total = countries.length;

		// 3. paginate
		countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		return of({ countries, total });
	}
}




export const BOOKS: any[] = [
	{	
		Id:1,
		Name: 'eng',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
		Section : 'Books',
		Type: 'Temp',
		Link: '',
		Description: 'Empty'
	},
  	{
		
		Id:2,
		Name: 'urdu',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
		Section : 'Books',
		Type: 'Temp',
		Link: '',
		Description: 'Empty'
	},
  	{	
		Id:3,
		Name: 'math',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
		Section : 'Books',
		Type: 'Temp',
		Link: '',
		Description: 'Empty'
	},
  	{	
		Id:4,
		Name: 'phys',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:5,
		Name: 'chem',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:7,
		Name: 'isl',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:8,
		Name: 'comp',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:9,
		Name: 'bio',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:10,
		Name: 'c',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:11,
		Name: 'dld',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:12,
		Name: 'algo',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:13,
		Name: 'coal',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:14,
		Name: 'la',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:15,
		Name: 'ai',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:16,
		Name: 'cloud',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {
		
	Id:17,
		Name: 'cc',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:18,
		Name: 'ecom',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:19,
		Name: 'web',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:20,
		Name: 'python',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'Temp',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	},
  {	
	Id:21,
		Name: 'math1',
		Author: 'f/f3/Flag_of_Russia.svg',
		Cover: 'Temp',
		Topic: 'USD',
    Section : 'Books',
    Type: 'Temp',
    Link: '',
    Description: 'Empty'
	}
];

