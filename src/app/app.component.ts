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
  public sortedArrayDate = [];
  public versionContent;
  title = 'frontEntChallenge';
  constructor(private frontEndChallengeWork: FrontEndChallengeWork) {}

  ngOnInit(): void {
    this.getFrontEndChallengeWork();
    this.frontEndChallengeWork.getFulfillmentWork();
  }

  getFrontEndChallengeWork(): void {
    this.frontEndChallengeWork.getFulfillmentWork().then((response: any) => {
      this.sortedArray = this.sortStepNumberAndVersionContent(response);
    }, (error: any) => {
      console.log(error);
    })
  }

  sortStepNumberAndVersionContent(response: any) {
    function compare(a,b) {
      const a1 = a.stepNumber;
      const b1 = b.stepNumber;
      let comparision = 0;
      if (a1 > b1) {
        comparision  = 1;
      } else if (a1 < b1) {
        comparision = -1;
      }
      return comparision;
    }
    let unsortedVersionContent = response.sort(compare)
    for(let i=0; i < unsortedVersionContent.length; i++) {
      let versionCOntent = unsortedVersionContent[i].versionContent;
      function compareDate(a: any, b: any) {
        var dateA = +new Date(a.effectiveDate), dateB = +new Date(b.effectiveDate);
        return dateA - dateB;
      }
      versionCOntent.sort(compareDate)
      unsortedVersionContent[i].versionContent = versionCOntent[0]
    }
    return unsortedVersionContent;
  }
}
