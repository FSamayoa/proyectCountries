const { Router } = require("express");
const { createActivity } = require("../controllers/postActivities");
const { getAllActivitiesHandler, 
        getActivityByIdHandler, 
        deleteActivityHandler,
        // updateActivityHandler
     } = require("../handlers/activitiesHandler");

const activitiesRouter = Router()

activitiesRouter.get("/", getAllActivitiesHandler)
activitiesRouter.post("/post", createActivity)
activitiesRouter.get("/:id", getActivityByIdHandler)
activitiesRouter.delete("/delete/:ActivityId", deleteActivityHandler)
// activitiesRouter.put("/:activityId", updateActivityHandler)

module.exports = activitiesRouter