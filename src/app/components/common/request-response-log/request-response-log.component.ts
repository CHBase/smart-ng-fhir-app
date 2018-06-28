declare var xhook: any;
import { Component, OnInit } from '@angular/core';

/**
 * Makes use of the xhook library to intercept all XMLHttpRequests from this application
 * and pushes them into a local in-memory javascript array variable.
 * Displays the list of requests sent and their corresponding responses.
 */
@Component({
  selector: 'app-request-response-log',
  templateUrl: './request-response-log.component.html',
  styleUrls: ['./request-response-log.component.css']
})
export class RequestResponseLogComponent implements OnInit {

  logs: any[] = [];

  constructor() { }

  ngOnInit() {
    xhook.after((request, response) => {
      if (request.url.indexOf('sockjs-node') === -1) {
        request['body'] = this.format(request['body'], false);
        request['headers'] = this.format(request['headers'], true);
        response['data'] = this.format(response['data'], false);
        response['headers'] = this.format(response['headers'], true);
        this.logs.push({
          request: request,
          response: response
        });
      }
    });
  }

  /**
   * Method used to parse the text and create an object.
   * @param text String to format
   * @param isObject Flag to identify if the text parameter is an object or not
   */
  format(text, isObject) {
    try {
      if (!isObject) {
        const obj = JSON.parse(text);
        return JSON.stringify(obj, null, 2);
      } else {
        return JSON.stringify(text, null, 2);
      }
    } catch (e) {
      return text;
    }
  }

  /**
   * Called by the Clear Logs button, which removes all the request-response logs from the memory.
   */
  clearLogs() {
    this.logs = [];
  }

}
