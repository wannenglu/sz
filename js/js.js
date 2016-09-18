var TZ = {};
TZ.object = function(json){//x表示上下的x轴转,y表示左右y轴转;inputs表示按钮选择器,szNode表示骰子选择器
	this.x = 0;/* 上与下是x轴转 */
	this.y = 0;/* 左与右是y轴转 */
	this.inputs = json.inputs;/* 按钮选择器 */
	this.szNode = json.szNode;/* 骰子选择器 */
	this.init = function(){//初始化
		var obj = this;//记录实例对象
		
		//上
		obj.$$(this.inputs)[0].addEventListener("click",function(){
			obj.top(json);
			var node = document.querySelector(obj.szNode);
			obj.animate(node);
		});
		
		//下
		obj.$$(this.inputs)[1].addEventListener("click",function(){
			obj.bottom(json);
			var node = document.querySelector(obj.szNode);
			obj.animate(node);
		});
		
		//左
		obj.$$(this.inputs)[2].addEventListener("click",function(){
			obj.left(json);
			var node = document.querySelector(obj.szNode);
			obj.animate(node);
		});
		
		//右
		obj.$$(this.inputs)[3].addEventListener("click",function(){
			obj.right(json);
			var node = document.querySelector(obj.szNode);
			obj.animate(node);
		});
	}
	this.init();
};

TZ.object.prototype = {
	$$:function(selector){
		return document.querySelectorAll(selector);
	},
	top:function(json){
		this.x += json.rotate;
		
	},
	bottom:function(json){
		this.x -= json.rotate;
	},
	left:function(json){
		this.y += json.rotate;
	},
	right:function(json){
		this.y -= json.rotate;
	},
	
	animate:function(node){
		node.style.transform = "rotateX("+ this.x + "deg) rotateY("+ this.y +"deg)";
		node.style.WebkitTransform = "rotateX("+ this.x + "deg) rotateY("+ this.y +"deg)";
		node.style.MozTransform = "rotateX("+ this.x + "deg) rotateY("+ this.y +"deg)";
	}
}

var szDo1 = new TZ.object({
	rotate:90,
	inputs:"#aa input",
	szNode:"#a"
});

var szDo2 = new TZ.object({
	rotate:90,
	inputs:"#bb input",
	szNode:"#b"
});





































