import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `
    <p>We are looking at department details of {{ departmentId }}</p>
    <p>
      <button (click)="onOverview()">Overview</button>
      <button (click)="onContact()">Contact</button>
    </p>
    <div styles="min-heigh: 300px">
      <router-outlet></router-outlet>
    </div>
    <p>
      <button (click)="movePrevious()">Previous</button>&nbsp;&nbsp;
      <button (click)="moveNext()">Next</button>
    </p>
    <br />
    <a (click)="moveBack()">Back</a>
  `,
  styles: [],
})
export class DepartmentDetailComponent {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // the snapshot approach will not work if you navigate
    // from one component to the same componenet
    // eg: Department Detail Component for dept 1 to dept 2
    // which is just the ID change but it is using the same component
    // const id = this.route.snapshot.paramMap.get('id');
    // this.departmentId = id;

    // TO OVERCOME THIS ISSUE USE PARAMMAP OBSERVER APPROACH
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'));
      this.departmentId = id;
    });
  }

  movePrevious() {
    const id = this.departmentId - 1;
    // this.router.navigate(['/department', id]);

    // relative route saves us if the route path is renamed
    this.router.navigate(['../', id], { relativeTo: this.route });
  }

  moveNext() {
    const id = this.departmentId + 1;
    // this.router.navigate(['/department', id]);

    // relative route saves us if the route path is renamed
    this.router.navigate(['../', id], { relativeTo: this.route });
  }

  moveBack() {
    const selctedId = this.departmentId;
    // this.router.navigate(['/department', { id: selctedId }]);

    // relative route saves us if the route path is renamed
    this.router.navigate(['../', { id: selctedId }], {
      relativeTo: this.route,
    });
  }

  onOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  onContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
