import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(private http:HttpClient){}
  
  onFileSelected(event: Event){
     const file = (event.target as HTMLInputElement).files[0];
     const formData = new FormData;
     formData.append('file',file);

     this.http.post('https://myangproj-2b262-default-rtdb.firebaseio.com/file',formData).subscribe(response => {
      console.log(response);
     })
  }

}
