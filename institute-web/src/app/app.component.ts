import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sathma';
  username='';

  onLogoClick(){
    alert('Logo clicked');
  }

  OnkeyUp(newTitle:string){
    this.username=newTitle;
  }

  
}
