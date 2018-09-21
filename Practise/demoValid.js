

require('../Practise/mongoose.js');
const sites = require('./sites');

        let query = {
            site_id: 1810
          }
          sites.find(query).lean().exec((err, result) => {
            let [res] = result;
            console.log(res.name)
            //console.log(result[0].timezone);

            // console.log(JSON.parse(JSON.stringify(res))['name']); 
                        // let [xx] = result;
            // expect(result.name).toBe()
            
          }); 


        

