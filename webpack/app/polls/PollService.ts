// webpack/js/PollService.js
import { Injectable } from 'angular2/core'; // Allows us to inject a dependency into a module that's not a component
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map' // Allows us to map the HTTP response from raw to JSON format


@Injectable()
export class PollService {
  http;
  constructor(http) {
    this.http = Http; // http is an instance of the main Http class
  }
  getAllPolls() {
    return this.http.get('/polls')
      .map((res) => {
        return JSON.parse(res._body);
      });
  }
  postNewPoll(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // Set JSON header so that data is parsed by bodyParser on the backend
    return this.http.post('/polls', JSON.stringify(data), {
      headers: headers
    }).map((res) => {
        return JSON.parse(res._body);
      });
  }
  deletePoll(id) {
    return this.http.delete('/polls/' + id)
      .map((res) => {
        return JSON.parse(res._body);
      });
  }
}