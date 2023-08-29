import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardss',
  templateUrl: './cardss.component.html',
  styleUrls: ['./cardss.component.css']
})
export class CardssComponent implements OnInit {

  userList: any;
  constructor(private httpClient: HttpClient) {
    this.userList = [];
  }

  ngOnInit(): void {
    this.getUserList()
  }
  searchText: string = '';
  getUserList() {
    this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep').subscribe((result: any) => {
      console.log((this.userList = result.items));
      this.userList = result.items;
    })
    return this.userList;

    
  }
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log('onSearchTextEntered', this.searchText);
  }

}
