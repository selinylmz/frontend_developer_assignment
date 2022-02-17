import React, { useEffect } from "react";
import img0 from "../../assets/1@2x.png";
import img1 from "../../assets/ERD_1373@2x.png";
import img2 from "../../assets/IMG-20191130-WA0014@2x.png";
import img3 from "../../assets/Linktera Veri Analitiği Hitachi IDC Türkiye@2x.png";
import "./index.scss";
import { getNewsData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
function News() {
  const newsData = useSelector((state) => state.newsData);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getNewsData());
  }, []);

  return (
    <div className="news">
      {newsData.map(
        (e, i) =>
          i < 4 && (
            <div className="news-item" key={i}>
              {i === 0 && <img src={img0} alt={e.title} />}
              {i === 1 && <img src={img1} alt={e.title} />}
              {i === 2 && <img src={img2} alt={e.title} />}
              {i === 3 && <img src={img3} alt={e.title} />}
              <div className="news-item-info">
                <h3 className="news-item-info-title">{e.title}</h3>
                <p className="news-item-info-description">{e.description}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default News;
