const controllsWrapper = (controlls) => {
  return async (req, res, next) => {
    try {
      await controlls(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = controllsWrapper;
