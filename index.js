var courses = [
    "javascript",
    "PHP",
    "Ruby"
]
// map: trả vể 1 mảng đã được callbackfn xử lý.
// tạo map:
Array.prototype.map2 = function(callbackfn){
    // console.log(this); //[ "javascript", "PHP", "Ruby"]
    const output = [], arrLength = this.length;
    for(var i = 0; i< arrLength; i++){
        var result = callbackfn(this[i], i, this);
        output.push(result);
    }
    return output;
}  

var htmlList = courses.map2((course)=>{
    return `<h2>${course}</h2>`;
});

console.log(htmlList.join('')); //  output : <h2>javascript</h2><h2>PHP</h2><h2>Ruby</h2>


// forEach2, reduce2, find2, filter2, some2, every2

// forEach: xử lý từng phần tử của mảng
// object prototype
//for in ko chỉ duyệt qua các phần tử nằm trong mảng mà còn duyệt qua prototype của nó

Array.prototype.forEach2 = function(cb){
    for(var i in this){
        if(this.hasOwnProperty(i)){
        cb(this[i], i, this);
        }
    }
}
courses.forEach2((value, index, array)=>{
    console.log(value);
})

// filter: tìm phần tử thỏa mãn điều kiện cb

Array.prototype.filter2 = function(cb){
    const output = [];
    for(var i in this){
       if(this.hasOwnProperty(i)){
        var cbval = cb(this[i], i, this);
        if(cbval) output.push(this[i]);
       }
    }
    return output;
}

console.log(courses.filter2((a)=>a==='javascript'))

// some: trả về kết quả true hoặc false của mệnh đề "có ít nhất 1 phần tử thỏa mãn điểu kiện của hàm callback"

Array.prototype.some2 = function(cb){
    for(var i in this){
       if(this.hasOwnProperty(i)){
        var cbval = cb(this[i], i, this);
        if(cbval) return true;
       }
    }
    return false;
}

console.log(courses.some2((a)=>a==='javascript')) //true

// some: trả về kết quả true hoặc false của mệnh đề "tất cả các phần tử thỏa mãn điểu kiện của hàm callback"

Array.prototype.every2 = function(cb){
    for(var i in this){
       if(this.hasOwnProperty(i)){
        var cbval = cb(this[i], i, this);
        if(!cbval) return false;
       }
    }
    return true;
}

console.log(courses.every2((a)=>a==='javascript')); //false
