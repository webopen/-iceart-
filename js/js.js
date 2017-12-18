$("#nav").find("li").eq(5).siblings().hover(function(){
	$("#nav").find("li").eq(5).stop().animate({
		left:this.offsetLeft,
		width:this.offsetWidth
	})
},function(){
	$("#nav").find("li").eq(5).stop().animate({
		left:$("#nav").find("li").eq(0)[0].offsetLeft,
		width:$("#nav").find("li").eq(0)[0].offsetWidth
	})
})



$("#header_ico").find("a").hover(function(){
	$(this).css({
		transform:"rotate(360deg)"
	})
},function(){
	$(this).css({
		transform:"rotate(0deg)"
	})
})
$("#header_ico").find("a").eq(1).stop().hover(function(){
	$("#header_ico").find("img").animate({
		top:30,
		opacity:1
	})
},function(){
	$("#header_ico").find("img").stop().animate({
		top:-20,
		opacity:0
	})
})
$("#blog").hover(function(){
	$(this).css({
		background:"#fff",
	});
	$(this).find("a").css({
		color:"#000"
	})
},function(){
	$(this).css({
		background:"",		
	});
	$(this).find("a").css({
		color:"#fff"
	})
})
var arrFall=["fall 1s","fall 1.2s ","fall 1.4s ","fall 1.6s"]
$("#wrap").fullpage({
	navigation:true,
	navigationPosition:"right",
	verticalCentered:false,
	navigationColor:"#fff",
//	afterLoad:function(anchorLink,index){
//		if(index==1){			
//		};
//	},
	onLeave:function(index,nextIndex,direction){
		if(nextIndex==1){
			$(".pAbout").css({
				animation:""
			});
			$("#index_page2_icos").find(".index_page2_ico").each(function(e,i){
				$(i).css({
					animation:""
				})
			});
			$("#index_page1_box").find("img").eq(1).animate({
				top:0
			},1000,function(){
				$("#index_page1_box").find("img").eq(0).animate({
					opacity:1
				})
			})
			for(var j=0;j<$("#index_page2_icos").find(".index_page2_ico").length;j++){
				$("#index_page2_icos").find(".msg").eq(j).removeClass("show");
				$("#index_page2_icos").find(".btn").eq(j).removeClass("color");
			}
		};
		if(nextIndex==2){
			$(".pAbout").css({
				animation:""
			});
			$("#index_page2_icos").find(".index_page2_ico").each(function(i,e){
				$(e).css({
					animation:arrFall[i]
				})
			});
			$("#index_page1_box").find("img").eq(1).css({top:-500});
			$("#index_page1_box").find("img").eq(0).css({opacity:0});
		};
		if(nextIndex==3){
			$(".pAbout").css({
				animation:"fall1 2s"
			});
			$("#index_page2_icos").find(".index_page2_ico").each(function(i,e){
				$(e).css({
					animation:""
				})
			})
			$("#index_page1_box").find("img").eq(1).css({top:-500});
			$("#index_page1_box").find("img").eq(0).css({opacity:0});
			for(var j=0;j<$("#index_page2_icos").find(".index_page2_ico").length;j++){
				$("#index_page2_icos").find(".msg").eq(j).removeClass("show");
				$("#index_page2_icos").find(".btn").eq(j).removeClass("color");
			}
		}
	}
})

move();
$("#index_page2_icos").find(".index_page2_ico").each(function(i,e){
	$(e).mouseover(function(){
		for(var j=0;j<$("#index_page2_icos").find(".index_page2_ico").length;j++){
		$("#index_page2_icos").find("button").eq(j).removeClass("index_page2_icos_btn_opactiy");
			$("#index_page2_icos").find(".index_page2_icos_msg").eq(j).removeClass("show");
			$("#index_page2_bg").find("div").eq(j).removeClass("index_page2_bg_opacity");
		}
		$("#index_page2_icos").find("button").eq(i).addClass("index_page2_icos_btn_opactiy");
		$("#index_page2_icos").find(".index_page2_icos_msg").eq(i).addClass("show");
		$("#index_page2_bg").find("div").eq(i).addClass("index_page2_bg_opacity");
	})
})
function move(){
	$("#index_page1_box").find("img").eq(1).animate({
			top:0
		},500,function(){
			$("#index_page1_box").find("img").eq(0).animate({
				opacity:1
			})
		})
}

ScrollBG ();
function ScrollBG () {//封装一个函数  使背景图片可以随着鼠标左右晃动
		    //定义滚动背景容器变量
		    var shan = document.getElementById('shan'),
		        shan2= document.getElementById('shan2'),
		         shan3= document.getElementById('shan3'),
		        //获取当前窗口的尺寸并改变其中心为原点坐标，也可以改为仅获取指定层的坐标:oUl.offsetWidth
		        x = document.body.offsetWidth/2,
		        y = document.body.offsetHeight/2;
		    //设置当前窗口内的鼠标移动事件，也可以改为仅作用于指定层:oUl.onmousemove
		    document.onmousemove = function (event) {
		        //获取鼠标在当前窗口内的坐标值，也可以改为获取指定层的坐标:event.offsetX
		        var mx = event.clientX,
		              my = event.clientY;
		        //开始为每个要动的元素设置左边距和上边距，以每个元素的不同zIndex值来区别移动
		        shan.style.marginLeft=(x-mx)/90*shan.style.zIndex+'px';
		        shan2.style.marginLeft=(x-mx)/90*shan2.style.zIndex+'px';
		        shan3.style.marginLeft=(x-mx)/90*shan3.style.zIndex-650+'px';
		    };
		}

 var arr=[{transform:"rotate(0deg)",opacity:1},
 		{transform:"rotate(-50deg)",opacity:0},
 		{transform:"rotate(-180deg)",opacity:0},
 		{transform:"rotate(50deg)",opacity:0}
 ];
   setInterval(function(){
   	arr.push(arr.shift());
	setStyle1();
	setStyle2();
	setStyle3();
	setStyle4()
   },4000);
 function setStyle1(){
 	$("#index_page3_pic1").css(
 		{transform:arr[0].transform,
 		opacity:arr[0].opacity}
 	);
 	$("#index_page3_describe1").css(
 		{transform:arr[0].transform,
 		opacity:arr[0].opacity}
 	)
 }
 function setStyle2(){
 	$("#index_page3_pic2").css(
 		{transform:arr[1].transform,
 		opacity:arr[1].opacity}
 	);
 	$("#index_page3_describe2").css(
 		{transform:arr[1].transform,
 		opacity:arr[1].opacity}
 	)
 }
function setStyle3(){
   	$("#index_page3_pic3").css(
   		{transform:arr[2].transform,
   		opacity:arr[2].opacity}
   	);
   	$("#index_page3_describe3").css(
   		{transform:arr[2].transform,
   		opacity:arr[2].opacity}
   	)
   }
function setStyle4(){
   	$("#index_page3_pic4").css(
   		{transform:arr[3].transform,
   		opacity:arr[3].opacity}
   	);
   	$("#index_page3_describe4").css(
   		{transform:arr[3].transform,
   		opacity:arr[3].opacity}
   	)
}

