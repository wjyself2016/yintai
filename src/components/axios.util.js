import axios from 'axios'

export default {
  loadMoreData(url, func) {
    axios.get(url)
      .then(func)
  }
}
