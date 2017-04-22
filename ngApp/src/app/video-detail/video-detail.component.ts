import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {

  private editTitle:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onTitleClick(){
	  this.editTitle=true;
  }

  ngOnChanges(){
    this.editTitle=false;
  }

}
