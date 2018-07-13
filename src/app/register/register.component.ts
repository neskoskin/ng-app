import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RegisterService } from "../services/register.service";
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  addUserForm: FormGroup;
  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true
}

  constructor(
    private registerService: RegisterService,
    private _notifications: NotificationsService,
  ) {}

  showSuccess() {
    this._notifications.success('Success!', 'The user has been registered!', 'success')
  }

  showError() {
    this._notifications.error('Oops!', 'Something went wrong!', 'error')
  }
  addUser() {

    this.registerService.registerUser(this.addUserForm.value)
      .subscribe(response => {
        if (response.id) {
          this.showSuccess();
          this.resetForm();
        } else {
          this.showError();
        }
      });
  }
  resetForm() {
    this.addUserForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      title: new FormControl(''),
      department: new FormControl(''),
      userRole: new FormControl(''),
      userName: new FormControl(''),
    });
  }

  ngOnInit() {
    this.resetForm();
  }
}
