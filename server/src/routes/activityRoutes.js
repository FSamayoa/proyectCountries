const { Router } = require("express");
const { createActivity } = require("../controllers/postActivities");
const { getAllActivitiesHandler, 
        getActivityByIdHandler, 
        deleteActivityHandler,
        // updateActivityHandler
     } = require("../handlers/activitiesHandler");

const activitiesRouter = Router()

activitiesRouter.get("/activities/", getAllActivitiesHandler)
activitiesRouter.post("/activities/post", createActivity)
activitiesRouter.get("/activities/:id", getActivityByIdHandler)
activitiesRouter.delete("/activities/delete/:ActivityId", deleteActivityHandler)
// activitiesRouter.put("/:activityId", updateActivityHandler)

module.exports = activitiesRouter