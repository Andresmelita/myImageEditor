import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from 'src/app/rest.service';
import { CloudinaryImage } from '@cloudinary/url-gen';

@Component({
  selector: 'app-remove-back-ground',
  templateUrl: './remove-back-ground.component.html',
  providers: [ RestService ]
})
export class RemoveBackGroundComponent {

  public preview: string = '';
  public archives: any = []
  public loading: boolean = false
  constructor(private sanitizer: DomSanitizer, private uploadService: RestService) { }

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
      formData.append('file', file_data);
      formData.append('upload_preset', 'angular_project')
      formData.append("cloud_name", "andresmelita");
      this.uploadService.uploadImage(formData).
        subscribe((response: any)=>{
          if(response){
            this.loading = false;
            console.log(response);
          }
        })
    } catch (e) {
      this.loading = false
      console.log('ERROR', e)
    }
  }
}
