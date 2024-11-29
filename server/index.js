import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import WorkflowModel from "./Models/WorkflowModel.js";


const app = express();
app.use(express.json());
app.use(cors());

// MongoDB API connection string:
const conString = "mongodb+srv://admin:123@democluster.abcd.mongodb.net/efficiencyDb?retryWrites=true&w=majority&appName=demoCluster";

mongoose.connect(conString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.post("/addWorkflowDetails/", async (req, res) => {
    const {
        type,
        size,
        totalhrs,
        totaltasks,
        eff,
        note,
    } = req.body;

    try {
        const workflowDetails = new WorkflowModel({
            ProjectType: type,
            TeamSize: size,
            TotalHoursWorked: totalhrs,
            TotalTasksCompleted: totaltasks,
            Efficiency: eff,
            Note: note,
        });

        await workflowDetails.save();
        
        res.status(200).send("Workflow Saved Successfully!");
    } catch(err) {
        console.log("Error creating WorkflowModel object.", err);
        res.status(500).send("Error adding workflow details.");
    }
});

app.listen(3001, () => console.log("Server is up and running!"));
