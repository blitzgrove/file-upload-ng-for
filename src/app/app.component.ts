import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  objectsFromBackend = [
    {
      name: "Batman"
    },
    {
      name: "Superman"
    },
    {
      name: "Tigerman"
    }
  ];

  cloneOfObjects = [];

  constructor() {
    this.cloneOfObjects = this.objectsFromBackend.map(obj => {
      return {
        ...obj,
        uploadedFile: null,
        fileName: null
      }
    });
  }

  toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  async onChange(file, object) {
    object.uploadedFile = file.files[0];
    object.fileName = file.files[0].name;

    console.log(await this.toBase64(file));
  }
  removeFile(object) {
    object.uploadedFile = null;
    object.fileName = null;
  }
}
