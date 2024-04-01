"use strict";(self.webpackChunkboilerplate_ui=self.webpackChunkboilerplate_ui||[]).push([[448],{"./src/components/text-area/textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FirstStory:()=>FirstStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/style.css");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/text-area/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"components/Textarea",component:___WEBPACK_IMPORTED_MODULE_2__.g,id:"textarea"},FirstStory={name:"textarea",args:{value:null,placeholder:"long text area"},render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement((()=>{const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"w-full h-[100vh] flex items-center justify-center flex-col"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.g,{placeholder:"Test place holder",appearance:{textarea:{className:""}}}))}))};FirstStory.parameters={...FirstStory.parameters,docs:{...FirstStory.parameters?.docs,source:{originalSource:"{\n  name: 'textarea',\n  args: {\n    //👇 The args you need here will depend on your component\n    value: null,\n    placeholder: 'long text area'\n  },\n  render() {\n    return React.createElement(() => {\n      const [state, setState] = useState(null);\n      return <div className=\"w-full h-[100vh] flex items-center justify-center flex-col\">\n          <Textarea placeholder=\"Test place holder\" appearance={{\n          textarea: {\n            className: ''\n          }\n        }} />\n        </div>;\n    });\n  }\n}",...FirstStory.parameters?.docs?.source}}};const __namedExportsOrder=["FirstStory"]},"./src/components/text-area/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Textarea});__webpack_require__("./src/style.css");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const DefaultTextareaAppearance={textarea:{className:"",style:void 0},placeholder:{className:"",style:void 0},message:{className:"text-red-600",style:void 0},preview:{className:"",style:void 0}};function Textarea({value="",onChange,autoFocus=!1,placeholder="",className="",maxLength,errorMessage,appearance=DefaultTextareaAppearance}){const isNotEmpty=0!=value?.length||null==value,[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!isNotEmpty),input=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{focused&&input.current?.focus()}),[focused,value]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{null!=value&&value.length>0&&setFocused(!0)}),[value]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{autoFocus&&input.current?.focus()}),[]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{null!=errorMessage&&0!=errorMessage?.length&&setFocused(!0)}),[errorMessage]),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:`${(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m6)("w-full",className)}`},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"relative w-full cursor-text mt-[0.6rem] border rounded-lg outline-none dark:bg-stone-900",tabIndex:1,onBlur:event=>{event.preventDefault(),isNotEmpty||setFocused(!1)},onFocus:event=>{event.preventDefault(),setFocused(!0),input.current?.select()}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:`absolute ${appearance?.placeholder?.className} ${focused?"top-[0] translate-y-[-50%] max-w-[calc(100%-1rem)] left-[0.5rem] px-2 text-[0.8rem]":"top-[0.5rem] max-w-[calc(100%-2rem)] left-[1rem] opacity-50 px-0 text-[0.9rem]"} bg-white dark:bg-stone-900 transition-all duration-200 font-light block text-ellipsis overflow-hidden whitespace-nowrap`},placeholder),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"px-2 flex items-center"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea",{ref:input,maxLength,value,onChange,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m6)("pb-2 pt-3 outline-none rounded-lg w-full bg-transparent",appearance?.textarea?.className)}))),!!errorMessage&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m6)("text-[0.8rem]",appearance?.message?.className)},errorMessage))}Textarea.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"BoilerplateTextareaAppearance | null",elements:[{name:"BoilerplateTextareaAppearance"},{name:"null"}]},description:"",defaultValue:{value:"{\n    textarea: {\n        className: '',\n        style: undefined,\n    },\n    placeholder: {\n        className: '',\n        style: undefined,\n    },\n    message: {\n        className: 'text-red-600',\n        style: undefined,\n    },\n    preview: {\n        className: '',\n        style: undefined\n    }\n}",computed:!1}}}}}}]);