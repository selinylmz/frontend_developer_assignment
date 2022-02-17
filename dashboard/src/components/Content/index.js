import React, { useEffect } from "react";
import Header from "../Header";
import Slider from "../Slider";
import Card from "../Card";
import Calender from "../Calendar";
import News from "../News";
import User from "../User";
import OpenPositions from "../OpenPositions";
import Advertisement from "../Advertisement";
import {
  getEmployeesData,
  getJobsData,
  getAdvertisementsData,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import ButtonMailto from "../Mail";

function Content() {
  const dispatch = useDispatch();
  const employessData = useSelector((state) => state.employessData);
  const jobsData = useSelector((state) => state.jobsData);
  const advertisementsData = useSelector((state) => state.advertisementsData);
  useEffect(() => {
    dispatch(getEmployeesData());
    dispatch(getJobsData());
    dispatch(getAdvertisementsData());
  }, []);

  const getBirthday = (date) => {
    const today = new Date().getDate();
    const todayMonth = new Date().getMonth() + 1;
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    return today === day && month === todayMonth ? true : false;
  };

  return (
    <div className="container">
      <Header />
      <div className="row pt-1">
        <div className="box box-width-1">
          <Slider />
          <Card title="HABERLER" more="/#news-detail">
            <News />
          </Card>
        </div>
        <div className="box box-width-2">
          <Card title="DOĞUM GÜNLERİ" more="/#birthday-detail">
            {employessData.map(
              (e, i) =>
                getBirthday(e.birthday) && (
                  <User
                    key={e.id}
                    firstName={e.first_name}
                    lastName={e.last_name}
                    email={e.email}
                    avatar={e.avatar}
                  >
                    <ButtonMailto
                      email={e.email}
                    />
                  </User>
                )
            )}
          </Card>
          <Card title="ARAMIZA KATILANLAR" more="/#team-detail">
            {employessData
              .sort(
                (a, b) =>
                  new Date(b.start_date_of_employement) -
                  new Date(a.start_date_of_employement)
              )
              .map(
                (e, i) =>
                  i < 3 && (
                    <User
                      key={e.id}
                      firstName={e.first_name}
                      lastName={e.last_name}
                      email={e.email}
                      avatar={e.avatar}
                    ></User>
                  )
              )}
          </Card>
        </div>
        <div className="box box-width-2">
          <Calender />
          <Card title="AÇIK POZİSYONLAR" more="/#hire-detail">
            {jobsData.map(
              (e, i) =>
                i < 3 && (
                  <OpenPositions key={e.id} jobName={e.title}></OpenPositions>
                )
            )}
          </Card>
          <Card title="İLANLAR" more="/#advertisement-detail">
            {advertisementsData.map((e, i) => (
              <Advertisement key={e.id} title={e.title}></Advertisement>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Content;
