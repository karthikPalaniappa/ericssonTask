import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input() public node: any;

  public bChildrenShown: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

}
