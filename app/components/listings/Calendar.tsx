"use client";

import { RangeKeyDict, Range, DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalendarProps {
  value: Range;
  disabledDates?: Date[];
  onChange: (value: RangeKeyDict) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  disabledDates,
  onChange,
  value,
}) => {
  return (
    <>
      <DateRange
        rangeColors={["#262626"]}
        ranges={[value]}
        onChange={onChange}
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
      />
    </>
  );
};

export default Calendar;
