const { Router } = require("express");
const { createActivity } = require("../controllers/postActivities");
const activitiesRouter = Router()

// activitiesRouter.get("/", getActivitiesHandler)
activitiesRouter.post("/post", createActivity)
// activitiesRouter.put("/", updateActivityHandler)
// activitiesRouter.get("/:id", getActivityByIdHandler)
// activitiesRouter.delete("/:ActivityId", deleteActivityHandler)

module.exports = activitiesRouter