(self.webpackChunkboilerplate_ui=self.webpackChunkboilerplate_ui||[]).push([[444],{"./node_modules/@icon-park/react/es/runtime/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a1:()=>IconWrapper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var DEFAULT_ICON_CONFIGS={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function guid(){return"icon-"+(4294967296*(1+Math.random())|0).toString(16).substring(1)}var IconContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_ICON_CONFIGS);IconContext.Provider;function IconWrapper(name,rtl,render){return function(props){var size=props.size,strokeWidth=props.strokeWidth,strokeLinecap=props.strokeLinecap,strokeLinejoin=props.strokeLinejoin,theme=props.theme,fill=props.fill,className=props.className,spin=props.spin,extra=_objectWithoutProperties(props,_excluded),ICON_CONFIGS=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(IconContext),svgProps=function IconConverter(id,icon,config){var fill="string"==typeof icon.fill?[icon.fill]:icon.fill||[],colors=[];switch(icon.theme||config.theme){case"outline":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("none"),colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("none");break;case"filled":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("#FFF"),colors.push("#FFF");break;case"two-tone":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[1]?fill[1]:config.colors.twoTone.twoTone),colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[1]?fill[1]:config.colors.twoTone.twoTone);break;case"multi-color":colors.push("string"==typeof fill[0]?fill[0]:"currentColor"),colors.push("string"==typeof fill[1]?fill[1]:config.colors.multiColor.outFillColor),colors.push("string"==typeof fill[2]?fill[2]:config.colors.multiColor.innerStrokeColor),colors.push("string"==typeof fill[3]?fill[3]:config.colors.multiColor.innerFillColor)}return{size:icon.size||config.size,strokeWidth:icon.strokeWidth||config.strokeWidth,strokeLinecap:icon.strokeLinecap||config.strokeLinecap,strokeLinejoin:icon.strokeLinejoin||config.strokeLinejoin,colors,id}}((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(guid,[]),{size,strokeWidth,strokeLinecap,strokeLinejoin,theme,fill},ICON_CONFIGS),cls=[ICON_CONFIGS.prefix+"-icon"];return cls.push(ICON_CONFIGS.prefix+"-icon-"+name),rtl&&ICON_CONFIGS.rtl&&cls.push(ICON_CONFIGS.prefix+"-icon-rtl"),spin&&cls.push(ICON_CONFIGS.prefix+"-icon-spin"),className&&cls.push(className),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",_objectSpread(_objectSpread({},extra),{},{className:cls.join(" ")}),render(svgProps))}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),use_force_update=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-force-update.mjs"),use_is_mounted=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext._);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||(0,use_force_update.N)()[0],isMounted=(0,use_is_mounted.t)(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{exitingChildren.delete(key);const leftOverKeys=Array.from(allChildren.keys()).filter((childKey=>!targetKeys.includes(childKey)));if(leftOverKeys.forEach((leftOverKey=>allChildren.delete(leftOverKey))),presentChildren.current=filteredChildren.filter((presentChild=>{const presentChildKey=getChildKey(presentChild);return presentChildKey===key||leftOverKeys.includes(presentChildKey)})),!exitingChildren.size){if(!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}},"./node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>LayoutGroup});var react=__webpack_require__("./node_modules/react/index.js"),LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");const DeprecatedLayoutGroupContext=(0,react.createContext)(null);var use_force_update=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-force-update.mjs");const notify=node=>!node.isLayoutDirty&&node.willUpdate(!1);function nodeGroup(){const nodes=new Set,subscriptions=new WeakMap,dirtyAll=()=>nodes.forEach(notify);return{add:node=>{nodes.add(node),subscriptions.set(node,node.addEventListener("willUpdate",dirtyAll))},remove:node=>{nodes.delete(node);const unsubscribe=subscriptions.get(node);unsubscribe&&(unsubscribe(),subscriptions.delete(node)),dirtyAll()},dirty:dirtyAll}}const shouldInheritGroup=inherit=>!0===inherit,LayoutGroup=({children,id,inherit=!0})=>{const layoutGroupContext=(0,react.useContext)(LayoutGroupContext.p),deprecatedLayoutGroupContext=(0,react.useContext)(DeprecatedLayoutGroupContext),[forceRender,key]=(0,use_force_update.N)(),context=(0,react.useRef)(null),upstreamId=layoutGroupContext.id||deprecatedLayoutGroupContext;null===context.current&&((inherit=>shouldInheritGroup(!0===inherit)||"id"===inherit)(inherit)&&upstreamId&&(id=id?upstreamId+"-"+id:upstreamId),context.current={id,group:shouldInheritGroup(inherit)&&layoutGroupContext.group||nodeGroup()});const memoizedContext=(0,react.useMemo)((()=>({...context.current,forceRender})),[key]);return react.createElement(LayoutGroupContext.p.Provider,{value:memoizedContext},children)}},"./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useForceUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useIsMounted});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}},"./node_modules/shortid/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/shortid/lib/index.js")},"./node_modules/shortid/lib/alphabet.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var alphabet,previousSeed,shuffled,randomFromSeed=__webpack_require__("./node_modules/shortid/lib/random/random-from-seed.js"),ORIGINAL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function reset(){shuffled=!1}function setCharacters(_alphabet_){if(_alphabet_){if(_alphabet_!==alphabet){if(_alphabet_.length!==ORIGINAL.length)throw new Error("Custom alphabet for shortid must be "+ORIGINAL.length+" unique characters. You submitted "+_alphabet_.length+" characters: "+_alphabet_);var unique=_alphabet_.split("").filter((function(item,ind,arr){return ind!==arr.lastIndexOf(item)}));if(unique.length)throw new Error("Custom alphabet for shortid must be "+ORIGINAL.length+" unique characters. These characters were not unique: "+unique.join(", "));alphabet=_alphabet_,reset()}}else alphabet!==ORIGINAL&&(alphabet=ORIGINAL,reset())}function getShuffled(){return shuffled||(shuffled=function shuffle(){alphabet||setCharacters(ORIGINAL);for(var characterIndex,sourceArray=alphabet.split(""),targetArray=[],r=randomFromSeed.nextValue();sourceArray.length>0;)r=randomFromSeed.nextValue(),characterIndex=Math.floor(r*sourceArray.length),targetArray.push(sourceArray.splice(characterIndex,1)[0]);return targetArray.join("")}())}module.exports={get:function get(){return alphabet||ORIGINAL},characters:function characters(_alphabet_){return setCharacters(_alphabet_),alphabet},seed:function setSeed(seed){randomFromSeed.seed(seed),previousSeed!==seed&&(reset(),previousSeed=seed)},lookup:function lookup(index){return getShuffled()[index]},shuffled:getShuffled}},"./node_modules/shortid/lib/build.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var counter,previousSeconds,generate=__webpack_require__("./node_modules/shortid/lib/generate.js");__webpack_require__("./node_modules/shortid/lib/alphabet.js");module.exports=function build(clusterWorkerId){var str="",seconds=Math.floor(.001*(Date.now()-1567752802062));return seconds===previousSeconds?counter++:(counter=0,previousSeconds=seconds),str+=generate(7),str+=generate(clusterWorkerId),counter>0&&(str+=generate(counter)),str+=generate(seconds)}},"./node_modules/shortid/lib/generate.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var alphabet=__webpack_require__("./node_modules/shortid/lib/alphabet.js"),random=__webpack_require__("./node_modules/shortid/lib/random/random-byte-browser.js"),format=__webpack_require__("./node_modules/shortid/node_modules/nanoid/format.browser.js");module.exports=function generate(number){for(var done,loopCounter=0,str="";!done;)str+=format(random,alphabet.get(),1),done=number<Math.pow(16,loopCounter+1),loopCounter++;return str}},"./node_modules/shortid/lib/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var alphabet=__webpack_require__("./node_modules/shortid/lib/alphabet.js"),build=__webpack_require__("./node_modules/shortid/lib/build.js"),isValid=__webpack_require__("./node_modules/shortid/lib/is-valid.js"),clusterWorkerId=__webpack_require__("./node_modules/shortid/lib/util/cluster-worker-id-browser.js")||0;function generate(){return build(clusterWorkerId)}module.exports=generate,module.exports.generate=generate,module.exports.seed=function seed(seedValue){return alphabet.seed(seedValue),module.exports},module.exports.worker=function worker(workerId){return clusterWorkerId=workerId,module.exports},module.exports.characters=function characters(newCharacters){return void 0!==newCharacters&&alphabet.characters(newCharacters),alphabet.shuffled()},module.exports.isValid=isValid},"./node_modules/shortid/lib/is-valid.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var alphabet=__webpack_require__("./node_modules/shortid/lib/alphabet.js");module.exports=function isShortId(id){return!(!id||"string"!=typeof id||id.length<6)&&!new RegExp("[^"+alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(id)}},"./node_modules/shortid/lib/random/random-byte-browser.js":module=>{"use strict";var randomByte,crypto="object"==typeof window&&(window.crypto||window.msCrypto);randomByte=crypto&&crypto.getRandomValues?function(size){return crypto.getRandomValues(new Uint8Array(size))}:function(size){for(var bytes=[],i=0;i<size;i++)bytes.push(Math.floor(256*Math.random()));return bytes},module.exports=randomByte},"./node_modules/shortid/lib/random/random-from-seed.js":module=>{"use strict";var seed=1;module.exports={nextValue:function getNextValue(){return(seed=(9301*seed+49297)%233280)/233280},seed:function setSeed(_seed_){seed=_seed_}}},"./node_modules/shortid/lib/util/cluster-worker-id-browser.js":module=>{"use strict";module.exports=0},"./node_modules/shortid/node_modules/nanoid/format.browser.js":module=>{module.exports=function(random,alphabet,size){for(var mask=(2<<Math.log(alphabet.length-1)/Math.LN2)-1,step=-~(1.6*mask*size/alphabet.length),id="";;)for(var bytes=random(step),i=step;i--;)if((id+=alphabet[bytes[i]&mask]||"").length===+size)return id}}}]);