import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { RestService } from 'src/app/servicios/rest.service';


@Component({
  selector: 'efbv-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit{

  private fileTmp:any;

  constructor(private restService: RestService){ //TODO estoy inyect

  }

  getFile($event: any): void {
    //TODO esto captura el archivo!
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

  sendFile():void{

    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    body.append('email','test@test.com')

    this.restService.sendPost(body)
    .subscribe(res => console.log(res))
  }

  ngOnInit(): void {
    this.sendFile();
  }
}
