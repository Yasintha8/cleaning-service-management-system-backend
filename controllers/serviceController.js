import Service from "../models/service.js";

export async function createService(req,res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to login first"
        })
        return;
    }

    if(req.user.role != "admin"){
        res.status(403).json({
            message : "You are not authorized to add a service"
        })
        return;
    }

    const service = new Service(req.body);

    try{
        await service.save()  // save wenakan ilaga wedeta yanne ne
        res.json({
            message: "Service saved successfully"
        })
    }catch(err){
        res.status(500).json({
            message: "Service not saved"
        })
    }
}
export function getServices(req,res){
    Service.find().then(
        (services)=>{
            res.json(services)
        }
    ).catch(
        (err)=>{
            console.log(err);
            res.status(500).json({
                message : "Service not found"
            })
        }
    )
}

export async function getServiceById(req,res){
    const _id = req.params._id;
    const service = await Service.findOne({_id : _id});
    if(service == null){
        res.status(404).json({
            message : "Service not found"
        })
        return;
    }else{
        res.json({
            service : service       
        })
    }
}

export function deleteService(req,res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to login first"
        })
        return;
    }

    if(req.user.role != "admin"){
        res.status(403).json({
            message : "You are not authorized to delete a service"
        })
        return;
    }


    Service.findOneAndDelete({ _id: req.params._id }).then(
        () => {
            res.json({
                message: "Service deleted successfully"
            })
        }
    ).catch(
        (err) => {
            res.status(500).json({
                message: "Service not deleted"
            })
        }
    )    
}

export function updateService(req,res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to login first"
        })
        return;
    }

    if(req.user.role != "admin"){
        res.status(403).json({
            message : "You are not authorized to update a Service"
        })
        return;
    }

    Service.findOneAndUpdate({ _id: req.params._id }, req.body).then(
        () => {
            res.json({
                message: "Service updated successfully"
            })
        }
    ).catch(
        (err) => {
            res.status(500).json({
                message: "Service not updated"
            })
        }
    )
    
}