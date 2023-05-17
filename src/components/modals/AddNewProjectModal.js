import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ProjectForm from "../forms/ProjectForm";

export default function AddNewProjectModal({ isOpen, onClose, onSubmit }) {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Adding New Project...</DialogTitle>
      <DialogContent>
        <ProjectForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          type="reset"
          form="project-form"
        >
          Clear form
        </Button>
				<Button
          variant="contained"          
          type="submit"
          form="project-form"
        >
          Add project
        </Button>
      </DialogActions>
    </Dialog>
  );
}
