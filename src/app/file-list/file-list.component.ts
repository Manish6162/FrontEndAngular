// file-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
  fileUrls: string[] = [];
  sasToken = 'sp=r&st=2023-12-01T13:32:19Z&se=2023-12-01T21:32:19Z&spr=https&sv=2022-11-02&sr=c&sig=k0BnNQttE76Qdz2bj2OmkD5SiDOZu1KqNx%2B5umEUafw%3D';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.retrieveFileUrls();
  }

  retrieveFileUrls(): void {
    const apiUrl = 'https://localhost:7254/api/files/list';

    this.http.get<string[]>(apiUrl).subscribe(
      (urls: string[]) => {
        // Append the SAS token to each URL
        this.fileUrls = urls.map(url => `${url}?${this.sasToken}`);
      },
      (error) => {
        console.error('An error occurred while retrieving file URLs:', error);
      }
    );
  }
}
