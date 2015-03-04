var fs = require("fs")
module.exports = function(filePath){
    
    this.productNames = function (cb) {

        fs.readFile(filePath, 'utf8', function(err, content){
            if(err)
                return cb(err, null);

            var lines = content.split("\n");
            var map  = {};

            lines.forEach(function(line){

                var entries = line.split(",");

                if (!map[entries[1]]) {
                    map[entries[1]] = Number(entries[2]);
                }

            });

            var keys = [];
            for(var entry in map){
                keys.push(entry);
            }

            cb(null, keys);

        });
    };

    this.productsSold = function(cb){
        fs.readFile(filePath, 'utf8', function(err, content){
            if(err)
                return cb(err, null);

            var lines = content.split("\n");
            var map  = {};

            lines.forEach(function(line){

                var entries = line.split(",");

                if (!map[entries[1]]){
                    map[entries[1]] = Number(entries[2]);
                }
                else {
                    map[entries[1]] += Number(entries[2]);
                }

            });

            console.log(map);
            cb(null, map);

        });
    }
    
};