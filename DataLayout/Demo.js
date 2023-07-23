/* console.log('====================================');
console.log("hanuman");
console.log('====================================');
const array = [ { id:1, firstname: 'lakshay', age: 21},
       { id:2, firstname: 'akshay', age: 27}, 
       { id:3, firstname: 'Vijay', age: 23},{ id:4, firstname: 'hanuman', age: 32}];

let name=[];
array.forEach((aga)=>{

      if(aga.age>23){
            name.push(aga.firstname)
      }
})       

console.log('====================================');
console.log(name);
console.log('====================================');

 */

/* 
console.log('testing 100');
setTimeout(() => console.log('testing 400'), 10);
setTimeout(() => console.log('testing 200'), 0);
console.log('testing 300');
 */
console.log(“testing 100”);
setTimeout(() => console.log(“testing 400”), 10); 
setTimeout(() => console.log(“testing 200”), 0); 
console.log(“testing 300”);
let arr = [1,2,3,5]


var yahoo = [], j = `[{"name":"Lenovo Thinkpad 41A4298","website":"google"},
{"name":"Lenovo Thinkpad 41A2222","website":"google"},
{"name":"Lenovo Thinkpad 41Awww33","website":"yahoo"},
{"name":"Lenovo Thinkpad 41A424448","website":"google"},
{"name":"Lenovo Thinkpad 41A429rr8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ff8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ss8","website":"rediff"},
{"name":"Lenovo Thinkpad 41A429sg8","website":"yahoo"}]`

var data = JSON.parse(j, function(key, value) { 
      if ( value.website === "yahoo" ) yahoo.push(value); 
      return value; })

console.log( yahoo )

var jsonStr = '[{"name":"Lenovo Thinkpad 41A4298,"website":"google"},{"name":"Lenovo Thinkpad 41A2222,"website":"google"},{"name":"Lenovo Thinkpad 41Awww33,"website":"yahoo"},{"name":"Lenovo Thinkpad 41A424448,"website":"google"},{"name":"Lenovo Thinkpad 41A429rr8,"website":"ebay"},{"name":"Lenovo Thinkpad 41A429ff8,"website":"ebay"},{"name":"Lenovo Thinkpad 41A429ss8,"website":"rediff"},{"name":"Lenovo Thinkpad 41A429sg8,"website":"yahoo"}]';


Define your data:

var jsonStr = '[{"name":"Lenovo Thinkpad 41A4298,"website":"google"},{"name":"Lenovo Thinkpad 41A2222,"website":"google"},{"name":"Lenovo Thinkpad 41Awww33,"website":"yahoo"},{"name":"Lenovo Thinkpad 41A424448,"website":"google"},{"name":"Lenovo Thinkpad 41A429rr8,"website":"ebay"},{"name":"Lenovo Thinkpad 41A429ff8,"website":"ebay"},{"name":"Lenovo Thinkpad 41A429ss8,"website":"rediff"},{"name":"Lenovo Thinkpad 41A429sg8,"website":"yahoo"}]';
Parse JSON string to JSON object:

var json = JSON.parse(jsonStr);
Iterate and filter:

$.each(JSON.parse(json), function (idx, obj) {
    if (obj.website == 'yahoo') {
        // do whatever you want
    }
});


data:

var my_data = [{"name":"Lenovo Thinkpad 41A4298","website":"google"},
{"name":"Lenovo Thinkpad 41A2222","website":"google"},
{"name":"Lenovo Thinkpad 41Awww33","website":"yahoo"},
{"name":"Lenovo Thinkpad 41A424448","website":"google"},
{"name":"Lenovo Thinkpad 41A429rr8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ff8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ss8","website":"rediff"},
{"name":"Lenovo Thinkpad 41A429sg8","website":"yahoo"}];
usage:

//We do that to ensure to get a correct JSON
var my_json = JSON.stringify(my_data)
//We can use {'name': 'Lenovo Thinkpad 41A429ff8'} as criteria too
var filtered_json = find_in_object(JSON.parse(my_json), {website: 'yahoo'});
filter function

function find_in_object(my_object, my_criteria){

  return my_object.filter(function(obj) {
    return Object.keys(my_criteria).every(function(c) {
      return obj[c] == my_criteria[c];
    });
  });

}



var data = [{"name":"Lenovo Thinkpad 41A4298","website":"google"},
{"name":"Lenovo Thinkpad 41A2222","website":"google"},
{"name":"Lenovo Thinkpad 41Awww33","website":"yahoo"},
{"name":"Lenovo Thinkpad 41A424448","website":"google"},
{"name":"Lenovo Thinkpad 41A429rr8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ff8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ss8","website":"rediff"},
{"name":"Lenovo Thinkpad 41A429sg8","website":"yahoo"}]

var data_filter = data.filter( element => element.website =="yahoo")
console.log(data_filter)


No need for jQuery unless you target old browsers and don't want to use shims.

var yahooOnly = JSON.parse(jsondata).filter(function (entry) {
    return entry.website === 'yahoo';
});
In ES2015:

const yahooOnly = JSON.parse(jsondata).filter(({website}) => website === 'yahoo');




$([
      {"name":"Lenovo Thinkpad 41A4298","website":"google222"},
      {"name":"Lenovo Thinkpad 41A2222","website":"google"}
      ])
        .filter(function (i,n){
            return n.website==='google';
        });
    Better solution : ( Salman's)
    
    $.grep( [{"name":"Lenovo Thinkpad 41A4298","website":"google"},{"name":"Lenovo Thinkpad 41A2222","website":"google"}], function( n, i ) {
      return n.website==='google';
    });