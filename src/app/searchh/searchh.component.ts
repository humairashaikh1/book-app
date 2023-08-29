import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchh',
  templateUrl: './searchh.component.html',
  styleUrls: ['./searchh.component.css']
})
export class SearchhComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(e:any){
    console.log(e.target.value)
    this.searchTextChanged.emit(e.target.value);

  }

}


