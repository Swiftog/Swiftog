import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app';
  message = '';

  constructor(private _service: AppService) {}

  ngOnInit() {
    this._service
    .plaintext()
    .subscribe((plaintext: string) => this.message = plaintext)
  }
}
