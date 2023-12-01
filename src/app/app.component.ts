// app.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string | null = null;

  ngOnInit() {
    // Check if the username is already stored in local storage
    this.username = localStorage.getItem('username');
    if (!this.username) {
      // If not, generate and store a new username
      this.generateUsername();
    }
  }

  generateUsername() {
    // Call the API to generate a username
    this.callApiToGenerateUsername().then((response: any) => {
      console.log('API Response:', response);
  
      // Check if the response is in the expected format
      if (response && response.username) {
        this.username = response.username;
  
        // Store the generated username in local storage
        localStorage.setItem('username', this.username || ''); // Explicitly handle null
  
        // You can use this.username as needed
        console.log('Generated Username:', this.username);
      } else {
        console.error('Invalid API response:', response);
      }
    });
  }
  
  
  
  
  
  

  async callApiToGenerateUsername() {
    // Replace the URL with your actual API endpoint
    const response = await fetch('https://localhost:7254/Users/generate-username');
    return await response.json();
  }
}
