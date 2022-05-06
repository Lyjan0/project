//先引入mockjs模块
//用大写，是一个对象
import Mock from 'mockjs';

//把模拟数据引入进来(JSON数据格式没有对外暴露，但是可以引入)
//webpack默认对外暴露的：图片、JSON格式的数据
import banner from './banner.json';
import floor from './floor.json';

// mock数据：第一个参数是请求地址，第二个参数是请求数据
// 模拟首页大的轮播图的数据
Mock.mock("/mock/banner",{code:200,data:banner});
// 模拟floor的数据
Mock.mock("/mock/floor",{code:200,data:floor});