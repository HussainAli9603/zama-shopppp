let express = require('express');
let router = express.Router();
const adminUserScript = require('./scripts/AdminUserScripts');


router.get('/zama-shop/admin/dashboard', (req, res) => {
    adminUserScript.adminDashboard(req, res);
});
router.get('/zama-shop/login', (req, res) => {
    adminUserScript.LoginPage(req, res);
});
router.post('/zama-shop/logins', (req, res) => {
    adminUserScript.PostLogin(req, res);
});
router.get('/admin/logout', (req, res) => {
    adminUserScript.logoutUser(req, res);
});


router.get('/zama-shop/admin/city', (req, res) => {
    adminUserScript.ViewAllCities(req, res);
});
router.post('/zama-shop/admin/city/add', (req, res) => {
    adminUserScript.CreateCity(req, res);
});
router.get('/zama-shop/admin/delete/city/:id', (req, res) => {
    adminUserScript.deleteCity(req, res);
});

router.get('/zama-shop/admin/category', (req, res) => {
    adminUserScript.ViewAllCategories(req, res);
});
router.post('/zama-shop/admin/category/add', (req, res) => {
    adminUserScript.CreateCategory(req, res);
});
router.get('/zama-shop/admin/delete/category/:id', (req, res) => {
    adminUserScript.deleteCategories(req, res);
});


router.get('/zama-shop/admin/sub-category', (req, res) => {
    adminUserScript.ViewAllSubCategories(req, res);
});
router.post('/zama-shop/admin/sub-category/add', (req, res) => {
    adminUserScript.CreateSubCategory(req, res);
});
router.get('/zama-shop/admin/delete/sub-category/:id', (req, res) => {
    adminUserScript.deleteSubCategory(req, res);
});


router.get('/zama-shop/admin/all-user', (req, res) => {
    adminUserScript.ViewAllUsers(req, res);
});
router.get('/zama-shop/admin/all-active-user/:id', (req, res) => {
    adminUserScript.ActiveUsers(req, res);
});
router.get('/zama-shop/admin/in-active-user/:id', (req, res) => {
    adminUserScript.InActiveUsers(req, res);
});
router.get('/zama-shop/admin/delete/user/:id', (req, res) => {
    adminUserScript.deleteUsers(req, res);
});



router.get('/zama-shop/admin/all-block-user', (req, res) => {
    adminUserScript.ViewAllBlockUsers(req, res);
});
router.get('/zama-shop/admin/block-user/:id', (req, res) => {
    adminUserScript.BlockUsers(req, res);
});


router.get('/zama-shop/admin/normal-post', (req, res) => {
    adminUserScript.ViewNormalPosts(req, res);
});
router.get('/zama-shop/admin/active-post/:id', (req, res) => {
    adminUserScript.ActivePost(req, res);
});
router.get('/zama-shop/admin/in-active-post/:id', (req, res) => {
    adminUserScript.InActivePost(req, res);
});
router.get('/zama-shop/admin/delete/post/:id', (req, res) => {
    adminUserScript.deletePost(req, res);
});
router.get('/zama-shop/admin/approve/post/:id', (req, res) => {
    adminUserScript.ApprovePost(req, res);
});
router.get('/zama-shop/admin/dis-approve/post/:id', (req, res) => {
    adminUserScript.DisApprovePost(req, res);
});
router.get('/zama-shop/admin/sponsore/post/:id', (req, res) => {
    adminUserScript.SponsorPost(req, res);
});



router.get('/zama-shop/admin/all/sponsored/post', (req, res) => {
    adminUserScript.ViewAllSponsoredPosts(req, res);
});
router.get('/zama-shop/admin/delete/post/sponsored/:id', (req, res) => {
    adminUserScript.deleteSponsoredPost(req, res);
});
router.get('/zama-shop/admin/approve/post/sponsored/:id', (req, res) => {
    adminUserScript.ApproveSponsoredPost(req, res);
});
router.get('/zama-shop/admin/sponsore/post/sponsored/:id', (req, res) => {
    adminUserScript.SponsorSponsoredPost(req, res);
});



router.get('/zama-shop/admin/pending-normal-post', (req, res) => {
    adminUserScript.PendingNormalPosts(req, res);
});
router.get('/zama-shop/admin/pending-normal-post/:id', (req, res) => {
    adminUserScript.deletePendingNormalPost(req, res);
});
router.get('/zama-shop/admin/pending-approve-normal-post/:id', (req, res) => {
    adminUserScript.ApprovePendingNormalSponsoredPost(req, res);
});
router.get('/zama-shop/admin/pending-sponsore-post/:id', (req, res) => {
    adminUserScript.SponsorPendingNormalSponsoredPost(req, res);
});
router.post('/zama-shop/admin/change-category-post', (req, res) => {
    adminUserScript.changeCategoryPost(req, res);
});



router.get('/zama-shop/admin/pending-sponsored-post', (req, res) => {
    adminUserScript.PendingSponsoredPosts(req, res);
});
router.get('/zama-shop/admin/pending-sponsored-post/:id', (req, res) => {
    adminUserScript.deletePendingSponsoredPost(req, res);
});
router.get('/zama-shop/admin/pending-approve-sponsored-post/:id', (req, res) => {
    adminUserScript.ApprovePendingSponsoredPost(req, res);
});
router.get('/zama-shop/admin/pending-disapprove-sponsored-post/:id', (req, res) => {
    adminUserScript.DisApprovePendingSponsoredPost(req, res);
});
router.get('/zama-shop/admin/pending-sponsored-post/:id', (req, res) => {
    adminUserScript.SponsorPendingSponsoredPost(req, res);
});
router.post('/zama-shop/admin/change-sponsored-category-post', (req, res) => {
    adminUserScript.changeCategorySponsoredPost(req, res);
});



router.get('/zama-shop/admin/user-sms', (req, res) => {
    adminUserScript.GetUserSmsPage(req, res);
});
router.post('/zama-shop/admin/send-user-sms', (req, res) => {
    adminUserScript.CreateUserSms(req, res);
});



router.get('/zama-shop/admin/all-email', (req, res) => {
    adminUserScript.GetAllUserEmailPage(req, res);
});
router.get('/zama-shop/admin/get-email-page', (req, res) => {
    adminUserScript.GetUserEmailPage(req, res);
});
router.post('/zama-shop/admin/send-user-email', (req, res) => {
    adminUserScript.CreateSendUserEmail(req, res);
});


module.exports = router;

















