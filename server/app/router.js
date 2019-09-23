'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user/getOrderList', controller.user.getOrderList);
  router.post('/user/upload', controller.user.upload);
  router.post('/user/delete', controller.user.deleteOderId)
  router.post('/user/addList',controller.user.addList)
  router.post('/user/loginand',controller.user.loginand)
};
