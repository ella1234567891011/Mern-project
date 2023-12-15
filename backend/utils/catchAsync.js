module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next);
    };
};// to avoid uncaught promise error to go silent
// used in a root-leve of an asyncronus chain of function