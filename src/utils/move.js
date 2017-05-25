function getStyle(obj, attr) {
	var style = obj.currentStyle ? obj.currentStyle : window.getComputedStyle(obj, false);
	return style[attr];
}

export function move(el, opts, callback) {

	// 清除定时器
	clearInterval(el.timer);

	el.timer = setInterval(function() {

		var bStop = true; // 假定各种属性的值都已达到目标值

		for (var attr in opts) {

			var iCur = 0;

			if (attr == 'opacity') {
				iCur = Math.round(parseFloat(getStyle(el, attr) * 100));
			} else {
				iCur = parseInt(getStyle(el, attr));
			}


			var speed = (opts[attr] - iCur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if (opts[attr] != iCur) bStop = false;

			if (attr == 'opacity') {
				el.style.filter = 'alpha(opacity:' + (iCur + speed) + ')';
				el.style.opacity = (iCur + speed) / 100;
			} else {
				el.style[attr] = iCur + speed + 'px';
			}

		}


		if (bStop) {
			clearInterval(el.timer);
			callback && callback();
		}

	}, 30)

};