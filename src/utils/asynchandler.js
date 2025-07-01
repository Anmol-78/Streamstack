// this file just made a method and export it
 
// just a short form for asynchandler = () => {() => {}}  higher order function

const asynchandler = (fn)  => async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success : false,
            message : error.message
        })
    }
}

export {asynchandler};