import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Paper from "@mui/material/Paper";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function AddWeekNumber() {
  const [isDesktop, setDesktop] = React.useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      updateMedia();
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  }, []);

  return (
    <Paper
      variant="outlined"
      sx={{ p: 1, backgroundColor: "#2B2D3F", borderRadius: "16px" }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{
          calendarWeekNumberHeaderText: "#",
          calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
        }}
      >
        {isDesktop ? (
          <DateCalendar displayWeekNumber />
        ) : (
          <DatePicker defaultValue={dayjs("2023-06-27")} />
        )}
      </LocalizationProvider>
    </Paper>
  );
}
