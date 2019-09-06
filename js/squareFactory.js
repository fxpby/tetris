var Square1 = function(){
    Square.call(this);
    //方块数据
    // this.data = [
    //     [0,2,0,0],
    //     [0,2,0,0],
    //     [0,2,0,0],
    //     [0,2,0,0]
    // ];
    // //原点
    // this.origin = {
    //     x:0,
    //     y:0
    // }
    // //方向
    // this.dir = 0;
    //旋转数组
    this.rotates = [
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0]
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0]
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ]
}
Square1.prototype = Square.prototype;
// 旋转
// Square1.prototype.canRotate = function(isValid){
//     var d = this.dir + 1;
//     if(d == 4){
//         d = 0;
//     }
//     console.log("d:"+d)
//     var test = [
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0]
//     ];
//     for (var i = 0; i < this.data.length;i++){
//         for(var j = 0; j < this.data[0].length; j++){
//             test[i][j] = this.rotates[d][i][j];
//         }
//     }
//     return isValid(this.origin,test);
// }
// Square1.prototype.rotate = function(){
//     this.dir = this.dir + 1;
//     if(this.dir == 4){
//         this.dir = 0;
//     }
//     for (var i = 0; i < this.data.length;i++){
//         for(var j = 0; j < this.data[0].length; j++){
//             this.data[i][j] = this.rotates[this.dir][i][j];
//         }
//     }
// }
//
// // 下移
// Square1.prototype.canDown = function(isValid){
//     var test = {};
//     test.x = this.origin.x + 1;
//     test.y = this.origin.y;
//     return isValid(test,this.data)
// }
// Square1.prototype.down = function(){
//     this.origin.x = this.origin.x + 1;
// }
//
// //左移
// Square1.prototype.canLeft = function(isValid){
//     var test = {};
//     test.x = this.origin.x;
//     test.y = this.origin.y - 1;
//     return isValid(test,this.data)
// }
// Square1.prototype.left = function(){
//     this.origin.y = this.origin.y - 1;
// }
//
// //右移
// Square1.prototype.canRight = function(isValid){
//     var test = {};
//     test.x = this.origin.x;
//     test.y = this.origin.y + 1;
//     return isValid(test,this.data)
// }
// Square1.prototype.right = function(){
//     this.origin.y = this.origin.y + 1;
// }

var Square2 = function(){
    Square.call(this);
    //方块数据
    // this.data = [
    //     [0,2,0,0],
    //     [0,2,0,0],
    //     [0,2,0,0],
    //     [0,2,0,0]
    // ];
    // //原点
    // this.origin = {
    //     x:0,
    //     y:0
    // }
    // //方向
    // this.dir = 0;
    //旋转数组
    this.rotates = [
        [
            [0,2,0,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,2,0],
            [0,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [2,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ]
    ]
}
// 旋转
Square2.prototype = Square.prototype;

var Square3 = function(){
    Square.call(this);
    this.rotates = [
        [
            [2,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [2,2,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,0,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ]
    ]
}
// 旋转
Square3.prototype = Square.prototype;


var Square4 = function(){
    Square.call(this);
    this.rotates = [
        [
            [2,2,2,0],
            [2,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,2,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,0,0,0],
            [2,2,0,0],
            [0,0,0,0]
        ]
    ]
}
// 旋转
Square4.prototype = Square.prototype;


var Square5 = function(){
    Square.call(this);
    this.rotates = [
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ]
}
// 旋转
Square5.prototype = Square.prototype;


var Square6 = function(){
    Square.call(this);
    this.rotates = [
        [
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ]
    ]
}
// 旋转
Square6.prototype = Square.prototype;


var Square7 = function(){
    Square.call(this);
    this.rotates = [
        [
            [2,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [2,2,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [2,2,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ]
    ]
}
// 旋转
Square7.prototype = Square.prototype;

var SquareFactory = function () {}
SquareFactory.prototype.make = function (index, dir) {
    var s;
    index = index + 1;
    switch (index) {
        case 1:
            s = new Square1();
            break;
        case 2:
            s = new Square2();
            break;
        case 3:
            s = new Square3();
            break;
        case 4:
            s = new Square4();
            break;
        case 5:
            s = new Square5();
            break;
        case 6:
            s = new Square6();
            break;
        case 7:
            s = new Square7();
            break;
        default:
            break;
    }
    s.origin.x = 0;
    s.origin.y = 3;
    s.rotate(dir);
    return s;
}