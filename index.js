console.log("this works")  

var data = [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"alpha", "value": 20},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1993, "name":"alpha", "value": 30},
    {"year": 1993, "name":"beta", "value": 40},
    {"year": 1993, "name":"gamma", "value": 20},
    {"year": 1993, "name":"delta", "value": 17},
    {"year": 1994, "name":"alpha", "value": 60},
    {"year": 1994, "name":"beta", "value": 60},
    {"year": 1994, "name":"gamma", "value": 25},
    {"year": 1994, "name":"delta", "value": 32}
  ]
  var visualization = d3plus.viz()
    .container("#viz")
    .data(data)
    .type("bar")
    .id("name")
    .x("year", {"grid": false})
    .y({"value": "value", "grid": false, "axis": true})
    .draw()




  // sample data array
  var sample_data = [
    {"year": 1991, "name":"alpha", "value": 17},
    {"year": 1992, "name":"alpha", "value": 20},
    {"year": 1993, "name":"alpha", "value": 25},
    {"year": 1994, "name":"alpha", "value": 33},
    {"year": 1995, "name":"alpha", "value": 52},
    {"year": 1991, "name":"beta", "value": 36},
    {"year": 1992, "name":"beta", "value": 32},
    {"year": 1993, "name":"beta", "value": 40},
    {"year": 1994, "name":"beta", "value": 58},
    {"year": 1995, "name":"beta", "value": 13},
    {"year": 1991, "name":"gamma", "value": 24},
    {"year": 1992, "name":"gamma", "value": 27},
    {"year": 1993, "name":"gamma", "value": 33},
    {"year": 1994, "name":"gamma", "value": 35},
    {"year": 1995, "name":"gamma", "value": 40}
  ]


  var attributes = [
    {"name": "beta", "hex": "#D0D0CE"},
    {"name": "alpha", "hex": "#86bc25"},
    {"name": "gamma", "hex": "#00CC00"}
  ]

  // instantiate d3plus
  var visualization2 = d3plus.viz()
    .container("#viz2")  // container DIV to hold the visualization
    .data(sample_data)  // data to use with the visualization
    .type("line")       // visualization type
    .id("name")         // key for which our data is unique on
    .text("name")       // key to use for display text
    .y({"value":"value", "grid": false})         // key to use for y-axis
    .x({"value": "year", "grid": false, "axis": false})          // key to use for x-axis
    .attrs(attributes)
    .color("hex")
    .labels(true)
    .draw();             // finally, draw the visualization!





    // an api call
var mydata;
// $.getJSON(
//     // "https://api.datausa.io/attrs/geo/04000US25/neighbors/", 
//     "https://api.datausa.io/attrs/",
//     {
//         geo: "04000US25",
//         // neighbors:""
//     }
// ).done(function(data) {
//     console.log(data);
//     mydata = data.data;
// });