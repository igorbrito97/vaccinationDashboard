import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit, OnChanges {
  @ViewChild('histogram')
  private histContainer!: ElementRef;

  @Input()
  data: any[] = [];
  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (!this.data) { return; }

    this.createChart();
  }

  private createChart() {
    d3.select('svg').remove();

    const element = this.histContainer.nativeElement;
    const data = this.data;

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.letter));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.frequency)]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');

      //https://medium.com/@nix1100/creating-a-responsive-bar-chart-in-angular-using-d3-js-613155c53f20
    // g.selectAll('.bar')
    //   .data(data)
    //   .enter().append('rect')
    //   .attr('class', 'bar')
    //   .attr('x', d => x(d.letter))
    //   .attr('y', d => y(d.frequency))
    //   .attr('width', x.bandwidth())
    //   .attr('height', d => contentHeight - y(d.frequency));
  }

}
