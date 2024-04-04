"use strict";(self.webpackChunkboilerplate_ui=self.webpackChunkboilerplate_ui||[]).push([[161],{"./src/components/calendar/calendar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FirstStory:()=>FirstStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/style.css");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/calendar/index.tsx"),moment__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);const __WEBPACK_DEFAULT_EXPORT__={title:"components/Calendar Input",component:___WEBPACK_IMPORTED_MODULE_2__.qe,id:"calendar-input"},FirstStory={name:"Calendar",args:{},render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement((()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD hh:mm:ss A"));return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"w-full h-[100vh] flex gap-2 items-center justify-center"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.qe,{value,disabled:!0,onChange:(selected,formatted)=>setValue(formatted),appearance:{calendar:{modal:{className:"bg-white"}}}}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.qe,{value,onChange:(selected,formatted)=>setValue(formatted),appearance:{calendar:{modal:{className:"bg-white"}}}}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.qe,{value,onChange:(selected,formatted)=>setValue(formatted),autoCloseOnSelect:!1,appearance:{calendar:{modal:{className:"bg-white"}}},includeTime:!0}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_2__.qe,{value,onChange:(selected,formatted)=>setValue(formatted),appearance:{calendar:{modal:{className:"bg-white"}}},includeTime:!0,timeFormat:"24"}))}))};FirstStory.parameters={...FirstStory.parameters,docs:{...FirstStory.parameters?.docs,source:{originalSource:"{\n  name: 'Calendar',\n  args: {\n    //👇 The args you need here will depend on your component\n  },\n  render() {\n    return React.createElement(() => {\n      const [value, setValue] = useState<any>(moment().format('YYYY-MM-DD hh:mm:ss A'));\n      return <div className=\"w-full h-[100vh] flex gap-2 items-center justify-center\">\n          <CalendarInput value={value} disabled={true} onChange={(selected: string, formatted: string) => setValue(formatted)} appearance={{\n          calendar: {\n            modal: {\n              className: 'bg-white'\n            }\n          }\n        }} />\n          <CalendarInput value={value} onChange={(selected: string, formatted: string) => setValue(formatted)} appearance={{\n          calendar: {\n            modal: {\n              className: 'bg-white'\n            }\n          }\n        }} />\n          <CalendarInput value={value} onChange={(selected: string, formatted: string) => setValue(formatted)} autoCloseOnSelect={false} appearance={{\n          calendar: {\n            modal: {\n              className: 'bg-white'\n            }\n          }\n        }} includeTime={true} />\n          <CalendarInput value={value} onChange={(selected: string, formatted: string) => setValue(formatted)} appearance={{\n          calendar: {\n            modal: {\n              className: 'bg-white'\n            }\n          }\n        }} includeTime={true} timeFormat='24' />\n        </div>;\n    });\n  }\n}",...FirstStory.parameters?.docs?.source}}};const __namedExportsOrder=["FirstStory"]}}]);