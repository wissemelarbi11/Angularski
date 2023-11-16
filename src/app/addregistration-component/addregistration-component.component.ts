import { Component } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-addregistration-component',
  templateUrl: './addregistration-component.component.html',
  styleUrls: ['./addregistration-component.component.css']
})
export class AddregistrationComponent {
  data: any;
  closeResult!: string;
  form: boolean = false;
  registration: {
    numRegistration: any;
    numWeek: any;
  } = {
      numRegistration: null,
      numWeek: null
    };

    constructor(private registrationService: RegistrationserviceService, private route: ActivatedRoute, private modalService : NgbModal) { }

    ngOnInit() {
      this.fetchData();
    }
  fetchData() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.registrationService.fetchData(id).subscribe((response) => {
      this.data = response;
    });
  }

  
  addRegistration(registration: any) {
    return this.registrationService.addRegistration(registration).subscribe((response) => {
    this.data = response;
    this.fetchData();
  });
}
open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason: any) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
closeForm() {

}
cancel() {
  this.form = false;
}
}