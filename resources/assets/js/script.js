require('intersection-observer');

const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "0px 0px -30% 0px", // ビューポートの中心を判定基準にする
    threshold: 0 // 閾値は0
};

const observer = new IntersectionObserver(doWhenIntersect, options);

const boxes = document.querySelectorAll(".target");
//IE11対策
const boxesArr = Array.prototype.slice.call(boxes);
boxesArr.forEach(box => {
    observer.observe(box);
});

function doWhenIntersect(entries) {
    //IE11対策
    const entriesArr = Array.prototype.slice.call(entries);
    entriesArr.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("inview");
        }
    });
}