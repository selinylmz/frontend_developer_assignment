import { useState } from "react";
import DatePicker from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./index.scss";
function Calendar() {
  const [value, onChange] = useState(new Date());

  return <DatePicker onChange={onChange} value={value} locale="tr-TR"	/>;
}
export default Calendar;
