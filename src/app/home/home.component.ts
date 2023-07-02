import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url : string = "";

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params : any )=> {
      console.log(params['parametro']);
      switch(params['parametro'])
      {
        case "norte":
          this.url = "/assets/images/Iquique.jpg";
        break;

        case "centro":
          this.url = "/assets/images/santiago.jpg";
        break;

        case "sur":
          this.url = "/assets/images/sur.jpg";  
        break;
        
        default:
          this.url = "/assets/images/Iquique.jpg";
          break;
      }
    });
  }
  async ngAfterViewInit(): Promise <void> {
    
    await this.loadScript("assets/js/typed.js");

    this.loadScript("assets/js/letra.js");
  
    const element = document.getElementsByClassName("hero") as HTMLCollectionOf<HTMLElement>;
    if (element==null) return;

    element[0].style.backgroundImage = `url(${this.url});`
  }



  loadScript(url: string) {
    return new Promise<void>((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;
      scriptElement.onload = () => {
        resolve();
      };
      scriptElement.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(scriptElement);
    });

  }
}