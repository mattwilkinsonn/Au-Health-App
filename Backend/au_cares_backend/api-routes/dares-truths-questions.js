const authMiddleware = require('../middleware/auth-middleware');
const tokenMiddleware = require('../middleware/token-middleware');
const dtqMiddleware = require('../middleware/dares-truths-questions-middleware');

//For Express
const express = require("express");
const { getTruthsHistory, createTruth, addTruthResponse } = require('../services/dares-truths-questions');
const router = express.Router();

router.use(tokenMiddleware.authenticateToken); //use token authentication for all routes

router.post('/create-truth', authMiddleware.authenticateAdministrator, (req, res) => {
    let truthDescription = req.body.description;
    let points = req.body.points;
    let categoryId = req.body.categoryId;
    let minPoints = req.body.minPoints;
    let hoursToComplete = req.body.hoursToComplete;

    //send response that truth added was ssuccess
    createTruth(truthDescription, points, categoryId, minPoints, hoursToComplete).then(truthAdded => {
        if (truthAdded) {
            res.status(201).json({
                status: "ok",
                truth_added: {
                    Description: truthDescription,
                    Points: points,
                    CategoryId: categoryId,
                }
            })
        } else {
            res.status(401).json({
                status: "error",
                error: " Truth not added"
            })
        }
    })
})


router.get('/truthsHistory', dtqMiddleware.authenticateAccess, async(req, res) => {
    //send request with values
    let truthsHistoryArr = await getTruthsHistory(req.query.isCurrent, req.query.isComplete, req.query.category, req.query.uuid);

    res.status(200).json({
        status: "ok",
        truthsHistory: truthsHistoryArr
    })

});

//update or add answer to a truth
router.put('/truthsHistory/:id', dtqMiddleware.authenticateTruthHistoryAccess, dtqMiddleware.ensureBodyHasResponse, async(req, res) => {
    addTruthResponse(req.params.id, req.body.response).then(truthResponseAdded => {
        if (truthResponseAdded) {
            return res.status(200).json({
                status: "ok",
                truthResponseAdded: req.body.response
            })
        } else {
            return res.status(401).json({
                status: "error",
                error: "Truth response not added"
            })
        }
    })


})


router.get('/task/:taskType/:category', async(req, res) => {
    let taskType = req.params.taskType;
    let category = req.params.category;

})


module.exports = router;