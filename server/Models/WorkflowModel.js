import mongoose from "mongoose";


const WorkflowSchema = mongoose.Schema({
    ProjectType: {
        type: String,
        required: true,
    },
    TeamSize: {
        type: Number,
        required: true,
    },
    TotalHoursWorked: {
        type: Number,
        required: true
    },
    TotalTasksCompleted: {
        type: Number,
        required: true
    },
    Efficiency: {
        type: Number,
        required: true,   
    },
    Note: {
        type: String,
        required: true,
    }
});


const WorkflowModel = mongoose.model("workDetails", WorkflowSchema);


export default WorkflowModel;