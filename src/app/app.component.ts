import { Component, OnInit } from '@angular/core';

export interface TreeNode{
  name: string;
  children ?: TreeNode[];
  child ?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tree-structure';
  public oTreeData: TreeNode[] = [
    {
      name: "countries",
      children: [
        {
          name: "india",
          children: [
            {
              name: "zones",
              children: [
                {
                  name: "north",
                  children: [
                    {
                      name: "states",
                      children: [
                        {
                          name: "punjab",
                          children: [
                            {
                              name: "population",
                              child: "28000000"
                            },
                            {
                              name: "J&K",
                              children: [
                                {
                                  name: "population",
                                  child: "1000000"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "south",
                  children: [
                    {
                      name: "states",
                      children: [
                        {
                          name: "tamil nadu",
                          children: [
                            {
                              name: "population",
                              child: "67000000"
                            },
                            {
                              name: "kerala",
                              children: [
                                {
                                  name: "population",
                                  child: "34000000"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  ngOnInit(){
  }
}
