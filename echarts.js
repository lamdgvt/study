/**
 * echarts
*/

/**
 * 导入echarts.js
 * import('echarts')
 *
 * 初始化 echarts 实例
 * let myEcharts = echarts.init(this.$refs.echarts, 'light')
 *
 * 绘制图表
 * myEcharts.setOption({
 *  title: {
 *      text: 'Echarts title'
 *  }
 * })
 *
 * 系列 (series)
 * series 数据映射成的图
 *               折线图   柱状图  饼图    散点图     关系图   树图
 * series.type  ['line', 'bar', 'pie', 'scatter', 'graph', 'tree',  '']
 *
 * series.data  [
 *    //  维度x    维度y   其他维度...
 *      [  3.4,    4.5,   15,   43],
 *      [  4.2,    2.3,   20,   91],
 *      [  10.8,   9.5,   30,   18],
 *      [  7.2,    8.8,   18,   57]
 * ]
 *
 * 数据 data dataset
 * component:
 * xAxis (直角坐标系x轴)
 * yAxis (直角坐标系y轴)
 * grid  (直角坐标系底板)
 * angleAxis (极坐标系角度轴)
 * radiusAxis (极坐标系半径轴)
 * polar (极坐标系底板)
 * geo (地理坐标系)
 * dataZoom (数据区缩放组件)
 * visualMap (视觉映射组件)
 * tooltip (提示框组件)
 * toolbox (工具栏组件)
 * series (系列)
 *
 *
 *
*/