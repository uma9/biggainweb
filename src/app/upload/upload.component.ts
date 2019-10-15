import { Component } from '@angular/core';
import { FileRestrictions, SelectEvent, RemoveEvent } from '@progress/kendo-angular-upload';

@Component({
  selector: 'my-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  public events: string[] = [];
  public imagePreviews: any[] = [];
  public uploadRestrictions: FileRestrictions = {
    allowedExtensions: ['.jpg', '.png']
  };

  public uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  public uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public clearEventHandler(): void {
    this.log('Clearing the file upload');
    this.imagePreviews = [];
  }

  public completeEventHandler() {
    this.log(`All files processed`);
  }

  public removeEventHandler(e: RemoveEvent): void {
    this.log(`Removing ${e.files[0].name}`);

    const index = this.imagePreviews.findIndex(item => item.uid === e.files[0].uid);

    if (index >= 0) {
      this.imagePreviews.splice(index, 1);
    }
  }

  public selectEventHandler(e: SelectEvent): void {
    const that = this;

    e.files.forEach((file) => {
      that.log(`File selected: ${file.name}`);

      if (!file.validationErrors) {
        const reader = new FileReader();

        reader.onload = function (ev) {
          const image = {
            src: ev.target['result'],
            uid: file.uid
          };

          that.imagePreviews.unshift(image);
        };

        reader.readAsDataURL(file.rawFile);
      }
    });
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }
}
