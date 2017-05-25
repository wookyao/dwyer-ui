// 参数是否在指定范围内
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

// 清除字符串左右两端空白字符
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 日期格式化
export function dateFormat(format) {
  format = format || 'YYYY-MM-DD HH:mm:ss EEE';

  var
    date = new Date(),
    o = {
      "M+": date.getMonth() + 1,
      "D+": date.getDate(),
      "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
      "H+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "J+": Math.floor((date.getMonth() + 3) / 3),
      "S": date.getMilliseconds()
    },
    week = {
      "0": "\u65e5",
      "1": "\u4e00",
      "2": "\u4e8c",
      "3": "\u4e09",
      "4": "\u56db",
      "5": "\u4e94",
      "6": "\u516d"
    };

  if (/(Y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(format)) {
    format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[date.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return format;
}

// 数组排序
export function arr_sort(obj, i) {
  if (!this.isArray(obj)) throw '请传入数组';

  if (i === 1) {
    // 降序

    return arr.sort(function(a, b) {
      return b - a;
    })
  } else {
    // 升序

    return arr.sort(function(a, b) {
      return a - b;
    });
  }
}
export function arr_indexOf(arr, val) {
  for (let i = 0, iL = arr.length; i < iL; i++) {
    if (val === arr[i]) return i;
  }
  return -1;
}
export function arr_remove(arr, val) {
  let index = arr_indexOf(arr, val);
  if (index > -1) {
    arr.splice(index, 1);
  }
}


// 拷贝
export function extend() {
  var
    i = 1,
    iLength = arguments.length;
  for (; i < iLength; i++) {
    for (var p in arguments[i]) {
      arguments[0][p] = arguments[i][p];
    }
  }
  return arguments[0];
};

// 验证十六进制颜色
export function checkColor(colorCode) {
  return /^#[0-9a-fA-F]{3,6}$/.test(colorCode);
}