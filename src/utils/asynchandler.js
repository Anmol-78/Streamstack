// this file just made a method and export it
 
// just a short form for asynchandler = () => {() => {}}  higher order function

const asynchandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asynchandler }
