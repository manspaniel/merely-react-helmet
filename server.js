import merely from 'merely';
import Helmet from "react-helmet";

merely.plugin('merely-react-helmet', (options, isDev) => {
  
  merely.filter('getHeadContents', (contents) => {
    if(isDev) return contents;
    let head = Helmet.rewind();
    return [
      head.title.toString(),
      head.meta.toString(),
      head.link.toString(),
      ...contents
    ]
  })
  
})