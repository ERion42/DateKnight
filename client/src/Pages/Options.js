import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { render } from "react-dom";
import Checkboxes from "../components/checkboxes";
import Checkbox from "../components/Checkbox";
import './datepicker.scss';
// import './mixins.scss';
import './variables.scss';
import CheckboxContainer from "../components/CheckboxContainer";
import RadioButton from "../components/RadioButton";


const Options = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
      <div className="container">
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />

    <CheckboxContainer />
    <div className="Radio">
    <RadioButton />
    </div>
    </div>
  );
      
  };

  export default Options;