// index.js
// 获取应用实例
import {network} from "network.js";

const app = getApp()

Page({
  data: {
   
  },
  
  onLoad() {
    //电影
    var that = this;
    network.getMovieList({
      success:function(movies){
        that.setData({
          movies:movies
        });
      }
    });
    //电视剧
    network.getTVList({
      success:function(tvs){
        that.setData({
          tvs:tvs
        })
      }
    })
    //综艺
    network.getShowList({
      success:function(shows){
        that.setData({
          shows:shows
        })
      }
    })
    
  }
})
