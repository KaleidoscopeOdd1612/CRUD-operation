const notFound = (req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    return next(error);
}

export default notFound;