import { Component, OnInit,Input, OnChanges , SimpleChange} from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {
  @Input() breadcrumb:any = [];
  public breadcrumbs: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.breadcrumbs = this.breadcrumb === undefined ? [] : this.breadcrumb.join(" > ");
  }

}
