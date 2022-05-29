import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataShareComponent } from 'src/app/service/data-share/data-share.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),
    lastName: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),
    email: new FormControl('', { validators: [Validators.required, Validators.minLength(10), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] }),
    phone: new FormControl('', { validators: [Validators.required, Validators.minLength(10)] })
  })
  isMobile?: boolean;
  isTablet?: boolean;
  constructor(private toastrService: ToastrService, private dataShare: DataShareComponent) { }

  ngOnInit(): void {
    this.getCurrenctDevice()
  }

  get phone() { return this.contactForm.get('phone'); }
  get email() { return this.contactForm.get('email'); }
  get firstName() { return this.contactForm.get('firstName'); }
  get lastName() { return this.contactForm.get('lastName'); }


  getCurrenctDevice() {
    this.dataShare.deviceObservable.subscribe({
      next: (data) => {
        console.log(data)
        this.isMobile = data === 'xs' ? true : false;
        this.isTablet = data === 'sm' ? true : false;
      }
    })
  }

  onSubmit(): void {
    console.log(this.contactForm.value);

    this.toastrService.success("Your information has been submitted.", "Thank you for contacting us");
    // this.contactService.sendMessage(this.contactForm.value).subscribe({
    //   next: (response: any) => {
    //     this.toastrService.success("Success", "Message sent successfully", { positionClass: 'toast-bottom-right' });
    //   }
    // })

  }

}
