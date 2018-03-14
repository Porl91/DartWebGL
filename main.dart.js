(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a3,a4){var g=[]
var f="function "+a3+"("
var e=""
var d=""
for(var a0=0;a0<a4.length;a0++){if(a0!=0)f+=", "
var a1=generateAccessor(a4[a0],g,a3)
d+="'"+a1+"',"
var a2="p_"+a1
f+=a2
e+="this."+a1+" = "+a2+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a3+".builtin$cls=\""+a3+"\";\n"
f+="$desc=$collectedClasses."+a3+"[1];\n"
f+=a3+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a3+".name=\""+a3+"\";\n"
f+=a3+"."+"$__fields__"+"=["+d+"];\n"
f+=g.join("")
return f}init.createNewIsolate=function(){return new I()}
init.classIdExtractor=function(d){return d.constructor.name}
init.classFieldsExtractor=function(d){var g=d.constructor.$__fields__
if(!g)return[]
var f=[]
f.length=g.length
for(var e=0;e<g.length;e++)f[e]=d[g[e]]
return f}
init.instanceFromClassId=function(d){return new init.allClasses[d]()}
init.initializeEmptyInstance=function(d,e,f){init.allClasses[d].apply(e,f)
return e}
var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(c2){if(a3[c2])return
a3[c2]=true
var a6=a5.pending[c2]
if(a6&&a6.indexOf("+")>0){var a7=a6.split("+")
a6=a7[0]
var a8=a7[1]
finishClass(a8)
var a9=g[a8]
var b0=a9.prototype
var b1=g[c2].prototype
var b2=Object.keys(b0)
for(var b3=0;b3<b2.length;b3++){var b4=b2[b3]
if(!u.call(b1,b4))b1[b4]=b0[b4]}}if(!a6||typeof a6!="string"){var b5=g[c2]
var b6=b5.prototype
b6.constructor=b5
b6.$isb=b5
b6.$deferredAction=function(){}
return}finishClass(a6)
var b7=g[a6]
if(!b7)b7=existingIsolateProperties[a6]
var b5=g[c2]
var b6=z(b5,b7)
if(b0)b6.$deferredAction=mixinDeferredActionHelper(b0,b6)
if(Object.prototype.hasOwnProperty.call(b6,"%")){var b8=b6["%"].split(";")
if(b8[0]){var b9=b8[0].split("|")
for(var b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=true}}if(b8[1]){b9=b8[1].split("|")
if(b8[2]){var c0=b8[2].split("|")
for(var b3=0;b3<c0.length;b3++){var c1=g[c0[b3]]
c1.$nativeSuperclassTag=b9[0]}}for(b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isf)b6.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(d,e){var g
if(e.hasOwnProperty("$deferredAction"))g=e.$deferredAction
return function foo(){if(!supportsDirectProtoAccess)return
var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}d.$deferredAction()
f.$deferredAction()}}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="b"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="B"){processStatics(init.statics[b2]=b3.B,b4)
delete b3.B}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)
init.globalFunctions[e]=d}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(c1,c2,c3,c4,c5){var g=0,f=c2[g],e
if(typeof f=="string")e=c2[++g]
else{e=f
f=c3}var d=[c1[c3]=c1[f]=e]
e.$stubName=c3
c5.push(c3)
for(g++;g<c2.length;g++){e=c2[g]
if(typeof e!="function")break
if(!c4)e.$stubName=c2[++g]
d.push(e)
if(e.$stubName){c1[e.$stubName]=e
c5.push(e.$stubName)}}for(var a0=0;a0<d.length;g++,a0++)d[a0].$callName=c2[g]
var a1=c2[g]
c2=c2.slice(++g)
var a2=c2[0]
var a3=a2>>1
var a4=(a2&1)===1
var a5=a2===3
var a6=a2===1
var a7=c2[1]
var a8=a7>>1
var a9=(a7&1)===1
var b0=a3+a8
var b1=b0!=d[0].length
var b2=c2[2]
if(typeof b2=="number")c2[2]=b2+c
if(b>0){var b3=3
for(var a0=0;a0<a8;a0++){if(typeof c2[b3]=="number")c2[b3]=c2[b3]+b
b3++}for(var a0=0;a0<b0;a0++){c2[b3]=c2[b3]+b
b3++
if(false){var b4=c2[b3]
for(var b5=0;b5<b4.length;b5++)b4[b5]=b4[b5]+b
b3++}}}var b6=2*a8+a3+3
if(a1){e=tearOff(d,c2,c4,c3,b1)
c1[c3].$getter=e
e.$getterStub=true
if(c4){init.globalFunctions[c3]=e
c5.push(a1)}c1[a1]=e
d.push(e)
e.$stubName=a1
e.$callName=null}var b7=c2.length>b6
if(b7){d[0].$reflectable=1
d[0].$reflectionInfo=c2
for(var a0=1;a0<d.length;a0++){d[a0].$reflectable=2
d[a0].$reflectionInfo=c2}var b8=c4?init.mangledGlobalNames:init.mangledNames
var b9=c2[b6]
var c0=b9
if(a1)b8[a1]=c0
if(a5)c0+="="
else if(!a6)c0+=":"+(a3+a8)
b8[c3]=c0
d[0].$reflectionName=c0
for(var a0=b6+1;a0<c2.length;a0++)c2[a0]=c2[a0]+b
d[0].$metadataIndex=b6+1
if(a8)c1[b9+"*"]=d[0]}}Function.prototype.$1=function(d){return this(d)}
Function.prototype.$2=function(d,e){return this(d,e)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(d,e,f){return this(d,e,f)}
Function.prototype.$6=function(d,e,f,g,a0,a1){return this(d,e,f,g,a0,a1)}
Function.prototype.$4=function(d,e,f,g){return this(d,e,f,g)}
function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cX(this,d,e,true,[],a0).prototype
return g}:tearOffGetter(d,e,a0,a1)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.am=function(){}
var dart=[["","",,H,{"^":"",mB:{"^":"b;a"}}],["","",,J,{"^":"",
r:function(a){return void 0},
cb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bv:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cZ==null){H.li()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(new P.cO("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cu()]
if(v!=null)return v
v=H.lq(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cu(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
f:{"^":"b;",
D:function(a,b){return a===b},
gF:function(a){return H.ak(a)},
j:["dA",function(a){return H.bR(a)}],
bB:["dz",function(a,b){throw H.a(P.dU(a,b.gd_(),b.gd3(),b.gd0(),null))},null,"gd1",2,0,null,3],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationTimeline|AppBannerPromptResult|AudioListener|AudioTrack|BarProp|Blob|Bluetooth|BluetoothAdvertisingData|BluetoothCharacteristicProperties|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|CHROMIUMSubscribeUniform|CHROMIUMValuebuffer|CSS|CSSCharsetRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|CircularGeofencingRegion|Client|Clients|CompositorProxy|ConsoleBase|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|EXTBlendMinMax|EXTColorBufferFloat|EXTDisjointTimerQuery|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|EffectModel|Entry|EntrySync|FederatedCredential|File|FileEntry|FileEntrySync|FileError|FileReaderSync|FileWriterSync|FontFace|FormData|Gamepad|Geofencing|GeofencingRegion|Geolocation|Geoposition|HMDVRDevice|HTMLAllCollection|Headers|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IdleDeadline|ImageBitmapRenderingContext|InjectedScriptHost|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|Iterator|KeyframeEffect|MIDIInputMap|MIDIOutputMap|MediaDeviceInfo|MediaDevices|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaMetadata|MediaSession|MemoryInfo|MessageChannel|Metadata|MimeType|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|Navigator|NavigatorStorageUtils|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|PagePopupController|PasswordCredential|Path2D|PerformanceCompositeTiming|PerformanceEntry|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceObserver|PerformanceObserverEntryList|PerformanceRenderTiming|PerformanceResourceTiming|PerformanceTiming|PeriodicWave|Permissions|PositionError|PositionSensorVRDevice|Presentation|PushManager|PushMessageData|PushSubscription|RTCCertificate|RTCIceCandidate|RTCSessionDescription|Range|ReadableByteStream|ReadableByteStreamReader|ReadableStreamReader|Request|Response|SQLError|SQLResultSet|SQLTransaction|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|SVGViewSpec|ScrollState|Selection|ServicePort|SharedArrayBuffer|SourceInfo|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StorageInfo|StorageManager|StorageQuota|Stream|StyleMedia|StylePropertyMap|StyleSheet|SubtleCrypto|SyncManager|Touch|TrackDefault|TreeWalker|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRDevice|VREyeParameters|VRFieldOfView|VRPositionState|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitCSSMatrix|WebKitMutationObserver|WindowClient|WorkerConsole|WorkerLocation|WorkerNavigator|Worklet|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i8:{"^":"f;",
j:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$isl1:1},
dJ:{"^":"f;",
D:function(a,b){return null==b},
j:function(a){return"null"},
gF:function(a){return 0},
bB:[function(a,b){return this.dz(a,b)},null,"gd1",2,0,null,3],
$isV:1},
H:{"^":"f;",
gF:function(a){return 0},
j:["dB",function(a){return String(a)}],
bJ:function(a,b){return a.then(b)},
U:function(a){return a.setIdentity()},
b5:function(a){return a.getOrigin()},
b9:function(a,b){return a.setOrigin(b)},
b6:function(a){return a.getRotation()},
gm:function(a){return a.x},
n:function(a){return a.x()},
gp:function(a){return a.y},
q:function(a){return a.y()},
K:function(a){return a.z()},
ay:function(a){return a.w()},
ds:function(a,b){return a.setGravity(b)},
el:function(a,b){return a.addRigidBody(b)},
dw:function(a,b,c){return a.stepSimulation(b,c)},
dh:function(a,b){return a.getWorldTransform(b)},
df:function(a){return a.getMotionState()},
de:function(a){return a.getLinearVelocity()},
bV:function(a,b,c){return a.setSleepingThresholds(b,c)},
bU:function(a,b){return a.setLinearVelocity(b)},
eo:function(a,b,c){return a.calculateLocalInertia(b,c)},
$isia:1,
$isbC:1},
iE:{"^":"H;"},
b_:{"^":"H;"},
aR:{"^":"H;",
j:function(a){var z=a[$.$get$co()]
return z==null?this.dB(a):J.a3(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aP:{"^":"f;$ti",
cN:function(a,b){if(!!a.immutable$list)throw H.a(new P.h(b))},
bu:function(a,b){if(!!a.fixed$length)throw H.a(new P.h(b))},
a0:function(a,b){this.bu(a,"add")
a.push(b)},
H:function(a,b){var z
this.bu(a,"addAll")
for(z=J.ap(b);z.u();)a.push(z.gw())},
S:function(a,b){return new H.aU(a,b,[H.T(a,0),null])},
W:function(a,b){return H.bW(a,b,null,H.T(a,0))},
al:function(a,b){var z,y,x
z=a.length
if(z===0)throw H.a(H.a6())
if(0>=z)return H.c(a,0)
y=a[0]
for(x=1;x<z;++x){y=b.$2(y,a[x])
if(z!==a.length)throw H.a(new P.Z(a))}return y},
bv:function(a,b,c){var z,y,x
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(new P.Z(a))}return y},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ga7:function(a){if(a.length>0)return a[0]
throw H.a(H.a6())},
V:function(a,b,c,d,e){var z,y,x,w,v
this.cN(a,"setRange")
P.e1(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.v(P.W(e,0,null,"skipCount",null))
y=J.r(d)
if(!!y.$isj){x=e
w=d}else{w=y.W(d,e).M(0,!1)
x=0}y=J.R(w)
if(x+z>y.gh(w))throw H.a(H.i7())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.i(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.i(w,x+v)},
aN:function(a,b,c,d){return this.V(a,b,c,d,0)},
j:function(a){return P.bJ(a,"[","]")},
M:function(a,b){var z=H.l(a.slice(0),[H.T(a,0)])
return z},
a2:function(a){return this.M(a,!0)},
gI:function(a){return new J.ft(a,a.length,0,null)},
gF:function(a){return H.ak(a)},
gh:function(a){return a.length},
sh:function(a,b){this.bu(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cl(b,"newLength",null))
if(b<0)throw H.a(P.W(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.E(a,b))
if(b>=a.length||b<0)throw H.a(H.E(a,b))
return a[b]},
k:function(a,b,c){this.cN(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.E(a,b))
if(b>=a.length||b<0)throw H.a(H.E(a,b))
a[b]=c},
v:function(a,b){var z,y,x
z=a.length
y=J.K(b)
if(typeof y!=="number")return H.t(y)
x=z+y
y=H.l([],[H.T(a,0)])
this.sh(y,x)
this.aN(y,0,a.length,a)
this.aN(y,a.length,x,b)
return y},
$isp:1,
$asp:I.am,
$isi:1,
$isj:1},
mA:{"^":"aP;$ti"},
ft:{"^":"b;a,b,c,d",
gw:function(){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.cd(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
at:{"^":"f;",
gbw:function(a){return a===0?1/a<0:a<0},
aw:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(new P.h(""+a+".toInt()"))},
aG:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(new P.h(""+a+".floor()"))},
f6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(new P.h(""+a+".round()"))},
fb:function(a){return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){return a&0x1FFFFFFF},
a5:function(a){return-a},
v:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a+b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a-b},
az:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a/b},
C:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a*b},
aM:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ad:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cE(a,b)},
N:function(a,b){return(a|0)===a?a/b|0:this.cE(a,b)},
cE:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(new P.h("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+H.d(b)))},
bY:function(a,b){if(b<0)throw H.a(H.M(b))
return b>31?0:a<<b>>>0},
bZ:function(a,b){var z
if(b<0)throw H.a(H.M(b))
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
bq:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
bP:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return(a&b)>>>0},
dE:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return(a^b)>>>0},
aa:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a<b},
an:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a>b},
$isa2:1,
$isbw:1},
ct:{"^":"at;",
a5:function(a){return-a},
$isx:1},
dI:{"^":"at;"},
aQ:{"^":"f;",
cO:function(a,b){if(b<0)throw H.a(H.E(a,b))
if(b>=a.length)H.v(H.E(a,b))
return a.charCodeAt(b)},
aC:function(a,b){if(b>=a.length)throw H.a(H.E(a,b))
return a.charCodeAt(b)},
eV:function(a,b,c){var z,y
if(c>b.length)throw H.a(P.W(c,0,b.length,null,null))
z=a.length
if(c+z>b.length)return
for(y=0;y<z;++y)if(this.aC(b,c+y)!==this.aC(a,y))return
return new H.ji(c,b,a)},
v:function(a,b){if(typeof b!=="string")throw H.a(P.cl(b,null,null))
return a+b},
dt:function(a,b){var z=H.l(a.split(b),[P.y])
return z},
dv:function(a,b,c){var z
if(c>a.length)throw H.a(P.W(c,0,a.length,null,null))
if(typeof b==="string"){z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)}return J.fg(b,a,c)!=null},
du:function(a,b){return this.dv(a,b,0)},
ba:function(a,b,c){var z
if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.M(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.v(H.M(c))
z=J.z(b)
if(z.aa(b,0))throw H.a(P.bk(b,null,null))
if(z.an(b,c))throw H.a(P.bk(b,null,null))
if(J.bx(c,a.length))throw H.a(P.bk(c,null,null))
return a.substring(b,c)},
c_:function(a,b){return this.ba(a,b,null)},
ax:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aC(z,0)===133){x=J.ib(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.cO(z,w)===133?J.ic(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
C:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
er:function(a,b,c){if(c>a.length)throw H.a(P.W(c,0,a.length,null,null))
return H.ly(a,b,c)},
j:function(a){return a},
gF:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gh:function(a){return a.length},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.E(a,b))
if(b>=a.length||b<0)throw H.a(H.E(a,b))
return a[b]},
$isp:1,
$asp:I.am,
$isy:1,
B:{
dK:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ib:function(a,b){var z,y
for(z=a.length;b<z;){y=C.e.aC(a,b)
if(y!==32&&y!==13&&!J.dK(y))break;++b}return b},
ic:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.e.cO(a,z)
if(y!==32&&y!==13&&!J.dK(y))break}return b}}}}],["","",,H,{"^":"",
c2:function(a){if(a<0)H.v(P.W(a,0,null,"count",null))
return a},
a6:function(){return new P.aY("No element")},
i7:function(){return new P.aY("Too few elements")},
i:{"^":"a_;"},
av:{"^":"i;$ti",
gI:function(a){return new H.dL(this,this.gh(this),0,null)},
S:function(a,b){return new H.aU(this,b,[H.B(this,"av",0),null])},
al:function(a,b){var z,y,x
z=this.gh(this)
if(z===0)throw H.a(H.a6())
y=this.A(0,0)
for(x=1;x<z;++x){y=b.$2(y,this.A(0,x))
if(z!==this.gh(this))throw H.a(new P.Z(this))}return y},
W:function(a,b){return H.bW(this,b,null,H.B(this,"av",0))},
M:function(a,b){var z,y,x
z=H.l([],[H.B(this,"av",0)])
C.a.sh(z,this.gh(this))
for(y=0;y<this.gh(this);++y){x=this.A(0,y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
a2:function(a){return this.M(a,!0)}},
e8:{"^":"av;a,b,c,$ti",
dL:function(a,b,c,d){var z,y
z=this.b
if(z<0)H.v(P.W(z,0,null,"start",null))
y=this.c
if(y!=null)if(z>y)throw H.a(P.W(z,0,y,"start",null))},
ge_:function(){var z,y
z=J.K(this.a)
y=this.c
if(y==null||y>z)return z
return y},
geh:function(){var z,y
z=J.K(this.a)
y=this.b
if(y>z)return z
return y},
gh:function(a){var z,y,x
z=J.K(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.L()
return x-y},
A:function(a,b){var z,y
z=this.geh()+b
if(b>=0){y=this.ge_()
if(typeof y!=="number")return H.t(y)
y=z>=y}else y=!0
if(y)throw H.a(P.w(b,this,"index",null,null))
return J.d6(this.a,z)},
W:function(a,b){var z,y
if(b<0)H.v(P.W(b,0,null,"count",null))
z=this.b+b
y=this.c
if(y!=null&&z>=y)return new H.du(this.$ti)
return H.bW(this.a,z,y,H.T(this,0))},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.R(y)
w=x.gh(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.L()
u=w-z
if(u<0)u=0
t=this.$ti
if(b){s=H.l([],t)
C.a.sh(s,u)}else s=H.l(new Array(u),t)
for(r=0;r<u;++r){t=x.A(y,z+r)
if(r>=s.length)return H.c(s,r)
s[r]=t
if(x.gh(y)<w)throw H.a(new P.Z(this))}return s},
a2:function(a){return this.M(a,!0)},
B:{
bW:function(a,b,c,d){var z=new H.e8(a,b,c,[d])
z.dL(a,b,c,d)
return z}}},
dL:{"^":"b;a,b,c,d",
gw:function(){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.R(z)
x=y.gh(z)
if(this.b!==x)throw H.a(new P.Z(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
dM:{"^":"a_;a,b,$ti",
gI:function(a){return new H.is(null,J.ap(this.a),this.b)},
gh:function(a){return J.K(this.a)},
$asa_:function(a,b){return[b]},
B:{
bN:function(a,b,c,d){if(!!J.r(a).$isi)return new H.dr(a,b,[c,d])
return new H.dM(a,b,[c,d])}}},
dr:{"^":"dM;a,b,$ti",$isi:1,
$asi:function(a,b){return[b]}},
is:{"^":"cs;a,b,c",
u:function(){var z=this.b
if(z.u()){this.a=this.c.$1(z.gw())
return!0}this.a=null
return!1},
gw:function(){return this.a}},
aU:{"^":"av;a,b,$ti",
gh:function(a){return J.K(this.a)},
A:function(a,b){return this.b.$1(J.d6(this.a,b))},
$asi:function(a,b){return[b]},
$asav:function(a,b){return[b]},
$asa_:function(a,b){return[b]}},
jt:{"^":"cs;a,b",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gw())===!0)return!0
return!1},
gw:function(){return this.a.gw()}},
cI:{"^":"a_;a,b,$ti",
W:function(a,b){return new H.cI(this.a,this.b+H.c2(b),this.$ti)},
gI:function(a){return new H.j1(J.ap(this.a),this.b)},
B:{
e5:function(a,b,c){if(!!J.r(a).$isi)return new H.ds(a,H.c2(b),[c])
return new H.cI(a,H.c2(b),[c])}}},
ds:{"^":"cI;a,b,$ti",
gh:function(a){var z,y
z=J.K(this.a)
if(typeof z!=="number")return z.L()
y=z-this.b
if(y>=0)return y
return 0},
W:function(a,b){return new H.ds(this.a,this.b+H.c2(b),this.$ti)},
$isi:1},
j1:{"^":"cs;a,b",
u:function(){var z,y
for(z=this.a,y=0;y<this.b;++y)z.u()
this.b=0
return z.u()},
gw:function(){return this.a.gw()}},
du:{"^":"i;$ti",
gI:function(a){return C.t},
gh:function(a){return 0},
S:function(a,b){return new H.du([null])},
al:function(a,b){throw H.a(H.a6())},
W:function(a,b){if(b<0)H.v(P.W(b,0,null,"count",null))
return this},
M:function(a,b){var z=this.$ti
return b?H.l([],z):H.l(new Array(0),z)},
a2:function(a){return this.M(a,!0)}},
h7:{"^":"b;",
u:function(){return!1},
gw:function(){return}},
bH:{"^":"b;$ti",
sh:function(a,b){throw H.a(new P.h("Cannot change the length of a fixed-length list"))},
H:function(a,b){throw H.a(new P.h("Cannot add to a fixed-length list"))}},
cK:{"^":"b;e7:a<",
D:function(a,b){if(b==null)return!1
return b instanceof H.cK&&J.S(this.a,b.a)},
gF:function(a){var z,y
z=this._hashCode
if(z!=null)return z
y=J.Y(this.a)
if(typeof y!=="number")return H.t(y)
z=536870911&664597*y
this._hashCode=z
return z},
j:function(a){return'Symbol("'+H.d(this.a)+'")'},
$isaZ:1}}],["","",,H,{"^":"",
bs:function(a,b){var z=a.aF(b)
if(!init.globalState.d.cy)init.globalState.f.aK()
return z},
eZ:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.r(y).$isj)throw H.a(P.ba("Arguments to main must be a List: "+H.d(y)))
init.globalState=new H.kd(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$dG()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.jL(P.cw(null,H.br),0)
x=P.x
y.z=new H.ad(0,null,null,null,null,null,0,[x,H.cR])
y.ch=new H.ad(0,null,null,null,null,null,0,[x,null])
if(y.x===!0){w=new H.kc()
y.Q=w
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.i0,w)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ke)}if(init.globalState.x===!0)return
y=init.globalState.a++
w=P.aT(null,null,null,x)
v=new H.bT(0,null,!1)
u=new H.cR(y,new H.ad(0,null,null,null,null,null,0,[x,H.bT]),w,init.createNewIsolate(),v,new H.ar(H.cc()),new H.ar(H.cc()),!1,!1,[],P.aT(null,null,null,null),null,null,!1,!0,P.aT(null,null,null,null))
w.a0(0,0)
u.c3(0,v)
init.globalState.e=u
init.globalState.z.k(0,y,u)
init.globalState.d=u
if(H.an(a,{func:1,args:[P.V]}))u.aF(new H.lw(z,a))
else if(H.an(a,{func:1,args:[P.V,P.V]}))u.aF(new H.lx(z,a))
else u.aF(a)
init.globalState.f.aK()},
i4:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.i5()
return},
i5:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.a(new P.h("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.a(new P.h('Cannot extract URI from "'+z+'"'))},
i0:[function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.bY(!0,[]).ah(b.data)
y=J.R(z)
switch(y.i(z,"command")){case"start":init.globalState.b=y.i(z,"id")
x=y.i(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.i(z,"args")
u=new H.bY(!0,[]).ah(y.i(z,"msg"))
t=y.i(z,"isSpawnUri")
s=y.i(z,"startPaused")
r=new H.bY(!0,[]).ah(y.i(z,"replyTo"))
y=init.globalState.a++
q=P.x
p=P.aT(null,null,null,q)
o=new H.bT(0,null,!1)
n=new H.cR(y,new H.ad(0,null,null,null,null,null,0,[q,H.bT]),p,init.createNewIsolate(),o,new H.ar(H.cc()),new H.ar(H.cc()),!1,!1,[],P.aT(null,null,null,null),null,null,!1,!0,P.aT(null,null,null,null))
p.a0(0,0)
n.c3(0,o)
init.globalState.f.a.a_(0,new H.br(n,new H.i1(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.aK()
break
case"spawn-worker":break
case"message":if(y.i(z,"port")!=null)J.aJ(y.i(z,"port"),y.i(z,"msg"))
init.globalState.f.aK()
break
case"close":init.globalState.ch.aJ(0,$.$get$dH().i(0,a))
a.terminate()
init.globalState.f.aK()
break
case"log":H.i_(y.i(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.aS(["command","print","msg",z])
q=new H.aB(!0,P.b0(null,P.x)).T(q)
y.toString
self.postMessage(q)}else P.d1(y.i(z,"msg"))
break
case"error":throw H.a(y.i(z,"msg"))}},null,null,4,0,null,12,7],
i_:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.aS(["command","log","msg",a])
x=new H.aB(!0,P.b0(null,P.x)).T(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.J(w)
z=H.O(w)
y=P.as(z)
throw H.a(y)}},
i2:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.dZ=$.dZ+("_"+y)
$.e_=$.e_+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.aJ(f,["spawned",new H.c1(y,x),w,z.r])
x=new H.i3(a,b,c,d,z)
if(e===!0){z.cL(w,w)
init.globalState.f.a.a_(0,new H.br(z,x,"start isolate"))}else x.$0()},
kH:function(a){return new H.bY(!0,[]).ah(new H.aB(!1,P.b0(null,P.x)).T(a))},
lw:{"^":"e:0;a,b",
$0:function(){this.b.$1(this.a.a)}},
lx:{"^":"e:0;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
kd:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",B:{
ke:[function(a){var z=P.aS(["command","print","msg",a])
return new H.aB(!0,P.b0(null,P.x)).T(z)},null,null,2,0,null,11]}},
cR:{"^":"b;a,b,c,eT:d<,es:e<,f,r,eP:x?,bx:y<,ew:z<,Q,ch,cx,cy,db,dx",
cL:function(a,b){if(!this.f.D(0,a))return
if(this.Q.a0(0,b)&&!this.y)this.y=!0
this.bs()},
f3:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.aJ(0,a)
if(z.a===0){for(z=this.z;y=z.length,y!==0;){if(0>=y)return H.c(z,-1)
x=z.pop()
y=init.globalState.f.a
w=y.b
v=y.a
u=v.length
w=(w-1&u-1)>>>0
y.b=w
if(w<0||w>=u)return H.c(v,w)
v[w]=x
if(w===y.c)y.ci();++y.d}this.y=!1}this.bs()},
ek:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.D(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.c(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
f2:function(a){var z,y,x
if(this.ch==null)return
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.D(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.v(new P.h("removeRange"))
P.e1(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
dr:function(a,b){if(!this.r.D(0,a))return
this.db=b},
eH:function(a,b,c){var z=J.r(b)
if(!z.D(b,0))z=z.D(b,1)&&!this.cy
else z=!0
if(z){J.aJ(a,c)
return}z=this.cx
if(z==null){z=P.cw(null,null)
this.cx=z}z.a_(0,new H.k6(a,c))},
eG:function(a,b){var z
if(!this.r.D(0,a))return
z=J.r(b)
if(!z.D(b,0))z=z.D(b,1)&&!this.cy
else z=!0
if(z){this.by()
return}z=this.cx
if(z==null){z=P.cw(null,null)
this.cx=z}z.a_(0,this.geU())},
eI:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.d1(a)
if(b!=null)P.d1(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.a3(a)
y[1]=b==null?null:J.a3(b)
for(x=new P.c0(z,z.r,null,null),x.c=z.e;x.u();)J.aJ(x.d,y)},
aF:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){w=H.J(u)
v=H.O(u)
this.eI(w,v)
if(this.db===!0){this.by()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.geT()
if(this.cx!=null)for(;t=this.cx,!t.ga1(t);)this.cx.d4().$0()}return y},
eE:function(a){var z=J.R(a)
switch(z.i(a,0)){case"pause":this.cL(z.i(a,1),z.i(a,2))
break
case"resume":this.f3(z.i(a,1))
break
case"add-ondone":this.ek(z.i(a,1),z.i(a,2))
break
case"remove-ondone":this.f2(z.i(a,1))
break
case"set-errors-fatal":this.dr(z.i(a,1),z.i(a,2))
break
case"ping":this.eH(z.i(a,1),z.i(a,2),z.i(a,3))
break
case"kill":this.eG(z.i(a,1),z.i(a,2))
break
case"getErrors":this.dx.a0(0,z.i(a,1))
break
case"stopErrors":this.dx.aJ(0,z.i(a,1))
break}},
cZ:function(a){return this.b.i(0,a)},
c3:function(a,b){var z=this.b
if(z.aD(0,a))throw H.a(P.as("Registry: ports must be registered only once."))
z.k(0,a,b)},
bs:function(){var z=this.b
if(z.gh(z)-this.c.a>0||this.y||!this.x)init.globalState.z.k(0,this.a,this)
else this.by()},
by:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.au(0)
for(z=this.b,y=z.gbO(z),y=y.gI(y);y.u();)y.gw().dY()
z.au(0)
this.c.au(0)
init.globalState.z.aJ(0,this.a)
this.dx.au(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.c(z,v)
J.aJ(w,z[v])}this.ch=null}},"$0","geU",0,0,2]},
k6:{"^":"e:2;a,b",
$0:[function(){J.aJ(this.a,this.b)},null,null,0,0,null,"call"]},
jL:{"^":"b;a,b",
ex:function(){var z=this.a
if(z.b===z.c)return
return z.d4()},
d8:function(){var z,y,x
z=this.ex()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.aD(0,init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.ga1(y)}else y=!1
else y=!1
else y=!1
if(y)H.v(P.as("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.ga1(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.aS(["command","close"])
x=new H.aB(!0,new P.ex(0,null,null,null,null,null,0,[null,P.x])).T(x)
y.toString
self.postMessage(x)}return!1}z.f1()
return!0},
cA:function(){if(self.window!=null)new H.jM(this).$0()
else for(;this.d8(););},
aK:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.cA()
else try{this.cA()}catch(x){z=H.J(x)
y=H.O(x)
w=init.globalState.Q
v=P.aS(["command","error","msg",H.d(z)+"\n"+H.d(y)])
v=new H.aB(!0,P.b0(null,P.x)).T(v)
w.toString
self.postMessage(v)}}},
jM:{"^":"e:2;a",
$0:function(){if(!this.a.d8())return
P.jp(C.j,this)}},
br:{"^":"b;a,b,c",
f1:function(){var z=this.a
if(z.gbx()){z.gew().push(this)
return}z.aF(this.b)}},
kc:{"^":"b;"},
i1:{"^":"e:0;a,b,c,d,e,f",
$0:function(){H.i2(this.a,this.b,this.c,this.d,this.e,this.f)}},
i3:{"^":"e:2;a,b,c,d,e",
$0:function(){var z,y
z=this.e
z.seP(!0)
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
if(H.an(y,{func:1,args:[P.V,P.V]}))y.$2(this.b,this.c)
else if(H.an(y,{func:1,args:[P.V]}))y.$1(this.b)
else y.$0()}z.bs()}},
ep:{"^":"b;"},
c1:{"^":"ep;b,a",
ac:function(a,b){var z,y,x
z=init.globalState.z.i(0,this.a)
if(z==null)return
y=this.b
if(y.gcl())return
x=H.kH(b)
if(z.ges()===y){z.eE(x)
return}init.globalState.f.a.a_(0,new H.br(z,new H.kh(this,x),"receive"))},
D:function(a,b){if(b==null)return!1
return b instanceof H.c1&&J.S(this.b,b.b)},
gF:function(a){return this.b.gbl()}},
kh:{"^":"e:0;a,b",
$0:function(){var z=this.a.b
if(!z.gcl())J.f4(z,this.b)}},
cS:{"^":"ep;b,c,a",
ac:function(a,b){var z,y,x
z=P.aS(["command","message","port",this,"msg",b])
y=new H.aB(!0,P.b0(null,P.x)).T(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.i(0,this.b)
if(x!=null)x.postMessage(y)}},
D:function(a,b){if(b==null)return!1
return b instanceof H.cS&&J.S(this.b,b.b)&&J.S(this.a,b.a)&&J.S(this.c,b.c)},
gF:function(a){var z,y,x
z=J.d3(this.b,16)
y=J.d3(this.a,8)
x=this.c
if(typeof x!=="number")return H.t(x)
return(z^y^x)>>>0}},
bT:{"^":"b;bl:a<,b,cl:c<",
dY:function(){this.c=!0
this.b=null},
dP:function(a,b){if(this.c)return
this.b.$1(b)},
$isiS:1},
jl:{"^":"b;a,b,c,d",
dM:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.a_(0,new H.br(y,new H.jn(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.ag(new H.jo(this,b),0),a)}else throw H.a(new P.h("Timer greater than 0."))},
B:{
jm:function(a,b){var z=new H.jl(!0,!1,null,0)
z.dM(a,b)
return z}}},
jn:{"^":"e:2;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
jo:{"^":"e:2;a,b",
$0:[function(){var z=this.a
z.c=null;--init.globalState.f.b
z.d=1
this.b.$0()},null,null,0,0,null,"call"]},
ar:{"^":"b;bl:a<",
gF:function(a){var z,y,x
z=this.a
y=J.z(z)
x=y.bZ(z,0)
y=y.ad(z,4294967296)
if(typeof y!=="number")return H.t(y)
z=x^y
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
D:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
aB:{"^":"b;a,b",
T:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.i(0,a)
if(y!=null)return["ref",y]
z.k(0,a,z.gh(z))
z=J.r(a)
if(!!z.$isdO)return["buffer",a]
if(!!z.$iscB)return["typed",a]
if(!!z.$isp)return this.dl(a)
if(!!z.$ishZ){x=this.gdi()
w=z.gaj(a)
w=H.bN(w,x,H.B(w,"a_",0),null)
w=P.bh(w,!0,H.B(w,"a_",0))
z=z.gbO(a)
z=H.bN(z,x,H.B(z,"a_",0),null)
return["map",w,P.bh(z,!0,H.B(z,"a_",0))]}if(!!z.$isia)return this.dm(a)
if(!!z.$isf)this.d9(a)
if(!!z.$isiS)this.aL(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isc1)return this.dn(a)
if(!!z.$iscS)return this.dq(a)
if(!!z.$ise){v=a.$static_name
if(v==null)this.aL(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isar)return["capability",a.a]
if(!(a instanceof P.b))this.d9(a)
return["dart",init.classIdExtractor(a),this.dk(init.classFieldsExtractor(a))]},"$1","gdi",2,0,1,8],
aL:function(a,b){throw H.a(new P.h((b==null?"Can't transmit:":b)+" "+H.d(a)))},
d9:function(a){return this.aL(a,null)},
dl:function(a){var z=this.dj(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.aL(a,"Can't serialize indexable: ")},
dj:function(a){var z,y,x
z=[]
C.a.sh(z,a.length)
for(y=0;y<a.length;++y){x=this.T(a[y])
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
dk:function(a){var z
for(z=0;z<a.length;++z)C.a.k(a,z,this.T(a[z]))
return a},
dm:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.aL(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.a.sh(y,z.length)
for(x=0;x<z.length;++x){w=this.T(a[z[x]])
if(x>=y.length)return H.c(y,x)
y[x]=w}return["js-object",z,y]},
dq:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dn:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gbl()]
return["raw sendport",a]}},
bY:{"^":"b;a,b",
ah:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.a(P.ba("Bad serialized message: "+H.d(a)))
switch(C.a.ga7(a)){case"ref":if(1>=a.length)return H.c(a,1)
z=a[1]
y=this.b
if(z>>>0!==z||z>=y.length)return H.c(y,z)
return y[z]
case"buffer":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return x
case"typed":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return x
case"fixed":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
y=H.l(this.aE(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return H.l(this.aE(x),[null])
case"mutable":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return this.aE(x)
case"const":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
y=H.l(this.aE(x),[null])
y.fixed$length=Array
return y
case"map":return this.eA(a)
case"sendport":return this.eB(a)
case"raw sendport":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.ez(a)
case"function":if(1>=a.length)return H.c(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.c(a,1)
return new H.ar(a[1])
case"dart":y=a.length
if(1>=y)return H.c(a,1)
w=a[1]
if(2>=y)return H.c(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.aE(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.a("couldn't deserialize: "+H.d(a))}},"$1","gey",2,0,1,8],
aE:function(a){var z,y,x
z=J.R(a)
y=0
while(!0){x=z.gh(a)
if(typeof x!=="number")return H.t(x)
if(!(y<x))break
z.k(a,y,this.ah(z.i(a,y)));++y}return a},
eA:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
w=P.au()
this.b.push(w)
y=J.fo(J.ff(y,this.gey()))
for(z=J.R(y),v=J.R(x),u=0;u<z.gh(y);++u)w.k(0,z.i(y,u),this.ah(v.i(x,u)))
return w},
eB:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
if(3>=z)return H.c(a,3)
w=a[3]
if(J.S(y,init.globalState.b)){v=init.globalState.z.i(0,x)
if(v==null)return
u=v.cZ(w)
if(u==null)return
t=new H.c1(u,x)}else t=new H.cS(y,w,x)
this.b.push(t)
return t},
ez:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.R(y)
v=J.R(x)
u=0
while(!0){t=z.gh(y)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
w[z.i(y,u)]=this.ah(v.i(x,u));++u}return w}}}],["","",,H,{"^":"",
dg:function(){throw H.a(new P.h("Cannot modify unmodifiable Map"))},
lc:function(a){return init.types[a]},
eR:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.r(a).$isq},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a3(a)
if(typeof z!=="string")throw H.a(H.M(a))
return z},
ak:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
dX:function(a,b){throw H.a(new P.dC(a,null,null))},
bS:function(a,b,c){var z,y
H.l2(a)
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return H.dX(a,c)
if(3>=z.length)return H.c(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return H.dX(a,c)},
dW:function(a,b){throw H.a(new P.dC("Invalid double",a,null))},
cE:function(a,b){var z,y
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.dW(a,b)
z=parseFloat(a)
if(isNaN(z)){y=C.e.ax(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return H.dW(a,b)}return z},
cD:function(a){var z,y,x,w,v,u,t,s,r
z=J.r(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.r(a).$isb_){v=C.m(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.e.aC(w,0)===36)w=C.e.c_(w,1)
r=H.eS(H.c6(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
bR:function(a){return"Instance of '"+H.cD(a)+"'"},
aw:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iP:function(a){var z=H.aw(a).getUTCFullYear()+0
return z},
iN:function(a){var z=H.aw(a).getUTCMonth()+1
return z},
iJ:function(a){var z=H.aw(a).getUTCDate()+0
return z},
iK:function(a){var z=H.aw(a).getUTCHours()+0
return z},
iM:function(a){var z=H.aw(a).getUTCMinutes()+0
return z},
iO:function(a){var z=H.aw(a).getUTCSeconds()+0
return z},
iL:function(a){var z=H.aw(a).getUTCMilliseconds()+0
return z},
cC:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.a(H.M(a))
return a[b]},
e0:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.a(H.M(a))
a[b]=c},
dY:function(a,b,c){var z,y,x,w
z={}
z.a=0
y=[]
x=[]
if(b!=null){w=J.K(b)
if(typeof w!=="number")return H.t(w)
z.a=0+w
C.a.H(y,b)}z.b=""
if(c!=null&&!c.ga1(c))c.O(0,new H.iI(z,y,x))
return J.fh(a,new H.i9(C.J,""+"$"+H.d(z.a)+z.b,0,null,y,x,null))},
iH:function(a,b){var z,y
if(b!=null)z=b instanceof Array?b:P.bh(b,!0,null)
else z=[]
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.iG(a,z)},
iG:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.r(a)["call*"]
if(y==null)return H.dY(a,b,null)
x=H.e2(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.dY(a,b,null)
b=P.bh(b,!0,null)
for(u=z;u<v;++u)C.a.a0(b,init.metadata[x.ev(0,u)])}return y.apply(a,b)},
t:function(a){throw H.a(H.M(a))},
c:function(a,b){if(a==null)J.K(a)
throw H.a(H.E(a,b))},
E:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
z=J.K(a)
if(!(b<0)){if(typeof z!=="number")return H.t(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bk(b,"index",null)},
M:function(a){return new P.aq(!0,a,null,null)},
eM:function(a){if(typeof a!=="number")throw H.a(H.M(a))
return a},
l2:function(a){if(typeof a!=="string")throw H.a(H.M(a))
return a},
a:function(a){var z
if(a==null)a=new P.bP()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f_})
z.name=""}else z.toString=H.f_
return z},
f_:[function(){return J.a3(this.dartException)},null,null,0,0,null],
v:function(a){throw H.a(a)},
cd:function(a){throw H.a(new P.Z(a))},
J:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lA(a)
if(a==null)return
if(a instanceof H.cp)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bq(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cv(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.d(y)+" (Error "+w+")"
return z.$1(new H.dV(v,null))}}if(a instanceof TypeError){u=$.$get$ea()
t=$.$get$eb()
s=$.$get$ec()
r=$.$get$ed()
q=$.$get$eh()
p=$.$get$ei()
o=$.$get$ef()
$.$get$ee()
n=$.$get$ek()
m=$.$get$ej()
l=u.Y(y)
if(l!=null)return z.$1(H.cv(y,l))
else{l=t.Y(y)
if(l!=null){l.method="call"
return z.$1(H.cv(y,l))}else{l=s.Y(y)
if(l==null){l=r.Y(y)
if(l==null){l=q.Y(y)
if(l==null){l=p.Y(y)
if(l==null){l=o.Y(y)
if(l==null){l=r.Y(y)
if(l==null){l=n.Y(y)
if(l==null){l=m.Y(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.dV(y,l==null?null:l.method))}}return z.$1(new H.jr(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e6()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aq(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e6()
return a},
O:function(a){var z
if(a instanceof H.cp)return a.b
if(a==null)return new H.ey(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ey(a,null)},
lt:function(a){if(a==null||typeof a!='object')return J.Y(a)
else return H.ak(a)},
l9:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
lk:[function(a,b,c,d,e,f,g){switch(c){case 0:return H.bs(b,new H.ll(a))
case 1:return H.bs(b,new H.lm(a,d))
case 2:return H.bs(b,new H.ln(a,d,e))
case 3:return H.bs(b,new H.lo(a,d,e,f))
case 4:return H.bs(b,new H.lp(a,d,e,f,g))}throw H.a(P.as("Unsupported number of arguments for wrapped closure"))},null,null,14,0,null,13,14,15,16,17,18,19],
ag:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.lk)
a.$identity=z
return z},
fE:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.r(c).$isj){z.$reflectionInfo=c
x=H.e2(z).r}else x=c
w=d?Object.create(new H.j4().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a4
$.a4=J.F(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.dc(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lc,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.da:H.cn
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.dc(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fB:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dc:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fD(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fB(y,!w,z,b)
if(y===0){w=$.a4
$.a4=J.F(w,1)
u="self"+H.d(w)
w="return function(){var "+u+" = this."
v=$.aK
if(v==null){v=H.bE("self")
$.aK=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a4
$.a4=J.F(w,1)
t+=H.d(w)
w="return function("+t+"){return this."
v=$.aK
if(v==null){v=H.bE("self")
$.aK=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fC:function(a,b,c,d){var z,y
z=H.cn
y=H.da
switch(b?-1:a){case 0:throw H.a(new H.iU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fD:function(a,b){var z,y,x,w,v,u,t,s
z=H.fv()
y=$.d9
if(y==null){y=H.bE("receiver")
$.d9=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fC(w,!u,x,b)
if(w===1){y="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
u=$.a4
$.a4=J.F(u,1)
return new Function(y+H.d(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
u=$.a4
$.a4=J.F(u,1)
return new Function(y+H.d(u)+"}")()},
cX:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.r(c).$isj){c.fixed$length=Array
z=c}else z=c
return H.fE(a,b,z,!!d,e,f)},
cW:function(a){if(typeof a==="boolean"||a==null)return a
throw H.a(H.db(a,"bool"))},
lv:function(a,b){var z=J.R(b)
throw H.a(H.db(a,z.ba(b,3,z.gh(b))))},
c8:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else z=!0
if(z)return a
H.lv(a,b)},
eN:function(a){var z=J.r(a)
return"$S" in z?z.$S():null},
an:function(a,b){var z,y
if(a==null)return!1
z=H.eN(a)
if(z==null)y=!1
else y=H.eQ(z,b)
return y},
kS:function(a){var z
if(a instanceof H.e){z=H.eN(a)
if(z!=null)return H.eW(z,null)
return"Closure"}return H.cD(a)},
lz:function(a){throw H.a(new P.fO(a))},
cc:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
eO:function(a){return init.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
c6:function(a){if(a==null)return
return a.$ti},
eP:function(a,b){return H.d2(a["$as"+H.d(b)],H.c6(a))},
B:function(a,b,c){var z=H.eP(a,b)
return z==null?null:z[c]},
T:function(a,b){var z=H.c6(a)
return z==null?null:z[b]},
eW:function(a,b){var z=H.aG(a,b)
return z},
aG:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.eS(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aG(z,b)
return H.kK(a,b)}return"unknown-reified-type"},
kK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aG(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aG(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aG(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.l8(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aG(r[p],b)+(" "+H.d(p))}w+="}"}return"("+w+") => "+z},
eS:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bV("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aG(u,c)}return w?"":"<"+z.j(0)+">"},
d2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bt:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.c6(a)
y=J.r(a)
if(y[b]==null)return!1
return H.eK(H.d2(y[d],z),c)},
eK:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.X(a[y],b[y]))return!1
return!0},
aF:function(a,b,c){return a.apply(b,H.eP(b,c))},
X:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="V")return!0
if('func' in b)return H.eQ(a,b)
if('func' in a)return b.builtin$cls==="ms"||b.builtin$cls==="b"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.eW(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eK(H.d2(u,z),x)},
eJ:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.X(z,v)||H.X(v,z)))return!1}return!0},
kV:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.X(v,u)||H.X(u,v)))return!1}return!0},
eQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.X(z,y)||H.X(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eJ(x,w,!1))return!1
if(!H.eJ(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.X(o,n)||H.X(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.X(o,n)||H.X(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.X(o,n)||H.X(n,o)))return!1}}return H.kV(a.named,b.named)},
ob:function(a){var z=$.cY
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
o9:function(a){return H.ak(a)},
o8:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lq:function(a){var z,y,x,w,v,u
z=$.cY.$1(a)
y=$.c4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c9[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eI.$2(a,z)
if(z!=null){y=$.c4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c9[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d0(x)
$.c4[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c9[z]=x
return x}if(v==="-"){u=H.d0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eU(a,x)
if(v==="*")throw H.a(new P.cO(z))
if(init.leafTags[z]===true){u=H.d0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eU(a,x)},
eU:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cb(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d0:function(a){return J.cb(a,!1,null,!!a.$isq)},
lr:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.cb(z,!1,null,!!z.$isq)
else return J.cb(z,c,null,null)},
li:function(){if(!0===$.cZ)return
$.cZ=!0
H.lj()},
lj:function(){var z,y,x,w,v,u,t,s
$.c4=Object.create(null)
$.c9=Object.create(null)
H.le()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eV.$1(v)
if(u!=null){t=H.lr(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
le:function(){var z,y,x,w,v,u,t
z=C.z()
z=H.aE(C.A,H.aE(C.B,H.aE(C.l,H.aE(C.l,H.aE(C.D,H.aE(C.C,H.aE(C.E(C.m),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.cY=new H.lf(v)
$.eI=new H.lg(u)
$.eV=new H.lh(t)},
aE:function(a,b){return a(b)||b},
ly:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fH:{"^":"js;a,$ti"},
df:{"^":"b;$ti",
j:function(a){return P.bM(this)},
k:function(a,b,c){return H.dg()},
H:function(a,b){return H.dg()},
S:function(a,b){var z=P.au()
this.O(0,new H.fI(this,b,z))
return z}},
fI:{"^":"e;a,b,c",
$2:function(a,b){var z,y
z=this.b.$2(a,b)
y=J.m(z)
this.c.k(0,y.gai(z),y.gG(z))},
$S:function(){return H.aF(function(a,b){return{func:1,args:[a,b]}},this.a,"df")}},
fJ:{"^":"df;a,b,c,$ti",
gh:function(a){return this.a},
aD:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.aD(0,b))return
return this.cg(b)},
cg:function(a){return this.b[a]},
O:function(a,b){var z,y,x,w
z=this.c
for(y=z.length,x=0;x<y;++x){w=z[x]
b.$2(w,this.cg(w))}}},
i9:{"^":"b;a,b,c,d,e,f,r",
gd_:function(){var z=this.a
return z},
gd3:function(){var z,y,x,w
if(this.c===1)return C.n
z=this.e
y=z.length-this.f.length
if(y===0)return C.n
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
gd0:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.o
z=this.f
y=z.length
x=this.e
w=x.length-y
if(y===0)return C.o
v=P.aZ
u=new H.ad(0,null,null,null,null,null,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.c(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.c(x,r)
u.k(0,new H.cK(s),x[r])}return new H.fH(u,[v,null])}},
iT:{"^":"b;a,b,c,d,e,f,r,x",
ev:function(a,b){var z=this.d
if(typeof b!=="number")return b.aa()
if(b<z)return
return this.b[3+b-z]},
B:{
e2:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.iT(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
iI:{"^":"e:9;a,b,c",
$2:function(a,b){var z=this.a
z.b=z.b+"$"+H.d(a)
this.c.push(a)
this.b.push(b);++z.a}},
jq:{"^":"b;a,b,c,d,e,f",
Y:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
B:{
a7:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eg:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
dV:{"^":"L;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+H.d(z)+"' on null"}},
ig:{"^":"L;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
B:{
cv:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ig(a,y,z?null:b.receiver)}}},
jr:{"^":"L;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
cp:{"^":"b;a,Z:b<"},
lA:{"^":"e:1;a",
$1:function(a){if(!!J.r(a).$isL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ey:{"^":"b;a,b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isae:1},
ll:{"^":"e:0;a",
$0:function(){return this.a.$0()}},
lm:{"^":"e:0;a,b",
$0:function(){return this.a.$1(this.b)}},
ln:{"^":"e:0;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
lo:{"^":"e:0;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
lp:{"^":"e:0;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
e:{"^":"b;",
j:function(a){return"Closure '"+H.cD(this).trim()+"'"},
gda:function(){return this},
gda:function(){return this}},
e9:{"^":"e;"},
j4:{"^":"e9;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cm:{"^":"e9;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var z,y
z=this.c
if(z==null)y=H.ak(this.a)
else y=typeof z!=="object"?J.Y(z):H.ak(z)
return J.f3(y,H.ak(this.b))},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+H.bR(z)},
B:{
cn:function(a){return a.a},
da:function(a){return a.c},
fv:function(){var z=$.aK
if(z==null){z=H.bE("self")
$.aK=z}return z},
bE:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
fy:{"^":"L;a",
j:function(a){return this.a},
B:{
db:function(a,b){return new H.fy("CastError: "+H.d(P.aL(a))+": type '"+H.kS(a)+"' is not a subtype of type '"+b+"'")}}},
iU:{"^":"L;a",
j:function(a){return"RuntimeError: "+H.d(this.a)}},
ad:{"^":"io;a,b,c,d,e,f,r,$ti",
gh:function(a){return this.a},
ga1:function(a){return this.a===0},
gaj:function(a){return new H.ij(this,[H.T(this,0)])},
gbO:function(a){return H.bN(this.gaj(this),new H.ie(this),H.T(this,0),H.T(this,1))},
aD:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cc(y,b)}else return this.eQ(b)},
eQ:function(a){var z=this.d
if(z==null)return!1
return this.aI(this.aU(z,this.aH(a)),a)>=0},
H:function(a,b){b.O(0,new H.id(this))},
i:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ao(z,b)
return y==null?null:y.ga8()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.ao(x,b)
return y==null?null:y.ga8()}else return this.eR(b)},
eR:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aU(z,this.aH(a))
x=this.aI(y,a)
if(x<0)return
return y[x].ga8()},
k:function(a,b,c){var z,y,x,w,v,u,t
if(typeof b==="string"){z=this.b
if(z==null){z=this.bn()
this.b=z}y=this.ao(z,b)
if(y==null)this.aW(z,b,this.aV(b,c))
else y.sa8(c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){x=this.bn()
this.c=x}y=this.ao(x,b)
if(y==null)this.aW(x,b,this.aV(b,c))
else y.sa8(c)}else{w=this.d
if(w==null){w=this.bn()
this.d=w}v=this.aH(b)
u=this.aU(w,v)
if(u==null)this.aW(w,v,[this.aV(b,c)])
else{t=this.aI(u,b)
if(t>=0)u[t].sa8(c)
else u.push(this.aV(b,c))}}},
aJ:function(a,b){if(typeof b==="string")return this.cv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cv(this.c,b)
else return this.eS(b)},
eS:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.aU(z,this.aH(a))
x=this.aI(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.cG(w)
return w.ga8()},
au:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
O:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(new P.Z(this))
z=z.c}},
cv:function(a,b){var z
if(a==null)return
z=this.ao(a,b)
if(z==null)return
this.cG(z)
this.ce(a,b)
return z.ga8()},
aV:function(a,b){var z,y
z=new H.ii(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cG:function(a){var z,y
z=a.ge9()
y=a.ge8()
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
aH:function(a){return J.Y(a)&0x3ffffff},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].gcX(),b))return y
return-1},
j:function(a){return P.bM(this)},
ao:function(a,b){return a[b]},
aU:function(a,b){return a[b]},
aW:function(a,b,c){a[b]=c},
ce:function(a,b){delete a[b]},
cc:function(a,b){return this.ao(a,b)!=null},
bn:function(){var z=Object.create(null)
this.aW(z,"<non-identifier-key>",z)
this.ce(z,"<non-identifier-key>")
return z},
$ishZ:1},
ie:{"^":"e:1;a",
$1:[function(a){return this.a.i(0,a)},null,null,2,0,null,20,"call"]},
id:{"^":"e;a",
$2:function(a,b){this.a.k(0,a,b)},
$S:function(){return H.aF(function(a,b){return{func:1,args:[a,b]}},this.a,"ad")}},
ii:{"^":"b;cX:a<,a8:b@,e8:c<,e9:d<"},
ij:{"^":"i;a,$ti",
gh:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.ik(z,z.r,null,null)
y.c=z.e
return y}},
ik:{"^":"b;a,b,c,d",
gw:function(){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(new P.Z(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lf:{"^":"e:1;a",
$1:function(a){return this.a(a)}},
lg:{"^":"e:10;a",
$2:function(a,b){return this.a(a,b)}},
lh:{"^":"e:11;a",
$1:function(a){return this.a(a)}},
ji:{"^":"b;a,b,c",
i:function(a,b){if(b!==0)H.v(P.bk(b,null,null))
return this.c}}}],["","",,H,{"^":"",
l8:function(a){var z=H.l(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
lu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
u:function(a){return a},
c3:function(a){return a},
dO:{"^":"f;",$isdO:1,$isfx:1,"%":"ArrayBuffer"},
cB:{"^":"f;",$iscB:1,"%":"DataView;ArrayBufferView;cA|dR|dS|dP|dQ|dT|aj"},
cA:{"^":"cB;",
gh:function(a){return a.length},
$isp:1,
$asp:I.am,
$isq:1,
$asq:I.am},
dP:{"^":"dS;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
k:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
a[b]=c},
$isi:1,
$asi:function(){return[P.a2]},
$asbH:function(){return[P.a2]},
$ask:function(){return[P.a2]},
$isj:1,
$asj:function(){return[P.a2]},
"%":"Float64Array"},
aj:{"^":"dT;",
k:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
a[b]=c},
$isi:1,
$asi:function(){return[P.x]},
$asbH:function(){return[P.x]},
$ask:function(){return[P.x]},
$isj:1,
$asj:function(){return[P.x]}},
iA:{"^":"dP;","%":"Float32Array"},
mM:{"^":"aj;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
"%":"Int16Array"},
mN:{"^":"aj;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
"%":"Int32Array"},
mO:{"^":"aj;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
"%":"Int8Array"},
mP:{"^":"aj;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
"%":"Uint16Array"},
mQ:{"^":"aj;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
"%":"Uint32Array"},
mR:{"^":"aj;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mS:{"^":"aj;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.E(a,b))
return a[b]},
"%":";Uint8Array"},
dQ:{"^":"cA+k;"},
dR:{"^":"cA+k;"},
dS:{"^":"dR+bH;"},
dT:{"^":"dQ+bH;"}}],["","",,P,{"^":"",
jx:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kW()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ag(new P.jz(z),1)).observe(y,{childList:true})
return new P.jy(z,y,x)}else if(self.setImmediate!=null)return P.kX()
return P.kY()},
nU:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.ag(new P.jA(a),0))},"$1","kW",2,0,5],
nV:[function(a){++init.globalState.f.b
self.setImmediate(H.ag(new P.jB(a),0))},"$1","kX",2,0,5],
nW:[function(a){P.cL(C.j,a)},"$1","kY",2,0,5],
aa:function(a,b){P.eB(null,a)
return b.geD()},
a1:function(a,b){P.eB(a,b)},
a9:function(a,b){J.f8(b,a)},
a8:function(a,b){b.cQ(H.J(a),H.O(a))},
eB:function(a,b){var z,y,x,w
z=new P.ky(b)
y=new P.kz(b)
x=J.r(a)
if(!!x.$isN)a.br(z,y)
else if(!!x.$isP)x.bK(a,z,y)
else{w=new P.N(0,$.o,null,[null])
w.a=4
w.c=a
w.br(z,null)}},
ab:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
$.o.toString
return new P.kT(z)},
kL:function(a,b,c){if(H.an(a,{func:1,args:[P.V,P.V]}))return a.$2(b,c)
else return a.$1(b)},
eD:function(a,b){if(H.an(a,{func:1,args:[P.V,P.V]})){b.toString
return a}else{b.toString
return a}},
cq:function(a,b,c){var z
if(a==null)a=new P.bP()
z=$.o
if(z!==C.d)z.toString
z=new P.N(0,z,null,[c])
z.c5(a,b)
return z},
a5:function(a){return new P.kv(new P.N(0,$.o,null,[a]),[a])},
eC:function(a,b,c){$.o.toString
a.P(b,c)},
kN:function(){var z,y
for(;z=$.aC,z!=null;){$.b2=null
y=z.b
$.aC=y
if(y==null)$.b1=null
z.a.$0()}},
o7:[function(){$.cT=!0
try{P.kN()}finally{$.b2=null
$.cT=!1
if($.aC!=null)$.$get$cQ().$1(P.eL())}},"$0","eL",0,0,2],
eH:function(a){var z=new P.eo(a,null)
if($.aC==null){$.b1=z
$.aC=z
if(!$.cT)$.$get$cQ().$1(P.eL())}else{$.b1.b=z
$.b1=z}},
kR:function(a){var z,y,x
z=$.aC
if(z==null){P.eH(a)
$.b2=$.b1
return}y=new P.eo(a,null)
x=$.b2
if(x==null){y.b=z
$.b2=y
$.aC=y}else{y.b=x.b
x.b=y
$.b2=y
if(y.b==null)$.b1=y}},
eX:function(a){var z=$.o
if(C.d===z){P.aD(null,null,C.d,a)
return}z.toString
P.aD(null,null,z,z.bt(a))},
nw:function(a,b){return new P.ku(null,a,!1,[b])},
o5:[function(a){},"$1","kZ",2,0,23,4],
kO:[function(a,b){var z=$.o
z.toString
P.b3(null,null,z,a,b)},function(a){return P.kO(a,null)},"$2","$1","l0",2,2,4],
o6:[function(){},"$0","l_",0,0,2],
kQ:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.J(u)
y=H.O(u)
$.o.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aI(x)
w=t
v=x.gZ()
c.$2(w,v)}}},
kB:function(a,b,c,d){var z=a.aY(0)
if(!!J.r(z).$isP&&z!==$.$get$aN())z.b3(new P.kE(b,c,d))
else b.P(c,d)},
kC:function(a,b){return new P.kD(a,b)},
kF:function(a,b,c){var z=a.aY(0)
if(!!J.r(z).$isP&&z!==$.$get$aN())z.b3(new P.kG(b,c))
else b.ae(c)},
eA:function(a,b,c){$.o.toString
a.aB(b,c)},
jp:function(a,b){var z=$.o
if(z===C.d){z.toString
return P.cL(a,b)}return P.cL(a,z.bt(b))},
cL:function(a,b){var z=C.b.N(a.a,1000)
return H.jm(z<0?0:z,b)},
b3:function(a,b,c,d,e){var z={}
z.a=d
P.kR(new P.kP(z,e))},
eE:function(a,b,c,d){var z,y
y=$.o
if(y===c)return d.$0()
$.o=c
z=y
try{y=d.$0()
return y}finally{$.o=z}},
eG:function(a,b,c,d,e){var z,y
y=$.o
if(y===c)return d.$1(e)
$.o=c
z=y
try{y=d.$1(e)
return y}finally{$.o=z}},
eF:function(a,b,c,d,e,f){var z,y
y=$.o
if(y===c)return d.$2(e,f)
$.o=c
z=y
try{y=d.$2(e,f)
return y}finally{$.o=z}},
aD:function(a,b,c,d){var z=C.d!==c
if(z){if(z){c.toString
z=!1}else z=!0
d=!z?c.bt(d):c.em(d)}P.eH(d)},
jz:{"^":"e:1;a",
$1:[function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()},null,null,2,0,null,5,"call"]},
jy:{"^":"e:12;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jA:{"^":"e:0;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
jB:{"^":"e:0;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
ky:{"^":"e:1;a",
$1:[function(a){return this.a.$2(0,a)},null,null,2,0,null,0,"call"]},
kz:{"^":"e:6;a",
$2:[function(a,b){this.a.$2(1,new H.cp(a,b))},null,null,4,0,null,1,2,"call"]},
kT:{"^":"e:13;a",
$2:[function(a,b){this.a(a,b)},null,null,4,0,null,21,0,"call"]},
P:{"^":"b;$ti"},
lN:{"^":"b;$ti"},
eq:{"^":"b;eD:a<,$ti",
cQ:[function(a,b){if(a==null)a=new P.bP()
if(this.a.a!==0)throw H.a(new P.aY("Future already completed"))
$.o.toString
this.P(a,b)},function(a){return this.cQ(a,null)},"cP","$2","$1","gep",2,2,4]},
cP:{"^":"eq;a,$ti",
av:function(a,b){var z=this.a
if(z.a!==0)throw H.a(new P.aY("Future already completed"))
z.dU(b)},
P:function(a,b){this.a.c5(a,b)}},
kv:{"^":"eq;a,$ti",
av:function(a,b){var z=this.a
if(z.a!==0)throw H.a(new P.aY("Future already completed"))
z.ae(b)},
P:function(a,b){this.a.P(a,b)}},
es:{"^":"b;a6:a@,J:b>,c,d,e",
gat:function(){return this.b.b},
gcW:function(){return(this.c&1)!==0},
geL:function(){return(this.c&2)!==0},
gcV:function(){return this.c===8},
geM:function(){return this.e!=null},
eJ:function(a){return this.b.b.bG(this.d,a)},
eW:function(a){if(this.c!==6)return!0
return this.b.b.bG(this.d,J.aI(a))},
cU:function(a){var z,y,x
z=this.e
y=J.m(a)
x=this.b.b
if(H.an(z,{func:1,args:[P.b,P.ae]}))return x.f7(z,y.gR(a),a.gZ())
else return x.bG(z,y.gR(a))},
eK:function(){return this.b.b.d6(this.d)}},
N:{"^":"b;ag:a<,at:b<,as:c<,$ti",
ge5:function(){return this.a===2},
gbm:function(){return this.a>=4},
ge4:function(){return this.a===8},
ed:function(a){this.a=2
this.c=a},
bK:function(a,b,c){var z=$.o
if(z!==C.d){z.toString
if(c!=null)c=P.eD(c,z)}return this.br(b,c)},
bJ:function(a,b){return this.bK(a,b,null)},
br:function(a,b){var z=new P.N(0,$.o,null,[null])
this.bb(new P.es(null,z,b==null?1:3,a,b))
return z},
b3:function(a){var z,y
z=$.o
y=new P.N(0,z,null,this.$ti)
if(z!==C.d)z.toString
this.bb(new P.es(null,y,8,a,null))
return y},
ef:function(){this.a=1},
dX:function(){this.a=0},
gaf:function(){return this.c},
gdW:function(){return this.c},
eg:function(a){this.a=4
this.c=a},
ee:function(a){this.a=8
this.c=a},
c7:function(a){this.a=a.gag()
this.c=a.gas()},
bb:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gbm()){y.bb(a)
return}this.a=y.gag()
this.c=y.gas()}z=this.b
z.toString
P.aD(null,null,z,new P.jT(this,a))}},
ct:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.ga6()!=null;)w=w.ga6()
w.sa6(x)}}else{if(y===2){v=this.c
if(!v.gbm()){v.ct(a)
return}this.a=v.gag()
this.c=v.gas()}z.a=this.cz(a)
y=this.b
y.toString
P.aD(null,null,y,new P.k_(z,this))}},
ar:function(){var z=this.c
this.c=null
return this.cz(z)},
cz:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.ga6()
z.sa6(y)}return y},
ae:function(a){var z,y,x
z=this.$ti
y=H.bt(a,"$isP",z,"$asP")
if(y){z=H.bt(a,"$isN",z,null)
if(z)P.c_(a,this)
else P.et(a,this)}else{x=this.ar()
this.a=4
this.c=a
P.aA(this,x)}},
P:[function(a,b){var z=this.ar()
this.a=8
this.c=new P.bD(a,b)
P.aA(this,z)},function(a){return this.P(a,null)},"ff","$2","$1","gaP",2,2,4,9,1,2],
dU:function(a){var z=H.bt(a,"$isP",this.$ti,"$asP")
if(z){this.dV(a)
return}this.a=1
z=this.b
z.toString
P.aD(null,null,z,new P.jV(this,a))},
dV:function(a){var z=H.bt(a,"$isN",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aD(null,null,z,new P.jZ(this,a))}else P.c_(a,this)
return}P.et(a,this)},
c5:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aD(null,null,z,new P.jU(this,a,b))},
$isP:1,
B:{
jS:function(a,b){var z=new P.N(0,$.o,null,[b])
z.a=4
z.c=a
return z},
et:function(a,b){var z,y,x
b.ef()
try{J.fn(a,new P.jW(b),new P.jX(b))}catch(x){z=H.J(x)
y=H.O(x)
P.eX(new P.jY(b,z,y))}},
c_:function(a,b){var z
for(;a.ge5();)a=a.gdW()
if(a.gbm()){z=b.ar()
b.c7(a)
P.aA(b,z)}else{z=b.gas()
b.ed(a)
a.ct(z)}},
aA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.ge4()
if(b==null){if(w){v=z.a.gaf()
y=z.a.gat()
u=J.aI(v)
t=v.gZ()
y.toString
P.b3(null,null,y,u,t)}return}for(;b.ga6()!=null;b=s){s=b.ga6()
b.sa6(null)
P.aA(z.a,b)}r=z.a.gas()
x.a=w
x.b=r
y=!w
if(!y||b.gcW()||b.gcV()){q=b.gat()
if(w){u=z.a.gat()
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){v=z.a.gaf()
y=z.a.gat()
u=J.aI(v)
t=v.gZ()
y.toString
P.b3(null,null,y,u,t)
return}p=$.o
if(p==null?q!=null:p!==q)$.o=q
else p=null
if(b.gcV())new P.k2(z,x,w,b).$0()
else if(y){if(b.gcW())new P.k1(x,b,r).$0()}else if(b.geL())new P.k0(z,x,b).$0()
if(p!=null)$.o=p
y=x.b
if(!!J.r(y).$isP){o=J.d7(b)
if(y.a>=4){b=o.ar()
o.c7(y)
z.a=y
continue}else P.c_(y,o)
return}}o=J.d7(b)
b=o.ar()
y=x.a
u=x.b
if(!y)o.eg(u)
else o.ee(u)
z.a=o
y=o}}}},
jT:{"^":"e:0;a,b",
$0:function(){P.aA(this.a,this.b)}},
k_:{"^":"e:0;a,b",
$0:function(){P.aA(this.b,this.a.a)}},
jW:{"^":"e:1;a",
$1:[function(a){var z=this.a
z.dX()
z.ae(a)},null,null,2,0,null,4,"call"]},
jX:{"^":"e:14;a",
$2:[function(a,b){this.a.P(a,b)},function(a){return this.$2(a,null)},"$1",null,null,null,2,2,null,9,1,2,"call"]},
jY:{"^":"e:0;a,b,c",
$0:function(){this.a.P(this.b,this.c)}},
jV:{"^":"e:0;a,b",
$0:function(){var z,y
z=this.a
y=z.ar()
z.a=4
z.c=this.b
P.aA(z,y)}},
jZ:{"^":"e:0;a,b",
$0:function(){P.c_(this.b,this.a)}},
jU:{"^":"e:0;a,b,c",
$0:function(){this.a.P(this.b,this.c)}},
k2:{"^":"e:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.d.eK()}catch(w){y=H.J(w)
x=H.O(w)
if(this.c){v=J.aI(this.a.a.gaf())
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.gaf()
else u.b=new P.bD(y,x)
u.a=!0
return}if(!!J.r(z).$isP){if(z instanceof P.N&&z.gag()>=4){if(z.gag()===8){v=this.b
v.b=z.gas()
v.a=!0}return}t=this.a.a
v=this.b
v.b=J.d8(z,new P.k3(t))
v.a=!1}}},
k3:{"^":"e:1;a",
$1:[function(a){return this.a},null,null,2,0,null,5,"call"]},
k1:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eJ(this.c)}catch(x){z=H.J(x)
y=H.O(x)
w=this.a
w.b=new P.bD(z,y)
w.a=!0}}},
k0:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.gaf()
w=this.c
if(w.eW(z)===!0&&w.geM()){v=this.b
v.b=w.cU(z)
v.a=!1}}catch(u){y=H.J(u)
x=H.O(u)
w=this.a
v=J.aI(w.a.gaf())
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.gaf()
else s.b=new P.bD(y,x)
s.a=!0}}},
eo:{"^":"b;a,b"},
Q:{"^":"b;$ti",
S:function(a,b){return new P.kf(b,this,[H.B(this,"Q",0),null])},
eF:function(a,b){return new P.k4(a,b,this,[H.B(this,"Q",0)])},
cU:function(a){return this.eF(a,null)},
al:function(a,b){var z,y
z={}
y=new P.N(0,$.o,null,[H.B(this,"Q",0)])
z.a=!1
z.b=null
z.c=null
z.c=this.ak(new P.je(z,this,b,y),!0,new P.jf(z,y),y.gaP())
return y},
gh:function(a){var z,y
z={}
y=new P.N(0,$.o,null,[P.x])
z.a=0
this.ak(new P.ja(z),!0,new P.jb(z,y),y.gaP())
return y},
a2:function(a){var z,y,x
z=H.B(this,"Q",0)
y=H.l([],[z])
x=new P.N(0,$.o,null,[[P.j,z]])
this.ak(new P.jg(this,y),!0,new P.jh(y,x),x.gaP())
return x},
W:function(a,b){if(b<0)H.v(P.ba(b))
return new P.kr(b,this,[H.B(this,"Q",0)])},
ga7:function(a){var z,y
z={}
y=new P.N(0,$.o,null,[H.B(this,"Q",0)])
z.a=null
z.a=this.ak(new P.j8(z,this,y),!0,new P.j9(y),y.gaP())
return y}},
je:{"^":"e;a,b,c,d",
$1:[function(a){var z=this.a
if(z.a)P.kQ(new P.jc(z,this.c,a),new P.jd(z,this.b),P.kC(z.c,this.d))
else{z.b=a
z.a=!0}},null,null,2,0,null,22,"call"],
$S:function(){return H.aF(function(a){return{func:1,args:[a]}},this.b,"Q")}},
jc:{"^":"e:0;a,b,c",
$0:function(){return this.b.$2(this.a.b,this.c)}},
jd:{"^":"e;a,b",
$1:function(a){this.a.b=a},
$S:function(){return H.aF(function(a){return{func:1,args:[a]}},this.b,"Q")}},
jf:{"^":"e:0;a,b",
$0:[function(){var z,y,x,w
x=this.a
if(!x.a)try{x=H.a6()
throw H.a(x)}catch(w){z=H.J(w)
y=H.O(w)
P.eC(this.b,z,y)}else this.b.ae(x.b)},null,null,0,0,null,"call"]},
ja:{"^":"e:1;a",
$1:[function(a){++this.a.a},null,null,2,0,null,5,"call"]},
jb:{"^":"e:0;a,b",
$0:[function(){this.b.ae(this.a.a)},null,null,0,0,null,"call"]},
jg:{"^":"e;a,b",
$1:[function(a){this.b.push(a)},null,null,2,0,null,10,"call"],
$S:function(){return H.aF(function(a){return{func:1,args:[a]}},this.a,"Q")}},
jh:{"^":"e:0;a,b",
$0:[function(){this.b.ae(this.a)},null,null,0,0,null,"call"]},
j8:{"^":"e;a,b,c",
$1:[function(a){P.kF(this.a.a,this.c,a)},null,null,2,0,null,4,"call"],
$S:function(){return H.aF(function(a){return{func:1,args:[a]}},this.b,"Q")}},
j9:{"^":"e:0;a",
$0:[function(){var z,y,x,w
try{x=H.a6()
throw H.a(x)}catch(w){z=H.J(w)
y=H.O(w)
P.eC(this.a,z,y)}},null,null,0,0,null,"call"]},
j7:{"^":"b;"},
jC:{"^":"b;at:d<,ag:e<",
c0:function(a,b,c,d){var z,y
z=a==null?P.kZ():a
y=this.d
y.toString
this.a=z
this.b=P.eD(b==null?P.l0():b,y)
this.c=c==null?P.l_():c},
bC:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.cM()
if((z&4)===0&&(this.e&32)===0)this.cj(this.gcp())},
d2:function(a){return this.bC(a,null)},
d5:function(a){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.ga1(z)}else z=!1
if(z)this.r.b7(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.cj(this.gcr())}}}},
aY:function(a){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.bd()
z=this.f
return z==null?$.$get$aN():z},
gbx:function(){return this.e>=128},
bd:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.cM()
if((this.e&32)===0)this.r=null
this.f=this.co()},
aO:["dC",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.cB(b)
else this.bc(new P.jH(b,null))}],
aB:["dD",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.cD(a,b)
else this.bc(new P.jJ(a,b,null))}],
dT:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.cC()
else this.bc(C.v)},
cq:[function(){},"$0","gcp",0,0,2],
cs:[function(){},"$0","gcr",0,0,2],
co:function(){return},
bc:function(a){var z,y
z=this.r
if(z==null){z=new P.kt(null,null,0)
this.r=z}z.a0(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.b7(this)}},
cB:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.bH(this.a,a)
this.e=(this.e&4294967263)>>>0
this.be((z&4)!==0)},
cD:function(a,b){var z,y
z=this.e
y=new P.jE(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.bd()
z=this.f
if(!!J.r(z).$isP&&z!==$.$get$aN())z.b3(y)
else y.$0()}else{y.$0()
this.be((z&4)!==0)}},
cC:function(){var z,y
z=new P.jD(this)
this.bd()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.r(y).$isP&&y!==$.$get$aN())y.b3(z)
else z.$0()},
cj:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.be((z&4)!==0)},
be:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.ga1(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.ga1(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.cq()
else this.cs()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.b7(this)}},
jE:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.an(y,{func:1,args:[P.b,P.ae]})
w=z.d
v=this.b
u=z.b
if(x)w.f8(u,v,this.c)
else w.bH(u,v)
z.e=(z.e&4294967263)>>>0}},
jD:{"^":"e:2;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.d7(z.c)
z.e=(z.e&4294967263)>>>0}},
er:{"^":"b;b1:a*"},
jH:{"^":"er;G:b>,a",
bD:function(a){a.cB(this.b)}},
jJ:{"^":"er;R:b>,Z:c<,a",
bD:function(a){a.cD(this.b,this.c)}},
jI:{"^":"b;",
bD:function(a){a.cC()},
gb1:function(a){return},
sb1:function(a,b){throw H.a(new P.aY("No events after a done."))}},
ki:{"^":"b;ag:a<",
b7:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.eX(new P.kj(this,a))
this.a=1},
cM:function(){if(this.a===1)this.a=3}},
kj:{"^":"e:0;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=x.gb1(x)
z.b=w
if(w==null)z.c=null
x.bD(this.b)}},
kt:{"^":"ki;b,c,a",
ga1:function(a){return this.c==null},
a0:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{z.sb1(0,b)
this.c=b}}},
ku:{"^":"b;a,b,c,$ti"},
kE:{"^":"e:0;a,b,c",
$0:function(){return this.a.P(this.b,this.c)}},
kD:{"^":"e:6;a,b",
$2:function(a,b){P.kB(this.a,this.b,a,b)}},
kG:{"^":"e:0;a,b",
$0:function(){return this.a.ae(this.b)}},
az:{"^":"Q;$ti",
ak:function(a,b,c,d){return this.cd(a,d,c,!0===b)},
cY:function(a,b,c){return this.ak(a,null,b,c)},
cd:function(a,b,c,d){return P.jR(this,a,b,c,d,H.B(this,"az",0),H.B(this,"az",1))},
bk:function(a,b){b.aO(0,a)},
ck:function(a,b,c){c.aB(a,b)},
$asQ:function(a,b){return[b]}},
bZ:{"^":"jC;x,y,a,b,c,d,e,f,r,$ti",
c1:function(a,b,c,d,e,f,g){this.y=this.x.a.cY(this.ge1(),this.ge2(),this.ge3())},
aO:function(a,b){if((this.e&2)!==0)return
this.dC(0,b)},
aB:function(a,b){if((this.e&2)!==0)return
this.dD(a,b)},
cq:[function(){var z=this.y
if(z==null)return
z.d2(0)},"$0","gcp",0,0,2],
cs:[function(){var z=this.y
if(z==null)return
z.d5(0)},"$0","gcr",0,0,2],
co:function(){var z=this.y
if(z!=null){this.y=null
return z.aY(0)}return},
fg:[function(a){this.x.bk(a,this)},"$1","ge1",2,0,function(){return H.aF(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"bZ")},10],
fi:[function(a,b){this.x.ck(a,b,this)},"$2","ge3",4,0,15,1,2],
fh:[function(){this.dT()},"$0","ge2",0,0,2],
B:{
jR:function(a,b,c,d,e,f,g){var z,y
z=$.o
y=e?1:0
y=new P.bZ(a,null,null,null,null,z,y,null,null,[f,g])
y.c0(b,c,d,e)
y.c1(a,b,c,d,e,f,g)
return y}}},
kf:{"^":"az;b,a,$ti",
bk:function(a,b){var z,y,x,w
z=null
try{z=this.b.$1(a)}catch(w){y=H.J(w)
x=H.O(w)
P.eA(b,y,x)
return}b.aO(0,z)}},
k4:{"^":"az;b,c,a,$ti",
ck:function(a,b,c){var z,y,x,w,v
z=!0
if(z===!0)try{P.kL(this.b,a,b)}catch(w){y=H.J(w)
x=H.O(w)
v=y
if(v==null?a==null:v===a)c.aB(a,b)
else P.eA(c,y,x)
return}else c.aB(a,b)},
$asQ:null,
$asaz:function(a){return[a,a]}},
ks:{"^":"bZ;dy,x,y,a,b,c,d,e,f,r,$ti",
gbg:function(a){return this.dy},
sbg:function(a,b){this.dy=b},
$asbZ:function(a){return[a,a]}},
kr:{"^":"az;b,a,$ti",
cd:function(a,b,c,d){var z,y,x
z=H.T(this,0)
y=$.o
x=d?1:0
x=new P.ks(this.b,this,null,null,null,null,y,x,null,null,this.$ti)
x.c0(a,b,c,d)
x.c1(this,a,b,c,d,z,z)
return x},
bk:function(a,b){var z=b.gbg(b)
if(z>0){b.sbg(0,z-1)
return}b.aO(0,a)},
$asQ:null,
$asaz:function(a){return[a,a]}},
nF:{"^":"b;"},
bD:{"^":"b;R:a>,Z:b<",
j:function(a){return H.d(this.a)},
$isL:1},
kx:{"^":"b;"},
kP:{"^":"e:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bP()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.a3(y)
throw x}},
kn:{"^":"kx;",
d7:function(a){var z,y,x
try{if(C.d===$.o){a.$0()
return}P.eE(null,null,this,a)}catch(x){z=H.J(x)
y=H.O(x)
P.b3(null,null,this,z,y)}},
bH:function(a,b){var z,y,x
try{if(C.d===$.o){a.$1(b)
return}P.eG(null,null,this,a,b)}catch(x){z=H.J(x)
y=H.O(x)
P.b3(null,null,this,z,y)}},
f8:function(a,b,c){var z,y,x
try{if(C.d===$.o){a.$2(b,c)
return}P.eF(null,null,this,a,b,c)}catch(x){z=H.J(x)
y=H.O(x)
P.b3(null,null,this,z,y)}},
em:function(a){return new P.kp(this,a)},
bt:function(a){return new P.ko(this,a)},
en:function(a){return new P.kq(this,a)},
i:function(a,b){return},
d6:function(a){if($.o===C.d)return a.$0()
return P.eE(null,null,this,a)},
bG:function(a,b){if($.o===C.d)return a.$1(b)
return P.eG(null,null,this,a,b)},
f7:function(a,b,c){if($.o===C.d)return a.$2(b,c)
return P.eF(null,null,this,a,b,c)}},
kp:{"^":"e:0;a,b",
$0:function(){return this.a.d6(this.b)}},
ko:{"^":"e:0;a,b",
$0:function(){return this.a.d7(this.b)}},
kq:{"^":"e:1;a,b",
$1:[function(a){return this.a.bH(this.b,a)},null,null,2,0,null,23,"call"]}}],["","",,P,{"^":"",
au:function(){return new H.ad(0,null,null,null,null,null,0,[null,null])},
aS:function(a){return H.l9(a,new H.ad(0,null,null,null,null,null,0,[null,null]))},
i6:function(a,b,c){var z,y
if(P.cU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$b4()
y.push(a)
try{P.kM(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.e7(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bJ:function(a,b,c){var z,y,x
if(P.cU(a))return b+"..."+c
z=new P.bV(b)
y=$.$get$b4()
y.push(a)
try{x=z
x.sX(P.e7(x.gX(),a,", "))}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.sX(y.gX()+c)
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cU:function(a){var z,y
for(z=0;y=$.$get$b4(),z<y.length;++z)if(a===y[z])return!0
return!1},
kM:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gw())
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gw();++x
if(!z.u()){if(x<=4){b.push(H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw();++x
for(;z.u();t=s,s=r){r=z.gw();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
aT:function(a,b,c,d){return new P.k8(0,null,null,null,null,null,0,[d])},
bM:function(a){var z,y,x
z={}
if(P.cU(a))return"{...}"
y=new P.bV("")
try{$.$get$b4().push(a)
x=y
x.sX(x.gX()+"{")
z.a=!0
J.fa(a,new P.ip(z,y))
z=y
z.sX(z.gX()+"}")}finally{z=$.$get$b4()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
ex:{"^":"ad;a,b,c,d,e,f,r,$ti",
aH:function(a){return H.lt(a)&0x3ffffff},
aI:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gcX()
if(x==null?b==null:x===b)return y}return-1},
B:{
b0:function(a,b){return new P.ex(0,null,null,null,null,null,0,[a,b])}}},
k8:{"^":"k5;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.c0(this,this.r,null,null)
z.c=this.e
return z},
gh:function(a){return this.a},
eq:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dZ(b)},
dZ:function(a){var z=this.d
if(z==null)return!1
return this.aS(z[this.aQ(a)],a)>=0},
cZ:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.eq(0,a)?a:null
else return this.e6(a)},
e6:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.aQ(a)]
x=this.aS(y,a)
if(x<0)return
return J.aH(y,x).gbh()},
a0:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.c2(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.c2(x,b)}else return this.a_(0,b)},
a_:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ka()
this.d=z}y=this.aQ(b)
x=z[y]
if(x==null)z[y]=[this.bf(b)]
else{if(this.aS(x,b)>=0)return!1
x.push(this.bf(b))}return!0},
aJ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ca(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ca(this.c,b)
else return this.ea(0,b)},
ea:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aQ(b)]
x=this.aS(y,b)
if(x<0)return!1
this.cb(y.splice(x,1)[0])
return!0},
au:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
c2:function(a,b){if(a[b]!=null)return!1
a[b]=this.bf(b)
return!0},
ca:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.cb(z)
delete a[b]
return!0},
bf:function(a){var z,y
z=new P.k9(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cb:function(a){var z,y
z=a.gc9()
y=a.gc8()
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.sc9(z);--this.a
this.r=this.r+1&67108863},
aQ:function(a){return J.Y(a)&0x3ffffff},
aS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].gbh(),b))return y
return-1},
B:{
ka:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
k9:{"^":"b;bh:a<,c8:b<,c9:c@"},
c0:{"^":"b;a,b,c,d",
gw:function(){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(new P.Z(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.gbh()
this.c=this.c.gc8()
return!0}}}},
k5:{"^":"iV;"},
mF:{"^":"b;$ti",$isi:1},
k:{"^":"b;$ti",
gI:function(a){return new H.dL(a,this.gh(a),0,null)},
A:function(a,b){return this.i(a,b)},
S:function(a,b){return new H.aU(a,b,[H.B(a,"k",0),null])},
al:function(a,b){var z,y,x
z=this.gh(a)
if(z===0)throw H.a(H.a6())
y=this.i(a,0)
for(x=1;x<z;++x){y=b.$2(y,this.i(a,x))
if(z!==this.gh(a))throw H.a(new P.Z(a))}return y},
bv:function(a,b,c){var z,y,x
z=this.gh(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gh(a))throw H.a(new P.Z(a))}return y},
W:function(a,b){return H.bW(a,b,null,H.B(a,"k",0))},
M:function(a,b){var z,y,x
z=H.l([],[H.B(a,"k",0)])
C.a.sh(z,this.gh(a))
for(y=0;y<this.gh(a);++y){x=this.i(a,y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
a2:function(a){return this.M(a,!0)},
H:function(a,b){var z,y,x,w
z=this.gh(a)
for(y=b.gI(b);y.u();z=w){x=y.gw()
w=z+1
this.sh(a,w)
this.k(a,z,x)}},
v:function(a,b){var z,y,x
z=H.l([],[H.B(a,"k",0)])
y=this.gh(a)
x=J.K(b)
if(typeof x!=="number")return H.t(x)
C.a.sh(z,y+x)
C.a.aN(z,0,this.gh(a),a)
C.a.aN(z,this.gh(a),z.length,b)
return z},
j:function(a){return P.bJ(a,"[","]")}},
io:{"^":"cy;"},
ip:{"^":"e:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
cy:{"^":"b;$ti",
O:function(a,b){var z,y
for(z=J.ap(this.gaj(a));z.u();){y=z.gw()
b.$2(y,this.i(a,y))}},
H:function(a,b){var z,y
for(z=b.gaj(b),z=z.gI(z);z.u();){y=z.gw()
this.k(a,y,b.i(0,y))}},
S:function(a,b){var z,y,x,w,v
z=P.au()
for(y=J.ap(this.gaj(a));y.u();){x=y.gw()
w=b.$2(x,this.i(a,x))
v=J.m(w)
z.k(0,v.gai(w),v.gG(w))}return z},
gh:function(a){return J.K(this.gaj(a))},
j:function(a){return P.bM(a)}},
kw:{"^":"b;",
k:function(a,b,c){throw H.a(new P.h("Cannot modify unmodifiable map"))},
H:function(a,b){throw H.a(new P.h("Cannot modify unmodifiable map"))}},
iq:{"^":"b;",
i:function(a,b){return this.a.i(0,b)},
k:function(a,b,c){this.a.k(0,b,c)},
H:function(a,b){this.a.H(0,b)},
O:function(a,b){this.a.O(0,b)},
gh:function(a){var z=this.a
return z.gh(z)},
j:function(a){return P.bM(this.a)},
S:function(a,b){var z=this.a
return z.S(z,b)}},
js:{"^":"ir;"},
il:{"^":"av;a,b,c,d,$ti",
dH:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.l(z,[b])},
gI:function(a){return new P.kb(this,this.c,this.d,this.b,null)},
ga1:function(a){return this.b===this.c},
gh:function(a){return(this.c-this.b&this.a.length-1)>>>0},
A:function(a,b){var z,y,x,w
z=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=z)H.v(P.w(b,this,"index",null,z))
y=this.a
x=y.length
w=(this.b+b&x-1)>>>0
if(w<0||w>=x)return H.c(y,w)
return y[w]},
M:function(a,b){var z=H.l([],this.$ti)
C.a.sh(z,this.gh(this))
this.cK(z)
return z},
a2:function(a){return this.M(a,!0)},
H:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.$ti
y=H.bt(b,"$isj",z,"$asj")
if(y){x=b.gh(b)
w=this.gh(this)
y=C.b.v(w,x)
v=this.a.length
if(y>=v){y=C.b.v(w,x)
u=P.im(y+C.c.bq(y,1))
if(typeof u!=="number")return H.t(u)
y=new Array(u)
y.fixed$length=Array
t=H.l(y,z)
this.c=this.cK(t)
this.a=t
this.b=0
C.a.V(t,w,C.b.v(w,x),b,0)
this.c=C.b.v(this.c,x)}else{s=v-this.c
if(x.aa(0,s)){z=this.a
y=this.c
C.a.V(z,y,C.b.v(y,x),b,0)
this.c=C.b.v(this.c,x)}else{r=x.L(0,s)
z=this.a
y=this.c
C.a.V(z,y,y+s,b,0)
C.a.V(this.a,0,r,b,s)
this.c=r}}++this.d}else for(z=b.gI(b);z.u();)this.a_(0,z.gw())},
au:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.c(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
j:function(a){return P.bJ(this,"{","}")},
d4:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.a(H.a6());++this.d
y=this.a
x=y.length
if(z>=x)return H.c(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
a_:function(a,b){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.c(z,y)
z[y]=b
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.ci();++this.d},
ci:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.l(z,this.$ti)
z=this.a
x=this.b
w=z.length-x
C.a.V(y,0,w,z,x)
C.a.V(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
cK:function(a){var z,y,x,w,v
z=this.b
y=this.c
x=this.a
if(z<=y){w=y-z
C.a.V(a,0,w,x,z)
return w}else{v=x.length-z
C.a.V(a,0,v,x,z)
C.a.V(a,v,v+this.c,this.a,0)
return this.c+v}},
B:{
cw:function(a,b){var z=new P.il(null,0,0,0,[b])
z.dH(a,b)
return z},
im:function(a){var z
a=C.y.bY(a,1)-1
for(;!0;a=z)z=(a&a-1)>>>0}}},
kb:{"^":"b;a,b,c,d,e",
gw:function(){return this.e},
u:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.v(new P.Z(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.c(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
iW:{"^":"b;$ti",
H:function(a,b){var z
for(z=b.gI(b);z.u();)this.a0(0,z.gw())},
M:function(a,b){var z,y,x,w,v
z=H.l([],this.$ti)
C.a.sh(z,this.a)
for(y=new P.c0(this,this.r,null,null),y.c=this.e,x=0;y.u();x=v){w=y.d
v=x+1
if(x>=z.length)return H.c(z,x)
z[x]=w}return z},
a2:function(a){return this.M(a,!0)},
S:function(a,b){return new H.dr(this,b,[H.T(this,0),null])},
j:function(a){return P.bJ(this,"{","}")},
al:function(a,b){var z,y
z=new P.c0(this,this.r,null,null)
z.c=this.e
if(!z.u())throw H.a(H.a6())
y=z.d
for(;z.u();)y=b.$2(y,z.d)
return y},
W:function(a,b){return H.e5(this,b,H.T(this,0))},
$isi:1},
iV:{"^":"iW;"},
ir:{"^":"iq+kw;"}}],["","",,P,{"^":"",
aL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h8(a)},
h8:function(a){var z=J.r(a)
if(!!z.$ise)return z.j(a)
return H.bR(a)},
as:function(a){return new P.jQ(a)},
bh:function(a,b,c){var z,y
z=H.l([],[c])
for(y=J.ap(a);y.u();)z.push(y.gw())
if(b)return z
z.fixed$length=Array
return z},
cx:function(a,b,c,d){var z,y,x
z=H.l(new Array(a),[d])
for(y=0;y<a;++y){x=b.$1(y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
d1:function(a){H.lu(H.d(a))},
iC:{"^":"e:16;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.b4(0,y.a)
z.b4(0,a.ge7())
z.b4(0,": ")
z.b4(0,P.aL(b))
y.a=", "}},
l1:{"^":"b;"},
"+bool":0,
dj:{"^":"b;a,b",
dG:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.ba("DateTime is outside valid range: "+this.geX()))},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.dj))return!1
return this.a===b.a&&!0},
gF:function(a){var z=this.a
return(z^C.b.bq(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t,s
z=P.fP(H.iP(this))
y=P.bd(H.iN(this))
x=P.bd(H.iJ(this))
w=P.bd(H.iK(this))
v=P.bd(H.iM(this))
u=P.bd(H.iO(this))
t=P.fQ(H.iL(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
return s},
geX:function(){return this.a},
B:{
fP:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bd:function(a){if(a>=10)return""+a
return"0"+a}}},
a2:{"^":"bw;"},
"+double":0,
ai:{"^":"b;aR:a<",
v:function(a,b){return new P.ai(this.a+b.gaR())},
L:function(a,b){return new P.ai(this.a-b.gaR())},
C:function(a,b){if(typeof b!=="number")return H.t(b)
return new P.ai(C.c.f6(this.a*b))},
ad:function(a,b){if(b===0)throw H.a(new P.hi())
return new P.ai(C.b.ad(this.a,b))},
aa:function(a,b){return this.a<b.gaR()},
an:function(a,b){return C.b.an(this.a,b.gaR())},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.ai))return!1
return this.a===b.a},
gF:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.h6()
y=this.a
if(y<0)return"-"+new P.ai(0-y).j(0)
x=z.$1(C.b.N(y,6e7)%60)
w=z.$1(C.b.N(y,1e6)%60)
v=new P.h5().$1(y%1e6)
return""+C.b.N(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
gbw:function(a){return this.a<0},
a5:function(a){return new P.ai(0-this.a)}},
h5:{"^":"e:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h6:{"^":"e:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
L:{"^":"b;",
gZ:function(){return H.O(this.$thrownJsError)}},
fu:{"^":"L;a",
j:function(a){return"Assertion failed"}},
bP:{"^":"L;",
j:function(a){return"Throw of null."}},
aq:{"^":"L;a,b,c,d",
gbj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbi:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gbj()+y+x
if(!this.a)return w
v=this.gbi()
u=P.aL(this.b)
return w+v+": "+H.d(u)},
B:{
ba:function(a){return new P.aq(!1,null,null,a)},
cl:function(a,b,c){return new P.aq(!0,a,b,c)}}},
cF:{"^":"aq;e,f,a,b,c,d",
gbj:function(){return"RangeError"},
gbi:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
B:{
iR:function(a){return new P.cF(null,null,!1,null,null,a)},
bk:function(a,b,c){return new P.cF(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.cF(b,c,!0,a,d,"Invalid value")},
e1:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.W(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.W(b,a,c,"end",f))
return b}}},
hh:{"^":"aq;e,h:f>,a,b,c,d",
gbj:function(){return"RangeError"},
gbi:function(){if(J.by(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
B:{
w:function(a,b,c,d,e){var z=e!=null?e:J.K(b)
return new P.hh(b,z,!0,a,c,"Index out of range")}}},
iB:{"^":"L;a,b,c,d,e",
j:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
y=new P.bV("")
z.a=""
for(x=this.c,w=x.length,v=0,u="",t="";v<w;++v,t=", "){s=x[v]
y.a=u+t
u=y.a+=H.d(P.aL(s))
z.a=", "}this.d.O(0,new P.iC(z,y))
r=P.aL(this.a)
q=y.j(0)
x="NoSuchMethodError: method not found: '"+H.d(this.b.a)+"'\nReceiver: "+H.d(r)+"\nArguments: ["+q+"]"
return x},
B:{
dU:function(a,b,c,d,e){return new P.iB(a,b,c,d,e)}}},
h:{"^":"L;a",
j:function(a){return"Unsupported operation: "+this.a}},
cO:{"^":"L;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.d(z):"UnimplementedError"}},
aY:{"^":"L;a",
j:function(a){return"Bad state: "+this.a}},
Z:{"^":"L;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.aL(z))+"."}},
iD:{"^":"b;",
j:function(a){return"Out of Memory"},
gZ:function(){return},
$isL:1},
e6:{"^":"b;",
j:function(a){return"Stack Overflow"},
gZ:function(){return},
$isL:1},
fO:{"^":"L;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.d(z)+"' during its initialization"}},
m3:{"^":"b;"},
jQ:{"^":"b;a",
j:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.d(z)}},
dC:{"^":"b;a,b,c",
j:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.d(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.e.ba(x,0,75)+"..."
return y+"\n"+x}},
hi:{"^":"b;",
j:function(a){return"IntegerDivisionByZeroException"}},
h9:{"^":"b;a,b",
j:function(a){return"Expando:"+H.d(this.a)},
i:function(a,b){var z,y
z=this.b
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.v(P.cl(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.cC(b,"expando$values")
return y==null?null:H.cC(y,z)},
k:function(a,b,c){var z,y
z=this.b
if(typeof z!=="string")z.set(b,c)
else{y=H.cC(b,"expando$values")
if(y==null){y=new P.b()
H.e0(b,"expando$values",y)}H.e0(y,z,c)}}},
x:{"^":"bw;"},
"+int":0,
a_:{"^":"b;$ti",
S:function(a,b){return H.bN(this,b,H.B(this,"a_",0),null)},
al:function(a,b){var z,y
z=this.gI(this)
if(!z.u())throw H.a(H.a6())
y=z.gw()
for(;z.u();)y=b.$2(y,z.gw())
return y},
M:function(a,b){return P.bh(this,b,H.B(this,"a_",0))},
a2:function(a){return this.M(a,!0)},
gh:function(a){var z,y
z=this.gI(this)
for(y=0;z.u();)++y
return y},
W:function(a,b){return H.e5(this,b,H.B(this,"a_",0))},
A:function(a,b){var z,y,x
if(b<0)H.v(P.W(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.u();){x=z.gw()
if(b===y)return x;++y}throw H.a(P.w(b,this,"index",null,y))},
j:function(a){return P.i6(this,"(",")")}},
cs:{"^":"b;"},
j:{"^":"b;$ti",$isi:1},
"+List":0,
bL:{"^":"b;$ti"},
V:{"^":"b;",
gF:function(a){return P.b.prototype.gF.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
bw:{"^":"b;"},
"+num":0,
b:{"^":";",
D:function(a,b){return this===b},
gF:function(a){return H.ak(this)},
j:function(a){return H.bR(this)},
bB:[function(a,b){throw H.a(P.dU(this,b.gd_(),b.gd3(),b.gd0(),null))},null,"gd1",2,0,null,3],
toString:function(){return this.j(this)}},
ae:{"^":"b;"},
y:{"^":"b;"},
"+String":0,
bV:{"^":"b;X:a@",
gh:function(a){return this.a.length},
b4:function(a,b){this.a+=H.d(b)},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
B:{
e7:function(a,b,c){var z=J.ap(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gw())
while(z.u())}else{a+=H.d(z.gw())
for(;z.u();)a=a+c+H.d(z.gw())}return a}}},
aZ:{"^":"b;"}}],["","",,W,{"^":"",
he:function(a,b,c){return W.cr(a,null,null,b,null,null,null,c).bJ(0,new W.hf())},
cr:function(a,b,c,d,e,f,g,h){var z,y,x,w
z=W.bg
y=new P.N(0,$.o,null,[z])
x=new P.cP(y,[z])
w=new XMLHttpRequest()
C.w.f0(w,"GET",a,!0)
W.af(w,"load",new W.hg(x,w),!1)
W.af(w,"error",x.gep(),!1)
w.send()
return y},
al:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ew:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kJ:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jG(a)
if(!!J.r(z).$isD)return z
return}else return a},
cV:function(a){var z=$.o
if(z===C.d)return a
if(a==null)return
return z.en(a)},
G:{"^":"dt;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLKeygenElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMetaElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lC:{"^":"G;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lE:{"^":"G;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
lH:{"^":"dA;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isq:1,
$asq:function(){return[W.bb]},
$ask:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$asn:function(){return[W.bb]},
"%":"AudioTrackList"},
lJ:{"^":"G;G:value=","%":"HTMLButtonElement"},
bF:{"^":"G;t:height=,l:width=",
dd:function(a,b,c){return a.getContext(b)},
bQ:function(a,b){return this.dd(a,b,null)},
$isbF:1,
"%":"HTMLCanvasElement"},
lK:{"^":"C;h:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lO:{"^":"hj;h:length=",
c6:function(a,b){var z,y
z=$.$get$di()
y=z[b]
if(typeof y==="string")return y
y=this.ei(a,b)
z[b]=y
return y},
ei:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
gt:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fM:{"^":"b;",
gt:function(a){var z=a.getPropertyValue(this.c6(a,"height"))
return z==null?"":z},
gl:function(a){var z=a.getPropertyValue(this.c6(a,"width"))
return z==null?"":z}},
lQ:{"^":"f;h:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lU:{"^":"f;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
K:function(a){return a.z.$0()},
"%":"DeviceAcceleration"},
lV:{"^":"aM;G:value=","%":"DeviceLightEvent"},
lX:{"^":"f;",
j:function(a){return String(a)},
"%":"DOMException"},
lY:{"^":"h3;",
gam:function(a){return a.w},
gm:function(a){return a.x},
gp:function(a){return a.y},
ga3:function(a){return a.z},
ay:function(a){return this.gam(a).$0()},
n:function(a){return this.gm(a).$0()},
q:function(a){return this.gp(a).$0()},
K:function(a){return this.ga3(a).$0()},
"%":"DOMPoint"},
h3:{"^":"f;",
gam:function(a){return a.w},
gm:function(a){return a.x},
gp:function(a){return a.y},
ga3:function(a){return a.z},
ay:function(a){return this.gam(a).$0()},
n:function(a){return this.gm(a).$0()},
q:function(a){return this.gp(a).$0()},
K:function(a){return this.ga3(a).$0()},
"%":";DOMPointReadOnly"},
h4:{"^":"f;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gl(a))+" x "+H.d(this.gt(a))},
D:function(a,b){var z
if(b==null)return!1
z=J.r(b)
if(!z.$isa0)return!1
return a.left===z.gbz(b)&&a.top===z.gbL(b)&&this.gl(a)===z.gl(b)&&this.gt(a)===z.gt(b)},
gF:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gl(a)
w=this.gt(a)
return W.ew(W.al(W.al(W.al(W.al(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gt:function(a){return a.height},
gbz:function(a){return a.left},
gbL:function(a){return a.top},
gl:function(a){return a.width},
gm:function(a){return a.x},
gp:function(a){return a.y},
n:function(a){return this.gm(a).$0()},
q:function(a){return this.gp(a).$0()},
$isa0:1,
$asa0:I.am,
"%":";DOMRectReadOnly"},
lZ:{"^":"hH;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.y]},
$isi:1,
$asi:function(){return[P.y]},
$isq:1,
$asq:function(){return[P.y]},
$ask:function(){return[P.y]},
$isj:1,
$asj:function(){return[P.y]},
$asn:function(){return[P.y]},
"%":"DOMStringList"},
m_:{"^":"f;h:length=,G:value=","%":"DOMTokenList"},
dt:{"^":"C;",
j:function(a){return a.localName},
"%":";Element"},
m1:{"^":"G;t:height=,l:width=","%":"HTMLEmbedElement"},
m2:{"^":"aM;R:error=","%":"ErrorEvent"},
aM:{"^":"f;",
geu:function(a){return W.kJ(a.currentTarget)},
"%":"AnimationEvent|AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|GamepadEvent|GeofencingEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|ServicePortConnectEvent|ServiceWorkerMessageEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
D:{"^":"f;",
dQ:function(a,b,c,d){return a.addEventListener(b,H.ag(c,1),!1)},
eb:function(a,b,c,d){return a.removeEventListener(b,H.ag(c,1),!1)},
$isD:1,
"%":"AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioContext|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioSourceNode|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|CompositorWorker|CompositorWorkerGlobalScope|ConvolverNode|CrossOriginServiceWorkerClient|DOMApplicationCache|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|NetworkInformation|Notification|OfflineAudioContext|OfflineResourceList|Oscillator|OscillatorNode|PannerNode|Performance|PermissionStatus|PresentationReceiver|PresentationRequest|RTCDTMFSender|RTCPeerConnection|RealtimeAnalyserNode|ScreenOrientation|ScriptProcessorNode|ServicePortCollection|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VTTCue|WaveShaperNode|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioContext|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dv|dA|dx|dy|dw|dz"},
mm:{"^":"hW;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isq:1,
$asq:function(){return[W.be]},
$ask:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$asn:function(){return[W.be]},
"%":"FileList"},
mn:{"^":"D;R:error=",
gJ:function(a){var z,y
z=a.result
if(!!J.r(z).$isfx){y=new Uint8Array(z,0)
return y}return z},
"%":"FileReader"},
mo:{"^":"D;R:error=,h:length=","%":"FileWriter"},
mr:{"^":"G;h:length=","%":"HTMLFormElement"},
mt:{"^":"f;G:value=","%":"GamepadButton"},
mv:{"^":"f;h:length=","%":"History"},
mw:{"^":"hP;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isq:1,
$asq:function(){return[W.C]},
$ask:function(){return[W.C]},
$isj:1,
$asj:function(){return[W.C]},
$asn:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bg:{"^":"hd;f4:responseText=",
fj:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
f0:function(a,b,c,d){return a.open(b,c,d)},
ac:function(a,b){return a.send(b)},
$isbg:1,
"%":"XMLHttpRequest"},
hf:{"^":"e:17;",
$1:function(a){return J.cg(a)}},
hg:{"^":"e:1;a,b",
$1:function(a){var z,y,x,w,v
z=this.b
y=z.status
if(typeof y!=="number")return y.fd()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.a
if(y)v.av(0,z)
else v.cP(a)}},
hd:{"^":"D;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mx:{"^":"G;t:height=,l:width=","%":"HTMLIFrameElement"},
dE:{"^":"f;t:height=,l:width=",$isdE:1,"%":"ImageBitmap"},
dF:{"^":"f;t:height=,l:width=",$isdF:1,"%":"ImageData"},
bI:{"^":"G;t:height=,l:width=",
av:function(a,b){return a.complete.$1(b)},
$isbI:1,
"%":"HTMLImageElement"},
mz:{"^":"G;t:height=,G:value=,l:width=","%":"HTMLInputElement"},
mC:{"^":"el;ai:key=","%":"KeyboardEvent"},
mD:{"^":"G;G:value=","%":"HTMLLIElement"},
ih:{"^":"cJ;","%":"CalcLength;LengthValue"},
mG:{"^":"f;",
j:function(a){return String(a)},
"%":"Location"},
it:{"^":"G;R:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mI:{"^":"f;h:length=","%":"MediaList"},
mJ:{"^":"G;G:value=","%":"HTMLMeterElement"},
mK:{"^":"iu;",
fe:function(a,b,c){return a.send(b,c)},
ac:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
iu:{"^":"D;","%":"MIDIInput;MIDIPort"},
mL:{"^":"hI;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isq:1,
$asq:function(){return[W.bi]},
$ask:function(){return[W.bi]},
$isj:1,
$asj:function(){return[W.bi]},
$asn:function(){return[W.bi]},
"%":"MimeTypeArray"},
iz:{"^":"el;",
gb0:function(a){return new P.bj(a.movementX,a.movementY)},
"%":"WheelEvent;DragEvent|MouseEvent"},
C:{"^":"D;",
j:function(a){var z=a.nodeValue
return z==null?this.dA(a):z},
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mT:{"^":"hQ;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isq:1,
$asq:function(){return[W.C]},
$ask:function(){return[W.C]},
$isj:1,
$asj:function(){return[W.C]},
$asn:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
mV:{"^":"cJ;G:value=","%":"NumberValue"},
mW:{"^":"G;t:height=,l:width=","%":"HTMLObjectElement"},
mX:{"^":"f;t:height=,l:width=","%":"OffscreenCanvas"},
mY:{"^":"G;G:value=","%":"HTMLOptionElement"},
mZ:{"^":"G;G:value=","%":"HTMLOutputElement"},
n_:{"^":"G;G:value=","%":"HTMLParamElement"},
n1:{"^":"cN;h:length=","%":"Perspective"},
aW:{"^":"f;h:length=","%":"Plugin"},
n2:{"^":"hF;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aW]},
$isi:1,
$asi:function(){return[W.aW]},
$isq:1,
$asq:function(){return[W.aW]},
$ask:function(){return[W.aW]},
$isj:1,
$asj:function(){return[W.aW]},
$asn:function(){return[W.aW]},
"%":"PluginArray"},
n5:{"^":"iz;t:height=,l:width=","%":"PointerEvent"},
n6:{"^":"cJ;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"PositionValue"},
n7:{"^":"D;G:value=","%":"PresentationAvailability"},
n8:{"^":"D;",
ac:function(a,b){return a.send(b)},
"%":"PresentationConnection"},
n9:{"^":"G;G:value=","%":"HTMLProgressElement"},
nh:{"^":"cN;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
K:function(a){return a.z.$0()},
"%":"Rotation"},
ni:{"^":"D;",
ac:function(a,b){return a.send(b)},
"%":"DataChannel|RTCDataChannel"},
cH:{"^":"f;",$iscH:1,"%":"RTCStatsReport"},
nj:{"^":"f;",
fk:[function(a){return a.result()},"$0","gJ",0,0,18],
"%":"RTCStatsResponse"},
nk:{"^":"f;t:height=,l:width=","%":"Screen"},
nl:{"^":"G;h:length=,G:value=","%":"HTMLSelectElement"},
nn:{"^":"ih;G:value=","%":"SimpleLength"},
no:{"^":"dy;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isq:1,
$asq:function(){return[W.bl]},
$ask:function(){return[W.bl]},
$isj:1,
$asj:function(){return[W.bl]},
$asn:function(){return[W.bl]},
"%":"SourceBufferList"},
np:{"^":"hO;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isq:1,
$asq:function(){return[W.bm]},
$ask:function(){return[W.bm]},
$isj:1,
$asj:function(){return[W.bm]},
$asn:function(){return[W.bm]},
"%":"SpeechGrammarList"},
nq:{"^":"aM;R:error=","%":"SpeechRecognitionError"},
aX:{"^":"f;h:length=","%":"SpeechRecognitionResult"},
nu:{"^":"hY;",
H:function(a,b){b.O(0,new W.j5(a))},
i:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
O:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaj:function(a){var z=H.l([],[P.y])
this.O(a,new W.j6(z))
return z},
gh:function(a){return a.length},
$ascy:function(){return[P.y,P.y]},
"%":"Storage"},
j5:{"^":"e:3;a",
$2:function(a,b){this.a.setItem(a,b)}},
j6:{"^":"e:3;a",
$2:function(a,b){return this.a.push(a)}},
nv:{"^":"aM;ai:key=","%":"StorageEvent"},
cJ:{"^":"f;","%":"KeywordValue|TransformValue;StyleValue"},
nz:{"^":"G;G:value=","%":"HTMLTextAreaElement"},
nA:{"^":"f;l:width=","%":"TextMetrics"},
nC:{"^":"hG;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isq:1,
$asq:function(){return[W.bp]},
$ask:function(){return[W.bp]},
$isj:1,
$asj:function(){return[W.bp]},
$asn:function(){return[W.bp]},
"%":"TextTrackCueList"},
nD:{"^":"dz;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isq:1,
$asq:function(){return[W.bo]},
$ask:function(){return[W.bo]},
$isj:1,
$asj:function(){return[W.bo]},
$asn:function(){return[W.bo]},
"%":"TextTrackList"},
nE:{"^":"f;h:length=","%":"TimeRanges"},
nG:{"^":"hT;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isq:1,
$asq:function(){return[W.bq]},
$ask:function(){return[W.bq]},
$isj:1,
$asj:function(){return[W.bq]},
$asn:function(){return[W.bq]},
"%":"TouchList"},
nH:{"^":"f;h:length=","%":"TrackDefaultList"},
cN:{"^":"f;","%":"Matrix|Skew;TransformComponent"},
nL:{"^":"cN;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
K:function(a){return a.z.$0()},
"%":"Translation"},
el:{"^":"aM;","%":"CompositionEvent|FocusEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
nM:{"^":"f;",
j:function(a){return String(a)},
"%":"URL"},
em:{"^":"it;t:height=,l:width=",$isem:1,"%":"HTMLVideoElement"},
nP:{"^":"D;h:length=","%":"VideoTrackList"},
nQ:{"^":"f;t:height=,l:width=","%":"VTTRegion"},
nR:{"^":"f;h:length=","%":"VTTRegionList"},
nS:{"^":"D;",
ac:function(a,b){return a.send(b)},
"%":"WebSocket"},
ju:{"^":"D;",
cw:function(a,b){return a.requestAnimationFrame(H.ag(b,1))},
cf:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nT:{"^":"D;"},
nX:{"^":"C;G:value=","%":"Attr"},
nY:{"^":"f;t:height=,bz:left=,bL:top=,l:width=",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
D:function(a,b){var z,y,x
if(b==null)return!1
z=J.r(b)
if(!z.$isa0)return!1
y=a.left
x=z.gbz(b)
if(y==null?x==null:y===x){y=a.top
x=z.gbL(b)
if(y==null?x==null:y===x){y=a.width
x=z.gl(b)
if(y==null?x==null:y===x){y=a.height
z=z.gt(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gF:function(a){var z,y,x,w
z=J.Y(a.left)
y=J.Y(a.top)
x=J.Y(a.width)
w=J.Y(a.height)
return W.ew(W.al(W.al(W.al(W.al(0,z),y),x),w))},
$isa0:1,
$asa0:I.am,
"%":"ClientRect"},
nZ:{"^":"hV;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.a0]},
$isi:1,
$asi:function(){return[P.a0]},
$isq:1,
$asq:function(){return[P.a0]},
$ask:function(){return[P.a0]},
$isj:1,
$asj:function(){return[P.a0]},
$asn:function(){return[P.a0]},
"%":"ClientRectList|DOMRectList"},
o_:{"^":"hX;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isq:1,
$asq:function(){return[W.bc]},
$ask:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$asn:function(){return[W.bc]},
"%":"CSSRuleList"},
o0:{"^":"h4;",
gt:function(a){return a.height},
gl:function(a){return a.width},
gm:function(a){return a.x},
gp:function(a){return a.y},
n:function(a){return this.gm(a).$0()},
q:function(a){return this.gp(a).$0()},
"%":"DOMRect"},
o1:{"^":"hJ;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isq:1,
$asq:function(){return[W.bf]},
$ask:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$asn:function(){return[W.bf]},
"%":"GamepadList"},
o2:{"^":"hM;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isq:1,
$asq:function(){return[W.C]},
$ask:function(){return[W.C]},
$isj:1,
$asj:function(){return[W.C]},
$asn:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
o3:{"^":"hK;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aX]},
$isi:1,
$asi:function(){return[W.aX]},
$isq:1,
$asq:function(){return[W.aX]},
$ask:function(){return[W.aX]},
$isj:1,
$asj:function(){return[W.aX]},
$asn:function(){return[W.aX]},
"%":"SpeechRecognitionResultList"},
o4:{"^":"hE;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isq:1,
$asq:function(){return[W.bn]},
$ask:function(){return[W.bn]},
$isj:1,
$asj:function(){return[W.bn]},
$asn:function(){return[W.bn]},
"%":"StyleSheetList"},
jN:{"^":"Q;$ti",
ak:function(a,b,c,d){return W.af(this.a,this.b,a,!1)},
cY:function(a,b,c){return this.ak(a,null,b,c)}},
jK:{"^":"jN;a,b,c,$ti"},
jO:{"^":"j7;a,b,c,d,e",
dN:function(a,b,c,d){this.cF()},
aY:function(a){if(this.b==null)return
this.cH()
this.b=null
this.d=null
return},
bC:function(a,b){if(this.b==null)return;++this.a
this.cH()},
d2:function(a){return this.bC(a,null)},
gbx:function(){return this.a>0},
d5:function(a){if(this.b==null||this.a<=0)return;--this.a
this.cF()},
cF:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
if(y)J.f5(x,this.c,z,!1)}},
cH:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.f6(x,this.c,z,!1)}},
B:{
af:function(a,b,c,d){var z=new W.jO(0,a,b,c==null?null:W.cV(new W.jP(c)),!1)
z.dN(a,b,c,!1)
return z}}},
jP:{"^":"e:1;a",
$1:[function(a){return this.a.$1(a)},null,null,2,0,null,7,"call"]},
n:{"^":"b;$ti",
gI:function(a){return new W.ha(a,this.gh(a),-1,null)},
H:function(a,b){throw H.a(new P.h("Cannot add to immutable List."))}},
ha:{"^":"b;a,b,c,d",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aH(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gw:function(){return this.d}},
jF:{"^":"b;a",$isf:1,$isD:1,B:{
jG:function(a){if(a===window)return a
else return new W.jF(a)}}},
dv:{"^":"D+k;"},
dw:{"^":"D+k;"},
dx:{"^":"D+k;"},
dy:{"^":"dx+n;"},
dz:{"^":"dw+n;"},
dA:{"^":"dv+n;"},
hj:{"^":"f+fM;"},
hp:{"^":"f+k;"},
hw:{"^":"f+k;"},
hx:{"^":"f+k;"},
hy:{"^":"f+k;"},
hz:{"^":"f+k;"},
hA:{"^":"f+k;"},
hB:{"^":"f+k;"},
hC:{"^":"f+k;"},
hD:{"^":"f+k;"},
hk:{"^":"f+k;"},
hq:{"^":"f+k;"},
hr:{"^":"f+k;"},
ht:{"^":"f+k;"},
hu:{"^":"f+k;"},
hv:{"^":"f+k;"},
hE:{"^":"hx+n;"},
hF:{"^":"hq+n;"},
hG:{"^":"hr+n;"},
hQ:{"^":"hp+n;"},
hO:{"^":"hu+n;"},
hT:{"^":"hk+n;"},
hP:{"^":"hB+n;"},
hV:{"^":"hC+n;"},
hW:{"^":"hz+n;"},
hX:{"^":"hA+n;"},
hH:{"^":"hv+n;"},
hI:{"^":"hD+n;"},
hJ:{"^":"hy+n;"},
hK:{"^":"ht+n;"},
hM:{"^":"hw+n;"},
hY:{"^":"f+cy;"}}],["","",,P,{"^":"",
l3:function(a){return a},
l7:function(a){var z,y,x,w,v
if(a==null)return
z=P.au()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.cd)(y),++w){v=y[w]
z.k(0,v,a[v])}return z},
l4:function(a){var z,y
z=new P.N(0,$.o,null,[null])
y=new P.cP(z,[null])
a.then(H.ag(new P.l5(y),1))["catch"](H.ag(new P.l6(y),1))
return z},
dq:function(){var z=$.dp
if(z==null){z=J.cf(window.navigator.userAgent,"Opera",0)
$.dp=z}return z},
h1:function(){var z,y
z=$.dl
if(z!=null)return z
y=$.dm
if(y==null){y=J.cf(window.navigator.userAgent,"Firefox",0)
$.dm=y}if(y)z="-moz-"
else{y=$.dn
if(y==null){y=P.dq()!==!0&&J.cf(window.navigator.userAgent,"Trident/",0)
$.dn=y}if(y)z="-ms-"
else z=P.dq()===!0?"-o-":"-webkit-"}$.dl=z
return z},
jv:{"^":"b;",
cT:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
b2:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.dj(y,!0)
x.dG(y,!0)
return x}if(a instanceof RegExp)throw H.a(new P.cO("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.l4(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.cT(a)
x=this.b
u=x.length
if(v>=u)return H.c(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.au()
z.a=t
if(v>=u)return H.c(x,v)
x[v]=t
this.eC(a,new P.jw(z,this))
return z.a}if(a instanceof Array){s=a
v=this.cT(s)
x=this.b
if(v>=x.length)return H.c(x,v)
t=x[v]
if(t!=null)return t
u=J.R(s)
r=u.gh(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.c(x,v)
x[v]=t
for(x=J.ah(t),q=0;q<r;++q)x.k(t,q,this.b2(u.i(s,q)))
return t}return a}},
jw:{"^":"e:3;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.b2(b)
J.d5(z,a,y)
return y}},
en:{"^":"jv;a,b,c",
eC:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.cd)(z),++x){w=z[x]
b.$2(w,a[w])}}},
l5:{"^":"e:1;a",
$1:[function(a){return this.a.av(0,a)},null,null,2,0,null,0,"call"]},
l6:{"^":"e:1;a",
$1:[function(a){return this.a.cP(a)},null,null,2,0,null,0,"call"]}}],["","",,P,{"^":"",fN:{"^":"f;ai:key=","%":";IDBCursor"},lP:{"^":"fN;",
gG:function(a){return new P.en([],[],!1).b2(a.value)},
"%":"IDBCursorWithValue"},ne:{"^":"D;R:error=",
gJ:function(a){return new P.en([],[],!1).b2(a.result)},
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nI:{"^":"D;R:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
kI:function(a){var z,y
z=a.$dart_jsFunction
if(z!=null)return z
y=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.kA,a)
y[$.$get$co()]=a
a.$dart_jsFunction=y
return y},
kA:[function(a,b){var z=H.iH(a,b)
return z},null,null,4,0,null,26,27],
kU:function(a){if(typeof a=="function")return a
else return P.kI(a)}}],["","",,P,{"^":"",
ev:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k7:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
oa:[function(a,b){return Math.max(H.eM(a),H.eM(b))},"$2","ls",4,0,function(){return{func:1,args:[,,]}}],
eY:function(a){return Math.sqrt(a)},
kk:{"^":"b;a,b",
dO:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.b.N(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.b.N(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.b.N(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.b.N(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.b.N(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.b.N(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.b.N(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.aq()
this.aq()
this.aq()
this.aq()},
aq:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.b.N(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
eY:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.a(P.iR("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)===0){this.aq()
return(this.a&z)>>>0}do{this.aq()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
B:{
kl:function(a){var z=new P.kk(0,0)
z.dO(a)
return z}}},
bj:{"^":"b;m:a>,p:b>",
j:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
D:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.bj))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gF:function(a){var z,y
z=J.Y(this.a)
y=J.Y(this.b)
return P.k7(P.ev(P.ev(0,z),y))},
v:function(a,b){var z,y,x,w
z=this.a
y=J.m(b)
x=y.gm(b)
if(typeof z!=="number")return z.v()
if(typeof x!=="number")return H.t(x)
w=this.b
y=y.gp(b)
if(typeof w!=="number")return w.v()
if(typeof y!=="number")return H.t(y)
return new P.bj(z+x,w+y)},
L:function(a,b){var z,y,x,w
z=this.a
y=J.m(b)
x=y.gm(b)
if(typeof z!=="number")return z.L()
if(typeof x!=="number")return H.t(x)
w=this.b
y=y.gp(b)
if(typeof w!=="number")return w.L()
if(typeof y!=="number")return H.t(y)
return new P.bj(z-x,w-y)},
C:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new P.bj(z*b,y*b)},
n:function(a){return this.a.$0()},
q:function(a){return this.b.$0()}},
nb:{"^":"b;"},
km:{"^":"b;"},
a0:{"^":"km;"}}],["","",,P,{"^":"",lD:{"^":"f;G:value=","%":"SVGAngle"},m4:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEBlendElement"},m5:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEColorMatrixElement"},m6:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEComponentTransferElement"},m7:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFECompositeElement"},m8:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEConvolveMatrixElement"},m9:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEDiffuseLightingElement"},ma:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEDisplacementMapElement"},mb:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEFloodElement"},mc:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEGaussianBlurElement"},md:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEImageElement"},me:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEMergeElement"},mf:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEMorphologyElement"},mg:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFEOffsetElement"},mh:{"^":"A;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
K:function(a){return a.z.$0()},
"%":"SVGFEPointLightElement"},mi:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFESpecularLightingElement"},mj:{"^":"A;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
K:function(a){return a.z.$0()},
"%":"SVGFESpotLightElement"},mk:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFETileElement"},ml:{"^":"A;t:height=,J:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFETurbulenceElement"},mp:{"^":"A;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGFilterElement"},mq:{"^":"aO;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGForeignObjectElement"},hc:{"^":"aO;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aO:{"^":"A;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},my:{"^":"aO;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGImageElement"},bK:{"^":"f;G:value=","%":"SVGLength"},mE:{"^":"hS;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){return this.i(a,b)},
$isi:1,
$asi:function(){return[P.bK]},
$ask:function(){return[P.bK]},
$isj:1,
$asj:function(){return[P.bK]},
$asn:function(){return[P.bK]},
"%":"SVGLengthList"},mH:{"^":"A;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGMaskElement"},bQ:{"^":"f;G:value=","%":"SVGNumber"},mU:{"^":"hU;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){return this.i(a,b)},
$isi:1,
$asi:function(){return[P.bQ]},
$ask:function(){return[P.bQ]},
$isj:1,
$asj:function(){return[P.bQ]},
$asn:function(){return[P.bQ]},
"%":"SVGNumberList"},n0:{"^":"A;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGPatternElement"},n3:{"^":"f;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGPoint"},n4:{"^":"f;h:length=","%":"SVGPointList"},nc:{"^":"f;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGRect"},nd:{"^":"hc;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGRectElement"},nx:{"^":"hN;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){return this.i(a,b)},
$isi:1,
$asi:function(){return[P.y]},
$ask:function(){return[P.y]},
$isj:1,
$asj:function(){return[P.y]},
$asn:function(){return[P.y]},
"%":"SVGStringList"},A:{"^":"dt;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGCursorElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},ny:{"^":"aO;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGSVGElement"},jj:{"^":"aO;","%":"SVGTextPathElement;SVGTextContentElement"},nB:{"^":"jj;m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nK:{"^":"hL;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){return this.i(a,b)},
$isi:1,
$asi:function(){return[P.cM]},
$ask:function(){return[P.cM]},
$isj:1,
$asj:function(){return[P.cM]},
$asn:function(){return[P.cM]},
"%":"SVGTransformList"},nN:{"^":"aO;t:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
q:function(a){return a.y.$0()},
"%":"SVGUseElement"},hn:{"^":"f+k;"},hm:{"^":"f+k;"},ho:{"^":"f+k;"},hs:{"^":"f+k;"},hL:{"^":"hm+n;"},hN:{"^":"hn+n;"},hS:{"^":"ho+n;"},hU:{"^":"hs+n;"}}],["","",,P,{"^":"",lF:{"^":"f;h:length=","%":"AudioBuffer"},lG:{"^":"f;G:value=","%":"AudioParam"}}],["","",,P,{"^":"",cG:{"^":"f;",
fa:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.r(g)
if(!!z.$isdF||g==null)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.l3(g))
return}if(!!z.$isbI)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbF)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isem)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isdE)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.ba("Incorrect number or type of arguments"))},
f9:function(a,b,c,d,e,f,g){return this.fa(a,b,c,d,e,f,g,null,null,null)},
$iscG:1,
"%":"WebGLRenderingContext"}}],["","",,P,{"^":"",ns:{"^":"hR;",
gh:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return P.l7(a.item(b))},
k:function(a,b,c){throw H.a(new P.h("Cannot assign element of immutable List."))},
sh:function(a,b){throw H.a(new P.h("Cannot resize immutable List."))},
A:function(a,b){return this.i(a,b)},
$isi:1,
$asi:function(){return[P.bL]},
$ask:function(){return[P.bL]},
$isj:1,
$asj:function(){return[P.bL]},
$asn:function(){return[P.bL]},
"%":"SQLResultSetRowList"},hl:{"^":"f+k;"},hR:{"^":"hl+n;"}}],["","",,Z,{"^":"",
ck:function(){var z=0,y=P.a5(),x,w,v
var $async$ck=P.ab(function(a,b){if(a===1)return P.a8(b,y)
while(true)switch(z){case 0:w=Z.bC
v=new P.N(0,$.o,null,[w])
J.d8(self.Ammo(),P.kU(new Z.fs(new P.cP(v,[w]))))
x=v
z=1
break
case 1:return P.a9(x,y)}})
return P.aa($async$ck,y)},
bC:{"^":"H;","%":""},
fs:{"^":"e:19;a",
$1:[function(a){this.a.av(0,a)},null,null,2,0,null,24,"call"]},
lB:{"^":"H;","%":""},
nJ:{"^":"H;","%":""},
nO:{"^":"H;","%":""},
na:{"^":"H;","%":""},
fw:{"^":"H;","%":""},
lR:{"^":"fw;","%":""},
fF:{"^":"H;","%":""},
lS:{"^":"fF;","%":""},
lM:{"^":"H;","%":""},
m0:{"^":"H;","%":""},
lW:{"^":"H;","%":""},
fK:{"^":"H;","%":""},
nm:{"^":"fK;","%":""},
h2:{"^":"H;","%":""},
lL:{"^":"h2;","%":""},
iy:{"^":"H;","%":""},
lT:{"^":"iy;","%":""},
ng:{"^":"H;","%":""},
fG:{"^":"H;","%":""},
nf:{"^":"fG;","%":""},
dd:{"^":"H;","%":""},
fL:{"^":"dd;","%":""},
dh:{"^":"fL;","%":""},
de:{"^":"dd;","%":""},
iF:{"^":"dh;","%":""},
lI:{"^":"iF;","%":""},
nr:{"^":"dh;","%":""},
mu:{"^":"de;","%":""},
nt:{"^":"de;","%":""}}],["","",,A,{"^":"",
c7:function(a){var z,y
z=C.H.bv(a,0,new A.ld())
if(typeof z!=="number")return H.t(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ld:{"^":"e:20;",
$2:function(a,b){var z,y
z=J.F(a,J.Y(b))
if(typeof z!=="number")return H.t(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aV:{"^":"b;cm:a<",
E:function(a){var z,y
z=a.a
y=this.a
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
j:function(a){return"[0] "+this.a4(0).j(0)+"\n[1] "+this.a4(1).j(0)+"\n[2] "+this.a4(2).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=9)return H.c(z,b)
z[b]=c},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aV){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gF:function(a){return A.c7(this.a)},
a4:function(a){var z,y,x
z=new Float32Array(H.u(3))
y=this.a
if(a>=9)return H.c(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.c(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.c(y,x)
z[2]=y[x]
return new T.I(z)},
C:function(a,b){var z,y
z=new Float32Array(H.u(9))
y=new T.aV(z)
y.E(this)
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b
return y},
v:function(a,b){var z,y,x
z=new Float32Array(H.u(9))
y=new T.aV(z)
y.E(this)
x=b.gcm()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
z[3]=z[3]+x[3]
z[4]=z[4]+x[4]
z[5]=z[5]+x[5]
z[6]=z[6]+x[6]
z[7]=z[7]+x[7]
z[8]=z[8]+x[8]
return y},
L:function(a,b){var z,y,x
z=new Float32Array(H.u(9))
y=new T.aV(z)
y.E(this)
x=b.gcm()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
return y},
a5:function(a){var z,y
z=new Float32Array(H.u(9))
y=new T.aV(z)
y.E(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]
return y},
U:function(a){var z=this.a
z[0]=1
z[1]=0
z[2]=0
z[3]=0
z[4]=1
z[5]=0
z[6]=0
z[7]=0
z[8]=1}},U:{"^":"b;cn:a<",
E:function(a){var z,y
z=a.a
y=this.a
y[15]=z[15]
y[14]=z[14]
y[13]=z[13]
y[12]=z[12]
y[11]=z[11]
y[10]=z[10]
y[9]=z[9]
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
b8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=b.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
u=y+y
t=x+x
s=w+w
r=y*u
q=y*t
p=y*s
o=x*t
n=x*s
m=w*s
l=v*u
k=v*t
j=v*s
i=a.a
h=this.a
h[0]=1-(o+m)
h[1]=q+j
h[2]=p-k
h[3]=0
h[4]=q-j
h[5]=1-(r+m)
h[6]=n+l
h[7]=0
h[8]=p+k
h[9]=n-l
h[10]=1-(r+o)
h[11]=0
h[12]=i[0]
h[13]=i[1]
h[14]=i[2]
h[15]=1},
j:function(a){return"[0] "+this.a4(0).j(0)+"\n[1] "+this.a4(1).j(0)+"\n[2] "+this.a4(2).j(0)+"\n[3] "+this.a4(3).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=16)return H.c(z,b)
z[b]=c},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.U){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gF:function(a){return A.c7(this.a)},
a4:function(a){var z,y,x
z=new Float32Array(H.u(4))
y=this.a
if(a>=16)return H.c(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.c(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.c(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.c(y,x)
z[3]=y[x]
return new T.ay(z)},
a5:function(a){var z,y
z=new Float32Array(H.u(16))
y=new T.U(z)
y.E(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]
z[9]=-z[9]
z[10]=-z[10]
z[11]=-z[11]
z[12]=-z[12]
z[13]=-z[13]
z[14]=-z[14]
z[15]=-z[15]
return y},
C:function(a,b){var z=new T.U(new Float32Array(H.u(16)))
z.E(this)
z.bT(0,b,null,null)
return z},
v:function(a,b){var z,y,x
z=new Float32Array(H.u(16))
y=new T.U(z)
y.E(this)
x=b.gcn()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
z[3]=z[3]+x[3]
z[4]=z[4]+x[4]
z[5]=z[5]+x[5]
z[6]=z[6]+x[6]
z[7]=z[7]+x[7]
z[8]=z[8]+x[8]
z[9]=z[9]+x[9]
z[10]=z[10]+x[10]
z[11]=z[11]+x[11]
z[12]=z[12]+x[12]
z[13]=z[13]+x[13]
z[14]=z[14]+x[14]
z[15]=z[15]+x[15]
return y},
L:function(a,b){var z,y,x
z=new Float32Array(H.u(16))
y=new T.U(z)
y.E(this)
x=b.gcn()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
z[9]=z[9]-x[9]
z[10]=z[10]-x[10]
z[11]=z[11]-x[11]
z[12]=z[12]-x[12]
z[13]=z[13]-x[13]
z[14]=z[14]-x[14]
z[15]=z[15]-x[15]
return y},
bM:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=J.r(b)
y=!!z.$isay
x=y?b.a[3]:1
if(!!z.$isI){z=b.a
w=z[0]
v=z[1]
u=z[2]}else if(y){z=b.a
w=z[0]
v=z[1]
u=z[2]}else if(typeof b==="number"){u=d
v=c
w=b}else{w=null
v=null
u=null}z=this.a
y=z[0]
if(typeof w!=="number")return H.t(w)
t=z[4]
if(typeof v!=="number")return H.t(v)
s=z[8]
if(typeof u!=="number")return H.t(u)
r=z[12]
q=z[1]
p=z[5]
o=z[9]
n=z[13]
m=z[2]
l=z[6]
k=z[10]
j=z[14]
i=z[3]
h=z[7]
g=z[11]
f=z[15]
z[12]=y*w+t*v+s*u+r*x
z[13]=q*w+p*v+o*u+n*x
z[14]=m*w+l*v+k*u+j*x
z[15]=i*w+h*v+g*u+f*x},
bE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x[4]
v=x[8]
u=x[5]
t=x[9]
s=x[6]
r=x[10]
q=x[7]
p=x[11]
o=-y
x[4]=w*z+v*y
x[5]=u*z+t*y
x[6]=s*z+r*y
x[7]=q*z+p*y
x[8]=w*o+v*z
x[9]=u*o+t*z
x[10]=s*o+r*z
x[11]=q*o+p*z},
bF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x[0]
v=x[8]
u=-y
t=x[1]
s=x[9]
r=x[2]
q=x[10]
p=x[3]
o=x[11]
x[0]=w*z+v*u
x[1]=t*z+s*u
x[2]=r*z+q*u
x[3]=p*z+o*u
x[8]=w*y+v*z
x[9]=t*y+s*z
x[10]=r*y+q*z
x[11]=p*y+o*z},
bT:function(a,b,c,d){var z,y,x,w,v
if(b instanceof T.I){z=b.a
y=z[0]
x=z[1]
w=z[2]}else if(typeof b==="number"){w=b
x=w
y=x}else{y=null
x=null
w=null}z=this.a
v=z[0]
if(typeof y!=="number")return H.t(y)
z[0]=v*y
z[1]=z[1]*y
z[2]=z[2]*y
z[3]=z[3]*y
v=z[4]
if(typeof x!=="number")return H.t(x)
z[4]=v*x
z[5]=z[5]*x
z[6]=z[6]*x
z[7]=z[7]*x
v=z[8]
if(typeof w!=="number")return H.t(w)
z[8]=v*w
z[9]=z[9]*w
z[10]=z[10]*w
z[11]=z[11]*w
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]},
ab:function(a,b){return this.bT(a,b,null,null)},
U:function(a){var z=this.a
z[0]=1
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=1
z[6]=0
z[7]=0
z[8]=0
z[9]=0
z[10]=1
z[11]=0
z[12]=0
z[13]=0
z[14]=0
z[15]=1},
bN:function(){var z,y
z=this.a
y=z[4]
z[4]=z[1]
z[1]=y
y=z[8]
z[8]=z[2]
z[2]=y
y=z[12]
z[12]=z[3]
z[3]=y
y=z[9]
z[9]=z[6]
z[6]=y
y=z[13]
z[13]=z[7]
z[7]=y
y=z[14]
z[14]=z[11]
z[11]=y},
b6:function(a){var z,y
z=new Float32Array(H.u(9))
y=this.a
z[0]=y[0]
z[1]=y[1]
z[2]=y[2]
z[3]=y[4]
z[4]=y[5]
z[5]=y[6]
z[6]=y[8]
z[7]=y[9]
z[8]=y[10]
return new T.aV(z)},
cR:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=a8.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
u=z[4]
t=z[5]
s=z[6]
r=z[7]
q=z[8]
p=z[9]
o=z[10]
n=z[11]
m=z[12]
l=z[13]
k=z[14]
j=z[15]
i=y*t-x*u
h=y*s-w*u
g=y*r-v*u
f=x*s-w*t
e=x*r-v*t
d=w*r-v*s
c=q*l-p*m
b=q*k-o*m
a=q*j-n*m
a0=p*k-o*l
a1=p*j-n*l
a2=o*j-n*k
a3=i*a2-h*a1+g*a0+f*a-e*b+d*c
if(a3===0){this.E(a8)
return 0}a4=1/a3
a5=this.a
a5[0]=(t*a2-s*a1+r*a0)*a4
a5[1]=(-x*a2+w*a1-v*a0)*a4
a5[2]=(l*d-k*e+j*f)*a4
a5[3]=(-p*d+o*e-n*f)*a4
a6=-u
a5[4]=(a6*a2+s*a-r*b)*a4
a5[5]=(y*a2-w*a+v*b)*a4
a7=-m
a5[6]=(a7*d+k*g-j*h)*a4
a5[7]=(q*d-o*g+n*h)*a4
a5[8]=(u*a1-t*a+r*c)*a4
a5[9]=(-y*a1+x*a-v*c)*a4
a5[10]=(m*e-l*g+j*i)*a4
a5[11]=(-q*e+p*g-n*i)*a4
a5[12]=(a6*a0+t*b-s*c)*a4
a5[13]=(y*a0-x*b+w*c)*a4
a5[14]=(a7*f+l*h-k*i)*a4
a5[15]=(q*f-p*h+o*i)*a4
return a3},
bA:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.a
y=z[0]
x=z[4]
w=z[8]
v=z[12]
u=z[1]
t=z[5]
s=z[9]
r=z[13]
q=z[2]
p=z[6]
o=z[10]
n=z[14]
m=z[3]
l=z[7]
k=z[11]
j=z[15]
i=a9.a
h=i[0]
g=i[4]
f=i[8]
e=i[12]
d=i[1]
c=i[5]
b=i[9]
a=i[13]
a0=i[2]
a1=i[6]
a2=i[10]
a3=i[14]
a4=i[3]
a5=i[7]
a6=i[11]
a7=i[15]
z[0]=y*h+x*d+w*a0+v*a4
z[4]=y*g+x*c+w*a1+v*a5
z[8]=y*f+x*b+w*a2+v*a6
z[12]=y*e+x*a+w*a3+v*a7
z[1]=u*h+t*d+s*a0+r*a4
z[5]=u*g+t*c+s*a1+r*a5
z[9]=u*f+t*b+s*a2+r*a6
z[13]=u*e+t*a+s*a3+r*a7
z[2]=q*h+p*d+o*a0+n*a4
z[6]=q*g+p*c+o*a1+n*a5
z[10]=q*f+p*b+o*a2+n*a6
z[14]=q*e+p*a+o*a3+n*a7
z[3]=m*h+l*d+k*a0+j*a4
z[7]=m*g+l*c+k*a1+j*a5
z[11]=m*f+l*b+k*a2+j*a6
z[15]=m*e+l*a+k*a3+j*a7}},ax:{"^":"b;bp:a<",
gm:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
ga3:function(a){return this.a[2]},
gam:function(a){return this.a[3]},
E:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
bX:function(a,b,c,d){var z=this.a
z[0]=a
z[1]=b
z[2]=c
z[3]=d},
gh:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
C:function(a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=this.a
y=z[3]
x=z[2]
w=z[1]
v=z[0]
u=a1.gbp()
t=u.i(0,3)
s=u.i(0,2)
r=u.i(0,1)
q=u.i(0,0)
z=C.c.C(y,q)
p=C.c.C(v,t)
o=C.c.C(w,s)
n=C.c.C(x,r)
m=C.c.C(y,r)
l=C.c.C(w,t)
k=C.c.C(x,q)
j=C.c.C(v,s)
i=C.c.C(y,s)
h=C.c.C(x,t)
g=C.c.C(v,r)
f=C.c.C(w,q)
e=C.c.C(y,t)
d=C.c.C(v,q)
c=C.c.C(w,r)
b=C.c.C(x,s)
a=new T.ax(new Float32Array(H.u(4)))
a.bX(z+p+o-n,m+l+k-j,i+h+g-f,e-d-c-b)
return a},
v:function(a,b){var z,y,x
z=new Float32Array(H.u(4))
y=new T.ax(z)
y.E(this)
x=b.gbp()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
z[3]=z[3]+x[3]
return y},
L:function(a,b){var z,y,x
z=new Float32Array(H.u(4))
y=new T.ax(z)
y.E(this)
x=b.gbp()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
a5:function(a){var z,y
z=new Float32Array(H.u(4))
y=new T.ax(z)
y.E(this)
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]
return y},
i:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=4)return H.c(z,b)
z[b]=c},
j:function(a){var z=this.a
return H.d(z[0])+", "+H.d(z[1])+", "+H.d(z[2])+" @ "+H.d(z[3])},
n:function(a){return this.gm(this).$0()},
q:function(a){return this.gp(this).$0()},
K:function(a){return this.ga3(this).$0()},
ay:function(a){return this.gam(this).$0()}},iX:{"^":"b;a,b",
dJ:function(a){var z,y,x
z=P.x
y=P.cx(256,new T.iZ(a),!1,z)
x=P.cx(y.length*2,new T.j_(y),!1,z)
this.a=x
this.b=P.cx(x.length,new T.j0(this),!1,z)},
B:{
iY:function(a){var z,y
z={}
z.a=a
y=new T.iX(null,null)
y.dJ(z)
return y}}},iZ:{"^":"e:1;a",
$1:function(a){return this.a.a.eY(256)}},j_:{"^":"e:8;a",
$1:function(a){var z=this.a
return z[C.b.aM(a,z.length)]}},j0:{"^":"e:8;a",
$1:function(a){var z=this.a.a
if(a>=z.length)return H.c(z,a)
return J.f1(z[a],12)}},I:{"^":"b;cI:a<",
bW:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
E:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.I){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gF:function(a){return A.c7(this.a)},
a5:function(a){var z,y
z=new Float32Array(H.u(3))
y=new T.I(z)
y.E(this)
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]
return y},
L:function(a,b){var z,y,x
z=new Float32Array(H.u(3))
y=new T.I(z)
y.E(this)
x=b.gcI()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
v:function(a,b){var z,y,x
z=new Float32Array(H.u(3))
y=new T.I(z)
y.E(this)
x=b.gcI()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
return y},
C:function(a,b){var z=new T.I(new Float32Array(H.u(3)))
z.E(this)
z.ab(0,b)
return z},
i:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=3)return H.c(z,b)
z[b]=c},
gh:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
eZ:function(a){var z,y,x,w,v,u
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
if(v===0)return 0
u=1/v
z[0]=z[0]*u
z[1]=z[1]*u
z[2]=z[2]*u
return v},
ab:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
aG:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])},
gm:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
ga3:function(a){return this.a[2]},
n:function(a){return this.gm(this).$0()},
q:function(a){return this.gp(this).$0()},
K:function(a){return this.ga3(this).$0()}},ay:{"^":"b;cJ:a<",
U:function(a){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=1},
E:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
j:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ay){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gF:function(a){return A.c7(this.a)},
a5:function(a){var z,y
z=new Float32Array(H.u(4))
y=new T.ay(z)
y.E(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
return y},
L:function(a,b){var z,y,x
z=new Float32Array(H.u(4))
y=new T.ay(z)
y.E(this)
x=b.gcJ()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
v:function(a,b){var z,y,x
z=new Float32Array(H.u(4))
y=new T.ay(z)
y.E(this)
x=b.gcJ()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
z[3]=z[3]+x[3]
return y},
C:function(a,b){var z=new T.ay(new Float32Array(H.u(4)))
z.E(this)
z.ab(0,b)
return z},
i:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=4)return H.c(z,b)
z[b]=c},
gh:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ab:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
aG:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])
z[3]=Math.floor(z[3])},
gm:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
ga3:function(a){return this.a[2]},
gam:function(a){return this.a[3]},
n:function(a){return this.gm(this).$0()},
q:function(a){return this.gp(this).$0()},
K:function(a){return this.ga3(this).$0()},
ay:function(a){return this.gam(this).$0()}}}],["","",,Q,{"^":"",fz:{"^":"b;m:a>,b,l:c>,aZ:d<,e,f",
gbI:function(){return this.e},
ga9:function(){return this.f},
dF:function(a2,a3,a4,a5,a6,a7,a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[P.a2]
y=H.l([],z)
x=H.l([],[P.x])
w=H.l([],z)
v=H.l([],z)
for(u=this.a,z=this.c,t=J.c5(u),s=this.b,r=this.d,q=J.c5(s),p=u;o=J.z(p),o.aa(p,t.v(u,z));p=o.v(p,1))for(n=s;m=J.z(n),m.aa(n,q.v(s,r));n=m.v(n,1)){l=a8.$2(p,n)
k=a8.$2(p,m.v(n,1))
j=a8.$2(o.v(p,1),m.v(n,1))
i=a8.$2(o.v(p,1),n)
C.a.H(y,[p,l,n,p,k,m.v(n,1),o.v(p,1),j,m.v(n,1),o.v(p,1),i,n])}z=y.length
if(C.b.aM(z,12)!==0)throw H.a(new P.fu("Total vertex component count for chunks must be divisible by 12. "+z+" vertex components were created."))
h=z/12
for(g=0;g<h;++g){f=g*4
z=f+2
C.a.H(x,[f,f+1,z,f,z,f+3])
C.a.H(w,[0,0,1,0,1,1,0,1])
e=g*12
z=y.length
if(e>=z)return H.c(y,e)
t=y[e]
r=e+1
if(r>=z)return H.c(y,r)
r=y[r]
q=e+2
if(q>=z)return H.c(y,q)
q=y[q]
z=new Float32Array(3)
z[0]=t
z[1]=r
z[2]=q
q=e+3
r=y.length
if(q>=r)return H.c(y,q)
q=y[q]
t=e+4
if(t>=r)return H.c(y,t)
t=y[t]
o=e+5
if(o>=r)return H.c(y,o)
o=y[o]
r=new Float32Array(3)
r[0]=q
r[1]=t
r[2]=o
o=e+6
t=y.length
if(o>=t)return H.c(y,o)
o=y[o]
q=e+7
if(q>=t)return H.c(y,q)
q=y[q]
m=e+8
if(m>=t)return H.c(y,m)
m=y[m]
t=new Float32Array(3)
t[0]=o
t[1]=q
t[2]=m
q=new Float32Array(3)
new T.I(q).E(new T.I(r))
q[0]=q[0]-z[0]
q[1]=q[1]-z[1]
q[2]=q[2]-z[2]
r=new Float32Array(3)
new T.I(r).E(new T.I(t))
r[0]=r[0]-z[0]
r[1]=r[1]-z[1]
r[2]=r[2]-z[2]
d=q[0]
c=q[1]
b=q[2]
a=r[0]
a0=r[1]
a1=r[2]
z=new Float32Array(3)
z[0]=c*a1-b*a0
z[1]=b*a-d*a1
z[2]=d*a0-c*a
new T.I(z).eZ(0)
t=z[0]
r=z[1]
z=z[2]
C.a.H(v,[t,r,z,t,r,z,t,r,z,t,r,z])}this.f=Q.cz(a2.d,y,w,v,x)},
bS:function(){var z,y,x,w,v
for(z=this.f.a,y=z.length,x=17976931348623157e292,w=1;w<y;w+=3){v=z[w]
if(v<x)x=v}return x},
bR:function(){var z,y,x,w,v
for(z=this.f.a,y=z.length,x=-17976931348623157e292,w=1;w<y;w+=3){v=z[w]
if(v>x)x=v}return x},
dg:function(){var z,y,x,w,v,u,t,s
z=this.c
y=H.u(C.b.aw((z+1)*(this.d+1)))
x=new Float32Array(y)
for(w=0;w<this.f.a.length;w+=12){v=C.b.N(w,12)
u=C.c.aw(C.b.aM(v,z)*z+v/z)
t=this.f.a
s=w+1
if(s>=t.length)return H.c(t,s)
s=t[s]
if(u<0||u>=y)return H.c(x,u)
x[u]=s}return x},
n:function(a){return this.a.$0()},
K:function(a){return this.b.$0()},
B:{
fA:function(a,b,c,d,e,f,g){var z=new Q.fz(c,d,e,f,b,null)
z.dF(a,b,c,d,e,f,g)
return z},
bG:function(a,b,c,d,e,f){var z=0,y=P.a5(),x,w,v,u,t,s,r,q
var $async$bG=P.ab(function(g,h){if(g===1)return P.a8(h,y)
while(true)switch(z){case 0:w=a.d
z=3
return P.a1(a.b_("asset/resources.png"),$async$bG)
case 3:v=h
u=new V.jk(null,null)
t=w.createTexture()
w.bindTexture(3553,t)
C.I.f9(w,3553,0,6408,6408,5121,v)
s=J.m(v)
r=s.gl(v)
q=J.z(r)
if(q.bP(r,q.L(r,1))===0){s=s.gt(v)
r=J.z(s)
s=r.bP(s,r.L(s,1))===0}else s=!1
if(s)w.generateMipmap(3553)
else{w.texParameteri(3553,10242,33071)
w.texParameteri(3553,10243,33071)
w.texParameteri(3553,10241,9729)}u.a=t
u.b=v
x=Q.fA(a,u,b,c,d,e,f)
z=1
break
case 1:return P.a9(x,y)}})
return P.aa($async$bG,y)}}}}],["","",,N,{"^":"",fR:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy",
c4:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fx
if(z==null)y=new self.Ammo.btVector3(0,0,0)
else{z=z.b
x=new self.Ammo.btTransform()
J.b8(J.b7(z),x)
y=J.ch(x)}z=this.c.a
w=new self.Ammo.btSphereShape(z)
v=new self.Ammo.btTransform()
z=J.m(v)
z.U(v)
u=new self.Ammo.btVector3(0,0,0)
J.f7(w,1,u)
t=a==null?J.F(J.fp(y),Math.cos(this.y-1.5707963267948966)*Math.cos(this.x)*10):a
s=c==null?J.ao(J.fq(y),Math.sin(this.x)*10):c
r=J.F(s,this.c.a)
q=e==null?J.F(J.fr(y),Math.sin(this.y-1.5707963267948966)*Math.cos(this.x)*10):e
z.b9(v,new self.Ammo.btVector3(t,r,q))
p=new self.Ammo.btDefaultMotionState(v)
o=new self.Ammo.btRigidBodyConstructionInfo(1,p,w,u)
n=new self.Ammo.btRigidBody(o)
z=J.m(n)
z.bV(n,0,0)
z.bU(n,new self.Ammo.btVector3(b,d,f))
J.ce(this.dy,n)
this.fr.push(new X.dD(this.c.b,n))},
dS:function(a,b,c){return this.c4(null,a,null,b,null,c)},
dR:function(a,b,c){return this.c4(a,0,b,0,c,0)},
ec:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a
y=z.a
z.d.viewport(0,0,y.width,y.height)
z.d.clearColor(0,0,0,1)
z.d.clearDepth(1)
z.d.enable(2929)
z.d.depthFunc(515)
z.d.clear(16640)
for(y=this.b,y=y.gbO(y),y=y.gI(y);y.u();){x=y.gw()
z.d.bindBuffer(34962,x.ga9().e)
z.d.vertexAttribPointer(this.e.b,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.e.b)
z.d.bindBuffer(34962,x.ga9().f)
z.d.vertexAttribPointer(this.e.c,2,5126,!1,0,0)
z.d.enableVertexAttribArray(this.e.c)
z.d.bindBuffer(34962,x.ga9().r)
z.d.vertexAttribPointer(this.e.d,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.e.d)
z.d.bindBuffer(34963,x.ga9().x)
z.d.useProgram(this.e.a)
w=new self.Ammo.btTransform()
J.b8(J.b7(this.fx.b),w)
v=J.m(w)
u=v.b5(w)
t=v.b6(w)
v=new Float32Array(3)
v[0]=0
v[1]=0
v[2]=0
s=J.m(t)
r=s.n(t)
q=s.q(t)
p=s.K(t)
s=s.ay(t)
o=new Float32Array(4)
o[0]=r
o[1]=q
o[2]=p
o[3]=s
s=new Float32Array(3)
s[0]=1
s[1]=1
s[2]=1
n=new T.U(new Float32Array(16))
n.b8(new T.I(v),new T.ax(o))
n.ab(0,new T.I(s))
v=new Float32Array(16)
m=new T.U(v)
m.U(0)
m.bE(this.x)
m.bF(this.y)
s=J.m(u)
m.bM(0,J.ac(s.n(u)),J.ac(s.q(u)),J.ac(s.K(u)))
m.bA(0,n)
s=new Float32Array(16)
l=new T.U(s)
l.U(0)
l.bN()
z.d.uniformMatrix4fv(this.e.e,!1,this.r.a)
z.d.uniformMatrix4fv(this.e.f,!1,v)
z.d.uniformMatrix4fv(this.e.r,!1,s)
z.d.activeTexture(33984)
z.d.bindTexture(3553,x.gbI().gbI())
z.d.uniform1i(this.e.x,0)
z.d.drawElements(4,x.ga9().d.length,5123,0)}for(y=C.a.gI(this.fr),v=new H.jt(y,new N.fV(this));v.u();){k=y.gw()
z.d.bindBuffer(34962,this.c.b.e)
z.d.vertexAttribPointer(this.e.b,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.e.b)
z.d.bindBuffer(34962,this.c.b.r)
z.d.vertexAttribPointer(this.e.d,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.e.d)
z.d.bindBuffer(34963,this.c.b.x)
z.d.useProgram(this.e.a)
w=new self.Ammo.btTransform()
J.b8(J.b7(k.gf5()),w)
s=J.m(w)
j=s.b5(w)
i=s.b6(w)
s=this.fx.b
h=new self.Ammo.btTransform()
J.b8(J.b7(s),h)
g=J.ch(h)
s=new Float32Array(3)
s[0]=0
s[1]=0
s[2]=0
r=J.m(i)
q=r.n(i)
p=r.q(i)
o=r.K(i)
r=r.ay(i)
f=new Float32Array(4)
f[0]=q
f[1]=p
f[2]=o
f[3]=r
r=new Float32Array(3)
r[0]=1
r[1]=1
r[2]=1
q=new Float32Array(16)
n=new T.U(q)
n.b8(new T.I(s),new T.ax(f))
n.ab(0,new T.I(r))
s=new Float32Array(16)
m=new T.U(s)
m.U(0)
m.bE(this.x)
m.bF(this.y)
r=J.m(g)
p=J.m(j)
m.bM(0,J.F(J.ac(r.n(g)),p.n(j)),J.F(J.ac(r.q(g)),p.q(j)),J.F(J.ac(r.K(g)),p.K(j)))
m.bA(0,n)
n.cR(n)
n.bN()
z.d.uniformMatrix4fv(this.e.e,!1,this.r.a)
z.d.uniformMatrix4fv(this.e.f,!1,s)
z.d.uniformMatrix4fv(this.e.r,!1,q)
z.d.drawElements(4,this.c.b.d.length,5123,0)}y=this.d
z.d.bindBuffer(34962,y.gfc())
z.d.vertexAttribPointer(this.e.b,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.e.b)
z.d.bindBuffer(34962,y.gf_())
z.d.vertexAttribPointer(this.e.d,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.e.d)
z.d.bindBuffer(34963,y.geN())
z.d.useProgram(this.e.a)
g=N.dk(this.fx.b)
v=new T.I(new Float32Array(H.u(3)))
v.bW(0,0,0)
s=new T.ax(new Float32Array(H.u(4)))
s.bX(0,0,0,0)
r=new T.I(new Float32Array(H.u(3)))
r.bW(1,1,1)
q=new Float32Array(H.u(16))
n=new T.U(q)
n.b8(v,s)
n.ab(0,r)
r=new Float32Array(H.u(16))
m=new T.U(r)
m.U(0)
m.bE(this.x)
m.bF(this.y)
s=J.m(g)
m.bM(0,J.ac(s.n(g)),J.ac(s.q(g)),J.ac(s.K(g)))
m.bA(0,n)
n.cR(n)
n.bN()
z.d.uniformMatrix4fv(this.e.e,!1,this.r.a)
z.d.uniformMatrix4fv(this.e.f,!1,r)
z.d.uniformMatrix4fv(this.e.r,!1,q)
z.d.drawElements(4,y.geO().length,5123,0)},
aT:function(){var z=0,y=P.a5(),x,w=this,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$aT=P.ab(function(a0,a1){if(a0===1)return P.a8(a1,y)
while(true)$async$outer:switch(z){case 0:v=N.dk(w.fx.b)
u=J.m(v)
t=J.bz(J.d4(u.n(v),100),100)
s=J.bz(J.d4(u.K(v),100),100)
u=J.z(t)
if(u.gbw(t)||J.fc(s)){z=1
break}u=J.f0(J.bz(u.v(t,s),J.F(u.v(t,s),1)),2)
if(typeof s!=="number"){x=H.t(s)
z=1
break}r=u+s
u=w.b
z=!u.aD(0,r)?3:4
break
case 3:b=u
a=r
z=5
return P.a1(Q.bG(w.a,t,s,100,100,new N.fS(w)),$async$aT)
case 5:b.k(0,a,a1)
q=new self.Ammo.btTransform()
p=J.m(q)
p.U(q)
o=J.F(J.bz(J.b6(u.i(0,r)),0.5),t)
n=u.i(0,r).bS()
m=u.i(0,r).bR()
l=u.i(0,r).gaZ()
p.b9(q,new self.Ammo.btVector3(o,(n+m)*0.5,l*0.5+s))
l=J.ci(J.b6(u.i(0,r)))
m=C.b.aw(u.i(0,r).gaZ())
k=self.Ammo._malloc(4*(l+1)*(m+1))
j=u.i(0,r).dg()
for(p=J.c5(k),o=j.length,i=0;i<=u.i(0,r).gaZ();++i){h=0
while(!0){n=J.b6(u.i(0,r))
if(typeof n!=="number"){x=H.t(n)
z=1
break $async$outer}if(!(h<=n))break
g=i*(J.ci(J.b6(u.i(0,r)))+1)+h
n=self.Ammo.HEAPF32
m=J.f2(p.v(k,g*4),2)
if(g<0||g>=o){x=H.c(j,g)
z=1
break $async$outer}J.d5(n,m,j[g]);++h}}p=J.ci(J.b6(u.i(0,r)))
o=C.b.aw(u.i(0,r).gaZ())
n=u.i(0,r).bS()
u=u.i(0,r).bR()
f=new self.Ammo.btHeightfieldTerrainShape(p,o,k,1,n,u,1,"PHY_FLOAT",!1)
e=new self.Ammo.btDefaultMotionState(q)
u=new self.Ammo.btVector3(0,0,0)
d=new self.Ammo.btRigidBodyConstructionInfo(0,e,f,u)
c=new self.Ammo.btRigidBody(d)
J.ce(w.dy,c)
case 4:case 1:return P.a9(x,y)}})
return P.aa($async$aT,y)},
aX:function(a,b){var z=0,y=P.a5(),x,w=this,v,u,t,s,r,q,p,o,n,m,l,k
var $async$aX=P.ab(function(c,d){if(c===1)return P.a8(d,y)
while(true)$async$outer:switch(z){case 0:z=3
return P.a1(w.aT(),$async$aX)
case 3:v=J.fe(w.fx.b)
u=J.m(v)
t=u.n(v)
s=u.q(v)
r=u.K(v)
u=w.z
if(u.i(0," ")===!0)s=J.F(s,1)
if(u.i(0,"w")===!0){t=J.F(t,Math.cos(w.y-1.5707963267948966)*Math.cos(w.x))
r=J.F(r,Math.sin(w.y-1.5707963267948966)*Math.cos(w.x))}if(u.i(0,"s")===!0){t=J.ao(t,Math.cos(w.y-1.5707963267948966)*Math.cos(w.x))
r=J.ao(r,Math.sin(w.y-1.5707963267948966)*Math.cos(w.x))}if(J.by(t,-2))t=-2
if(J.bx(t,2))t=2
if(J.by(s,-2))s=-2
if(J.bx(s,2))s=2
if(J.by(r,-2))r=-2
if(J.bx(r,2))r=2
if(!J.S(t,0)||!J.S(s,0)||!J.S(r,0))J.fk(w.fx.b,new self.Ammo.btVector3(t,s,r))
for(u=w.Q,q=u.length,p=0;p<q;++p){o=u[p]
n=o.b===C.r?-1:1
m=w.x
if(typeof b!=="number"){x=H.t(b)
z=1
break $async$outer}l=0.2*b
m+=l*o.d*n
w.x=m
k=o.a===C.q?-1:1
w.y=w.y+l*o.c*k
if(m<-1.5707963267948966){w.x=-1.5707963267948966
m=-1.5707963267948966}if(m>1.5707963267948966)w.x=1.5707963267948966}C.a.sh(u,0)
case 1:return P.a9(x,y)}})
return P.aa($async$aX,y)},
bo:[function(a){var z=0,y=P.a5(),x=this,w,v,u
var $async$bo=P.ab(function(b,c){if(b===1)return P.a8(c,y)
while(true)switch(z){case 0:++x.fy
w=J.z(a)
if(!J.S(w.ad(a,1000),J.f9(x.ch))){v=""+x.fy+" updates/sec"
if(typeof console!="undefined")console.log(v)
x.fy=0}a=w.C(a,0.001)
w=J.z(a)
u=w.L(a,x.ch)
x.ch=a
J.fm(x.dy,w.fb(a),10)
z=2
return P.a1(x.aX(0,u),$async$bo)
case 2:x.ec()
w=window
C.f.cf(w)
C.f.cw(w,W.cV(x.gcu()))
return P.a9(null,y)}})
return P.aa($async$bo,y)},"$1","gcu",2,0,21,25],
ap:function(){var z=0,y=P.a5(),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$ap=P.ab(function(a6,a7){if(a6===1){v=a7
z=w}while(true)switch(z){case 0:w=4
a5=J
z=7
return P.a1(W.cr("asset/shader/3d_vertex_shader.glsl",null,null,null,null,null,null,null),$async$ap)
case 7:s=a5.cg(a7)
a5=J
z=8
return P.a1(W.cr("asset/shader/3d_fragment_shader.glsl",null,null,null,null,null,null,null),$async$ap)
case 8:r=a5.cg(a7)
l=t.a
k=l.d
j=k.createShader(35633)
k.shaderSource(j,s)
k.compileShader(j)
if(H.cW(k.getShaderParameter(j,35713))!==!0){i=k.getShaderInfoLog(j)
k.deleteShader(j)
H.v(P.as("Unable to compile vertex shader: "+H.d(i)))}h=k.createShader(35632)
k.shaderSource(h,r)
k.compileShader(h)
if(H.cW(k.getShaderParameter(h,35713))!==!0){i=k.getShaderInfoLog(h)
k.deleteShader(h)
H.v(P.as("Unable to compile fragment shader: "+H.d(i)))}g=k.createProgram()
k.attachShader(g,j)
k.attachShader(g,h)
k.linkProgram(g)
if(H.cW(k.getProgramParameter(g,35714))!==!0){i=k.getProgramInfoLog(g)
k.deleteProgram(g)
H.v(P.as("Unable to link program: "+H.d(i)))}q=g
t.e=new T.iQ(q,l.d.getAttribLocation(q,"aVertexPosition"),l.d.getAttribLocation(q,"aTextureCoord"),l.d.getAttribLocation(q,"aVertexNormal"),l.d.getUniformLocation(q,"uProjectionMatrix"),l.d.getUniformLocation(q,"uModelViewMatrix"),l.d.getUniformLocation(q,"uNormalMatrix"),l.d.getUniformLocation(q,"uSampler"))
w=2
z=6
break
case 4:w=3
a3=v
p=H.J(a3)
o="Failed to load shader source files.\n"+H.d(J.a3(p))
if(typeof console!="undefined")console.error(o)
x=P.cq(o,null,P.y)
z=1
break
z=6
break
case 3:z=2
break
case 6:w=10
a5=t
z=13
return P.a1(Q.bO(t.a.d,"asset/models/apple/data.obj"),$async$ap)
case 13:a5.d=a7
w=2
z=12
break
case 10:w=9
a4=v
n=H.J(a4)
m="Failed to load model.\n"+H.d(J.a3(n))
if(typeof console!="undefined")console.error(m)
x=P.cq(m,null,P.y)
z=1
break
z=12
break
case 9:z=2
break
case 12:l=t.a
k=l.dc()
e=new Float32Array(H.u(16))
d=Math.tan(0.39269908169872414)
e[0]=0
e[1]=0
e[2]=0
e[3]=0
e[4]=0
e[5]=0
e[6]=0
e[7]=0
e[8]=0
e[9]=0
e[10]=0
e[11]=0
e[12]=0
e[13]=0
e[14]=0
e[15]=0
e[0]=1/(d*k)
e[5]=1/d
e[10]=-1.0002000200020003
e[11]=-1
e[14]=-0.20002000200020004
t.r=new T.U(e)
t.c=S.j3(l.d,2)
l=new self.Ammo.btDefaultCollisionConfiguration()
t.cx=l
t.cy=new self.Ammo.btCollisionDispatcher(l)
t.db=new self.Ammo.btDbvtBroadphase()
l=new self.Ammo.btSequentialImpulseConstraintSolver()
t.dx=l
e=t.cy
k=t.db
c=t.cx
c=new self.Ammo.btDiscreteDynamicsWorld(e,k,l,c)
t.dy=c
J.fj(c,new self.Ammo.btVector3(0,-0.2,0))
c=new self.Ammo.btVector3(2,2,2)
b=new self.Ammo.btBoxShape(c)
a=new self.Ammo.btTransform()
c=J.m(a)
c.U(a)
c.b9(a,new self.Ammo.btVector3(40,40,40))
a0=new self.Ammo.btDefaultMotionState(a)
c=new self.Ammo.btVector3(0,0,0)
a1=new self.Ammo.btRigidBodyConstructionInfo(1,a0,b,c)
a2=new self.Ammo.btRigidBody(a1)
J.fl(a2,0,0)
J.ce(t.dy,a2)
c=t.fr
c.push(new X.dD(null,a2))
t.fx=C.a.ga7(c)
case 1:return P.a9(x,y)
case 2:return P.a8(v,y)}})
return P.aa($async$ap,y)},
aA:function(a){var z=0,y=P.a5(),x=this,w,v
var $async$aA=P.ab(function(b,c){if(b===1)return P.a8(c,y)
while(true)switch(z){case 0:W.af(window,"keydown",new N.fW(x),!1)
W.af(window,"keyup",new N.fX(x),!1)
W.af(window,"mousemove",new N.fY(x),!1)
w=x.a
w.cS()
z=2
return P.a1(x.ap(),$async$aA)
case 2:w=w.a
w.toString
W.af(w,"mousedown",new N.fZ(x),!1)
W.af(window,"mouseup",new N.h_(x),!1)
W.af(window,"resize",new N.h0(x),!1)
w=window
z=3
return P.a1(x.gcu(),$async$aA)
case 3:v=c
C.f.cf(w)
C.f.cw(w,W.cV(v))
return P.a9(null,y)}})
return P.aa($async$aA,y)},
B:{
dk:function(a){var z=new self.Ammo.btTransform()
J.b8(J.b7(a),z)
return J.ch(z)},
fT:function(a7,a8,a9,b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(z=J.z(a8),y=J.z(a9),x=0,w=0;w<4;++w){v=Math.pow(2,w)
u=v*(z.az(a8,100)-0.5)
t=v*(y.az(a9,100)-0.5)
s=$.$get$e3()
if(typeof s!=="number")return H.t(s)
r=(u+t)*s
q=C.c.aG(u+r)
p=C.c.aG(t+r)
s=$.$get$e4()
if(typeof s!=="number")return H.t(s)
o=(q+p)*s
n=u-(q-o)
m=t-(p-o)
if(n>m){l=1
k=0}else{l=0
k=1}j=n-l+s
i=m-k+s
h=n-1+2*s
g=m-1+2*s
f=q&255
e=p&255
u=a7.b
t=a7.a
s=t.length
if(e>=s)return H.c(t,e)
d=t[e]
if(typeof d!=="number")return H.t(d)
d=f+d
c=u.length
if(d>>>0!==d||d>=c)return H.c(u,d)
b=u[d]
d=e+k
if(d>=s)return H.c(t,d)
d=t[d]
if(typeof d!=="number")return H.t(d)
d=f+l+d
if(d>>>0!==d||d>=c)return H.c(u,d)
a=u[d]
d=e+1
if(d>=s)return H.c(t,d)
d=t[d]
if(typeof d!=="number")return H.t(d)
d=f+1+d
if(d>>>0!==d||d>=c)return H.c(u,d)
a0=u[d]
a1=0.5-n*n-m*m
if(a1<0)a2=0
else{a1*=a1
u=$.$get$bU()
if(b>>>0!==b||b>=12)return H.c(u,b)
u=u[b]
a2=a1*a1*(u[0]*n+u[1]*m)}a3=0.5-j*j-i*i
if(a3<0)a4=0
else{a3*=a3
u=$.$get$bU()
if(a>>>0!==a||a>=12)return H.c(u,a)
u=u[a]
a4=a3*a3*(u[0]*j+u[1]*i)}a5=0.5-h*h-g*g
if(a5<0)a6=0
else{a5*=a5
u=$.$get$bU()
if(a0>>>0!==a0||a0>=12)return H.c(u,a0)
u=u[a0]
a6=a5*a5*(u[0]*h+u[1]*g)}x+=b0[w]*(70*(a2+a4+a6)/2+0.5)}z=C.a.bv(b0,0,new N.fU())
if(typeof z!=="number")return H.t(z)
return Math.pow(x/z*8,2.2)-25}}},fV:{"^":"e:1;a",
$1:function(a){return!J.S(a,this.a.fx)&&a.ga9()!=null}},fS:{"^":"e:3;a",
$2:function(a,b){return N.fT(this.a.f,a,b,[1,0.25,0.125,0.0625])}},fU:{"^":"e:22;",
$2:function(a,b){return J.F(a,b)}},fW:{"^":"e:1;a",
$1:function(a){var z,y,x,w
z=this.a
y=J.m(a)
z.z.k(0,y.gai(a),!0)
if(J.S(y.gai(a),"h"))for(x=0;x<100;x+=10)for(w=0;w<100;w+=10)z.dR(w,50,x)}},fX:{"^":"e:1;a",
$1:function(a){this.a.z.k(0,J.fd(a),!1)
return!1}},fY:{"^":"e:1;a",
$1:function(a){var z,y,x,w
z=J.m(a)
y=z.gb0(a).a
if(typeof y!=="number")return y.an()
y=y>0?C.K:C.q
x=z.gb0(a).b
if(typeof x!=="number")return x.an()
x=x>0?C.L:C.r
w=z.gb0(a).a
if(typeof w!=="number")return w.ej()
z=z.gb0(a).b
if(typeof z!=="number")return z.ej()
this.a.Q.push(new N.kg(y,x,Math.abs(w),Math.abs(z)))}},fZ:{"^":"e:1;a",
$1:function(a){return this.a.a.a.requestPointerLock()}},h_:{"^":"e:1;a",
$1:function(a){var z=this.a
z.dS(Math.cos(z.y-1.5707963267948966)*Math.cos(z.x)*10,-Math.sin(z.x)*10,Math.sin(z.y-1.5707963267948966)*Math.cos(z.x)*10)}},h0:{"^":"e:1;a",
$1:function(a){return this.a.a.cS()}},eu:{"^":"b;a,b",
j:function(a){return this.b}},ez:{"^":"b;a,b",
j:function(a){return this.b}},kg:{"^":"b;a,b,c,d"}}],["","",,T,{"^":"",hb:{"^":"b;a,b,c,d",
e0:function(){var z,y
z=this.a
y=(z&&C.i).bQ(z,"experimental-webgl")
return H.c8(y==null?C.i.bQ(z,"webgl"):y,"$iscG")},
cS:function(){var z,y,x,w,v,u
z=window.innerHeight
y=window.innerWidth
if(typeof z!=="number")return z.az()
if(typeof y!=="number")return H.t(y)
x=this.b
w=this.a
if(z/y<=x){z=window.innerHeight
if(typeof z!=="number")return z.ad()
w.width=C.b.ad(z,x)
w.height=window.innerHeight}else{w.width=window.innerWidth
z=window.innerWidth
if(typeof z!=="number")return z.C()
w.height=C.c.aw(z*x)}z=window.innerWidth
y=w.width
if(typeof z!=="number")return z.L()
if(typeof y!=="number")return H.t(y)
x=window.innerHeight
v=w.height
if(typeof x!=="number")return x.L()
if(typeof v!=="number")return H.t(v)
u=w.style
y=C.k.j((z-y)/2)
u.marginLeft=y
z=w.style
v=C.k.j((x-v)/2)
z.marginTop=v},
dc:function(){var z,y
z=this.a
if(z==null)return 1
y=z.width
z=z.height
z.toString
if(typeof y!=="number")return y.az()
if(typeof z!=="number")return H.t(z)
return y/z},
b_:function(a){var z=0,y=P.a5(),x,w,v,u
var $async$b_=P.ab(function(b,c){if(b===1)return P.a8(c,y)
while(true)switch(z){case 0:w=document.createElement("img")
H.c8(w,"$isbI")
w.src=a
w=new W.jK(w,"load",!1,[W.aM])
v=H
u=J
z=3
return P.a1(w.ga7(w),$async$b_)
case 3:x=v.c8(u.fb(c),"$isbI")
z=1
break
case 1:return P.a9(x,y)}})
return P.aa($async$b_,y)}}}],["","",,X,{"^":"",dD:{"^":"b;a,b",
ga9:function(){return this.a},
gf5:function(){return this.b}}}],["","",,F,{"^":"",
d_:[function(){var z=0,y=P.a5(),x,w,v,u,t,s
var $async$d_=P.ab(function(a,b){if(a===1)return P.a8(b,y)
while(true)switch(z){case 0:x=document
w=x.createElement("canvas")
H.c8(w,"$isbF")
t=T
s=w
z=2
return P.a1(Z.ck(),$async$d_)
case 2:v=new t.hb(s,0.5625,b,null)
u=v.e0()
v.d=u
if(u==null)H.v(new P.h("Browser does not support WebGL"))
x.body.appendChild(w)
x=P.kl(3)
new N.fR(v,P.au(),null,null,null,T.iY(x),null,0,1.5707963267948966,P.au(),[],0,null,null,null,null,null,[],null,0).aA(0)
return P.a9(null,y)}})
return P.aa($async$d_,y)},"$0","eT",0,0,24]},1],["","",,Q,{"^":"",dN:{"^":"b;a,b,c,d,e,f,r,x",
dI:function(a,b,c,d,e){this.a=new Float32Array(H.c3(b))
this.b=new Float32Array(H.c3(c))
this.c=new Float32Array(H.c3(d))
this.d=new Uint16Array(H.c3(e))
this.e=a.createBuffer()
this.f=a.createBuffer()
this.r=a.createBuffer()
this.x=a.createBuffer()
a.bindBuffer(34962,this.e)
a.bufferData(34962,this.a,35044)
a.bindBuffer(34962,this.f)
a.bufferData(34962,this.b,35044)
a.bindBuffer(34962,this.r)
a.bufferData(34962,this.c,35044)
a.bindBuffer(34963,this.x)
a.bufferData(34963,this.d,35044)},
geO:function(){return this.d},
gfc:function(){return this.e},
gf_:function(){return this.r},
geN:function(){return this.x},
B:{
cz:function(a,b,c,d,e){var z=new Q.dN(null,null,null,null,null,null,null,null)
z.dI(a,b,c,d,e)
return z},
bO:function(a2,a3){var z=0,y=P.a5(),x,w=2,v,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bO=P.ab(function(a4,a5){if(a4===1){v=a5
z=w}while(true)switch(z){case 0:w=4
a1=J
z=7
return P.a1(W.he(a3,null,null),$async$bO)
case 7:t=a1.b9(a5,"\n")
g=[P.a2]
s=H.l([],g)
r=H.l([],g)
q=H.l([],g)
p=H.l([],[P.x])
o=0
for(g=t,f=g.length,e=[P.y],d=0;d<g.length;g.length===f||(0,H.cd)(g),++d){n=g[d]
if(J.bA(n,"v ")){c=H.l(C.e.ax(J.bB(n,2)).split(" "),e)
J.b5(s,new H.aU(c,new Q.iv(),[H.T(c,0),null]))}else if(J.bA(n,"vt ")){c=H.l(C.e.ax(J.bB(n,3)).split(" "),e)
b=H.T(c,0)
J.b5(r,new H.aU(new H.e8(c,0,2,[b]),new Q.iw(),[b,null]))}else if(J.bA(n,"vn ")){c=H.l(C.e.ax(J.bB(n,3)).split(" "),e)
J.b5(q,new H.aU(c,new Q.ix(),[H.T(c,0),null]))}else if(J.bA(n,"f ")){m=H.l(C.e.ax(J.bB(n,2)).split(" "),e)
if(J.K(m)>=3){o=J.F(o,1)
l=J.ao(H.bS(C.a.ga7(J.b9(J.aH(m,0),"/")),null,null),1)
k=J.ao(H.bS(C.a.ga7(J.b9(J.aH(m,1),"/")),null,null),1)
j=J.ao(H.bS(C.a.ga7(J.b9(J.aH(m,2),"/")),null,null),1)
if(J.K(m)===4){i=J.ao(H.bS(C.a.ga7(J.b9(J.aH(m,3),"/")),null,null),1)
J.b5(p,[l,k,j,l,j,i])}else if(J.K(m)===3)J.b5(p,[l,k,j])
else if(typeof console!="undefined")console.log(n)}}}g=J.K(s)
if(typeof console!="undefined")console.log(g)
g=o
if(typeof console!="undefined")console.log(g)
g=J.K(p)
if(typeof console!="undefined")console.log(g)
g=J.fi(p,P.ls())
if(typeof console!="undefined")console.log(g)
g=Q.cz(a2,s,r,q,p)
x=g
z=1
break
w=2
z=6
break
case 4:w=3
a0=v
h=H.J(a0)
g=P.cq("Failed to load model: "+a3+"\n "+H.d(J.a3(h)),null,Q.dN)
x=g
z=1
break
z=6
break
case 3:z=2
break
case 6:case 1:return P.a9(x,y)
case 2:return P.a8(v,y)}})
return P.aa($async$bO,y)}}},iv:{"^":"e:1;",
$1:[function(a){return H.cE(J.cj(a),null)},null,null,2,0,null,6,"call"]},iw:{"^":"e:1;",
$1:[function(a){return H.cE(J.cj(a),null)},null,null,2,0,null,6,"call"]},ix:{"^":"e:1;",
$1:[function(a){return H.cE(J.cj(a),null)},null,null,2,0,null,6,"call"]}}],["","",,T,{"^":"",iQ:{"^":"b;a,b,c,d,e,f,r,x"}}],["","",,S,{"^":"",j2:{"^":"b;a,b",
dK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=[P.a2]
y=H.l([],z)
x=H.l([],z)
w=H.l([],z)
v=H.l([],[P.x])
for(z=this.a,u=0;u<=30;++u){t=u*3.141592653589793/30
s=Math.sin(t)
r=Math.cos(t)
for(q=1-u/30,p=z*r,o=0;o<=30;++o){n=o*2*3.141592653589793/30
m=Math.sin(n)
l=Math.cos(n)*s
k=m*s
C.a.H(w,[l,r,k])
C.a.H(x,[1-o/30,q])
C.a.H(y,[z*l,p,z*k])}}for(u=0;u<30;++u)for(z=u*31,o=0;o<30;++o){j=z+o
i=j+30+1
p=j+1
C.a.H(v,[j,i,p,i,i+1,p])}this.b=Q.cz(a,y,x,w,v)},
ga9:function(){return this.b},
B:{
j3:function(a,b){var z=new S.j2(b,null)
z.dK(a,b)
return z}}}}],["","",,V,{"^":"",jk:{"^":"b;a,b",
gbI:function(){return this.a}}}]]
setupProgram(dart,0,0)
J.r=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ct.prototype
return J.dI.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.dJ.prototype
if(typeof a=="boolean")return J.i8.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.b)return a
return J.bv(a)}
J.c5=function(a){if(typeof a=="number")return J.at.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.b)return a
return J.bv(a)}
J.R=function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.b)return a
return J.bv(a)}
J.ah=function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.b)return a
return J.bv(a)}
J.la=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ct.prototype
return J.at.prototype}if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.z=function(a){if(typeof a=="number")return J.at.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.lb=function(a){if(typeof a=="number")return J.at.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.bu=function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.b)return a
return J.bv(a)}
J.F=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.c5(a).v(a,b)}
J.f0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.z(a).az(a,b)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).D(a,b)}
J.bx=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.z(a).an(a,b)}
J.by=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.z(a).aa(a,b)}
J.f1=function(a,b){return J.z(a).aM(a,b)}
J.bz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lb(a).C(a,b)}
J.ac=function(a){if(typeof a=="number")return-a
return J.la(a).a5(a)}
J.d3=function(a,b){return J.z(a).bY(a,b)}
J.f2=function(a,b){return J.z(a).bZ(a,b)}
J.ao=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.z(a).L(a,b)}
J.d4=function(a,b){return J.z(a).ad(a,b)}
J.f3=function(a,b){if(typeof a=="number"&&typeof b=="number")return(a^b)>>>0
return J.z(a).dE(a,b)}
J.aH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eR(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.R(a).i(a,b)}
J.d5=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.eR(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ah(a).k(a,b,c)}
J.f4=function(a,b){return J.m(a).dP(a,b)}
J.f5=function(a,b,c,d){return J.m(a).dQ(a,b,c,d)}
J.f6=function(a,b,c,d){return J.m(a).eb(a,b,c,d)}
J.b5=function(a,b){return J.ah(a).H(a,b)}
J.ce=function(a,b){return J.m(a).el(a,b)}
J.f7=function(a,b,c){return J.m(a).eo(a,b,c)}
J.f8=function(a,b){return J.m(a).av(a,b)}
J.cf=function(a,b,c){return J.R(a).er(a,b,c)}
J.d6=function(a,b){return J.ah(a).A(a,b)}
J.f9=function(a){return J.z(a).aG(a)}
J.fa=function(a,b){return J.ah(a).O(a,b)}
J.fb=function(a){return J.m(a).geu(a)}
J.aI=function(a){return J.m(a).gR(a)}
J.Y=function(a){return J.r(a).gF(a)}
J.fc=function(a){return J.z(a).gbw(a)}
J.ap=function(a){return J.ah(a).gI(a)}
J.fd=function(a){return J.m(a).gai(a)}
J.K=function(a){return J.R(a).gh(a)}
J.cg=function(a){return J.m(a).gf4(a)}
J.d7=function(a){return J.m(a).gJ(a)}
J.b6=function(a){return J.m(a).gl(a)}
J.fe=function(a){return J.m(a).de(a)}
J.b7=function(a){return J.m(a).df(a)}
J.ch=function(a){return J.m(a).b5(a)}
J.b8=function(a,b){return J.m(a).dh(a,b)}
J.ff=function(a,b){return J.ah(a).S(a,b)}
J.fg=function(a,b,c){return J.bu(a).eV(a,b,c)}
J.fh=function(a,b){return J.r(a).bB(a,b)}
J.fi=function(a,b){return J.ah(a).al(a,b)}
J.aJ=function(a,b){return J.m(a).ac(a,b)}
J.fj=function(a,b){return J.m(a).ds(a,b)}
J.fk=function(a,b){return J.m(a).bU(a,b)}
J.fl=function(a,b,c){return J.m(a).bV(a,b,c)}
J.b9=function(a,b){return J.bu(a).dt(a,b)}
J.bA=function(a,b){return J.bu(a).du(a,b)}
J.fm=function(a,b,c){return J.m(a).dw(a,b,c)}
J.bB=function(a,b){return J.bu(a).c_(a,b)}
J.d8=function(a,b){return J.m(a).bJ(a,b)}
J.fn=function(a,b,c){return J.m(a).bK(a,b,c)}
J.ci=function(a){return J.z(a).aw(a)}
J.fo=function(a){return J.ah(a).a2(a)}
J.a3=function(a){return J.r(a).j(a)}
J.cj=function(a){return J.bu(a).ax(a)}
J.fp=function(a){return J.m(a).n(a)}
J.fq=function(a){return J.m(a).q(a)}
J.fr=function(a){return J.m(a).K(a)}
I.ca=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.i=W.bF.prototype
C.w=W.bg.prototype
C.x=J.f.prototype
C.a=J.aP.prototype
C.k=J.dI.prototype
C.b=J.ct.prototype
C.y=J.dJ.prototype
C.c=J.at.prototype
C.e=J.aQ.prototype
C.F=J.aR.prototype
C.H=H.iA.prototype
C.p=J.iE.prototype
C.I=P.cG.prototype
C.h=J.b_.prototype
C.f=W.ju.prototype
C.t=new H.h7()
C.u=new P.iD()
C.v=new P.jI()
C.d=new P.kn()
C.j=new P.ai(0)
C.z=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.l=function(hooks) { return hooks; }
C.A=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.B=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.C=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.m=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.D=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.E=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.n=I.ca([])
C.G=H.l(I.ca([]),[P.aZ])
C.o=new H.fJ(0,{},C.G,[P.aZ,null])
C.J=new H.cK("call")
C.q=new N.eu(0,"_HorizontalMouseMovementDirection.Left")
C.K=new N.eu(1,"_HorizontalMouseMovementDirection.Right")
C.r=new N.ez(0,"_VerticalMouseMovementDirection.Up")
C.L=new N.ez(1,"_VerticalMouseMovementDirection.Down")
$.dZ="$cachedFunction"
$.e_="$cachedInvocation"
$.a4=0
$.aK=null
$.d9=null
$.cY=null
$.eI=null
$.eV=null
$.c4=null
$.c9=null
$.cZ=null
$.aC=null
$.b1=null
$.b2=null
$.cT=!1
$.o=C.d
$.dB=0
$.dp=null
$.dn=null
$.dm=null
$.dl=null
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["co","$get$co",function(){return H.eO("_$dart_dartClosure")},"cu","$get$cu",function(){return H.eO("_$dart_js")},"dG","$get$dG",function(){return H.i4()},"dH","$get$dH",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.dB
$.dB=z+1
z="expando$key$"+z}return new P.h9(null,z)},"ea","$get$ea",function(){return H.a7(H.bX({
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.a7(H.bX({$method$:null,
toString:function(){return"$receiver$"}}))},"ec","$get$ec",function(){return H.a7(H.bX(null))},"ed","$get$ed",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.a7(H.bX(void 0))},"ei","$get$ei",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.a7(H.eg(null))},"ee","$get$ee",function(){return H.a7(function(){try{null.$method$}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.a7(H.eg(void 0))},"ej","$get$ej",function(){return H.a7(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cQ","$get$cQ",function(){return P.jx()},"aN","$get$aN",function(){return P.jS(null,P.V)},"b4","$get$b4",function(){return[]},"di","$get$di",function(){return{}},"bU","$get$bU",function(){var z=[P.a2]
return H.l([H.l([1,1,0],z),H.l([-1,1,0],z),H.l([1,-1,0],z),H.l([-1,-1,0],z),H.l([1,0,1],z),H.l([-1,0,1],z),H.l([1,0,-1],z),H.l([-1,0,-1],z),H.l([0,1,1],z),H.l([0,-1,1],z),H.l([0,1,-1],z),H.l([0,-1,-1],z)],[[P.j,P.a2]])},"e3","$get$e3",function(){return 0.5*(P.eY(3)-1)},"e4","$get$e4",function(){return(3-P.eY(3))/6}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=["result","error","stackTrace","invocation","value","_","component","e","x",null,"data","object","sender","closure","isolate","numberOfArguments","arg1","arg2","arg3","arg4","each","errorCode","element","arg","instance","now","callback","arguments"]
init.types=[{func:1},{func:1,args:[,]},{func:1,v:true},{func:1,args:[,,]},{func:1,v:true,args:[P.b],opt:[P.ae]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,P.ae]},{func:1,ret:P.y,args:[P.x]},{func:1,args:[P.x]},{func:1,args:[P.y,,]},{func:1,args:[,P.y]},{func:1,args:[P.y]},{func:1,args:[{func:1,v:true}]},{func:1,args:[P.x,,]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.ae]},{func:1,args:[P.aZ,,]},{func:1,args:[W.bg]},{func:1,ret:[P.j,W.cH]},{func:1,args:[Z.bC]},{func:1,args:[P.x,P.b]},{func:1,ret:P.P,args:[P.bw]},{func:1,args:[P.a2,,]},{func:1,v:true,args:[P.b]},{func:1,ret:P.P}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.lz(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.ca=a.ca
Isolate.am=a.am
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.eZ(F.eT(),b)},[])
else (function(b){H.eZ(F.eT(),b)})([])})})()