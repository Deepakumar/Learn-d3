import * as d3 from 'd3'


// Selecting and appending elements
d3.select('#root')
  .append('h5')
  .append('text')
  .text(`D3 version: ${d3.version}`)

  var width = 500;
  var height = 500;

  //Create SVG Element
  var svg = d3.select("body")
              .append("svg")
              .attr("width",width)
              .attr("height",height);

  //Create Line element inside SVG
      svg.append("line")
      .attr("x1",100)
      .attr("x2",500)
      .attr("y1",50)
      .attr("y2",50)
      .attr("stroke","black");

      svg.append("line")
      .attr("x1", 100)
      .attr("x2", 500)
      .attr("y1", 50)
      .attr("y2", 250)
      .attr("stroke", "black")

      svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 200)
      .attr("height", 100)

      svg.append("circle")
      .attr("cx", 250)
      .attr("cy", 50)
      .attr("r", 50)

      var data = [5,10,12];
      var width = 200;
      var scaleFactor = 10;
      var barHeight = 20;

      var graph = d3.select("body")
                    .append("svg")
                    .attr("width",width)
                    .attr("height",barHeight * data.length)
                    .selectAll("g")
                    .data(data)
                    .enter()
                    .append("g")
                    .attr("transform",function(d,i){
                      return "translate(0," + i * barHeight + ")";
                    })
                    .append("rect")
                    .attr("width",function(d){
                      return d * scaleFactor;
                    })
                    .attr("height",barHeight -1)
                    .append("text")
                    .attr("x",function(d){
                      return (d*scaleFactor);
                    })
                    .attr("y",barHeight /2)
                    .attr("day",".35em")
                    .text(function(d){
                      return d;
                    });

  var widthCircle = 500;
  var heightCircle = 500;

  var dataCircle = [10,15,20,25,30];
  var colorsCircle = ["#ffffcc","#c2e699","#78c679","#31a354","#006837"];

  var svg= d3.select("body")
                    .append("svg")
                    .attr("width",widthCircle)
                    .attr("height",heightCircle);
  
  var g = svg.selectAll("g")
              .data(dataCircle)
              .enter()
              .append("g")
              .attr("transform",function(d,i){
                return "translate(0,0)";
              });

              g.append("circle")
              .attr("cx", function(d, i) {
                 console.log("I value" + i);
                  return i*100 + 50;
              })
              .attr("cy", function(d, i) {
                  return 100;
              })
              .attr("r", function(d) {
                  return d*1.5;
              })
              .attr("fill", function(d, i){
                  return colorsCircle[i];
              });

  
    var dataScale = [100,400,300,900,850,1000];

    var widthScale = 500, barHeightScale = 20, marginScale = 1;

    var scale = d3.scaleLinear()
                .domain([d3.min(dataScale),d3.max(dataScale)])
                .range([50,500]);

    var svg = d3.select("body")
                .append("svg")
                .attr("width",widthScale)
                .attr("height",barHeightScale * dataScale.length);

    var g =svg.selectAll("g")
              .data(dataScale)
              .enter()
              .append("g")
              .attr("transform",function(d,i){
                  return "translate(0," + i * barHeightScale + ")";
              });

      g.append("rect")
      .attr("width",function(d){
        return scale(d);
      })
      .attr("height",barHeightScale - marginScale)

      g.append("text")
      .attr("x",function(d){
        return (scale(d));
      })
      .attr("y",barHeightScale/2)
      .attr("dy",".35em")
      .text(function(d){
        return d;
      });

      var widthAxis = 400, heightAxis = 100;
      var dataAxis = [10,15,20,25,30];

      var svg = d3.select("body").append("svg")
                  .attr("width",widthAxis)
                  .attr("height",heightAxis);

      var scaleAxiis = d3.scaleLinear()
                        .domain([d3.min(dataAxis),d3.max(dataAxis)])
                        .range([0,widthAxis - 100]);

      var x_asis = d3.axisBottom().scale(scaleAxiis);

      svg.append("g").call(x_asis);

      var svgB= d3.select|("body"),
                marginB = 200,
                widthB = svgB.attr("width") - marginB,
                heightB = svgB.attr("Height") - marginB;

      var xScale = d3.scaleBand().range([0,widthB]).padding(0.4),
          yScale = d3.scaleLinear().range([heightB,0]);

      var g= svg.append("g")
              .attr("transform","translate(" + 100 + "," + 100 + ")");

      


// Loading external data
d3.csv('/data/sample.csv', (error, dataset) => {
  dataset.forEach((data) => {
    console.log(data)
  })
})