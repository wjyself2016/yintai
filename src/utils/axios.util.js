import axios from 'axios'

export default {
	getClassDetail(obj, url,callback) {
	  axios.get(url)
	    .then((res)=>{
	      const data = res.data;
	      obj.pagetitle=data.data.pagetitle;
	      obj.dataList = data.data.templatelist;
/*	      obj.snapList = data.data.templatelist;
*/	      obj.isShowloading = false
	    });
	    callback;
	    
	}
	
}