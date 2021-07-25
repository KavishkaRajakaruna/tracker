const axios = require('axios')


const vaccineStats ={
    getTypes(req,res){
        res.send("vaccine Types1")
    },
    getLocal(req, res){
        axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical')
        .then(response=>{
            console.log(response.data.url)
            res.send(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },
    worldStats(req, res){
        res.send('get the world stats')
    }
}

module.exports=vaccineStats;