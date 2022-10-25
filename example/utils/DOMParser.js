const DPfunction = function(str){
    try {
        var parser = new DOMParser()
        var doc = parser.parseFromString(str, "text/xml")
        return doc
    }catch(error){
        console.log(error);
        return
    }
}


module.exports = DPfunction