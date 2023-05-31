import {globalURLs} from "../../utils/urls"
const network = {
  getMovieList :function(params){   
    wx.request({
      url:globalURLs.MovieList ,
      data:{
        count:20
      },
      success:function(res){
        var movies = res.data.subject_collection_items;
        if(params && params.success){
          params.success(movies);
        }
      }
    })
  },
  getTVList:function(params){
    wx.request({
      url:globalURLs.TvList ,
      data:{
        count:20
      },
      success:function(res){
        var tvs = res.data.subject_collection_items;
        if(params && params.success){
          params.success(tvs);
        }
      }
    })
  },
  getShowList:function(params){
    wx.request({
      url: globalURLs.ShowList,
      data:{
        count:20
      },
      success:function(res){
        var shows = res.data.subject_collection_items;
        if(params &&params.success){
          params.success(shows)
        }
      }
    })
  }
}
export {network}