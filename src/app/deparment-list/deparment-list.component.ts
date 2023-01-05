import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'deparment-list',
  template: `
    <h3>Department List</h3>
    <ul class="dept-list">
      <li
        [class.selected]="isSelected(department)"
        (click)="onSelect(department)"
        *ngFor="let department of departments"
      >
        <span class="index">{{ department.id }}</span
        ><span>{{ department.name }}</span>
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css'],
})
export class DeparmentListComponent {
  public selectedId;

  public departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const departmentId = param.get('id');
      this.selectedId = departmentId ? departmentId : null;
    });
  }

  onSelect(department: any) {
    // this.router.navigate(['/department', department.id]);

    // relative routes save you, if in case you change the route url
    // so writing the above statement like as below
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) {
    return department.id == this.selectedId;
  }
}
