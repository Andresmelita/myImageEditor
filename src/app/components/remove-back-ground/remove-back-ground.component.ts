import { Component, Input, Output, EventEmitter, DoCheck, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from 'src/app/rest.service';
import { Cloudinary } from '@cloudinary/url-gen';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion'

@Component({
  selector: 'app-remove-back-ground',
  templateUrl: './remove-back-ground.component.html',
  providers: [ RestService ],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, MatExpansionModule],
})
export class RemoveBackGroundComponent implements DoCheck {
  

  public filterActive: string = 'saturate(2);'
  public inputFilter: string = `filter: ${this.filterActive}`

  changeFilter(addFilter: string) {
    this.filterActive = addFilter
  }
  // public imageContainer: HTMLDivElement = ; 
  public imageRevealFraq: number = 0.5
  public inputPolygon: string = `clip-path: polygon(0 0, ${this.imageRevealFraq * 100}% 0, ${this.imageRevealFraq * 100}% 100%, 0 100%);`
  public inputLeft: string = `left: ${this.imageRevealFraq * 100}%`
  
  ngDoCheck(): void {
    this.inputFilter = `filter: ${this.filterActive}`
    this.inputPolygon = `clip-path: polygon(0 0, ${this.imageRevealFraq * 100}% 0, ${this.imageRevealFraq * 100}% 100%, 0 100%);`
    this.inputLeft = `left: ${this.imageRevealFraq * 100}%`
  }
  
  public slide = (xPosition: number): void => {
    this.imageRevealFraq = xPosition

  }
  public firstValue = null;

  public handleMouseDown = (): void => {
    window.onmousemove = this.handleMouseMove
    window.onmouseup = this.handleMouseUp
  }
  public handleMouseMove = (event: MouseEvent): void => {
    console.log(event.clientX)
  }
  public handleMouseUp = (): void => {
    window.onmousemove = this.firstValue;
    window.onmouseup = this.firstValue
  }




  panelOpenState = false
  public preview: string = '';
  public archives: any = []
  public loading: boolean = false
  public processing: boolean = true
  public urlImageModified: any = []
  public tries: number = 0
  public intervalId: any
  constructor(private sanitizer: DomSanitizer, private uploadService: RestService) { }

  public cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'andresmelita'
    },
    url: {
      secure: true
    }
  })


  captureFile(event: any) {
    const capturedFile = event.target.files[0]
    this.extractBase64(capturedFile).then((img: any)=>{
      this.preview = img.base;
    })
    this.archives.push(capturedFile)
  }

  extractBase64 = async ($event: any) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event)
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      return new Promise((resolve, reject)=>{
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
        reader.readAsDataURL($event)
      })
    } catch (e) {
      return null;
    }
  };

  onUpload() {
    try {
      this.loading = true;
      const file_data = this.archives[0];
      const formData = new FormData();
      setInterval(()=>{
        this.loading= false
      }, 3000)
      // formData.append('file', file_data);
      // formData.append('upload_preset', 'angular_project')
      // formData.append("cloud_name", "andresmelita");
      // this.uploadService.uploadImage(formData).
      //   subscribe((response: any)=>{
      //     if(response){
      //       this.loading = false;
      //       console.log(response);
      //     }
          // const {public_id: publicId} = response;
          // const imageWithoutBackground = this.cloudinary.image(publicId).effect(backgroundRemoval());
          // if (!imageWithoutBackground) {
          //   clearInterval(this.intervalId)
          //   this.intervalId = setInterval(()=>{
          //     this.tries++
          //   }, 5000)
          // } else {
          //   this.urlImageModified.push(imageWithoutBackground.toURL())
          // }console.log(imageWithoutBackground)
        // })
    } catch (e) {
      this.loading = false
      console.log('ERROR', e)
    }
  }
}
