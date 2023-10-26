const { Router } = require("express");
const { postActivitiesHandler } = require("../handlers/activitiesHandler");
const activitiesRouter = Router()

// activitiesRouter.get("/", getActivitiesHandler)
activitiesRouter.post("/post", postActivitiesHandler)
// activitiesRouter.put("/", updateActivityHandler)
// activitiesRouter.get("/:id", getActivityByIdHandler)
// activitiesRouter.delete("/:ActivityId", deleteActivityHandler)

module.exports = activitiesRouter