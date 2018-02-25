export const dupaMiddleware = (req, res, next) => {
    console.log(`Functional DupaMiddleware.`);
    console.log(req);

    next();
  };
