import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
  }

  mouseX: number = 0;
  mouseY: number = 0;

  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  closeDialog(id: string){
    var dialog = document.getElementById(id) as any;

    if(dialog != null){
      dialog.close();
    }
  }
  openWebsite(url: string){
    window.open(url, '_blank');
  }
  
  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    var box = document.getElementById("mouse-effect") as any;
    box.style.left = event.clientX +'px';
    box.style.top = event.clientY +'px';

    var card = document.querySelector(".card") as any;
    var letters = card.querySelector(".card-letters");


    letters.style.setProperty("--x", `${event.clientX}px`);
    letters.style.setProperty("--y", `${event.clientY}px`);


    var red = Math.random()*50;
    red = 255 - red;
    var green = Math.random()*50;
    green = 125 - green;

    letters.style.setProperty("--red", red);
    letters.style.setProperty("--green", green);

    letters.innerText = this.randomString(1500);    
  }

  

  randomChar = () => this.chars[Math.floor(Math.random() * (this.chars.length - 1))];
  randomString(arrayLength: number){
    return Array.from(Array(arrayLength)).map(this.randomChar).join("");
  }




  
}
