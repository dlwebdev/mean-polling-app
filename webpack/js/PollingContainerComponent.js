// webpack/js/TodoComponent.js
import {Component, View} from 'angular2/core'; // Import Component and View constructor (for metadata)
import {HTTP_PROVIDERS} from 'angular2/http'; // We're using http in our PollService, but we can only specify providers in the component
import {PollService} from './PollService'

class PollingContainerComponent {
  constructor(pollService) {
    this.polls = [];
    this.pollData = {
      text: ''
    };
    this.pollService = pollService;
    this.pollService.getAllPolls()
      // Rxjs, we subscribe to the response
      .subscribe((res) => {
        this.polls = res;
      });
  }
  createPoll() {
    this.pollService.postNewPoll(this.pollData)
      .subscribe((res) => {
        this.polls = res;
        this.pollData.text = '';
      });
  }
  deletePoll(id) {
    this.pollService.deletePoll(id)
      .subscribe((res) => {
        this.polls = res;
      })
  }
};

PollingContainerComponent.annotations = [
  new Component({
    selector: 'polling-app', // Tag to show app
    providers: [PollService, HTTP_PROVIDERS], // Lets Angular know about PollService and Http
    templateUrl: 'templates/PollingContainerComponent' // Our template, we'll create this next
  }),
];

PollingContainerComponent.parameters = [[PollService]];

export {PollingContainerComponent};