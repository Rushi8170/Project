import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-root',
  template: `
           <div class="container-fluid">
              <div class="row">
                <div class="col-md-6" *ngFor="let Image of data">
                     <div class="wrap">
                          <a href="{{Image.post_url}}" target>
                          <img src="{{Image.author_url}}" />
                          </a>
                      </div>    
                </div>
                  
               </div>
           </div>
             `,
  
})
export class AppComponent {
 
    private apiURL = 'https://unsplash.com/photos/yC-Yzbqy7PY';

    data: any = {};

    constructor(private http: Http){
        console.log('Hello');  
        this.getData();
        this.getImages();

    }


     getData(){
       return this.http.get(this.apiURL)
           .map((res: Response) => res.json())
           
     }

    getImages(){
      this.getData().subscribe(data =>{
        console.log(data);
      })
   }
}










