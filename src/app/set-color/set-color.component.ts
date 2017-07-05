import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: './set-color.component.html',
  styleUrls: ['./set-color.component.scss']
})
export class SetColorComponent implements OnInit, OnDestroy {
  color;

  constructor(db: AngularFireDatabase) { }

  setColor(color){
    firebase.database().ref().child('color').set(color);
  }

  ngOnInit() {
    firebase.database().ref().on('value', (snapshot: firebase.database.DataSnapshot) => {
        this.color = snapshot.val().color;
    });
  }

  ngOnDestroy() {
    firebase.database().ref().off();
  }
}
