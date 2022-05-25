function add(a, b) {
	console.log("tools库升级3，调用函数add,入参：%d, %d",a ,b)
    return (a + b)*3;
}
function min(a, b) {
	console.log("tools库，调用函数min,入参：%d, %d",a ,b)
    return Math.min(a, b);
}

module.exports = { add, min };
