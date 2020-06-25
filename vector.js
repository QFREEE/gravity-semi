var vector = {
    _x: 1,
    _y: 0,
    
    create: function(x, y){
      var obj = Object.create(this);
      obj.setX(x);
      obj.setY(y);
      return obj;
    },
    
    setX: function(v){
      this._x = v;
    },
    
    getX: function(){
      return this._x;
    },
    
    setY: function(v){
      this._y = v;
    },
    
    getY: function(v){
      return this._y;
    },
    
    setAngle: function(a){
      var length = this.getLength();
      this._x = Math.cos(a) * length;
      this._y = Math.sin(a) *length;
    },
    
    getAngle: function(){
      return Math.atan2(this._y, this._x);
    },
    
    setLength: function(l){
      var a = this.getAngle();
      this._x = Math.cos(a) * l;
      this._y = Math.sin(a) * l;
    },
    
    getLength: function(){
      return Math.sqrt(this._x * this._x + this._y * this._y);
    },
    
    add: function(v2){
      return vector.create(this._x + v2.getX(), this._y + v2.getY());
    },
    
    subtract: function(v2){
      return vector.create(this._x - v2.getX(), this._y - v2.getY());
    },
    
    multiply: function(v){
      return vector.create(this._x * v, this._y * v);
    },
    
    divide: function(v){
      return vector.create(this._x / v, this._y / v);
    },
    
    addTo: function(v1){
      this._x += v1.getX();
      this._y += v1.getY();
    },
    
    subtractFrom: function(v1){
      this._x -= v1.getX();
      this._y -= v1.getY();
    }
  };