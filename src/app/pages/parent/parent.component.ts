import { Component, OnInit  } from '@angular/core';
import { DataShareComponent } from '../../service/data-share/data-share.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  mainMessage: string = "Default initial value";
  childItem: string = "This value sended from parent ( FIRST ) ";
  dataServiceMessage?: string;
  isMobile?: boolean = false;
  isTablet?: boolean = false;

  constructor(private dataShareService: DataShareComponent, private dataShare: DataShareComponent) { }

  ngOnInit(): void {
    this.getDataFromService()
    this.getCurrentDevice()
  }

  getCurrentDevice(): void {
    this.dataShare.deviceObservable.subscribe({
      next: (data) => {
        this.isMobile = data === 'xs' ? true : false;
        if (data === 'sm' || data === 'md') {
          this.isTablet = true;
        }
        else {
          this.isTablet = false;
        }

      }
    });
  }

  getData($event: any) {
    this.mainMessage = $event;
  }

  changeChildInput() {
    this.childItem = "This message send from parent ( SECOND )"
  }

  getDataFromService() {
    this.dataShareService.currentMessage.subscribe({ next: (data) => this.dataServiceMessage = data });
  }

}
