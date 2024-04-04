"use strict";(self.webpackChunkboilerplate_ui=self.webpackChunkboilerplate_ui||[]).push([[456],{"./src/components/switch/swtich.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FirstStory:()=>FirstStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/style.css");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/switch/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"components/Switch",component:___WEBPACK_IMPORTED_MODULE_2__.r,id:"swtich"},FirstStory={name:"switch",args:{},render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement((()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"w-full h-[100vh] flex items-center justify-center"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"flex gap-10 flex-col items-center justify-center"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.r,{value,onChanged:value=>setValue(value)}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.r,{value,disabled:!0,onChanged:value=>setValue(value)}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.r,{value,onChanged:value=>setValue(value),label:"allow open"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.r,{value,disabled:!0,onChanged:value=>setValue(value),label:"allow open"})))}))};FirstStory.parameters={...FirstStory.parameters,docs:{...FirstStory.parameters?.docs,source:{originalSource:"{\n  name: 'switch',\n  args: {\n    //👇 The args you need here will depend on your component\n  },\n  render() {\n    return React.createElement(() => {\n      const [value, setValue] = useState(true);\n      return <div className=\"w-full h-[100vh] flex items-center justify-center\">\n          <div className=\"flex gap-10 flex-col items-center justify-center\">\n            <Switch value={value} onChanged={value => setValue(value)} />\n            <Switch value={value} disabled={true} onChanged={value => setValue(value)} />\n            <Switch value={value} onChanged={value => setValue(value)} label={'allow open'} />\n            <Switch value={value} disabled={true} onChanged={value => setValue(value)} label={'allow open'} />\n          </div>\n        </div>;\n    });\n  }\n}",...FirstStory.parameters?.docs?.source}}};const __namedExportsOrder=["FirstStory"]},"./src/components/common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>DisabledStyle});const DisabledStyle="!opacity-50 !cursor-not-allowed"},"./src/components/switch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common.ts");function Switch({value=!1,disabled=!1,appearance,onChanged,label=null}){return label?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:()=>!disabled&&onChanged?.(!value),className:`flex gap-2 items-center text-[0.9rem] w-full justify-between ${disabled?_common__WEBPACK_IMPORTED_MODULE_1__.n:"cursor-pointer"}`},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m6)("cursor-pointer",appearance?.label.className)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`min-w-[2.2rem] min-h-[1.2rem] px-1 rounded-full relative transition-all duration-[0.4s] ${value?appearance?.background.checked.className||"bg-primary":appearance?.background.unChecked.className||"bg-gray-200 dark:bg-stone-500 shadow-inner"}`},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m6)(`bg-white drop-shadow w-[1rem] h-[1rem] absolute rounded-full top-[50%] transition-all duration-[0.4s] ${value?"left-[100%] translate-x-[calc(-100%_-_0.1rem)]":"left-[0.1rem] translate-x-[0%]"} translate-y-[-50%]`,appearance?.roundedButton.className)}))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:()=>!disabled&&onChanged?.(!value),className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m6)("min-w-[2.2rem] min-h-[1.2rem] px-1 rounded-full relative transition-all duration-[0.4s]",disabled?_common__WEBPACK_IMPORTED_MODULE_1__.n:"cursor-pointer",`${value?appearance?.background.checked.className||"bg-primary":appearance?.background.unChecked.className||"bg-gray-200 dark:bg-stone-500 shadow-inner"}`)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m6)(`bg-white drop-shadow w-[1rem] h-[1rem] absolute rounded-full top-[50%] transition-all duration-[0.4s] ${value?"left-[100%] translate-x-[calc(-100%_-_0.1rem)]":"left-[0.1rem] translate-x-[0%]"} translate-y-[-50%]`,appearance?.roundedButton.className)}))}Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{value:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"null",computed:!1}},appearance:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n    label: BoilerplateAppearance,\n    background: {\n        checked: BoilerplateAppearance,\n        unChecked: BoilerplateAppearance\n    },\n    roundedButton: BoilerplateAppearance\n}",signature:{properties:[{key:"label",value:{name:"BoilerplateAppearance",required:!0}},{key:"background",value:{name:"signature",type:"object",raw:"{\n    checked: BoilerplateAppearance,\n    unChecked: BoilerplateAppearance\n}",signature:{properties:[{key:"checked",value:{name:"BoilerplateAppearance",required:!0}},{key:"unChecked",value:{name:"BoilerplateAppearance",required:!0}}]},required:!0}},{key:"roundedButton",value:{name:"BoilerplateAppearance",required:!0}}]}},description:""}}}}}]);