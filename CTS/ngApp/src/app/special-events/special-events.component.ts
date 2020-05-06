import { Component, OnInit } from '@angular/core';
import { EventService} from '../event.service'
import { FormsModule} from '@angular/forms'
import { Details} from '../details'

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents= []

  locations=['Chennai','Bengalore','Pune','kolkata','Mumbai']
  topicHasError=true ;
   detail= new Details()
  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
    .subscribe(
      res => this.specialEvents =res,
      err => console.log(err)
      )
  }
  validateTopic(values){
    if (values==='default' ){
      this.topicHasError=true
    }else{
      this.topicHasError=false;
    }

  }


}
