const Router = require('express')
const router = Router()

const { registerUser, userRecommendation, searchUser, leaderBoard, loginUser, updateavatar, userInfo, userProfile, userFollowUnfollow, editProfile } = require('../controllers/user.controllers')
const { verifyJWT } = require('../middleware/auth.middleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/updateavatar/:userId', updateavatar)
router.get('/userinfo', verifyJWT, userInfo)
router.get('/userprofile/:userID', verifyJWT, userProfile)
router.put('/userfollowunfollow/:followUserID', verifyJWT, userFollowUnfollow)
router.put('/editprofile', verifyJWT, editProfile)
router.get('/leaderboard', leaderBoard)
router.get('/searchuser', searchUser)
router.get('/userrecommendation', verifyJWT, userRecommendation)


module.exports = router;