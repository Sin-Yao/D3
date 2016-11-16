function test()
{

var margin = {top: 50, right: 50, bottom: 150, left: 100},
    width = 1024 - margin.left - margin.right,
    height = 768 - margin.top - margin.bottom;

var ctrl = d3.select("content").append("svg").attr("width", width).attr("height", height);
d3.csv(" https://sin-yao.github.io/D3/np01.csv", 
	function(data)
	{
		var ln = data.length;
		console.log(data);
		var maxy = d3.max(data, function(d){ return d.GDP; });
		var lines = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.GDP*(height/maxy)});
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "blue").attr("fill", "none");
	}


);
}
