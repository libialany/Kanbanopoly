
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
interface Props {
  taskStatus: string;
  taskName: string;
  setTaskName: (val: string) => void;
  setTaskStatus: (val: string) => void;
}
function Form({ taskStatus, taskName, setTaskName, setTaskStatus }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <TextField
          label="Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          margin="normal"
          size="small"      
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <FormControl fullWidth variant="outlined" size="small" margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            size="small"
            label="Status"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <MenuItem value="Pending">Pendding</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Form;
