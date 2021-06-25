import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _service: UtilityService) { }

  ngOnInit(): void {
    this._service.contactEnable.next(true);
  }
  ngOnDestroy() {
    this._service.contactEnable.next(false);
  }

}
