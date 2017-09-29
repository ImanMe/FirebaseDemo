import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: FirebaseListObservable<any[]>;
  course$;
  // subscription: Subscription;
  // courses: any[];

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/course');

    this.course$ = db.object('/course/1');

    // this.subscription = db.list('/course')
    //   .subscribe(course => {
    //     this.courses = course;
    //     console.log(this.courses);
    //   });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  add(course: HTMLInputElement) {
    this.courses$.push(course.value);
    course.value = '';
  }

  update(course) {
    this.db.object('/course/' + course.$key)
      .set('Course1');
  }

  delete(course) {
    this.db.object('/course/' + course.$key).remove();
  }
}
