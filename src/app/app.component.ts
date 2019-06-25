import { Component, OnInit } from '@angular/core';
import { FrontEndChallengeWork } from './api/get.service';
import { IStepInterface } from './enums/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sortedArray = [];
  public sortedArrayNumber = [];
  title = 'frontEntChallenge';
  constructor(private frontEndChallengeWork: FrontEndChallengeWork) {}

  ngOnInit(): void {
    this.getFrontEndChallengeWork();
    this.frontEndChallengeWork.getFulfillmentWork();
  }

  getFrontEndChallengeWork(): void {
    this.frontEndChallengeWork.getFulfillmentWork().then((response: any) => {
      this.sortStepNumber(response);
      // console.log(response);
    }, (error: any) => {
      console.log(error);
    })
  }

  sortStepNumber(response: any) {
    let sampleSort = response.length;
    let sortedLength = [];
    for (let i = 0; i < sampleSort; i++) {
      sortedLength.push(response[i].stepNumber);
      
    }

    this.sortedArrayNumber = sortedLength.sort((n1,n2)=> n1 - n2);
    // sortedLength.sort();
    console.log(this.sortedArrayNumber, 'am array of sort');
    this.sortedArray = response.map(item => item)
    // for(let j = 0; j < this.sortedArrayNumber.length; j++) {
    //   for(let i =0; i < response.length; i++) {
    //     if (this.sortedArrayNumber[j] === response[i].stepNumber) {
    //       this.sortedArray.push(response[j]);
    //     }
    //   }      
    //   // if (this.sortedArrayNumber[j] === response[j].stepNumber){
    //   //   this.sortedArray.push(response[j]);
    //   // }     
    //   console.log(this.sortedArray);

    // }


  }
}
