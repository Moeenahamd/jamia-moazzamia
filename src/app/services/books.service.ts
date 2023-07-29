/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable} from '@angular/core';
import { Book } from '../models/book';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
	books:Book[] = [];
	private baseUrl = 'http://khanqahemoazzmia.com/:3000';

  	constructor(private http: HttpClient) {}

	deletebook(id:number):Observable<any>{
		return this.http.delete(this.baseUrl +'/books/'+id);
	}

	addBook(data:any):Observable<any>{
		return this.http.post(this.baseUrl +'/books',data);
	}

	updateBook(id:number,data:any):Observable<any>{
		return this.http.put(this.baseUrl +`/books/${id}`,data);
	}

	getBooks(): Observable<Book[]> {
		return this.http.get<Book[]>(this.baseUrl + '/books')
	}

	getBookById(id:number): Observable<Book> {
		return this.http.get<Book>(this.baseUrl + '/books/'+id)
	}
}