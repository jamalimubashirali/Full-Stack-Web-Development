const { parse } = require('csv-parse');
const fs  = require('fs')

const result = [];

function isReadyToAccomodate(data){
    return data['koi_disposition'] === 'CONFIRMED' && data['koi_insol'] > 0.36 && data['koi_insol'] < 1.11 && data['koi_prad'] < 1.6;
}

fs.createReadStream('./kepler.csv','utf-8')
.pipe(parse({
    comment: '#',
    columns: true,
}))
.on('data', (data) => {
    if (isReadyToAccomodate(data)){
        result.push(data);
    }
})
.on('error' , (err) => {
    console.log(err);
})
.on('end', () => {
    console.log(`${result.length} planets are ready to accomodate Humans`);
    console.log(result.map((data) => {
        return data['kepler_name'];
    }));
});

