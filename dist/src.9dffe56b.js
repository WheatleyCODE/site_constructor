parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div style="'.concat(o,'" class="row">').concat(n,"</div>")}function o(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div style="'.concat(o,'" class="col-sm">').concat(n,"</div>")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function c(n,o){var t=o.titleColor,c=t.optionColor,r=t.infoColor,e=o.titleBackground,a=e.infoBackground,s=e.optionBackground,l=o.titleFontSize,i=l.infoFontSize,m=l.optionFontSize,u=c.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")}),p=s.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")}),f=m.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")});return'\n    <form name="'.concat(n,'">\n      <h5>').concat(n,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="Текст">\n      </div>\n      <div class="form-group">\n        <p>').concat(r.text,'</p>\n        <select class="form-control form-control-sm" name="styleColor" >\n          ').concat(u.join(" "),'\n        </select>\n      </div>\n\n      <div class="form-group">\n        <p>').concat(a.text,'</p>\n        <select class="form-control form-control-sm" name="styleBackground" >\n          ').concat(p.join(" "),'\n        </select>\n      </div>\n\n      <div class="form-group">\n        <p>').concat(i.text,'</p>\n        <select class="form-control form-control-sm" name="styleFontSize" >\n          ').concat(f.join(" "),'\n        </select>\n      </div>\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}function r(n,o){var t=o.textBackground,c=t.optionBackground,r=t.infoBackground,e=o.textColor,a=e.optionColor,s=e.infoColor,l=a.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")}),i=c.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")});return'\n    <form name="'.concat(n,'">\n      <h5>').concat(n,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="Текст">\n      </div>\n\n      <div class="form-group">\n        <p>').concat(s.text,'</p>\n        <select class="form-control form-control-sm" name="styleColor" >\n          ').concat(l.join(" "),'\n        </select>\n      </div>\n\n      <div class="form-group">\n        <p>').concat(r.text,'</p>\n        <select class="form-control form-control-sm" name="styleBackground" >\n          ').concat(i.join(" "),'\n        </select>\n      </div>\n\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}function e(n,o){var t=o.imageBackground,c=t.optionBackground,r=t.infoBackground,e=o.imageLocation,a=e.optionLocation,s=e.infoLocation,l=a.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")}),i=c.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")});return'\n    <form name="'.concat(n,'">\n      <h5>').concat(n,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="url">\n      </div>\n\n      <div class="form-group">\n        <p>').concat(s.text,'</p>\n        <select class="form-control form-control-sm" name="styleColor" >\n          ').concat(l.join(" "),'\n        </select>\n      </div>\n\n      <div class="form-group">\n        <p>').concat(r.text,'</p>\n        <select class="form-control form-control-sm" name="styleBackground" >\n            ').concat(i.join(" "),'\n         </select>\n      </div>\n\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}function a(n,o){var t=o.columnsBackground,c=t.optionBackground,r=t.infoBackground,e=o.columnsQuantity,a=e.infoQuantity,s=e.optionQuantity,l=o.columnsHeight,i=l.infoHeight,m=l.optionHeight,u=o.columnsColor,p=u.optionColor,f=u.infoColor;console.log(a,s);var v=s.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")}),d=c.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")}),g=m.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")}),y=p.map(function(n){return'<option value="'.concat(n.styles,'">').concat(n.text,"</option>")});return'\n    <form name="'.concat(n,'">\n      <h5>').concat(n,'</h5>\n      <div class="form-group">\n        <p>').concat(a.text,'</p>\n        <select class="form-control form-control-sm" name="value" >\n          ').concat(v.join(" "),'\n        </select>\n      </div>\n\n      <div class="form-group">\n        <p>').concat(r.text,'</p>\n        <select class="form-control form-control-sm" name="styleBackground" >\n          ').concat(d.join(" "),'\n        </select>\n      </div>\n\n      <div class="form-group">\n        <p>').concat(i.text,'</p>\n        <select class="form-control form-control-sm" name="styleHeight" >\n          ').concat(g.join(" "),'\n        </select>\n      </div>\n\n      <div class="form-group">\n        <p>').concat(f.text,'</p>\n        <select class="form-control form-control-sm" name="styleColor" >\n          ').concat(y.join(" "),'\n        </select>\n      </div>\n\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=n,exports.col=o,exports.ObjToCss=t,exports.blockTitleCreator=c,exports.blockTextCreator=r,exports.blockImageCreator=e,exports.blockColumnsCreator=a;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageBlock=exports.ColumnsBlock=exports.TextBlock=exports.TitleBlock=exports.Block=void 0;var t=require("../utils");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&n(t,o)}function n(t,o){return(n=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function r(t){var o=i();return function(){var e,n=s(t);if(o){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function f(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,o,e){return o&&f(t.prototype,o),e&&f(t,e),t}var p=function(){function t(o,e){l(this,t),this.value=o,this.options=e}return a(t,[{key:"toHTML",value:function(){throw new Error("Метод toHTML должен быть реализован!")}}]),t}();exports.Block=p;var y=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return a(c,[{key:"toHTML",value:function(){var o=this.options,e=o.tag,n=void 0===e?"h1":e,r=o.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.ObjToCss)(r))}}]),c}();exports.TitleBlock=y;var h=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return a(c,[{key:"toHTML",value:function(){return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.ObjToCss)(this.options.styles))}}]),c}();exports.TextBlock=h;var v=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return a(c,[{key:"toHTML",value:function(){var o=this;console.log(this.options);var e=this.value.map(function(e){return(0,t.col)("<p>".concat(e,"</p>"),(0,t.ObjToCss)(o.options.styles.col))});return(0,t.row)(e.join(" "),(0,t.ObjToCss)(this.options.styles.row))}}]),c}();exports.ColumnsBlock=v;var b=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return a(c,[{key:"toHTML",value:function(){return(0,t.row)('<img src="'.concat(this.value,'" />'),(0,t.ObjToCss)(this.options.styles))}}]),c}();exports.ImageBlock=b;
},{"../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetModel=o,exports.creationTemplate=exports.model=void 0;var t=require("./classes/blocks"),e=[new t.TitleBlock("Конструктор сайтов на JS",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff",padding:"1.5rem","text-align":"center"}}),new t.TextBlock("Текст, да? Точно. Тогда ладно.",{styles:{"background-color":"#fff",color:"#000",padding:"1.1rem",border:"1px solid black","text-align":"center"}}),new t.ColumnsBlock(["Первый блок","Второй блок","Третий блок","Четвертый блок"],{styles:{row:{"background-color":"#fff",color:"#000",padding:"5px",height:"200px",border:"1px solid black","text-align":"center",margin:"20px"},col:{"background-color":"#DEDEDE",margin:"5px","border-radius":"5px"}}}),new t.ImageBlock("https://famousfinds.net/wp-content/uploads/2020/04/google-apple-partnership-may-be-tech-limited-and-more-tech-news-today.jpg",{styles:{"background-color":"#fff",border:"1px solid black","text-align":"center",display:"flex","justify-content":"center",padding:"20px"}})];function o(){exports.model=e=[]}exports.model=e;var l={title:{titleColor:{infoColor:{text:"Цвет заголовка"},optionColor:[{text:"Черный",styles:"color: black; text-align: center;"},{text:"Красный",styles:"color: red; text-align: center;"},{text:"Желтый",styles:"color: yellow; text-align: center;"},{text:"Розовый",styles:"color: pink; text-align: center;"},{text:"Синий",styles:"color: blue; text-align: center;"}]},titleBackground:{infoBackground:{text:"Цвет фона"},optionBackground:[{text:"Нет",styles:"background-color: none;"},{text:"Черный",styles:"background-color: black;"},{text:"Желтый",styles:"background-color: yellow;"},{text:"Розовый",styles:"background-color: pink;"},{text:"Синий",styles:"background-color: blue;"}]},titleFontSize:{infoFontSize:{text:"Размер шрифта"},optionFontSize:[{text:"h1",styles:"h1"},{text:"h2",styles:"h2"},{text:"h3",styles:"h3"},{text:"h4",styles:"h4"},{text:"h5",styles:"h5"}]}},text:{textColor:{infoColor:{text:"Цвет текста"},optionColor:[{text:"Черный",styles:"color: black; text-align: center;"},{text:"Красный",styles:"color: red; text-align: center;"},{text:"Желтый",styles:"color: yellow; text-align: center;"},{text:"Розовый",styles:"color: pink; text-align: center;"},{text:"Синий",styles:"color: blue; text-align: center;"}]},textBackground:{infoBackground:{text:"Цвет фона"},optionBackground:[{text:"Нет",styles:"background-color: none;"},{text:"Черный",styles:"background-color: black;"},{text:"Желтый",styles:"background-color: yellow;"},{text:"Розовый",styles:"background-color: pink;"},{text:"Синий",styles:"background-color: blue;"}]}},image:{imageLocation:{infoLocation:{text:"Расположение"},optionLocation:[{text:"Слева",styles:"justify-content: flex-start;"},{text:"Справа",styles:"display: flex;justify-content: flex-end;"},{text:"По центру",styles:"display: flex;justify-content: center;"}]},imageBackground:{infoBackground:{text:"Цвет фона"},optionBackground:[{text:"Нет",styles:"background-color: none;"},{text:"Черный",styles:"background-color: black;"},{text:"Желтый",styles:"background-color: yellow;"},{text:"Розовый",styles:"background-color: pink;"},{text:"Синий",styles:"background-color: blue;"}]}},columns:{columnsQuantity:{infoQuantity:{text:"Количетво колонок"},optionQuantity:[{text:"Одна",styles:"['Первый блок',]"},{text:"Две",styles:"['Первый блок', 'Второй блок',]"},{text:"Три",styles:"['Первый блок', 'Второй блок','Третий блок',]"},{text:"Четыре",styles:"['Первый блок', 'Второй блок','Третий блок', 'Четвертый блок',]"}]},columnsHeight:{infoHeight:{text:"Высота колонок"},optionHeight:[{text:"200px",styles:"200px"},{text:"300px",styles:"300px"},{text:"400px",styles:"400px"},{text:"500px",styles:"500px"}]},columnsBackground:{infoBackground:{text:"Цвет фона"},optionBackground:[{text:"Нет",styles:"none;"},{text:"Черный",styles:"black;"},{text:"Желтый",styles:"yellow;"},{text:"Розовый",styles:"pink;"},{text:"Синий",styles:"blue;"}]},columnsColor:{infoColor:{text:"Цвет текста"},optionColor:[{text:"Черный",styles:"black"},{text:"Красный",styles:"red"},{text:"Желтый",styles:"yellow"},{text:"Розовый",styles:"pink"},{text:"Синий",styles:"blue"}]}}};exports.creationTemplate=l;
},{"./classes/blocks":"dDFO"}],"nLdX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var _model=require("../model"),_utils=require("../utils"),_blocks=require("./blocks");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,l){return t&&_defineProperties(e.prototype,t),l&&_defineProperties(e,l),e}var Sidebar=function(){function Sidebar(e,t){_classCallCheck(this,Sidebar),this.$el=document.querySelector(e),this.update=t,this.init()}return _createClass(Sidebar,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"add",value:function add(event){event.preventDefault();var type=event.target.name,value=event.target.value.value,CLstyles=event.target.styleColor.value,BGstyles=event.target.styleBackground.value,styles=CLstyles+BGstyles,newBlock;if("Заголовок"===type){var FStag=event.target.styleFontSize.value;newBlock=new _blocks.TitleBlock(value,{styles:styles,tag:FStag})}else if("Текст"===type)newBlock=new _blocks.TextBlock(value,{styles:styles});else if("Картинка"===type)newBlock=new _blocks.ImageBlock(value,{styles:styles});else if("Колонки"===type){var valueTest=eval("("+value+")"),HGstyles=event.target.styleHeight.value,obj=eval("({styles:{ row: {height: '".concat(HGstyles,"', 'text-align': 'center', 'background-color': '#fff',  margin: '20px',}, col: {'background-color': '").concat(BGstyles,"',color: '").concat(CLstyles,"', margin: '5px', 'border-radius': '5px'}}})"));newBlock=new _blocks.ColumnsBlock(valueTest,obj)}this.update(newBlock),event.target.value.value=""}},{key:"template",get:function(){return[(0,_utils.blockTitleCreator)("Заголовок",_model.creationTemplate.title),(0,_utils.blockTextCreator)("Текст",_model.creationTemplate.text),(0,_utils.blockImageCreator)("Картинка",_model.creationTemplate.image),(0,_utils.blockColumnsCreator)("Колонки",_model.creationTemplate.columns)].join(" ")}}]),Sidebar}();exports.Sidebar=Sidebar;
},{"../model":"JDu1","../utils":"FOZT","./blocks":"dDFO"}],"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./sideBar"),r=require("./site"),t=require("../model");function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,r,t){return r&&i(e.prototype,r),t&&i(e,t),e}var a=function(){function t(e){n(this,t),this.model=e}return o(t,[{key:"itit",value:function(){var t=this,n=new r.Site("#site");n.render(this.model),this.model=[],new e.Sidebar("#panel",function(e){t.model.push(e),n.render(t.model)})}}]),t}();exports.App=a;
},{"./sideBar":"nLdX","./site":"V48B","../model":"JDu1"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./classes/app"),s=require("./model");require("./styles/main.css"),new e.App(s.model).itit();
},{"./classes/app":"Z1kE","./model":"JDu1","./styles/main.css":"jExt"}]},{},["Focm"], null)