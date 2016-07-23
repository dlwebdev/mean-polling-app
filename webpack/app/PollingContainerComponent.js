// webpack/js/TodoComponent.js
import {Component, View} from 'angular2/core'; // Import Component and View constructor (for metadata)
import {HTTP_PROVIDERS} from 'angular2/http'; // We're using http in our PollService, but we can only specify providers in the component
import {PollService} from './PollService'

class PollingContainerComponent {
  constructor(pollService) {
    this.polls = [];
    this.pollData = {
      name: '',
      creatorId: '',
      options: [
        {text: 'Option 1', val: 0},
        {text: 'Option 2', val: 0}
      ],
      dateAdded: ''
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
        this.pollData.name = '';
        this.pollData.creatorId = '';
        this.pollData.options = [
          {text: 'Option 1', val: 0},
          {text: 'Option 2', val: 0}
        ],
        this.pollData.dateAdded = '';
      });
  }
  deletePoll(id) {
    this.pollService.deletePoll(id)
      .subscribe((res) => {
        this.polls = res;
      })
  }
  addPollOption() {
    this.pollData.options.push({text: '', val: 0});
  }  
};

PollingContainerComponent.annotations = [
  new Component({
    selector: 'polling-app',
    providers: [PollService, HTTP_PROVIDERS],
    templateUrl: 'templates/PollingContainerComponent'
  }),
];

PollingContainerComponent.parameters = [[PollService]];

export {PollingContainerComponent};