import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-confirmdeletion',
  templateUrl: './confirmdeletion.component.html',
  styleUrls: ['./confirmdeletion.component.css']
})
export class ConfirmdeletionComponent implements OnInit{
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor(){}
  ngOnInit(): void {}

	onConfirm(){
   this.onDelete.emit();
	}
}
