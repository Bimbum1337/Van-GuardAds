const Event = new Vue();//定义一个空的Vue实例
var MaxIndex=999;
var Host="http://121.204.249.65:9527/"
// 创建实例时设置配置的默认值

Vue.directive('drag', {
	inserted: function(el) {
		let x = 0;
		let y = 0;
		let l = 0;
		let t = 0;
		let isDown = false;
		//鼠标按下事件
		el.onmousedown = function(e) {
			//获取x坐标和y坐标
			x = e.clientX;
			y = e.clientY;

			//获取左部和顶部的偏移量
			l = el.parentElement.offsetLeft;
			t = el.parentElement.offsetTop;
			//开关打开
			isDown = true;
			//设置样式
			window.onmousemove = function(e) {

				if (isDown == false) {
					return;
				}

				//获取x和y
				let nx = e.clientX;
				let ny = e.clientY;
				//计算移动后的左偏移量和顶部的偏移量
				let nl = nx - (x - l);
				let nt = ny - (y - t);

				el.parentElement.style.left = nl + "px";
				el.parentElement.style.top = nt + "px";
			};
			window.onmouseup = function() {
				window.onmousemove = move;
				//开关关闭
				isDown = false;
			};
		};

	}
})
Vue.directive('drag-y', {
	inserted: function(el) {
		let x = 0;
		let y = 0;
		let l = 0;
		let t = 0;
		let isDown = false;
		//鼠标按下事件
		el.onmousedown = function(e) {
			//获取x坐标和y坐标
			y = e.clientY;

			//获取左部和顶部的偏移量
			t = el.parentElement.offsetTop;
			//开关打开
			isDown = true;
			//设置样式
			window.onmousemove = function(e) {

				if (isDown == false) {
					return;
				}

				//获取x和y
				let ny = e.clientY;
				//计算移动后的左偏移量和顶部的偏移量
				let nt = ny - (y - t);

				el.parentElement.style.top = nt + "px";
			};
			window.onmouseup = function() {
				window.onmousemove = move;
				//开关关闭
				isDown = false;
			};
		};

	}
})
var move=function(e) {
	Event.$emit("mouseMove",{
		x:e.clientX,
		y:e.clientY
	})
};
window.onmousemove = move;

var Axios = axios.create({
  baseURL: 'http://10.0.0.148:9527'
});

