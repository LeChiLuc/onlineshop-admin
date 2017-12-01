import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../../core/domain/loggedin.user';
import { SystemConstants } from '../../core/common/system.constants';
import { AuthenService } from '../../core/services/authen.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user: LoggedInUser;
  constructor(private _authenService: AuthenService) { }

  ngOnInit() {
    //this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    this.user = this._authenService.getLoggedInUser();
  }

}
