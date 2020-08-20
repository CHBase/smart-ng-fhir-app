import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit {

  /**
   * FHIR Resource Bundle passed on, which will be listed.
   */
  @Input() bundle: any;

  /**
   * Type of FHIR Resources
   */
  @Input() resourceType: string;


  /**
   * variable to hold the environment.showCCDSResourceMenuInstead value. 
   */
  isCCDSResourceMenuEnabled: boolean

  constructor() { }

  ngOnInit() {
    this.isCCDSResourceMenuEnabled = environment.showCCDSResourceMenuInstead;
  }

  /**
   * Getter method used by the Ace Editor to get the value of the bundle object
   */
  get codeBundle() {
    return JSON.stringify(this.bundle, null, 2);
  }
  

  OnDownload(entry){
    var attachment = entry.resource.content[0].attachment;
    var url, filename;
    
    if(attachment.url){
        url = attachment.url;
        filename = attachment.title;
    }
    else if(attachment.data)
    {
      var data =atob(`${attachment.data}`); 
      var blob = new Blob([data], { type: `${attachment.contentType}`});
      url = URL.createObjectURL(blob);
      filename = entry.resource.id;
    }
    
    if(url){
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    
  }
}
