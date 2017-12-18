$("#nav").find("li").eq(5).siblings().hover(function(){
	$("#nav").find("li").eq(5).stop().animate({
		left:this.offsetLeft,
		width:this.offsetWidth
	})
},function(){
	$("#nav").find("li").eq(5).stop().animate({
		left:$("#nav").find("li").eq(1)[0].offsetLeft,
		width:$("#nav").find("li").eq(1)[0].offsetWidth
	})
	console.log($("#nav").find("li").eq(1)[0].offsetWidth)
})
$("#navAbout").find("li").eq(5).siblings().hover(function(){
	$("#navAbout").find("li").eq(5).stop().animate({
		left:this.offsetLeft,
		width:this.offsetWidth
	})
},function(){
	$("#navAbout").find("li").eq(5).stop().animate({
		left:$("#navAbout").find("li").eq(2)[0].offsetLeft,
		width:$("#navAbout").find("li").eq(2)[0].offsetWidth
	})
})

$("#navContact").find("li").eq(5).siblings().hover(function(){
	$("#navContact").find("li").eq(5).stop().animate({
		left:this.offsetLeft,
		width:this.offsetWidth
	})
},function(){
	$("#navContact").find("li").eq(5).stop().animate({
		left:$("#navContact").find("li").eq(3)[0].offsetLeft,
		width:$("#navContact").find("li").eq(3)[0].offsetWidth
	})
	console.log($("#navContact").find("li").eq(3)[0].offsetLeft)
})

$("#share").find("a").hover(function(){
	$(this).css({
		transform:"rotate(360deg)"
	})
},function(){
	$(this).css({
		transform:"rotate(0deg)"
	})
})
$("#share").find("a").eq(1).stop().hover(function(){
	$("#share").find("img").animate({
		top:30,
		opacity:1
	})
},function(){
	$("#share").find("img").stop().animate({
		top:-20,
		opacity:0
	})
})
$("#blog").hover(function(){
	$(this).css({
		background:"#5259f3",
	});
	$(this).find("a").css({
		color:"#fff"
	})
},function(){
	$(this).css({
		background:"#6d74ff",		
	});
	$(this).find("a").css({
		color:"#fff"
	})
})

$(".case_banner_carousel_text>div").css({
	width:window.innerWidth
})
$(".case_banner_carousel_text").css({
	width:window.innerWidth*3
})
$(".case_mid_carousel_box>div").css({
	width:window.innerWidth
})
$(".case_mid_carousel_box").css({
	width:window.innerWidth*2
})

var bgarr=["images/case_banner_bg1.jpg","images/case_banner_bg2.jpg","images/case_banner_bg3.jpg"];
var arr=["images/case_mid_banner1.png","images/case_mid_banner2.png","images/case_mid_banner3.png"];
var n=0;
var m=0;
var a=0;
setInterval(function(){
	m++;
	if(m>2){
		m=0
	};
	$(".case_banner_bg").eq(m).css({
		opacity:1
	});
	$(".case_banner_bg").eq(m).siblings(".case_banner_bg").css({
		opacity:0
	});
	$("#case_mid_carousel_pic1").find("img").attr("src",arr[n])
	$(".case_mid_carousel_box").css({
		left:0
	});
	$("#case_mid_carousel_pic2").find("img").attr("src",arr[n=n<arr.length-1?++n:0]);
	$(".case_mid_carousel_box").animate({
		left:-window.innerWidth
	},1000);
},3000)

mouseScroll(document,function(o){
	if(o){
		$("#header").css({
			top:-68
		})
	}else{
		$("#header").css({
			top:0
		})
	}
})

function mouseScroll(obj,callBack){
				if(window.navigator.userAgent.toLowerCase().indexOf("chorme")){
					obj.addEventListener("mousewheel",fn)
				}
				if(window.navigator.userAgent.toLowerCase().indexOf("firefox")){
					obj.addEventListener("DOMMouseScroll",fn)
				}
				function fn(e){
					var down=true;
					if(e.wheelDelta){
						down=e.wheelDelta<0?true:false;
					}else{
						down=e.detail>0?true:false;
					}
					if(callBack && typeof callBack==="function"){
						callBack(down);
					}
				}
		}
var arrAnimation=["a","b","c","d","e"]
var arrScale=["scale .4s cubic-bezier(0, 0, 0.71, 1.17) 0s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) .2s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) .4s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) .6s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) .8s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.2s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.4s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.6s both","scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.8s both"];
var arrLeft=["left .4s cubic-bezier(0, 0, 0.71, 1.17) 0s both","left .4s cubic-bezier(0, 0, 0.71, 1.17) .2s both","left .4s cubic-bezier(0, 0, 0.71, 1.17) .4s both","left .4s cubic-bezier(0, 0, 0.71, 1.17) .6s both","left .4s cubic-bezier(0, 0, 0.71, 1.17) .8s both","left .4s cubic-bezier(0, 0, 0.71, 1.17) 1s both"]
document.onmousewheel=function(e){
	if($("#cooperate")[0].getBoundingClientRect().top<window.innerHeight){
		$("#cooperate").find("li").each(function(i,e){
			$(e).addClass(arrAnimation[i])
		})
	}
	if($("#footer")[0].getBoundingClientRect().top<window.innerHeight){
		$(".container>div").each(function(i,e){
			$(e).addClass(arrAnimation[i])
		})
	}	
	if ($(".container1")>=1) {	
	if($(".container1")[0].getBoundingClientRect().top<window.innerHeight-200){
		$(".about_item").css({
			animation:"scale .4s cubic-bezier(0, 0, 0.71, 1.17) .4s both "
		})
	}
	}
	if ($("#ability-contents").length>=1) {
	if($("#ability-contents")[0].getBoundingClientRect().top<window.innerHeight-200){
		$(".about_ability_show").find("img").each(function(i,e){
			$(e).css({
				animation:arrScale[i]
			})
		})
		$(".about_ability_show").find(".child-content-title").each(function(i,e){
			$(e).css({
				animation:arrLeft[i]
			})
		})
		$(".about_ability_show").find(".child-content-info").each(function(i,e){
			$(e).css({
				animation:arrLeft[i]
			})
		})
	}
	}	
	if ($("#service").length>=1) {//---------------12.08	
	if($("#service")[0].getBoundingClientRect().top<window.innerHeight){
		$("#service").find(".title1").css({
			animation:"topOpacity 2s"
		})
		$("#service").find(".title2").css({
			animation:"topOpacity 2s"
		})
	}
	}	
}
$(".about_item").eq(0).hover(function(){
	$(".about_item").eq(0).find(".about_item_describe").css({
		transform:"translateX(40%)",
		opacity:1
	})
},function(){
	$(".about_item").eq(0).find(".about_item_describe").css({
		transform:"translateX(100%)",
		opacity:0
	})
})
$(".about_item").eq(1).hover(function(){
	$(".about_item").eq(1).find(".about_item_describe").css({
		top:-100,
		opacity:1
	})
},function(){
	$(".about_item").eq(1).find(".about_item_describe").css({
		top:0,
		opacity:0
	})
})
$(".about_item").eq(2).hover(function(){
	$(".about_item").eq(2).find(".about_item_describe").css({
		transform:"translateX(110%)",
		opacity:1
	})
},function(){
	$(".about_item").eq(2).find(".about_item_describe").css({
		transform:"translateX(100%)",
		opacity:0
	})
})
$(".about_item").eq(3).hover(function(){
	$(".about_item").eq(3).find(".about_item_describe").css({
		top:200,
		opacity:1
	})
},function(){
	$(".about_item").eq(3).find(".about_item_describe").css({
		top:0,
		opacity:0
	})
})
$(".about_item").eq(4).hover(function(){
	$(".about_item").eq(4).find(".about_item_describe").css({
		top:200,
		opacity:1
	})
},function(){
	$(".about_item").eq(4).find(".about_item_describe").css({
		top:0,
		opacity:0
	})
})
$(".about_item").eq(5).hover(function(){
	$(".about_item").eq(5).find(".about_item_describe").css({
		top:200,
		opacity:1
	})
},function(){
	$(".about_item").eq(5).find(".about_item_describe").css({
		top:0,
		opacity:0
	})
})
var case_banner_carousel_text=document.getElementById("case_banner_carousel_text");
var x=0;
setInterval(function(){
	if(x>=3){
		x=0;
		$(".case_banner_carousel_text").css({
			left:0
		})
	};
	x++;
	$(".case_banner_carousel_text").animate({
		left:-x*window.innerWidth
	});
},2000)

$("#about_banner_ico").hover(function(){
	$("#about_banner_ico").css({
		background:"#d8d6ff"
	});
	$(".about_banner_ico_bg").css({
		opacity:1
	});
	$(".tou").css({
		background:"url(images/about_banner_ico_head_hover.png)"
	});
	$(".shen").css({
		background:"url(images/about_banner_ico_body_hover.png)"
	})
},function(){
	$("#about_banner_ico").css({
		background:"#FFFFFF"
	});
	$(".aBg").css({
		opacity:.5
	});
	$(".tou").css({
		background:"url(images/about_banner_ico_head.png)"
	});
	$(".shen").css({
		background:"url(images/about_banner_ico_body.png)"
	})
})
$(".about_ability_box").each(function(i,e){
	$(e).hover(function(){
			$(e).find("img").css({
				left:10
			});
			$(e).find(".about_ability_text").css({
				left:160
			})
		},function(){
			$(e).find("img").css({
				left:38
			});
			$(e).find(".about_ability_text").css({
				left:140
			})
		})
})

$(".about_ability_click").find("div").eq(0).click(function(){	
	$(this).addClass("active").siblings().removeClass("active");
	$(".about_ability_show").css({
		display:"block"
	});
	$(".about_ability_hide").css({
		display:"none"
	})
	$(".about_ability_show").find("img").each(function(i,e){
			$(e).css({
				animation:arrScale[i]
			})
		})
		$(".about_ability_show").find(".child-content-title").each(function(i,e){
			$(e).css({
				animation:arrLeft[i]
			})
		})
		$(".about_ability_show").find(".child-content-info").each(function(i,e){
			$(e).css({
				animation:arrLeft[i]
			})
		})
	$(".about_ability_hide").find("img").each(function(i,e){
			$(e).css({
				animation:""
			})
		})
})
$(".about_ability_click").find("div").eq(1).click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".about_ability_show").css({
		display:"none"
	});
	$(".about_ability_hide").css({
		display:"block"
	})
	$(".about_ability_show").find("img").each(function(i,e){
			$(e).css({
				animation:""
			})
		})
		$(".about_ability_show").find(".child-content-title").each(function(i,e){
			$(e).css({
				animation:""
			})
		})
		$(".about_ability_show").find(".child-content-info").each(function(i,e){
			$(e).css({
				animation:""
			})
		})
	$(".about_ability_hide").find("img").each(function(i,e){
			$(e).css({
				animation:arrScale[i]
			})
		})
})

if ($(".contact_page1_banner img").length>=1) {
	ScrollBG ();
}
function ScrollBG () {//封装一个函数  使背景图片可以随着鼠标左右晃动
		    //定义滚动背景容器变量
		    var contact_page1_banner = document.querySelectorAll('.contact_page1_banner img'),
		        //获取当前窗口的尺寸并改变其中心为原点坐标，也可以改为仅获取指定层的坐标:oUl.offsetWidth
		        x = document.body.offsetWidth/2,
		        y = document.body.offsetHeight/2;
		    //设置当前窗口内的鼠标移动事件，也可以改为仅作用于指定层:oUl.onmousemove
		    document.onmousemove = function (event) {
		        //获取鼠标在当前窗口内的坐标值，也可以改为获取指定层的坐标:event.offsetX
		        var mx = event.clientX,
		            my = event.clientY;
		        //开始为每个要动的元素设置左边距和上边距，以每个元素的不同zIndex值来区别移动
		        	contact_page1_banner[0].style.marginLeft=-(x-mx)/90*contact_page1_banner[0].style.zIndex+'px';
		        	contact_page1_banner[1].style.marginLeft=(x-mx)/90*contact_page1_banner[1].style.zIndex+'px';
		        	contact_page1_banner[2].style.marginLeft=-(x-mx)/90*contact_page1_banner[2].style.zIndex+'px';
		        	contact_page1_banner[3].style.marginLeft=(x-mx)/90*contact_page1_banner[3].style.zIndex+'px';

		    };
}
var arrImg=[ {top:368,left:150,transform:"rotate(-20deg) scale(1,1)"},
					{top:400,left:188,transform:"rotate(15deg)"},
					{top:388,left:763,transform:"rotate(35deg) scale(1.2,1.2)"},
					{top:320,left:510,transform:"rotate(-20deg) scale(1.2,1.2)"},
					{top:310,left:520,transform:"rotate(30deg) scale(1,1)"},
					{top:310,left:620,transform:"rotate(18deg) scale(1,1)"}
];
var arrImg2=[{top:120,left:111,transform:"rotate(0deg) scale(1,1)"},
					{top:120,left:474,transform:"rotate(0deg) scale(1,1)"},
					{top:120,left:840,transform:"rotate(0deg) scale(1,1)"},
					{top:480,left:111,transform:"rotate(0deg) scale(1,1)"},
					{top:480,left:474,transform:"rotate(0deg) scale(1,1)"},
					{top:480,left:840,transform:"rotate(0deg) scale(1,1)"}
]
var timerA=0;
if ($('#conWrap').length>=1) {
	$('#conWrap').fullpage({
		navigation:true,
		navigationPosition:"right",
		verticalCentered:false,
		afterLoad:function(anchorLink,index){
			if(index==2){
				$("#contact_page2_pic").css({
					opacity:1,
					zIndex:1
				});
				$("#contact_page2_pic").find(".contact_page2_pic_box").each(function(i,e){
					$(e).css({
						opacity:1,
						top:arrImg[i].top,
						left:arrImg[i].left,
						transform:arrImg[i].transform
					})
				})
				$("#contact_page2_phone").css({
						zIndex:2
				});
				$("#contact_page2_phone").animate({
					top:320,
					opacity:1
				},1000)
			};
			if(index==3){
					$("#contact_page3_thank").animate({
						top:200,
						opacity:1
					},1000)
				$("#contact_page2_pic").find(".contact_page2_pic_box").each(function(i,e){
					$(e).css({
						opacity:1,
						top:arrImg2[i].top,
						left:arrImg2[i].left,
						transform:arrImg2[i].transform
					})
					
				})
			}
		},
		onLeave:function(index,nextIndex,direction){
			if(nextIndex==1){
				$("#contact_page3_thank").css({
						top:500,
						opacity:0,
				});
				$("#contact_page2_phone").css({
						top:500,
						opacity:0,
						zIndex:-1
					})
				$("#contact_page2_pic").css({
					opacity:0,
					zIndex:-1
				});
				$("#contact_page2_pic").find(".contact_page2_pic_box").each(function(i,e){
					$(e).css({
						opacity:0,
						top:0,
						left:0,
						transform:""
					})
				})
			};
			if(nextIndex==2){
				$("#contact_page3_thank").css({
						top:500,
						opacity:0,
					})
				$("#contact_page2_pic").find(".contact_page2_pic_box").each(function(i,e){
					$(e).css({
						opacity:1,
						top:arrImg[i].top,
						left:arrImg[i].left,
						transform:arrImg[i].transform
					})
				})
			}
			if(nextIndex==3){
				$("#contact_page2_pic").css({
					opacity:1,
					zIndex:1
				});
				$("#contact_page2_phone").css({
						top:500,
						opacity:0,
					})
				$("#contact_page2_pic").find(".contact_page2_pic_box").each(function(i,e){
					$(e).css({
						opacity:1,
						top:arrImg2[i].top,
						left:arrImg2[i].left,
						transform:arrImg2[i].transform
					})
				})
			}
		}
	})
}


$("#contact_page3_thank").find("span").hover(function(){
	$(this).css({
		background:"#fff",
		color:"#000"
	})
},function(){
	$(this).css({
		background:"#18181f",
		color:"#fff"
	})
})
$("#contact_page3_thank").find("a").hover(function(){
	$(this).css({
		transform:"rotateZ(180deg)"
	})
},function(){
	$(this).css({
		transform:"rotateZ(0deg)"
	})
}).click(function(){
	$(this).parent().css({
		opacity:0
	})
})