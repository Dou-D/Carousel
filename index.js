const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const container = document.querySelector(".container");
const imgs = document.querySelector(".imgs");
const content = document.querySelector(".content");
const points = document.querySelector(".points");
let items;
let SINGLEITEMWIDTH;

let currentIndex = 0;
/**
 * 初始化，传入图片列表，元素为图片路径
 * @param {Array<string>} list
 */
function init(list) {
  for (let index = 0; index < list.length; index++) {
    const item = document.createElement("div");
    item.setAttribute("class", "img-item");
    const img = document.createElement("img");
    img.src = list[index];
    item.appendChild(img);
    imgs.appendChild(item);
    // 添加步骤点
    const point = onPoint(index);
    points.appendChild(point);
  }
  content.appendChild(points);
  items = document.querySelectorAll(".img-item");
}
// 点击步骤点
function onPoint(index, length) {
  if (length) {
  } else {
    const point = document.createElement("div");
    point.setAttribute("class", "point");
    point.setAttribute("index", index);
    return point;
  }
}
/**
 * 自动播放
 */
function auto() {}
/**
 * 图片切换
 * @param {Array} target 图片dom列表
 * @param {*} itemWidth 本次要变换的距离
 * @param {*} currentIndex
 */
function transform(target, current) {
  SINGLEITEMWIDTH = items[0].offsetWidth;
  //   重要的一行代码 在到达图片末尾后 4 % 4 = 0 回到开头
  current = current % 4;
  target.style.transform = `translateX(-${current * SINGLEITEMWIDTH}px)`;
}
/**
 * 点击prev | next按钮
 * @param {number} direction 1后一张 -1前一张
 */
function clickPlay(direction) {
  currentIndex += direction;

  transform(imgs, currentIndex);
}

/**
 * 点击哪张的point就到哪张
 */
function goNext(point) {
  // 你点了哪个元素，currentIndex就会变为那个元素的索引
  currentIndex = computedCurrentIndex(point);
  transform(imgs, currentIndex);
}

function computedCurrentIndex(point) {
  return Number(point);
}

function getCarouselItemWidth() {
  // offsetWidth  https://www.yuque.com/yuqueyonghubakkdi/js/gr207e3e6zgnir1z
  console.log(items);

  console.log(items[0].offsetWidth);
}
