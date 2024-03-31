"use strict";(self.webpackChunkboilerplate_ui=self.webpackChunkboilerplate_ui||[]).push([[125],{"./node_modules/@icon-park/react/es/runtime/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a1:()=>IconWrapper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var DEFAULT_ICON_CONFIGS={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function guid(){return"icon-"+(4294967296*(1+Math.random())|0).toString(16).substring(1)}var IconContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_ICON_CONFIGS);IconContext.Provider;function IconWrapper(name,rtl,render){return function(props){var size=props.size,strokeWidth=props.strokeWidth,strokeLinecap=props.strokeLinecap,strokeLinejoin=props.strokeLinejoin,theme=props.theme,fill=props.fill,className=props.className,spin=props.spin,extra=_objectWithoutProperties(props,_excluded),ICON_CONFIGS=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(IconContext),svgProps=function IconConverter(id,icon,config){var fill="string"==typeof icon.fill?[icon.fill]:icon.fill||[],colors=[];switch(icon.theme||config.theme){case"outline":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("none"),colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("none");break;case"filled":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("#FFF"),colors.push("#FFF");break;case"two-tone":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[1]?fill[1]:config.colors.twoTone.twoTone),colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[1]?fill[1]:config.colors.twoTone.twoTone);break;case"multi-color":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[1]?fill[1]:config.colors.multiColor.outFillColor),colors.push("string"==typeof fill[2]?fill[2]:config.colors.multiColor.innerStrokeColor),colors.push("string"==typeof fill[3]?fill[3]:config.colors.multiColor.innerFillColor)}return{size:icon.size||config.size,strokeWidth:icon.strokeWidth||config.strokeWidth,strokeLinecap:icon.strokeLinecap||config.strokeLinecap,strokeLinejoin:icon.strokeLinejoin||config.strokeLinejoin,colors,id}}((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(guid,[]),{size,strokeWidth,strokeLinecap,strokeLinejoin,theme,fill},ICON_CONFIGS),cls=[ICON_CONFIGS.prefix+"-icon"];return cls.push(ICON_CONFIGS.prefix+"-icon-"+name),rtl&&ICON_CONFIGS.rtl&&cls.push(ICON_CONFIGS.prefix+"-icon-rtl"),spin&&cls.push(ICON_CONFIGS.prefix+"-icon-spin"),className&&cls.push(className),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",_objectSpread(_objectSpread({},extra),{},{className:cls.join(" ")}),render(svgProps))}}},"./src/components/checkbox/checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FirstStory:()=>FirstStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/style.css");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/checkbox/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"components/Checkbox",component:___WEBPACK_IMPORTED_MODULE_2__.X,id:"checkbox"},FirstStory={name:"checkbox",args:{},render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement((()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"w-full h-[100vh] flex items-center justify-center"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.X,{checked:value,onChanged:value=>setValue(value)},"jljlkj"))}))};FirstStory.parameters={...FirstStory.parameters,docs:{...FirstStory.parameters?.docs,source:{originalSource:"{\n  name: 'checkbox',\n  args: {\n    //👇 The args you need here will depend on your component\n  },\n  render() {\n    return React.createElement(() => {\n      const [value, setValue] = useState(false);\n      return <div className=\"w-full h-[100vh] flex items-center justify-center\">\n          <Checkbox checked={value} onChanged={(value: boolean) => setValue(value)}>jljlkj</Checkbox>\n        </div>;\n    });\n  }\n}",...FirstStory.parameters?.docs?.source}}};const __namedExportsOrder=["FirstStory"]},"./src/components/checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var react=__webpack_require__("./node_modules/react/index.js");const CheckSmall=(0,__webpack_require__("./node_modules/@icon-park/react/es/runtime/index.js").a1)("check-small",!0,(function(props){return react.createElement("svg",{width:props.size,height:props.size,viewBox:"0 0 48 48",fill:"none"},react.createElement("path",{d:"M10 24L20 34L40 14",stroke:props.colors[0],strokeWidth:props.strokeWidth,strokeLinecap:props.strokeLinecap,strokeLinejoin:props.strokeLinejoin}))}));__webpack_require__("./src/style.css");function Checkbox({checked=!1,disabled=!1,children,onChanged,label=null,appearance}){return label||children?react.createElement("div",{className:"flex items-center gap-2 cursor-pointer "+(disabled?"opacity-40 !cursor-not-allowed":"opacity-100"),onClick:()=>onChanged?.(!checked)},react.createElement("div",{className:`${appearance?.checkboxOuter.className||"bg-primary/10"} rounded-sm min-w-[1.1rem] min-h-[1.1rem] relative transition-all duration-[0.4s] cursor-pointer overflow-hidden bg-gray-200 shadow-inner`},react.createElement("div",{className:`${appearance?.checkboxInner.className||"bg-primary"} transition-all duration-[0.2s] w-full h-full p-2 flex justify-center items-center overflow-hidden absolute ${checked?"scale-[1.1] rounded-none":"scale-0 rounded-full"}`},react.createElement(CheckSmall,{theme:"outline",size:"15",className:"text-white"}))),react.createElement("div",{className:"text-[0.9rem]"},label||children)):react.createElement("div",{className:`${appearance?.checkboxOuter.className||"bg-primary"} min-w-[1.1rem] min-h-[1.1rem] relative transition-all duration-[0.4s] cursor-pointer overflow-hidden bg-gray-200 shadow-inner`,onClick:()=>onChanged?.(!checked)},react.createElement("div",{className:`${appearance?.checkboxInner.className||"bg-primary"} rounded-sm transition-all duration-[0.2s] w-full h-full p-2 flex justify-center items-center overflow-hidden absolute ${checked?"scale-[1.1] rounded-none":"scale-0 rounded-full"}`},react.createElement(CheckSmall,{theme:"outline",size:"15",className:"text-white"})))}Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"union",raw:"any | null | undefined",elements:[{name:"any"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"null",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},appearance:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n    checkboxOuter: BoilerplateAppearance,\n    checkboxInner: BoilerplateAppearance,\n    label: BoilerplateAppearance\n}",signature:{properties:[{key:"checkboxOuter",value:{name:"BoilerplateAppearance",required:!0}},{key:"checkboxInner",value:{name:"BoilerplateAppearance",required:!0}},{key:"label",value:{name:"BoilerplateAppearance",required:!0}}]}},description:""}}}}}]);