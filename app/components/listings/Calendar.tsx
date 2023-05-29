"use client";

import { RangeKeyDict, Range } from "react-date-range";

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
  return <></>;
};

export default Calendar;
