

var section1_total=0;
	var section2_total=0;
	var section3_total=0;
	var section4_total=0;
	var section5_total=0;
	var section6_total=0;
	
	var section1_avg=0;
	var section2_avg=0; 
	var section3_avg=0;
	var section4_avg=0;
	var section5_avg=0;
	var section6_avg=0;
	var final_percentage=0;

var temp = 1;
var i;
var data = [];

console.log(data)



    

$(document).ready(function(){  
	
	/*$(".result").click(function(){
			$(".graph").show();
			$(".thankyouComp").hide();	
	});*/
	$(".choice-wrapper .label").hide();

	$(".prvBtn").hide();	
	$(".submit").hide();

	$(".choice-wrapper").click(function(){
	      $(this).parents(".component-choices").find(".selectedoption").removeClass("selectedoption");
			$(this).addClass("selectedoption");
	    });
		
		$(".choice-wrapper").click(function(){
	      $(this).parents(".component-choices").find(".selectedoption").removeClass("selectedoption");
			$(this).addClass("selectedoption");
	    });
		
		$(".choice-wrapper").click(function() {
	  // do fading 3 times
	  for(i=0;i<2;i++) {
	    $(this).fadeTo(150, 0.5).fadeTo(150, 1.0, function(){
		
		});
	  } 
	});



	/*$("#section1_wrapper2").css("opacity",0.2);
	   $("#section1_wrapper3").css("opacity",0.2);*/
	 });


	/*$("#content-wrapper1").click(function(){
		console.log("clicked");
		 $("#Section1_wrapper1").css("opacity",0.2);
		 $("#section1_wrapper2").css("opacity",1);
	 
	});


	$("#content-wrapper1").click(function(){
	console.log("clicked");
	 $("#Section1_wrapper1").css("opacity",0.2);
	 $("#section1_wrapper2").css("opacity",1);
	 
	});*/

/*var position = $(".wrapper").offset();
scroll(0,position.top);*/

		

	$(".startBtn").click(function(){
		$(".section1").show();
		$("#secondpage").show();
		$("#landing").hide();
		// if(temp==0){
	});

	 $(document).on("click",".submit", function(){

	 	$(".surveyQuestionDiv").hide();
	 	$("#holder").show();
	 	$("#portfolio").show();


	 });

    $(document).on("click",".nxtBtn", function(){
	
	    for(i=1; i<=temp ; i++){
	   	 	$(".section"+temp).hide();
		}

		temp=temp+1;
        $(".section"+temp).show();
		
		if(temp==2){
			$(".modal-title").html("2. Balanced Economic Development Strategies");
		}
		else if(temp==3)
		{
			$(".modal-title").html("3. Robust Entrepreneurship Programs");
		}
		else if(temp==4)
		{
			$(".modal-title").html("4.  Prudent Investment Processes");
		}
		else if(temp==5)
		{
			$(".modal-title").html("5. An Expansive View");
		}
		else if(temp==6)
		{

		    
			$(".modal-title").html("6. Infrastructure");
		}
		else
		{
		
		
		
		
				//$("#myModal").hide();
				
				//$(".welcome").hide();
				/*$("#landing").hide();
				$('#myModal').modal('hide');
				$(".thankyou").hide();*/
				//$("#holder").show();
				$(".secondpage").hide();
				$("#surveyelement").show();

				
				
				//$(".graph").show();
				
			     section1_total = parseInt($(".section1 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section1 .selectedoption").eq(1).find(".label").html())+parseInt($(".section1 .selectedoption").eq(2).find(".label").html());
		  
		   //console.log(section1_total);

  
			  section2_total = parseInt($(".section2 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section2 .selectedoption").eq(1).find(".label").html())+parseInt($(".section2 .selectedoption").eq(2).find(".label").html());
			  
			  section3_total = parseInt($(".section3 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section3 .selectedoption").eq(1).find(".label").html())+parseInt($(".section3 .selectedoption").eq(2).find(".label").html());
			  
			  section4_total = parseInt($(".section4 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section4 .selectedoption").eq(1).find(".label").html())+parseInt($(".section4 .selectedoption").eq(2).find(".label").html());
			  
			  section5_total = parseInt($(".section5 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section5 .selectedoption").eq(1).find(".label").html())+parseInt($(".section5 .selectedoption").eq(2).find(".label").html());
			  
			  section6_total = parseInt($(".section6 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section6 .selectedoption").eq(1).find(".label").html())+parseInt($(".section6 .selectedoption").eq(2).find(".label").html());
			  
			  
			  section1_avg = (parseInt($(".section1 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section1 .selectedoption").eq(1).find(".label").html())+parseInt($(".section1 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section2_avg = (parseInt($(".section2 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section2 .selectedoption").eq(1).find(".label").html())+parseInt($(".section2 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section3_avg = (parseInt($(".section3 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section3 .selectedoption").eq(1).find(".label").html())+parseInt($(".section3 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section4_avg = (parseInt($(".section4 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section4 .selectedoption").eq(1).find(".label").html())+parseInt($(".section4 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section5_avg = (parseInt($(".section5 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section5 .selectedoption").eq(1).find(".label").html())+parseInt($(".section5 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section6_avg = (parseInt($(".section6 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section6 .selectedoption").eq(1).find(".label").html())+parseInt($(".section6 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  final_percentage = ((section1_avg + section2_avg + section3_avg + section4_avg + section5_avg + section6_avg)/30)*100;
			  
  
	  
			if(final_percentage >= 0 && final_percentage <= 20)
			  
			  {
				$('#score').html("Weak Score – Little Readiness – Significant capacity building is required");
			  
			 
			  }
			  else if(final_percentage > 20 && final_percentage <= 40)
			  
			  {
				$('#score2').html("Soft Score - Some Readiness - Gap filling is necessary");
			  
			  }
			  else if(final_percentage > 40 && final_percentage <= 60)
			  
			  {
			  	$('#score3').html("Good Score - Readiness Potential - begin to build on existing assets");
			  
			  }
			  
			  else if(final_percentage > 60 && final_percentage <= 80)
			  
			  {
			  	$('#score4').html( "Strong Score - Readiness Present - Aggressively build on existing assets");
			  
			  }
			  
			  else if(final_percentage > 80 && final_percentage <= 100)
			  
			  {
				$('#score5').html( "Very Strong Score - Considerable Readiness - Energize your entrepreneurs!!!");
			  
			  }  
			  
  
  
  
  
			//console.log(section1_avg);
			
			data = [
	            {label:"1.Openness to Entrepreneurship", value:section1_avg},
	            {label:"2.Balanced Economic Development Strategies", value:section2_avg},
	            {label:"3.Robust Entrepreneurship Programs", value:section3_avg},
	            {label:"4.Prudent Investment Processes", value:section4_avg},
	    		{label:"5.An Expansive View", value:section5_avg},
	            {label:"6.Infrastructure", value:section6_avg}
	        ];
		 	 console.log(data);
		  
		  
		  	var dataCharts= [ 
		            {
		                "data" :[
		                    {
		                        "segments": [

		                             {label:"1.Openness to Entrepreneurship", value: parseInt(section1_avg),"color": "red"},
		                            {label:"2.Balanced Economic Development Strategies", value: parseInt(section2_avg),"color": "blue"},
		                            {label:"3.Robust Entrepreneurship Programs", value:parseInt(section3_avg), "color": "black"},
		                            {label:"4.Prudent Investment Processes", value: parseInt(section4_avg) , "color": "yellow"},
		                            {label:"5.An Expansive View", value: parseInt(section5_avg), "color": "gold"},
		                            {label:"6.Infrastructure", value: parseInt(section6_avg), "color": "green"}

		                        ]    

		                    }
		                ]
		            }
		           
		        ];
				
		  		drawConcentricCircles(dataCharts);
				  /*
				  console.log(data);
				  barGraph(data); 
					*/	
		}
				

			if (temp==1)
		        $(".prvBtn").hide();
			else if(temp!=1)
			    $(".prvBtn").show();
    });


$(document).on("click",".prvBtn", function(){





      $(".section"+temp).hide();
	  temp=temp-1;

	  if(temp < 6){
	  	 $(".nxtBtn").show();
	  	  $(".submit").hide();
	  }



	  $(".section"+temp).show();
	  
	  if(temp==1){
	  	$(".prvBtn").hide();
		$(".modal-title").html("1. Openness to Entrepreneurship");
	  }
	  else if(temp==2){


			$(".modal-title").html("2. Balanced Economic Development Strategies");
		}
		else if(temp==3)
		{
		
			$(".modal-title").html("3. Robust Entrepreneurship Programs");
		}
		else if(temp==4)
		{
		
			$(".modal-title").html("4.  Prudent Investment Processes");
		}
		else if(temp==5)
		{
		
			$(".modal-title").html("5.  An Expansive View");
		}
		else
		{
		
			$(".modal-title").html("6.  Infrastructure");
		}

});


$(document).on("click",".nxtBtn", function(){

        $("#landing").hide();
		
	    // <!-- $('#myModal').modal('hide');
		// <!-- $(".thankyou").hide(); -->
		//$("#holder").hide();
		// <!-- $("#surveyelement").hide();   -->
		
		if(temp<=6){
			$(".secondpage").show();
			
			if(temp==6){
				$(".secondpage .nxtBtn").hide();
				$(".secondpage .submit").show();
			}		
		}
		else{
			$(".secondpage").hide();	
		}


});

$(".takesurvey").click(function() {
    $('html, body').animate({
        scrollTop: $(".secondpage").offset().top
    }, 2000);
});

$(document).on("click",".submit", function(){

        $(".secondpage").hide();
		$("#holder").show();
		$(".secondpage").hide();
				$("#surveyelement").show();
				
				
				//$(".graph").show();
				
			     section1_total = parseInt($(".section1 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section1 .selectedoption").eq(1).find(".label").html())+parseInt($(".section1 .selectedoption").eq(2).find(".label").html());
		  
		   //console.log(section1_total);

  
			  section2_total = parseInt($(".section2 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section2 .selectedoption").eq(1).find(".label").html())+parseInt($(".section2 .selectedoption").eq(2).find(".label").html());
			  
			  section3_total = parseInt($(".section3 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section3 .selectedoption").eq(1).find(".label").html())+parseInt($(".section3 .selectedoption").eq(2).find(".label").html());
			  
			  section4_total = parseInt($(".section4 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section4 .selectedoption").eq(1).find(".label").html())+parseInt($(".section4 .selectedoption").eq(2).find(".label").html());
			  
			  section5_total = parseInt($(".section5 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section5 .selectedoption").eq(1).find(".label").html())+parseInt($(".section5 .selectedoption").eq(2).find(".label").html());
			  
			  section6_total = parseInt($(".section6 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section6 .selectedoption").eq(1).find(".label").html())+parseInt($(".section6 .selectedoption").eq(2).find(".label").html());
			  
			  
			  section1_avg = (parseInt($(".section1 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section1 .selectedoption").eq(1).find(".label").html())+parseInt($(".section1 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section2_avg = (parseInt($(".section2 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section2 .selectedoption").eq(1).find(".label").html())+parseInt($(".section2 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section3_avg = (parseInt($(".section3 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section3 .selectedoption").eq(1).find(".label").html())+parseInt($(".section3 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section4_avg = (parseInt($(".section4 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section4 .selectedoption").eq(1).find(".label").html())+parseInt($(".section4 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section5_avg = (parseInt($(".section5 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section5 .selectedoption").eq(1).find(".label").html())+parseInt($(".section5 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  section6_avg = (parseInt($(".section6 .selectedoption").eq(0).find(".label").html()) + parseInt($(".section6 .selectedoption").eq(1).find(".label").html())+parseInt($(".section6 .selectedoption").eq(2).find(".label").html()))/3;
			  
			  final_percentage = ((section1_avg + section2_avg + section3_avg + section4_avg + section5_avg + section6_avg)/30)*100;
			  
  
	  
			if(final_percentage >= 0 && final_percentage <= 20)
			  
			  {
				$('#score').html("Weak Score – Little Readiness – Significant capacity building is required");
			  
			 
			  }
			  else if(final_percentage > 20 && final_percentage <= 40)
			  
			  {
				$('#score2').html("Soft Score - Some Readiness - Gap filling is necessary");
			  
			  }
			  else if(final_percentage > 40 && final_percentage <= 60)
			  
			  {
			  	$('#score3').html("Good Score - Readiness Potential - begin to build on existing assets");
			  
			  }
			  
			  else if(final_percentage > 60 && final_percentage <= 80)
			  
			  {
			  	$('#score4').html( "Strong Score - Readiness Present - Aggressively build on existing assets");
			  
			  }
			  
			  else if(final_percentage > 80 && final_percentage <= 100)
			  
			  {
				$('#score5').html( "Very Strong Score - Considerable Readiness - Energize your entrepreneurs!!!");
			  
			  }  
			  
  
  
  
  
			//console.log(section1_avg);
			
			data = [
	            {label:"1.Openness to Entrepreneurship", value:section1_avg},
	            {label:"2.Balanced Economic Development Strategies", value:section2_avg},
	            {label:"3.Robust Entrepreneurship Programs", value:section3_avg},
	            {label:"4.Prudent Investment Processes", value:section4_avg},
	    		{label:"5.An Expansive View", value:section5_avg},
	            {label:"6.Infrastructure", value:section6_avg}
	        ];
		 	 console.log(data);
		  
		  
		  	var dataCharts= [ 
		            {
		                "data" :[
		                    {
		                        "segments": [

		                             {label:"1.Openness to Entrepreneurship", value: parseInt(section1_avg),"color": "red"},
		                            {label:"2.Balanced Economic Development Strategies", value: parseInt(section2_avg),"color": "blue"},
		                            {label:"3.Robust Entrepreneurship Programs", value:parseInt(section3_avg), "color": "black"},
		                            {label:"4.Prudent Investment Processes", value: parseInt(section4_avg) , "color": "yellow"},
		                            {label:"5.An Expansive View", value: parseInt(section5_avg), "color": "gold"},
		                            {label:"6.Infrastructure", value: parseInt(section6_avg), "color": "green"}

		                        ]    

		                    }
		                ]
		            }
		           
		        ];
				
		  		drawConcentricCircles(dataCharts);


});

function drawConcentricCircles(dataCharts){
    // just copied the code snipped from js fiddle
                (function( $ ){
                var methods = {
                    el: "",
                    init : function(options) {
                        var clone = jQuery.extend(true, {}, options["data"]);
                        var preparedData = methods.setData(clone);
                        
                        methods.el = this;          
                        methods.setup(preparedData, options["width"], options["height"]);
                    },
                    setup: function(data, w, h){
                        
                        var selector = methods.el["selector"];
                        
                        var padding = 20;

                        
                        var chart = d3.select(selector).append("svg:svg")
                            .attr("class", "chart")
                            .attr("width", w)
                            .attr("height", h)
                        .append("svg:g")
                            .attr("class", "concentricchart")
                            .attr("transform", "translate("+((w/3)+padding)+","+h/3+")");
                        
                        methods.radius = Math.min(w, h) / 2;
                            
                        var label_group = chart.append("svg:g")
                            .attr("class", "label_group")
                            .attr("transform", "translate("+((w/3)-15)+","+(-h/4)+")");

                        var legend_group = chart.append("svg:g")
                            .attr("class", "legend_group")
                            .attr("transform", "translate("+((w/3)-130)+","+((-h/4)-5)+")");
                            
                        var value_group = chart.append("svg:g")
                            .attr("class", "value_group")
                            .attr("transform", "translate(0,"+(h/4)+")");

                        var path_group = chart.append("svg:g")
                            .attr("class", "path_group")
                            .attr("transform", "translate(0,"+(h/4)+")");               

                        
                        this.generateArcs(selector, data);      
                    },
                    update: function(data){
                        var clone = jQuery.extend(true, {}, data);

                        var preparedData = methods.setData(clone);
                        
                        methods.el = this;
                        methods.animate(preparedData);          
                        methods.oldData = preparedData;
                    },
                    animate: function(data){
                        var that = this;
                        
                        var selector = methods.el["selector"];
                        
                        that.generateArcs(selector, data);
                    },  
                    setData: function(data){
                            var diameter = 2 * Math.PI * this.radius;           
                            var localData = new Array();

                            var segmentValueSum = 0;
                            $.each(data[0].segments, function( ri, va) {
                                segmentValueSum+= va.value;
                            });

                            segmentValueSum = 10;//consistent total accross different data sets

                            $.each(data[0].segments, function(ri, value) {
                                var segmentValue = value.value;

                                var fraction = segmentValue/segmentValueSum;

                                var arcBatchLength = fraction*4*Math.PI;
                                var arcPartition = arcBatchLength;      

                                var startAngle = Math.PI/2;         
                                var endAngle = startAngle + arcPartition; 

                                data[0].segments[ri]["startAngle"] = startAngle;
                                data[0].segments[ri]["endAngle"] = endAngle;
                                data[0].segments[ri]["index"] = ri;
                            });

                            localData.push(data[0].segments);

                            return localData[0];        
                    },
                    textOffset: 10,
                    generateArcs: function(selector, data){
                        var that = this;
                        
                        var chart = d3.select(selector);

                        //append previous value to it.          
                        $.each(data, function(index, value) {
                            if(that.oldData[index] != undefined){
                                data[index]["previousEndAngle"] = that.oldData[index].endAngle;
                            }
                            else{
                                data[index]["previousEndAngle"] = 0;
                            }
                        });     
                        
                        var thickness = $(selector).data("thickness");
                        var ir = ($(selector).data("width")/3);
                        
                        
                        var path_group = d3.select(selector+ ' .path_group');

                        var arcpaths = path_group.selectAll("path")
                            .data(data);
                            
                        arcpaths.enter().append("svg:path")
                            .attr("class", function(d, i){
                                return d.machineType;
                            })  
                            .style("fill", function(d, i){
                                return d.color;
                            })
                            .transition()
                            .ease("elastic")
                            .duration(750)
                            .attrTween("d", function(d){
                                 return that.arcTween(d, thickness, ir);
                            });      

                        arcpaths.transition()
                            .ease("elastic")
                            .style("fill", function(d, i){
                                return d.color;
                            })
                            .duration(750)
                            .attrTween("d", function(d){
                                 return that.arcTween(d, thickness, ir);
                            });      

                        arcpaths.exit().transition()
                            .ease("bounce")
                            .duration(750)
                            .attrTween("d", function(d){
                                 return that.arcTween(d, thickness, ir);
                            })   
                            .remove();

                        //draw labels       
                        that.drawLabels(chart, data, ir, thickness);
                        that.buildLegend(chart, data);
                    },
                    arcTween: function(b, thickness, ir){
                        var that = methods;
                        
                        var prev = JSON.parse(JSON.stringify(b));
                        prev.endAngle = b.previousEndAngle;
                        var i = d3.interpolate(prev, b);

                        return function(t) {
                            return that.getArc(thickness, ir)(i(t));
                        };
                    },
                    drawLabels: function(chart, data, ir, thickness){
                        $(methods.el["selector"]+' .value_group').empty();
                        
                        var that = this;
                        
                        var reversedata = data.reverse();
                        var counts = data.length;
                        
                        var value_group = d3.select(methods.el["selector"]+ ' .value_group');
                    
                        valueLabels = value_group.selectAll("text.value").data(reversedata)
                        valueLabels.enter().append("svg:text")
                            .attr("class", "value")
                            .attr("transform", function(d) {       
                                return "translate("+(that.getRadiusRing(ir, counts-1))+", 0)";
                            })
                            .attr("dx", function(d, i){
                                return 20*i;            })
                            .attr("dy", function(d, i){
                                return -5;
                            })
                            .attr("text-anchor", function(d){
                                return "start";
                            }).text(function(d){
                                return d.value;
                            });

                        valueLabels
                            .transition()
                            .duration(300)
                            .attrTween("d", function(d){
                                return that.arcTween(d, thickness, ir);
                            })
                        
                        valueLabels
                            .exit()
                            .remove();      
                    },
                    buildLegend: function(chart, data){
                        console.log("build legend");
                        $(methods.el["selector"]+' .label_group').empty();
                        $(methods.el["selector"]+' .legend_group').empty();


                        var label_group = d3.select(methods.el["selector"]+ ' .label_group');
                                
                        //draw labels                       
                        labels = label_group.selectAll("text.labels")
                            .data(data.reverse());            

                        labels.enter().append("svg:text")
                            .attr("class", "labels")
                            .attr("dy", function(d, i){
                                return 19*i
                            })
                            .attr("text-anchor", function(d){
                                return "start";
                            })
                            .text(function(d){
                                return d.label;
                            });

                        labels.exit().remove();

                        var legend_group = d3.select(methods.el["selector"]+ ' .legend_group');
                        
                        legend = legend_group.selectAll("circle").data(data);

                        legend.enter().append("svg:circle")
                            .attr("cx",100)
                            .attr("cy", function(d, i){
                                return 19*i
                            })
                            .attr("r", 7)   
                            .attr("width", 18)
                            .attr("height", 18)
                            .style("fill", function(d){
                                return d.color;
                            });
                        
                        legend.exit().remove();
                    },
                    getRadiusRing: function(ir, i){
                        return ir-(i*20);               
                    },
                    getArc: function(thickness, ir){
                        var that = this;

                        var arc = d3.svg.arc()
                            .innerRadius(function(d){
                                return that.getRadiusRing(ir, d.index);                     
                            })
                            .outerRadius(function(d){
                                return that.getRadiusRing(ir+thickness, d.index);   
                            })
                            .startAngle(function(d, i){
                                return d.startAngle;
                            })
                            .endAngle(function(d, i){
                                return d.endAngle;
                            });
                        return arc;
                    },
                    radius: 100,
                    oldData: ""
                };

                $.fn.concentric = function(methodOrOptions) {
                    if ( methods[methodOrOptions] ) {
                        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
                    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
                        // Default to "init"
                        return methods.init.apply( this, arguments );
                    } else {
                        $.error( 'Method ' +  methodOrOptions + ' does not exist' );
                    }    
                };

            })(jQuery);
        
        
        
        

            
            var clone = jQuery.extend(true, {}, dataCharts);

                //__invoke concentric
                $('[data-role="concentric"]').each(function(index) {
                    var selector = "concetric"+index;
                    
                    $(this).attr("id", selector);
                    
                    var options = {
                        data: clone[0].data,
                        width: $(this).data("width"),
                        height: $(this).data("height")
                    }
                    
                    $("#"+selector).concentric(options);
                });
            
            
            $(".testers a").on( "click", function(e) {
                e.preventDefault();

                var clone = jQuery.extend(true, {}, dataCharts);

                var min = 0;
                var max = 5;
                    
                //__invoke concentric
                $('[data-role="concentric"]').each(function(index) {
                    pos = Math.floor(Math.random() * (max - min + 1)) + min;
                    console.log("id", $(this).attr("id"));
                    $("#"+$(this).attr("id")).concentric('update', clone[pos].data);max
                });

            }); 
}



		

	function barGraph(data){



	 var div = d3.select("body").append("div").attr("class", "toolTip");
	    var axisMargin = 20,

	            margin = 40,
	            valueMargin = 4,
	          width = parseInt(d3.select('body').style('width'), 10),
	            height = parseInt(d3.select('body').style('height'), 10),
	            barHeight = (height-axisMargin-margin*2)* 0.4/data.length,
	            barPadding = (height-axisMargin-margin*2)*0.6/data.length,
	            data, bar, svg, scale, xAxis, labelWidth = 0;

	    max = d3.max(data, function(d) { return d.value; });

	    svg = d3.select('.graph')
	            .append("svg")
	            .attr("width", width)
	            .attr("height", height);


	    bar = svg.selectAll("g")
	            .data(data)
	            .enter()
	            .append("g");

	    bar.attr("class", "bar")
	            .attr("cx",0)
	            .attr("transform", function(d, i) {
	                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
	            });

	    bar.append("text")
	            .attr("class", "label")
	            .attr("y", barHeight / 2)
				//.attr("x",-200)
	            .attr("dy", ".35em") //vertical align middle
	            .text(function(d){
	                return d.label;
	            }).each(function() {
	        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
	    });

	    scale = d3.scale.linear()
	            .domain([0, max])
	            .range([0, width - margin*2 - labelWidth]);

	    xAxis = d3.svg.axis()
	            .scale(scale)
	            .tickSize(-height + 2*margin + axisMargin)
	            .orient("bottom");

	    bar.append("rect")
	            .attr("transform", "translate("+labelWidth+", 0)")
	            .attr("height", barHeight)
	            .attr("width", function(d){
	                return scale(d.value);
	            });

	    bar.append("text")
	            .attr("class", "value")
	            .attr("y", barHeight / 2)
	            .attr("dx", -valueMargin + labelWidth) //margin right
	            .attr("dy", ".35em") //vertical align middle
	            .attr("text-anchor", "end")
	            .attr("x", function(d){
	                var width = this.getBBox().width;
	                return Math.max(width + valueMargin, scale(d.value));
	            });

	    bar
	            .on("mousemove", function(d){
	                div.style("left", d3.event.pageX+10+"px");
	                div.style("top", d3.event.pageY-25+"px");
	                div.style("display", "inline-block");
	                div.html((d.label)+"<br>"+(d.value)+"%");
	            });
	    bar
	            .on("mouseout", function(d){
	                div.style("display", "none");
	            });

	    svg.insert("g",":first-child")
	            .attr("class", "axisHorizontal")
	            .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
	            .call(xAxis);
	}		


	if (temp==1)
        $(".prvBtn").hide();
	else if(temp!=1)
	    $(".prvBtn").show();

    
    
var totalSections = 6;
var currentSection = 0;
var percentCompletion = 16.66;
var $progressbar = $(".progress");

$(document).on("click",".nxtBtn", function(){
  if (currentSection >= totalSections){ return; }
  		currentSection++;
  		$progressbar.css("width", Math.round(100 * currentSection / totalSections) + "%");
});
	
function showGraph(){
	 $("#Graph").show();
    $("#holder").show();
    $(".secondpage").hide();
    $("#landing").hide();
    $('html, body').css('background','none');
    $(".surveyelement").show();
}
