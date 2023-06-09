import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function MaterialUIPickers({ selected, setSelected }) {

  const handleChange = (newValue) => {
    setSelected(newValue);
  };

  return (
    <div className="w-full flex mt-9">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Select End Date"
          value={selected}
          onChange={handleChange}
          inputProps={{ style: { padding: "25px" } }}
          disablePast={true}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
