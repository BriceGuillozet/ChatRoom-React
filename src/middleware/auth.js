export default (store) => (next) => (action) => {
  console.log('AuthMiddleware');
  next(action);
};
