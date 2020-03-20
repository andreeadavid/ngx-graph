import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { NgxGraphService } from '../services/ngx-graph.service';

export interface NodeData {
  id: string;
  label: string;
}

export interface LinkData {
  id: string;
  source: string;
  target: string;
}

const nodeData: NodeData[] = [
  {
    id: "1",
    label: "Node A"
  },
  {
    id: "2",
    label: "Node B"
  },
  {
    id: "3",
    label: "Node C"
  },
  {
    id: "4",
    label: "Node D"
  },
  {
    id: "5",
    label: "Node E"
  },
  {
    id: "6",
    label: "Node F"
  }
];

const linkData: LinkData[] = [
  {
    id: "A",
    source: "1",
    target: "2"
  },
  {
    id: "B",
    source: "1",
    target: "3"
  },
  {
    id: "C",
    source: "1",
    target: "4"
  },
  {
    id: "D",
    source: "1",
    target: "5"
  },
  {
    id: "E",
    source: "3",
    target: "6"
  },
  {
    id: "F",
    source: "4",
    target: "6"
  }
];

@Component({
  selector: "app-network-graph",
  templateUrl: "./ngx-graph.component.html",
  styleUrls: ["./ngx-graph.component.css"]
})
export class NgxGraphComponent implements OnInit {
  nodeData = nodeData;
  linkData = linkData;

  nodeName: string;
  deleteNodeName: string;
  sourceNode: string;
  targetNode: string;
  source_Id: any;
  target_Id: any;
  node_Id: any;
  nodeOptions = [];

  entryValue = "A";
  entryNodeId = 1;
  count = 1;

  Nodes = [];
  Edges = [];

  hierarchicalGraph = { nodes: [], links: [] };

  view: any[];
  update$: Subject<boolean> = new Subject();

  curve = shape.curveBundle.beta(1);
  
  constructor(private ngxService: NgxGraphService) {
  }

  ngOnInit() {
      let nodesDetails = this.getNodeData();
      nodesDetails.forEach(node => {
        this.entryNodeId = Number(node.id);
        this.nodeOptions.push(node.label);
        this.Nodes.push(node);
      });

      let linksDetails = this.getLinkData();
      linksDetails.forEach(link => {
        this.Edges.push(link);
        this.entryValue = link.id;
      });
    
    this.hierarchicalGraph.nodes = this.Nodes;
    this.hierarchicalGraph.links = this.Edges;
  }

  getNodeData() {
    return this.nodeData;
  }
  getLinkData() {
    return this.linkData;
  }

  addNode() {
      this.Nodes.push({
        id: (this.entryNodeId + 1).toString(),
        label: this.nodeName
      });
      this.nodeOptions.push(this.nodeName);
      this.entryNodeId = this.entryNodeId + 1;

    this.nodeName = '';
  }

  connectNode() {
    this.source_Id = this.Nodes[
      this.Nodes.findIndex(x => x.label == this.sourceNode)
    ].id;
    this.target_Id = this.Nodes[
      this.Nodes.findIndex(x => x.label == this.targetNode)
    ].id;
      this.entryValue = this.ngxService.nextChar(this.entryValue);
      this.Edges.push({
        id: this.entryValue,
        source: this.source_Id,
        target: this.target_Id,
      });
    
    this.sourceNode = '';
    this.targetNode = '';
  }
}