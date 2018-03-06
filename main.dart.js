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
if(a1==="v"){processStatics(init.statics[b2]=b3.v,b4)
delete b3.v}else if(a2===43){w[g]=a1.substring(1)
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
function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cI"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cI"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cI(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ai=function(){}
var dart=[["","",,H,{"^":"",lU:{"^":"b;a"}}],["","",,J,{"^":"",
r:function(a){return void 0},
bZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bk:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cK==null){H.kC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(new P.cy("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cf()]
if(v!=null)return v
v=H.kK(a)
if(v!=null)return v
if(typeof a=="function")return C.D
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cf(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
f:{"^":"b;",
D:function(a,b){return a===b},
gF:function(a){return H.ag(a)},
j:["dq",function(a){return H.bD(a)}],
bu:["dn",function(a,b){throw H.a(P.dE(a,b.gcM(),b.gcR(),b.gcO(),null))},null,"gcP",2,0,null,3],
$isbp:1,
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationTimeline|AppBannerPromptResult|AudioListener|AudioTrack|BarProp|Blob|Bluetooth|BluetoothAdvertisingData|BluetoothCharacteristicProperties|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|CHROMIUMSubscribeUniform|CHROMIUMValuebuffer|CSS|CSSCharsetRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|CircularGeofencingRegion|Client|Clients|CompositorProxy|ConsoleBase|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|EXTBlendMinMax|EXTColorBufferFloat|EXTDisjointTimerQuery|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|EffectModel|Entry|EntrySync|FederatedCredential|File|FileEntry|FileEntrySync|FileError|FileReaderSync|FileWriterSync|FontFace|FormData|Gamepad|Geofencing|GeofencingRegion|Geolocation|Geoposition|HMDVRDevice|HTMLAllCollection|Headers|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IdleDeadline|ImageBitmapRenderingContext|InjectedScriptHost|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|Iterator|KeyframeEffect|MIDIInputMap|MIDIOutputMap|MediaDeviceInfo|MediaDevices|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaMetadata|MediaSession|MemoryInfo|MessageChannel|Metadata|MimeType|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|Navigator|NavigatorStorageUtils|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|PagePopupController|PasswordCredential|Path2D|PerformanceCompositeTiming|PerformanceEntry|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceObserver|PerformanceObserverEntryList|PerformanceRenderTiming|PerformanceResourceTiming|PerformanceTiming|PeriodicWave|Permissions|PositionError|PositionSensorVRDevice|Presentation|PushManager|PushMessageData|PushSubscription|RTCCertificate|RTCIceCandidate|RTCSessionDescription|Range|ReadableByteStream|ReadableByteStreamReader|ReadableStreamReader|Request|Response|SQLError|SQLResultSet|SQLTransaction|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|SVGViewSpec|ScrollState|Selection|ServicePort|SharedArrayBuffer|SourceInfo|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StorageInfo|StorageManager|StorageQuota|Stream|StyleMedia|StylePropertyMap|StyleSheet|SubtleCrypto|SyncManager|Touch|TrackDefault|TreeWalker|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRDevice|VREyeParameters|VRFieldOfView|VRPositionState|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitCSSMatrix|WebKitMutationObserver|WindowClient|WorkerConsole|WorkerLocation|WorkerNavigator|Worklet|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hN:{"^":"f;",
j:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iskn:1},
hP:{"^":"f;",
D:function(a,b){return null==b},
j:function(a){return"null"},
gF:function(a){return 0},
bu:[function(a,b){return this.dn(a,b)},null,"gcP",2,0,null,3],
$isS:1},
F:{"^":"f;",
gF:function(a){return 0},
j:["ds",function(a){return String(a)}],
cZ:function(a,b){return a.then(b)},
U:function(a){return a.setIdentity()},
b0:function(a){return a.getOrigin()},
b3:function(a,b){return a.setOrigin(b)},
b1:function(a){return a.getRotation()},
gm:function(a){return a.x},
n:function(a){return a.x()},
gp:function(a){return a.y},
t:function(a){return a.y()},
I:function(a){return a.z()},
au:function(a){return a.w()},
di:function(a,b){return a.setGravity(b)},
ef:function(a,b){return a.addRigidBody(b)},
dl:function(a,b,c){return a.stepSimulation(b,c)},
d8:function(a,b){return a.getWorldTransform(b)},
d6:function(a){return a.getMotionState()},
d5:function(a){return a.getLinearVelocity()},
bL:function(a,b,c){return a.setSleepingThresholds(b,c)},
bK:function(a,b){return a.setLinearVelocity(b)},
ei:function(a,b,c){return a.calculateLocalInertia(b,c)},
$ishQ:1},
ib:{"^":"F;"},
bg:{"^":"F;"},
aJ:{"^":"F;",
j:function(a){var z=a[$.$get$c9()]
return z==null?this.ds(a):J.al(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aI:{"^":"f;$ti",
cB:function(a,b){if(!!a.immutable$list)throw H.a(new P.q(b))},
bo:function(a,b){if(!!a.fixed$length)throw H.a(new P.q(b))},
a4:function(a,b){this.bo(a,"add")
a.push(b)},
X:function(a,b){var z
this.bo(a,"addAll")
for(z=J.ak(b);z.w();)a.push(z.gC())},
S:function(a,b){return new H.ck(a,b,[H.a_(a,0),null])},
V:function(a,b){return H.bI(a,b,null,H.a_(a,0))},
bp:function(a,b,c){var z,y,x
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(new P.a4(a))}return y},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
gaV:function(a){if(a.length>0)return a[0]
throw H.a(H.cc())},
ai:function(a,b,c,d,e){var z,y,x,w,v
this.cB(a,"setRange")
P.dK(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.v(P.a5(e,0,null,"skipCount",null))
y=J.r(d)
if(!!y.$isi){x=e
w=d}else{w=y.V(d,e).L(0,!1)
x=0}y=J.N(w)
if(x+z>y.gi(w))throw H.a(H.hM())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
aJ:function(a,b,c,d){return this.ai(a,b,c,d,0)},
j:function(a){return P.bw(a,"[","]")},
L:function(a,b){var z=H.n(a.slice(0),[H.a_(a,0)])
return z},
a7:function(a){return this.L(a,!0)},
gK:function(a){return new J.f7(a,a.length,0,null)},
gF:function(a){return H.ag(a)},
gi:function(a){return a.length},
si:function(a,b){this.bo(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.c6(b,"newLength",null))
if(b<0)throw H.a(P.a5(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.H(a,b))
if(b>=a.length||b<0)throw H.a(H.H(a,b))
return a[b]},
k:function(a,b,c){this.cB(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.H(a,b))
if(b>=a.length||b<0)throw H.a(H.H(a,b))
a[b]=c},
B:function(a,b){var z,y,x
z=a.length
y=J.R(b)
if(typeof y!=="number")return H.t(y)
x=z+y
y=H.n([],[H.a_(a,0)])
this.si(y,x)
this.aJ(y,0,a.length,a)
this.aJ(y,a.length,x,b)
return y},
$ism:1,
$asm:I.ai,
$ish:1,
$isi:1},
lT:{"^":"aI;$ti"},
f7:{"^":"b;a,b,c,d",
gC:function(){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.cP(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ap:{"^":"f;",
gbq:function(a){return a===0?1/a<0:a<0},
cw:["aK",function(a){return Math.abs(a)}],
at:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(new P.q(""+a+".toInt()"))},
aC:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(new P.q(""+a+".floor()"))},
eY:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(new P.q(""+a+".round()"))},
f2:function(a){return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){return a&0x1FFFFFFF},
a0:["dr",function(a){return-a}],
B:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a+b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a-b},
av:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a/b},
A:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a*b},
aI:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
a9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cq(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.cq(a,b)},
cq:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(new P.q("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+H.d(b)))},
dk:function(a,b){if(b<0)throw H.a(H.L(b))
return b>31?0:a<<b>>>0},
bM:function(a,b){var z
if(b<0)throw H.a(H.L(b))
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
cp:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
bE:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return(a&b)>>>0},
dv:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return(a^b)>>>0},
ag:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a<b},
af:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a>b},
$isZ:1,
$isbl:1},
ce:{"^":"ap;",
cw:function(a){return this.aK(a)},
a0:function(a){return this.dr(a)},
$isw:1},
du:{"^":"ap;"},
b6:{"^":"f;",
dS:function(a,b){if(b>=a.length)throw H.a(H.H(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.a(P.c6(b,null,null))
return a+b},
bN:function(a,b,c){var z
if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.L(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.v(H.L(c))
z=J.z(b)
if(z.ag(b,0))throw H.a(P.bE(b,null,null))
if(z.af(b,c))throw H.a(P.bE(b,null,null))
if(J.bm(c,a.length))throw H.a(P.bE(c,null,null))
return a.substring(b,c)},
dm:function(a,b){return this.bN(a,b,null)},
A:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
el:function(a,b,c){if(c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
return H.kR(a,b,c)},
j:function(a){return a},
gF:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.H(a,b))
if(b>=a.length||b<0)throw H.a(H.H(a,b))
return a[b]},
$ism:1,
$asm:I.ai,
$isy:1}}],["","",,H,{"^":"",
bO:function(a){if(a<0)H.v(P.a5(a,0,null,"count",null))
return a},
cc:function(){return new P.aQ("No element")},
hM:function(){return new P.aQ("Too few elements")},
h:{"^":"V;"},
ar:{"^":"h;$ti",
gK:function(a){return new H.dv(this,this.gi(this),0,null)},
S:function(a,b){return new H.ck(this,b,[H.C(this,"ar",0),null])},
V:function(a,b){return H.bI(this,b,null,H.C(this,"ar",0))},
L:function(a,b){var z,y,x
z=H.n([],[H.C(this,"ar",0)])
C.a.si(z,this.gi(this))
for(y=0;y<this.gi(this);++y){x=this.u(0,y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
a7:function(a){return this.L(a,!0)}},
iN:{"^":"ar;a,b,c,$ti",
dE:function(a,b,c,d){var z=this.b
if(z<0)H.v(P.a5(z,0,null,"start",null))},
gdU:function(){var z=J.R(this.a)
return z},
geb:function(){var z,y
z=J.R(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.R(this.a)
y=this.b
if(y>=z)return 0
return z-y},
u:function(a,b){var z,y
z=this.geb()+b
if(b>=0){y=this.gdU()
if(typeof y!=="number")return H.t(y)
y=z>=y}else y=!0
if(y)throw H.a(P.u(b,this,"index",null,null))
return J.cV(this.a,z)},
V:function(a,b){if(b<0)H.v(P.a5(b,0,null,"count",null))
return H.bI(this.a,this.b+b,this.c,H.a_(this,0))},
L:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.N(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=this.$ti
if(b){t=H.n([],u)
C.a.si(t,v)}else t=H.n(new Array(v),u)
for(s=0;s<v;++s){u=x.u(y,z+s)
if(s>=t.length)return H.c(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(new P.a4(this))}return t},
a7:function(a){return this.L(a,!0)},
v:{
bI:function(a,b,c,d){var z=new H.iN(a,b,c,[d])
z.dE(a,b,c,d)
return z}}},
dv:{"^":"b;a,b,c,d",
gC:function(){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.N(z)
x=y.gi(z)
if(this.b!==x)throw H.a(new P.a4(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
dw:{"^":"V;a,b,$ti",
gK:function(a){return new H.i1(null,J.ak(this.a),this.b)},
gi:function(a){return J.R(this.a)},
$asV:function(a,b){return[b]},
v:{
bA:function(a,b,c,d){if(!!J.r(a).$ish)return new H.dd(a,b,[c,d])
return new H.dw(a,b,[c,d])}}},
dd:{"^":"dw;a,b,$ti",$ish:1,
$ash:function(a,b){return[b]}},
i1:{"^":"cd;a,b,c",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gC())
return!0}this.a=null
return!1},
gC:function(){return this.a}},
ck:{"^":"ar;a,b,$ti",
gi:function(a){return J.R(this.a)},
u:function(a,b){return this.b.$1(J.cV(this.a,b))},
$ash:function(a,b){return[b]},
$asar:function(a,b){return[b]},
$asV:function(a,b){return[b]}},
iY:{"^":"cd;a,b",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gC())===!0)return!0
return!1},
gC:function(){return this.a.gC()}},
cs:{"^":"V;a,b,$ti",
V:function(a,b){return new H.cs(this.a,this.b+H.bO(b),this.$ti)},
gK:function(a){return new H.iB(J.ak(this.a),this.b)},
v:{
dO:function(a,b,c){if(!!J.r(a).$ish)return new H.de(a,H.bO(b),[c])
return new H.cs(a,H.bO(b),[c])}}},
de:{"^":"cs;a,b,$ti",
gi:function(a){var z,y
z=J.R(this.a)
if(typeof z!=="number")return z.J()
y=z-this.b
if(y>=0)return y
return 0},
V:function(a,b){return new H.de(this.a,this.b+H.bO(b),this.$ti)},
$ish:1},
iB:{"^":"cd;a,b",
w:function(){var z,y
for(z=this.a,y=0;y<this.b;++y)z.w()
this.b=0
return z.w()},
gC:function(){return this.a.gC()}},
bu:{"^":"b;$ti"},
cu:{"^":"b;e1:a<",
D:function(a,b){if(b==null)return!1
return b instanceof H.cu&&J.Q(this.a,b.a)},
gF:function(a){var z,y
z=this._hashCode
if(z!=null)return z
y=J.U(this.a)
if(typeof y!=="number")return H.t(y)
z=536870911&664597*y
this._hashCode=z
return z},
j:function(a){return'Symbol("'+H.d(this.a)+'")'},
$isaR:1}}],["","",,H,{"^":"",
bi:function(a,b){var z=a.aB(b)
if(!init.globalState.d.cy)init.globalState.f.aG()
return z},
eF:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.r(y).$isi)throw H.a(P.b_("Arguments to main must be a List: "+H.d(y)))
init.globalState=new H.jH(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$ds()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.jf(P.ch(null,H.bh),0)
x=P.w
y.z=new H.ae(0,null,null,null,null,null,0,[x,H.cB])
y.ch=new H.ae(0,null,null,null,null,null,0,[x,null])
if(y.x===!0){w=new H.jG()
y.Q=w
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.hF,w)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.jI)}if(init.globalState.x===!0)return
y=init.globalState.a++
w=P.aL(null,null,null,x)
v=new H.bF(0,null,!1)
u=new H.cB(y,new H.ae(0,null,null,null,null,null,0,[x,H.bF]),w,init.createNewIsolate(),v,new H.an(H.c_()),new H.an(H.c_()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
w.a4(0,0)
u.bR(0,v)
init.globalState.e=u
init.globalState.z.k(0,y,u)
init.globalState.d=u
if(H.aj(a,{func:1,args:[P.S]}))u.aB(new H.kP(z,a))
else if(H.aj(a,{func:1,args:[P.S,P.S]}))u.aB(new H.kQ(z,a))
else u.aB(a)
init.globalState.f.aG()},
hJ:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.hK()
return},
hK:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.a(new P.q("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.a(new P.q('Cannot extract URI from "'+z+'"'))},
hF:[function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.bK(!0,[]).ac(b.data)
y=J.N(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.bK(!0,[]).ac(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.bK(!0,[]).ac(y.h(z,"replyTo"))
y=init.globalState.a++
q=P.w
p=P.aL(null,null,null,q)
o=new H.bF(0,null,!1)
n=new H.cB(y,new H.ae(0,null,null,null,null,null,0,[q,H.bF]),p,init.createNewIsolate(),o,new H.an(H.c_()),new H.an(H.c_()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
p.a4(0,0)
n.bR(0,o)
init.globalState.f.a.a2(0,new H.bh(n,new H.hG(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.aG()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)J.aD(y.h(z,"port"),y.h(z,"msg"))
init.globalState.f.aG()
break
case"close":init.globalState.ch.aF(0,$.$get$dt().h(0,a))
a.terminate()
init.globalState.f.aG()
break
case"log":H.hE(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.aK(["command","print","msg",z])
q=new H.aw(!0,P.aS(null,P.w)).O(q)
y.toString
self.postMessage(q)}else P.cN(y.h(z,"msg"))
break
case"error":throw H.a(y.h(z,"msg"))}},null,null,4,0,null,11,5],
hE:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.aK(["command","log","msg",a])
x=new H.aw(!0,P.aS(null,P.w)).O(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.P(w)
z=H.O(w)
y=P.ao(z)
throw H.a(y)}},
hH:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.dH=$.dH+("_"+y)
$.dI=$.dI+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.aD(f,["spawned",new H.bN(y,x),w,z.r])
x=new H.hI(a,b,c,d,z)
if(e===!0){z.cz(w,w)
init.globalState.f.a.a2(0,new H.bh(z,x,"start isolate"))}else x.$0()},
k6:function(a){return new H.bK(!0,[]).ac(new H.aw(!1,P.aS(null,P.w)).O(a))},
kP:{"^":"e:0;a,b",
$0:function(){this.b.$1(this.a.a)}},
kQ:{"^":"e:0;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
jH:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",v:{
jI:[function(a){var z=P.aK(["command","print","msg",a])
return new H.aw(!0,P.aS(null,P.w)).O(z)},null,null,2,0,null,10]}},
cB:{"^":"b;a,b,c,eM:d<,em:e<,f,r,eI:x?,br:y<,eq:z<,Q,ch,cx,cy,db,dx",
cz:function(a,b){if(!this.f.D(0,a))return
if(this.Q.a4(0,b)&&!this.y)this.y=!0
this.bl()},
eV:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.aF(0,a)
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
if(w===y.c)y.c4();++y.d}this.y=!1}this.bl()},
ee:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.D(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.c(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
eU:function(a){var z,y,x
if(this.ch==null)return
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.D(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.v(new P.q("removeRange"))
P.dK(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
dh:function(a,b){if(!this.r.D(0,a))return
this.db=b},
eC:function(a,b,c){var z=J.r(b)
if(!z.D(b,0))z=z.D(b,1)&&!this.cy
else z=!0
if(z){J.aD(a,c)
return}z=this.cx
if(z==null){z=P.ch(null,null)
this.cx=z}z.a2(0,new H.jB(a,c))},
eB:function(a,b){var z
if(!this.r.D(0,a))return
z=J.r(b)
if(!z.D(b,0))z=z.D(b,1)&&!this.cy
else z=!0
if(z){this.bs()
return}z=this.cx
if(z==null){z=P.ch(null,null)
this.cx=z}z.a2(0,this.geN())},
eD:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.cN(a)
if(b!=null)P.cN(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.al(a)
y[1]=b==null?null:J.al(b)
for(x=new P.cC(z,z.r,null,null),x.c=z.e;x.w();)J.aD(x.d,y)},
aB:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){w=H.P(u)
v=H.O(u)
this.eD(w,v)
if(this.db===!0){this.bs()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.geM()
if(this.cx!=null)for(;t=this.cx,!t.gY(t);)this.cx.cS().$0()}return y},
ez:function(a){var z=J.N(a)
switch(z.h(a,0)){case"pause":this.cz(z.h(a,1),z.h(a,2))
break
case"resume":this.eV(z.h(a,1))
break
case"add-ondone":this.ee(z.h(a,1),z.h(a,2))
break
case"remove-ondone":this.eU(z.h(a,1))
break
case"set-errors-fatal":this.dh(z.h(a,1),z.h(a,2))
break
case"ping":this.eC(z.h(a,1),z.h(a,2),z.h(a,3))
break
case"kill":this.eB(z.h(a,1),z.h(a,2))
break
case"getErrors":this.dx.a4(0,z.h(a,1))
break
case"stopErrors":this.dx.aF(0,z.h(a,1))
break}},
cL:function(a){return this.b.h(0,a)},
bR:function(a,b){var z=this.b
if(z.az(0,a))throw H.a(P.ao("Registry: ports must be registered only once."))
z.k(0,a,b)},
bl:function(){var z=this.b
if(z.gi(z)-this.c.a>0||this.y||!this.x)init.globalState.z.k(0,this.a,this)
else this.bs()},
bs:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.ap(0)
for(z=this.b,y=z.gbC(z),y=y.gK(y);y.w();)y.gC().dR()
z.ap(0)
this.c.ap(0)
init.globalState.z.aF(0,this.a)
this.dx.ap(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.c(z,v)
J.aD(w,z[v])}this.ch=null}},"$0","geN",0,0,2]},
jB:{"^":"e:2;a,b",
$0:[function(){J.aD(this.a,this.b)},null,null,0,0,null,"call"]},
jf:{"^":"b;a,b",
er:function(){var z=this.a
if(z.b===z.c)return
return z.cS()},
cY:function(){var z,y,x
z=this.er()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.az(0,init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gY(y)}else y=!1
else y=!1
else y=!1
if(y)H.v(P.ao("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gY(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.aK(["command","close"])
x=new H.aw(!0,new P.ee(0,null,null,null,null,null,0,[null,P.w])).O(x)
y.toString
self.postMessage(x)}return!1}z.eT()
return!0},
cl:function(){if(self.window!=null)new H.jg(this).$0()
else for(;this.cY(););},
aG:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.cl()
else try{this.cl()}catch(x){z=H.P(x)
y=H.O(x)
w=init.globalState.Q
v=P.aK(["command","error","msg",H.d(z)+"\n"+H.d(y)])
v=new H.aw(!0,P.aS(null,P.w)).O(v)
w.toString
self.postMessage(v)}}},
jg:{"^":"e:2;a",
$0:function(){if(!this.a.cY())return
P.iU(C.i,this)}},
bh:{"^":"b;a,b,c",
eT:function(){var z=this.a
if(z.gbr()){z.geq().push(this)
return}z.aB(this.b)}},
jG:{"^":"b;"},
hG:{"^":"e:0;a,b,c,d,e,f",
$0:function(){H.hH(this.a,this.b,this.c,this.d,this.e,this.f)}},
hI:{"^":"e:2;a,b,c,d,e",
$0:function(){var z,y
z=this.e
z.seI(!0)
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
if(H.aj(y,{func:1,args:[P.S,P.S]}))y.$2(this.b,this.c)
else if(H.aj(y,{func:1,args:[P.S]}))y.$1(this.b)
else y.$0()}z.bl()}},
e6:{"^":"b;"},
bN:{"^":"e6;b,a",
a8:function(a,b){var z,y,x
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gc7())return
x=H.k6(b)
if(z.gem()===y){z.ez(x)
return}init.globalState.f.a.a2(0,new H.bh(z,new H.jL(this,x),"receive"))},
D:function(a,b){if(b==null)return!1
return b instanceof H.bN&&J.Q(this.b,b.b)},
gF:function(a){return this.b.gbf()}},
jL:{"^":"e:0;a,b",
$0:function(){var z=this.a.b
if(!z.gc7())J.eL(z,this.b)}},
cD:{"^":"e6;b,c,a",
a8:function(a,b){var z,y,x
z=P.aK(["command","message","port",this,"msg",b])
y=new H.aw(!0,P.aS(null,P.w)).O(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
D:function(a,b){if(b==null)return!1
return b instanceof H.cD&&J.Q(this.b,b.b)&&J.Q(this.a,b.a)&&J.Q(this.c,b.c)},
gF:function(a){var z,y,x
z=J.cQ(this.b,16)
y=J.cQ(this.a,8)
x=this.c
if(typeof x!=="number")return H.t(x)
return(z^y^x)>>>0}},
bF:{"^":"b;bf:a<,b,c7:c<",
dR:function(){this.c=!0
this.b=null},
dI:function(a,b){if(this.c)return
this.b.$1(b)},
$isir:1},
iQ:{"^":"b;a,b,c,d",
dF:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.a2(0,new H.bh(y,new H.iS(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.ac(new H.iT(this,b),0),a)}else throw H.a(new P.q("Timer greater than 0."))},
v:{
iR:function(a,b){var z=new H.iQ(!0,!1,null,0)
z.dF(a,b)
return z}}},
iS:{"^":"e:2;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
iT:{"^":"e:2;a,b",
$0:[function(){var z=this.a
z.c=null;--init.globalState.f.b
z.d=1
this.b.$0()},null,null,0,0,null,"call"]},
an:{"^":"b;bf:a<",
gF:function(a){var z,y,x
z=this.a
y=J.z(z)
x=y.bM(z,0)
y=y.a9(z,4294967296)
if(typeof y!=="number")return H.t(y)
z=x^y
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
D:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.an){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
aw:{"^":"b;a,b",
O:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.k(0,a,z.gi(z))
z=J.r(a)
if(!!z.$isdy)return["buffer",a]
if(!!z.$iscm)return["typed",a]
if(!!z.$ism)return this.dd(a)
if(!!z.$ishD){x=this.gd9()
w=z.gar(a)
w=H.bA(w,x,H.C(w,"V",0),null)
w=P.b7(w,!0,H.C(w,"V",0))
z=z.gbC(a)
z=H.bA(z,x,H.C(z,"V",0),null)
return["map",w,P.b7(z,!0,H.C(z,"V",0))]}if(!!z.$ishQ)return this.de(a)
if(!!z.$isf)this.d1(a)
if(!!z.$isir)this.aH(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isbN)return this.df(a)
if(!!z.$iscD)return this.dg(a)
if(!!z.$ise){v=a.$static_name
if(v==null)this.aH(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isan)return["capability",a.a]
if(!(a instanceof P.b))this.d1(a)
return["dart",init.classIdExtractor(a),this.dc(init.classFieldsExtractor(a))]},"$1","gd9",2,0,1,6],
aH:function(a,b){throw H.a(new P.q((b==null?"Can't transmit:":b)+" "+H.d(a)))},
d1:function(a){return this.aH(a,null)},
dd:function(a){var z=this.da(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.aH(a,"Can't serialize indexable: ")},
da:function(a){var z,y,x
z=[]
C.a.si(z,a.length)
for(y=0;y<a.length;++y){x=this.O(a[y])
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
dc:function(a){var z
for(z=0;z<a.length;++z)C.a.k(a,z,this.O(a[z]))
return a},
de:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.aH(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.a.si(y,z.length)
for(x=0;x<z.length;++x){w=this.O(a[z[x]])
if(x>=y.length)return H.c(y,x)
y[x]=w}return["js-object",z,y]},
dg:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
df:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gbf()]
return["raw sendport",a]}},
bK:{"^":"b;a,b",
ac:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.a(P.b_("Bad serialized message: "+H.d(a)))
switch(C.a.gaV(a)){case"ref":if(1>=a.length)return H.c(a,1)
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
y=H.n(this.aA(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return H.n(this.aA(x),[null])
case"mutable":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return this.aA(x)
case"const":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
y=H.n(this.aA(x),[null])
y.fixed$length=Array
return y
case"map":return this.ev(a)
case"sendport":return this.ew(a)
case"raw sendport":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.eu(a)
case"function":if(1>=a.length)return H.c(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.c(a,1)
return new H.an(a[1])
case"dart":y=a.length
if(1>=y)return H.c(a,1)
w=a[1]
if(2>=y)return H.c(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.aA(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.a("couldn't deserialize: "+H.d(a))}},"$1","ges",2,0,1,6],
aA:function(a){var z,y,x
z=J.N(a)
y=0
while(!0){x=z.gi(a)
if(typeof x!=="number")return H.t(x)
if(!(y<x))break
z.k(a,y,this.ac(z.h(a,y)));++y}return a},
ev:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
w=P.aq()
this.b.push(w)
y=J.f2(J.eW(y,this.ges()))
for(z=J.N(y),v=J.N(x),u=0;u<z.gi(y);++u)w.k(0,z.h(y,u),this.ac(v.h(x,u)))
return w},
ew:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
if(3>=z)return H.c(a,3)
w=a[3]
if(J.Q(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.cL(w)
if(u==null)return
t=new H.bN(u,x)}else t=new H.cD(y,w,x)
this.b.push(t)
return t},
eu:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.N(y)
v=J.N(x)
u=0
while(!0){t=z.gi(y)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
w[z.h(y,u)]=this.ac(v.h(x,u));++u}return w}}}],["","",,H,{"^":"",
fm:function(){throw H.a(new P.q("Cannot modify unmodifiable Map"))},
kw:function(a){return init.types[a]},
ex:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.r(a).$iso},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.al(a)
if(typeof z!=="string")throw H.a(H.L(a))
return z},
ag:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
co:function(a){var z,y,x,w,v,u,t,s,r
z=J.r(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.w||!!J.r(a).$isbg){v=C.m(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.k.dS(w,0)===36)w=C.k.dm(w,1)
r=H.ey(H.bU(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
bD:function(a){return"Instance of '"+H.co(a)+"'"},
as:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
io:function(a){var z=H.as(a).getUTCFullYear()+0
return z},
il:function(a){var z=H.as(a).getUTCMonth()+1
return z},
ih:function(a){var z=H.as(a).getUTCDate()+0
return z},
ii:function(a){var z=H.as(a).getUTCHours()+0
return z},
ik:function(a){var z=H.as(a).getUTCMinutes()+0
return z},
im:function(a){var z=H.as(a).getUTCSeconds()+0
return z},
ij:function(a){var z=H.as(a).getUTCMilliseconds()+0
return z},
cn:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.a(H.L(a))
return a[b]},
dJ:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.a(H.L(a))
a[b]=c},
dG:function(a,b,c){var z,y,x,w
z={}
z.a=0
y=[]
x=[]
if(b!=null){w=J.R(b)
if(typeof w!=="number")return H.t(w)
z.a=0+w
C.a.X(y,b)}z.b=""
if(c!=null&&!c.gY(c))c.R(0,new H.ig(z,y,x))
return J.eX(a,new H.hO(C.H,""+"$"+H.d(z.a)+z.b,0,null,y,x,null))},
ie:function(a,b){var z,y
if(b!=null)z=b instanceof Array?b:P.b7(b,!0,null)
else z=[]
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.id(a,z)},
id:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.r(a)["call*"]
if(y==null)return H.dG(a,b,null)
x=H.dL(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.dG(a,b,null)
b=P.b7(b,!0,null)
for(u=z;u<v;++u)C.a.a4(b,init.metadata[x.ep(0,u)])}return y.apply(a,b)},
t:function(a){throw H.a(H.L(a))},
c:function(a,b){if(a==null)J.R(a)
throw H.a(H.H(a,b))},
H:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
z=J.R(a)
if(!(b<0)){if(typeof z!=="number")return H.t(z)
y=b>=z}else y=!0
if(y)return P.u(b,a,"index",null,z)
return P.bE(b,"index",null)},
L:function(a){return new P.am(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bB()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eG})
z.name=""}else z.toString=H.eG
return z},
eG:[function(){return J.al(this.dartException)},null,null,0,0,null],
v:function(a){throw H.a(a)},
cP:function(a){throw H.a(new P.a4(a))},
P:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kT(a)
if(a==null)return
if(a instanceof H.ca)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.cp(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cg(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.d(y)+" (Error "+w+")"
return z.$1(new H.dF(v,null))}}if(a instanceof TypeError){u=$.$get$dS()
t=$.$get$dT()
s=$.$get$dU()
r=$.$get$dV()
q=$.$get$dZ()
p=$.$get$e_()
o=$.$get$dX()
$.$get$dW()
n=$.$get$e1()
m=$.$get$e0()
l=u.T(y)
if(l!=null)return z.$1(H.cg(y,l))
else{l=t.T(y)
if(l!=null){l.method="call"
return z.$1(H.cg(y,l))}else{l=s.T(y)
if(l==null){l=r.T(y)
if(l==null){l=q.T(y)
if(l==null){l=p.T(y)
if(l==null){l=o.T(y)
if(l==null){l=r.T(y)
if(l==null){l=n.T(y)
if(l==null){l=m.T(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.dF(y,l==null?null:l.method))}}return z.$1(new H.iW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dP()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.am(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dP()
return a},
O:function(a){var z
if(a instanceof H.ca)return a.b
if(a==null)return new H.ef(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ef(a,null)},
kM:function(a){if(a==null||typeof a!='object')return J.U(a)
else return H.ag(a)},
ku:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
kE:[function(a,b,c,d,e,f,g){switch(c){case 0:return H.bi(b,new H.kF(a))
case 1:return H.bi(b,new H.kG(a,d))
case 2:return H.bi(b,new H.kH(a,d,e))
case 3:return H.bi(b,new H.kI(a,d,e,f))
case 4:return H.bi(b,new H.kJ(a,d,e,f,g))}throw H.a(P.ao("Unsupported number of arguments for wrapped closure"))},null,null,14,0,null,12,13,14,15,16,17,18],
ac:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.kE)
a.$identity=z
return z},
fi:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.r(c).$isi){z.$reflectionInfo=c
x=H.dL(z).r}else x=c
w=d?Object.create(new H.iE().constructor.prototype):Object.create(new H.c7(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a0
$.a0=J.I(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.d1(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kw,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.d_:H.c8
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.d1(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
ff:function(a,b,c,d){var z=H.c8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d1:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fh(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ff(y,!w,z,b)
if(y===0){w=$.a0
$.a0=J.I(w,1)
u="self"+H.d(w)
w="return function(){var "+u+" = this."
v=$.aE
if(v==null){v=H.br("self")
$.aE=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a0
$.a0=J.I(w,1)
t+=H.d(w)
w="return function("+t+"){return this."
v=$.aE
if(v==null){v=H.br("self")
$.aE=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fg:function(a,b,c,d){var z,y
z=H.c8
y=H.d_
switch(b?-1:a){case 0:throw H.a(new H.it("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fh:function(a,b){var z,y,x,w,v,u,t,s
z=H.f9()
y=$.cZ
if(y==null){y=H.br("receiver")
$.cZ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fg(w,!u,x,b)
if(w===1){y="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
u=$.a0
$.a0=J.I(u,1)
return new Function(y+H.d(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
u=$.a0
$.a0=J.I(u,1)
return new Function(y+H.d(u)+"}")()},
cI:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.r(c).$isi){c.fixed$length=Array
z=c}else z=c
return H.fi(a,b,z,!!d,e,f)},
cH:function(a){if(typeof a==="boolean"||a==null)return a
throw H.a(H.d0(a,"bool"))},
kO:function(a,b){var z=J.N(b)
throw H.a(H.d0(a,z.bN(b,3,z.gi(b))))},
bW:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else z=!0
if(z)return a
H.kO(a,b)},
es:function(a){var z=J.r(a)
return"$S" in z?z.$S():null},
aj:function(a,b){var z,y
if(a==null)return!1
z=H.es(a)
if(z==null)y=!1
else y=H.ew(z,b)
return y},
kg:function(a){var z
if(a instanceof H.e){z=H.es(a)
if(z!=null)return H.eC(z,null)
return"Closure"}return H.co(a)},
kS:function(a){throw H.a(new P.ft(a))},
c_:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
eu:function(a){return init.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
bU:function(a){if(a==null)return
return a.$ti},
ev:function(a,b){return H.cO(a["$as"+H.d(b)],H.bU(a))},
C:function(a,b,c){var z=H.ev(a,b)
return z==null?null:z[c]},
a_:function(a,b){var z=H.bU(a)
return z==null?null:z[b]},
eC:function(a,b){var z=H.aB(a,b)
return z},
aB:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ey(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aB(z,b)
return H.ka(a,b)}return"unknown-reified-type"},
ka:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aB(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aB(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kt(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aB(r[p],b)+(" "+H.d(p))}w+="}"}return"("+w+") => "+z},
ey:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bH("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aB(u,c)}return w?"":"<"+z.j(0)+">"},
cO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bQ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bU(a)
y=J.r(a)
if(y[b]==null)return!1
return H.eq(H.cO(y[d],z),c)},
eq:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.T(a[y],b[y]))return!1
return!0},
bR:function(a,b,c){return a.apply(b,H.ev(b,c))},
T:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="S")return!0
if('func' in b)return H.ew(a,b)
if('func' in a)return b.builtin$cls==="lL"||b.builtin$cls==="b"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.eC(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eq(H.cO(u,z),x)},
ep:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.T(z,v)||H.T(v,z)))return!1}return!0},
kj:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.T(v,u)||H.T(u,v)))return!1}return!0},
ew:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.T(z,y)||H.T(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ep(x,w,!1))return!1
if(!H.ep(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.T(o,n)||H.T(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.T(o,n)||H.T(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.T(o,n)||H.T(n,o)))return!1}}return H.kj(a.named,b.named)},
nr:function(a){var z=$.cJ
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
nq:function(a){return H.ag(a)},
np:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kK:function(a){var z,y,x,w,v,u
z=$.cJ.$1(a)
y=$.bS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bX[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eo.$2(a,z)
if(z!=null){y=$.bS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bX[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cM(x)
$.bS[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bX[z]=x
return x}if(v==="-"){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eA(a,x)
if(v==="*")throw H.a(new P.cy(z))
if(init.leafTags[z]===true){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eA(a,x)},
eA:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cM:function(a){return J.bZ(a,!1,null,!!a.$iso)},
kL:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.bZ(z,!1,null,!!z.$iso)
else return J.bZ(z,c,null,null)},
kC:function(){if(!0===$.cK)return
$.cK=!0
H.kD()},
kD:function(){var z,y,x,w,v,u,t,s
$.bS=Object.create(null)
$.bX=Object.create(null)
H.ky()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eB.$1(v)
if(u!=null){t=H.kL(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ky:function(){var z,y,x,w,v,u,t
z=C.x()
z=H.az(C.y,H.az(C.z,H.az(C.l,H.az(C.l,H.az(C.B,H.az(C.A,H.az(C.C(C.m),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.cJ=new H.kz(v)
$.eo=new H.kA(u)
$.eB=new H.kB(t)},
az:function(a,b){return a(b)||b},
kR:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fl:{"^":"iX;a,$ti"},
d4:{"^":"b;$ti",
j:function(a){return P.bz(this)},
k:function(a,b,c){return H.fm()},
S:function(a,b){var z=P.aq()
this.R(0,new H.fn(this,b,z))
return z}},
fn:{"^":"e;a,b,c",
$2:function(a,b){var z,y
z=this.b.$2(a,b)
y=J.k(z)
this.c.k(0,y.gad(z),y.gG(z))},
$S:function(){return H.bR(function(a,b){return{func:1,args:[a,b]}},this.a,"d4")}},
fo:{"^":"d4;a,b,c,$ti",
gi:function(a){return this.a},
az:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.az(0,b))return
return this.c3(b)},
c3:function(a){return this.b[a]},
R:function(a,b){var z,y,x,w
z=this.c
for(y=z.length,x=0;x<y;++x){w=z[x]
b.$2(w,this.c3(w))}}},
hO:{"^":"b;a,b,c,d,e,f,r",
gcM:function(){var z=this.a
return z},
gcR:function(){var z,y,x,w
if(this.c===1)return C.n
z=this.e
y=z.length-this.f.length
if(y===0)return C.n
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
gcO:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.o
z=this.f
y=z.length
x=this.e
w=x.length-y
if(y===0)return C.o
v=P.aR
u=new H.ae(0,null,null,null,null,null,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.c(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.c(x,r)
u.k(0,new H.cu(s),x[r])}return new H.fl(u,[v,null])}},
is:{"^":"b;a,b,c,d,e,f,r,x",
ep:function(a,b){var z=this.d
if(typeof b!=="number")return b.ag()
if(b<z)return
return this.b[3+b-z]},
v:{
dL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.is(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
ig:{"^":"e:8;a,b,c",
$2:function(a,b){var z=this.a
z.b=z.b+"$"+H.d(a)
this.c.push(a)
this.b.push(b);++z.a}},
iV:{"^":"b;a,b,c,d,e,f",
T:function(a){var z,y,x
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
v:{
a1:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
dF:{"^":"G;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+H.d(z)+"' on null"}},
hS:{"^":"G;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
v:{
cg:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hS(a,y,z?null:b.receiver)}}},
iW:{"^":"G;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ca:{"^":"b;a,a1:b<"},
kT:{"^":"e:1;a",
$1:function(a){if(!!J.r(a).$isG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ef:{"^":"b;a,b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa6:1},
kF:{"^":"e:0;a",
$0:function(){return this.a.$0()}},
kG:{"^":"e:0;a,b",
$0:function(){return this.a.$1(this.b)}},
kH:{"^":"e:0;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
kI:{"^":"e:0;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
kJ:{"^":"e:0;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
e:{"^":"b;",
j:function(a){return"Closure '"+H.co(this).trim()+"'"},
gd2:function(){return this},
gd2:function(){return this}},
dR:{"^":"e;"},
iE:{"^":"dR;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c7:{"^":"dR;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c7))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var z,y
z=this.c
if(z==null)y=H.ag(this.a)
else y=typeof z!=="object"?J.U(z):H.ag(z)
return J.eK(y,H.ag(this.b))},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+H.bD(z)},
v:{
c8:function(a){return a.a},
d_:function(a){return a.c},
f9:function(){var z=$.aE
if(z==null){z=H.br("self")
$.aE=z}return z},
br:function(a){var z,y,x,w,v
z=new H.c7("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
fc:{"^":"G;a",
j:function(a){return this.a},
v:{
d0:function(a,b){return new H.fc("CastError: "+H.d(P.aF(a))+": type '"+H.kg(a)+"' is not a subtype of type '"+b+"'")}}},
it:{"^":"G;a",
j:function(a){return"RuntimeError: "+H.d(this.a)}},
ae:{"^":"hY;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gY:function(a){return this.a===0},
gar:function(a){return new H.hV(this,[H.a_(this,0)])},
gbC:function(a){return H.bA(this.gar(this),new H.hR(this),H.a_(this,0),H.a_(this,1))},
az:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.c_(y,b)}else return this.eJ(b)},
eJ:function(a){var z=this.d
if(z==null)return!1
return this.aE(this.aQ(z,this.aD(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ak(z,b)
return y==null?null:y.ga5()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.ak(x,b)
return y==null?null:y.ga5()}else return this.eK(b)},
eK:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aQ(z,this.aD(a))
x=this.aE(y,a)
if(x<0)return
return y[x].ga5()},
k:function(a,b,c){var z,y,x,w,v,u,t
if(typeof b==="string"){z=this.b
if(z==null){z=this.bh()
this.b=z}y=this.ak(z,b)
if(y==null)this.aS(z,b,this.aR(b,c))
else y.sa5(c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){x=this.bh()
this.c=x}y=this.ak(x,b)
if(y==null)this.aS(x,b,this.aR(b,c))
else y.sa5(c)}else{w=this.d
if(w==null){w=this.bh()
this.d=w}v=this.aD(b)
u=this.aQ(w,v)
if(u==null)this.aS(w,v,[this.aR(b,c)])
else{t=this.aE(u,b)
if(t>=0)u[t].sa5(c)
else u.push(this.aR(b,c))}}},
aF:function(a,b){if(typeof b==="string")return this.ci(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ci(this.c,b)
else return this.eL(b)},
eL:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.aQ(z,this.aD(a))
x=this.aE(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.cs(w)
return w.ga5()},
ap:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
R:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(new P.a4(this))
z=z.c}},
ci:function(a,b){var z
if(a==null)return
z=this.ak(a,b)
if(z==null)return
this.cs(z)
this.c1(a,b)
return z.ga5()},
aR:function(a,b){var z,y
z=new H.hU(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cs:function(a){var z,y
z=a.ge3()
y=a.ge2()
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
aD:function(a){return J.U(a)&0x3ffffff},
aE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].gcJ(),b))return y
return-1},
j:function(a){return P.bz(this)},
ak:function(a,b){return a[b]},
aQ:function(a,b){return a[b]},
aS:function(a,b,c){a[b]=c},
c1:function(a,b){delete a[b]},
c_:function(a,b){return this.ak(a,b)!=null},
bh:function(){var z=Object.create(null)
this.aS(z,"<non-identifier-key>",z)
this.c1(z,"<non-identifier-key>")
return z},
$ishD:1},
hR:{"^":"e:1;a",
$1:[function(a){return this.a.h(0,a)},null,null,2,0,null,19,"call"]},
hU:{"^":"b;cJ:a<,a5:b@,e2:c<,e3:d<"},
hV:{"^":"h;a,$ti",
gi:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.hW(z,z.r,null,null)
y.c=z.e
return y}},
hW:{"^":"b;a,b,c,d",
gC:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(new P.a4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kz:{"^":"e:1;a",
$1:function(a){return this.a(a)}},
kA:{"^":"e:9;a",
$2:function(a,b){return this.a(a,b)}},
kB:{"^":"e:10;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kt:function(a){var z=H.n(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
kN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
x:function(a){return a},
bP:function(a){return a},
dy:{"^":"f;",$isdy:1,$isfb:1,"%":"ArrayBuffer"},
cm:{"^":"f;",$iscm:1,"%":"DataView;ArrayBufferView;cl|dB|dC|dz|dA|dD|af"},
cl:{"^":"cm;",
gi:function(a){return a.length},
$ism:1,
$asm:I.ai,
$iso:1,
$aso:I.ai},
dz:{"^":"dC;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
k:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
a[b]=c},
$ish:1,
$ash:function(){return[P.Z]},
$asbu:function(){return[P.Z]},
$asj:function(){return[P.Z]},
$isi:1,
$asi:function(){return[P.Z]},
"%":"Float64Array"},
af:{"^":"dD;",
k:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
a[b]=c},
$ish:1,
$ash:function(){return[P.w]},
$asbu:function(){return[P.w]},
$asj:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]}},
i7:{"^":"dz;","%":"Float32Array"},
m4:{"^":"af;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
"%":"Int16Array"},
m5:{"^":"af;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
"%":"Int32Array"},
m6:{"^":"af;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
"%":"Int8Array"},
m7:{"^":"af;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
"%":"Uint16Array"},
m8:{"^":"af;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
"%":"Uint32Array"},
m9:{"^":"af;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ma:{"^":"af;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.H(a,b))
return a[b]},
"%":";Uint8Array"},
dA:{"^":"cl+j;"},
dB:{"^":"cl+j;"},
dC:{"^":"dB+bu;"},
dD:{"^":"dA+bu;"}}],["","",,P,{"^":"",
j1:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ac(new P.j3(z),1)).observe(y,{childList:true})
return new P.j2(z,y,x)}else if(self.setImmediate!=null)return P.kl()
return P.km()},
nc:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.ac(new P.j4(a),0))},"$1","kk",2,0,4],
nd:[function(a){++init.globalState.f.b
self.setImmediate(H.ac(new P.j5(a),0))},"$1","kl",2,0,4],
ne:[function(a){P.cv(C.i,a)},"$1","km",2,0,4],
aa:function(a,b){P.ei(null,a)
return b.gey()},
a2:function(a,b){P.ei(a,b)},
a9:function(a,b){J.eP(b,a)},
a8:function(a,b){b.cD(H.P(a),H.O(a))},
ei:function(a,b){var z,y,x,w
z=new P.k1(b)
y=new P.k2(b)
x=J.r(a)
if(!!x.$isK)a.bk(z,y)
else if(!!x.$isM)x.bA(a,z,y)
else{w=new P.K(0,$.p,null,[null])
w.a=4
w.c=a
w.bk(z,null)}},
ab:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
$.p.toString
return new P.kh(z)},
kb:function(a,b,c){if(H.aj(a,{func:1,args:[P.S,P.S]}))return a.$2(b,c)
else return a.$1(b)},
ej:function(a,b){if(H.aj(a,{func:1,args:[P.S,P.S]})){b.toString
return a}else{b.toString
return a}},
fR:function(a,b,c){var z
if(a==null)a=new P.bB()
z=$.p
if(z!==C.d)z.toString
z=new P.K(0,z,null,[c])
z.bT(a,b)
return z},
a3:function(a){return new P.jZ(new P.K(0,$.p,null,[a]),[a])},
k7:function(a,b,c){$.p.toString
a.W(b,c)},
kd:function(){var z,y
for(;z=$.ax,z!=null;){$.aU=null
y=z.b
$.ax=y
if(y==null)$.aT=null
z.a.$0()}},
no:[function(){$.cE=!0
try{P.kd()}finally{$.aU=null
$.cE=!1
if($.ax!=null)$.$get$cA().$1(P.er())}},"$0","er",0,0,2],
en:function(a){var z=new P.e5(a,null)
if($.ax==null){$.aT=z
$.ax=z
if(!$.cE)$.$get$cA().$1(P.er())}else{$.aT.b=z
$.aT=z}},
kf:function(a){var z,y,x
z=$.ax
if(z==null){P.en(a)
$.aU=$.aT
return}y=new P.e5(a,null)
x=$.aU
if(x==null){y.b=z
$.aU=y
$.ax=y}else{y.b=x.b
x.b=y
$.aU=y
if(y.b==null)$.aT=y}},
eD:function(a){var z=$.p
if(C.d===z){P.ay(null,null,C.d,a)
return}z.toString
P.ay(null,null,z,z.bm(a))},
mP:function(a,b){return new P.jY(null,a,!1,[b])},
k4:function(a,b,c){var z=a.bn(0)
if(!!J.r(z).$isM&&z!==$.$get$b4())z.bD(new P.k5(b,c))
else b.aj(c)},
eh:function(a,b,c){$.p.toString
a.ax(b,c)},
iU:function(a,b){var z=$.p
if(z===C.d){z.toString
return P.cv(a,b)}return P.cv(a,z.bm(b))},
cv:function(a,b){var z=C.b.M(a.a,1000)
return H.iR(z<0?0:z,b)},
bj:function(a,b,c,d,e){var z={}
z.a=d
P.kf(new P.ke(z,e))},
ek:function(a,b,c,d){var z,y
y=$.p
if(y===c)return d.$0()
$.p=c
z=y
try{y=d.$0()
return y}finally{$.p=z}},
em:function(a,b,c,d,e){var z,y
y=$.p
if(y===c)return d.$1(e)
$.p=c
z=y
try{y=d.$1(e)
return y}finally{$.p=z}},
el:function(a,b,c,d,e,f){var z,y
y=$.p
if(y===c)return d.$2(e,f)
$.p=c
z=y
try{y=d.$2(e,f)
return y}finally{$.p=z}},
ay:function(a,b,c,d){var z=C.d!==c
if(z){if(z){c.toString
z=!1}else z=!0
d=!z?c.bm(d):c.eg(d)}P.en(d)},
j3:{"^":"e:1;a",
$1:[function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()},null,null,2,0,null,4,"call"]},
j2:{"^":"e:11;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j4:{"^":"e:0;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
j5:{"^":"e:0;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
k1:{"^":"e:1;a",
$1:[function(a){return this.a.$2(0,a)},null,null,2,0,null,0,"call"]},
k2:{"^":"e:12;a",
$2:[function(a,b){this.a.$2(1,new H.ca(a,b))},null,null,4,0,null,1,2,"call"]},
kh:{"^":"e:13;a",
$2:[function(a,b){this.a(a,b)},null,null,4,0,null,20,0,"call"]},
M:{"^":"b;$ti"},
l5:{"^":"b;$ti"},
e7:{"^":"b;ey:a<,$ti",
cD:[function(a,b){if(a==null)a=new P.bB()
if(this.a.a!==0)throw H.a(new P.aQ("Future already completed"))
$.p.toString
this.W(a,b)},function(a){return this.cD(a,null)},"cC","$2","$1","gej",2,2,5]},
cz:{"^":"e7;a,$ti",
aq:function(a,b){var z=this.a
if(z.a!==0)throw H.a(new P.aQ("Future already completed"))
z.dN(b)},
W:function(a,b){this.a.bT(a,b)}},
jZ:{"^":"e7;a,$ti",
aq:function(a,b){var z=this.a
if(z.a!==0)throw H.a(new P.aQ("Future already completed"))
z.aj(b)},
W:function(a,b){this.a.W(a,b)}},
e9:{"^":"b;a3:a@,H:b>,c,d,e",
gao:function(){return this.b.b},
gcI:function(){return(this.c&1)!==0},
geG:function(){return(this.c&2)!==0},
gcH:function(){return this.c===8},
geH:function(){return this.e!=null},
eE:function(a){return this.b.b.bx(this.d,a)},
eO:function(a){if(this.c!==6)return!0
return this.b.b.bx(this.d,J.aW(a))},
cG:function(a){var z,y,x
z=this.e
y=J.k(a)
x=this.b.b
if(H.aj(z,{func:1,args:[P.b,P.a6]}))return x.eZ(z,y.gN(a),a.ga1())
else return x.bx(z,y.gN(a))},
eF:function(){return this.b.b.cW(this.d)}},
K:{"^":"b;ab:a<,ao:b<,an:c<,$ti",
ge_:function(){return this.a===2},
gbg:function(){return this.a>=4},
gdZ:function(){return this.a===8},
e7:function(a){this.a=2
this.c=a},
bA:function(a,b,c){var z=$.p
if(z!==C.d){z.toString
if(c!=null)c=P.ej(c,z)}return this.bk(b,c)},
cZ:function(a,b){return this.bA(a,b,null)},
bk:function(a,b){var z=new P.K(0,$.p,null,[null])
this.b4(new P.e9(null,z,b==null?1:3,a,b))
return z},
bD:function(a){var z,y
z=$.p
y=new P.K(0,z,null,this.$ti)
if(z!==C.d)z.toString
this.b4(new P.e9(null,y,8,a,null))
return y},
e9:function(){this.a=1},
dQ:function(){this.a=0},
gaa:function(){return this.c},
gdP:function(){return this.c},
ea:function(a){this.a=4
this.c=a},
e8:function(a){this.a=8
this.c=a},
bV:function(a){this.a=a.gab()
this.c=a.gan()},
b4:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gbg()){y.b4(a)
return}this.a=y.gab()
this.c=y.gan()}z=this.b
z.toString
P.ay(null,null,z,new P.jn(this,a))}},
cf:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.ga3()!=null;)w=w.ga3()
w.sa3(x)}}else{if(y===2){v=this.c
if(!v.gbg()){v.cf(a)
return}this.a=v.gab()
this.c=v.gan()}z.a=this.ck(a)
y=this.b
y.toString
P.ay(null,null,y,new P.ju(z,this))}},
am:function(){var z=this.c
this.c=null
return this.ck(z)},
ck:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.ga3()
z.sa3(y)}return y},
aj:function(a){var z,y,x
z=this.$ti
y=H.bQ(a,"$isM",z,"$asM")
if(y){z=H.bQ(a,"$isK",z,null)
if(z)P.bM(a,this)
else P.ea(a,this)}else{x=this.am()
this.a=4
this.c=a
P.av(this,x)}},
W:[function(a,b){var z=this.am()
this.a=8
this.c=new P.bq(a,b)
P.av(this,z)},function(a){return this.W(a,null)},"f5","$2","$1","gb9",2,2,5,7,1,2],
dN:function(a){var z=H.bQ(a,"$isM",this.$ti,"$asM")
if(z){this.dO(a)
return}this.a=1
z=this.b
z.toString
P.ay(null,null,z,new P.jp(this,a))},
dO:function(a){var z=H.bQ(a,"$isK",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.ay(null,null,z,new P.jt(this,a))}else P.bM(a,this)
return}P.ea(a,this)},
bT:function(a,b){var z
this.a=1
z=this.b
z.toString
P.ay(null,null,z,new P.jo(this,a,b))},
$isM:1,
v:{
jm:function(a,b){var z=new P.K(0,$.p,null,[b])
z.a=4
z.c=a
return z},
ea:function(a,b){var z,y,x
b.e9()
try{J.f1(a,new P.jq(b),new P.jr(b))}catch(x){z=H.P(x)
y=H.O(x)
P.eD(new P.js(b,z,y))}},
bM:function(a,b){var z
for(;a.ge_();)a=a.gdP()
if(a.gbg()){z=b.am()
b.bV(a)
P.av(b,z)}else{z=b.gan()
b.e7(a)
a.cf(z)}},
av:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.gdZ()
if(b==null){if(w){v=z.a.gaa()
y=z.a.gao()
u=J.aW(v)
t=v.ga1()
y.toString
P.bj(null,null,y,u,t)}return}for(;b.ga3()!=null;b=s){s=b.ga3()
b.sa3(null)
P.av(z.a,b)}r=z.a.gan()
x.a=w
x.b=r
y=!w
if(!y||b.gcI()||b.gcH()){q=b.gao()
if(w){u=z.a.gao()
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){v=z.a.gaa()
y=z.a.gao()
u=J.aW(v)
t=v.ga1()
y.toString
P.bj(null,null,y,u,t)
return}p=$.p
if(p==null?q!=null:p!==q)$.p=q
else p=null
if(b.gcH())new P.jx(z,x,w,b).$0()
else if(y){if(b.gcI())new P.jw(x,b,r).$0()}else if(b.geG())new P.jv(z,x,b).$0()
if(p!=null)$.p=p
y=x.b
if(!!J.r(y).$isM){o=J.cX(b)
if(y.a>=4){b=o.am()
o.bV(y)
z.a=y
continue}else P.bM(y,o)
return}}o=J.cX(b)
b=o.am()
y=x.a
u=x.b
if(!y)o.ea(u)
else o.e8(u)
z.a=o
y=o}}}},
jn:{"^":"e:0;a,b",
$0:function(){P.av(this.a,this.b)}},
ju:{"^":"e:0;a,b",
$0:function(){P.av(this.b,this.a.a)}},
jq:{"^":"e:1;a",
$1:[function(a){var z=this.a
z.dQ()
z.aj(a)},null,null,2,0,null,8,"call"]},
jr:{"^":"e:14;a",
$2:[function(a,b){this.a.W(a,b)},function(a){return this.$2(a,null)},"$1",null,null,null,2,2,null,7,1,2,"call"]},
js:{"^":"e:0;a,b,c",
$0:function(){this.a.W(this.b,this.c)}},
jp:{"^":"e:0;a,b",
$0:function(){var z,y
z=this.a
y=z.am()
z.a=4
z.c=this.b
P.av(z,y)}},
jt:{"^":"e:0;a,b",
$0:function(){P.bM(this.b,this.a)}},
jo:{"^":"e:0;a,b,c",
$0:function(){this.a.W(this.b,this.c)}},
jx:{"^":"e:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.d.eF()}catch(w){y=H.P(w)
x=H.O(w)
if(this.c){v=J.aW(this.a.a.gaa())
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.gaa()
else u.b=new P.bq(y,x)
u.a=!0
return}if(!!J.r(z).$isM){if(z instanceof P.K&&z.gab()>=4){if(z.gab()===8){v=this.b
v.b=z.gan()
v.a=!0}return}t=this.a.a
v=this.b
v.b=J.cY(z,new P.jy(t))
v.a=!1}}},
jy:{"^":"e:1;a",
$1:[function(a){return this.a},null,null,2,0,null,4,"call"]},
jw:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eE(this.c)}catch(x){z=H.P(x)
y=H.O(x)
w=this.a
w.b=new P.bq(z,y)
w.a=!0}}},
jv:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.gaa()
w=this.c
if(w.eO(z)===!0&&w.geH()){v=this.b
v.b=w.cG(z)
v.a=!1}}catch(u){y=H.P(u)
x=H.O(u)
w=this.a
v=J.aW(w.a.gaa())
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.gaa()
else s.b=new P.bq(y,x)
s.a=!0}}},
e5:{"^":"b;a,b"},
X:{"^":"b;$ti",
S:function(a,b){return new P.jJ(b,this,[H.C(this,"X",0),null])},
eA:function(a,b){return new P.jz(a,b,this,[H.C(this,"X",0)])},
cG:function(a){return this.eA(a,null)},
gi:function(a){var z,y
z={}
y=new P.K(0,$.p,null,[P.w])
z.a=0
this.as(new P.iJ(z),!0,new P.iK(z,y),y.gb9())
return y},
a7:function(a){var z,y,x
z=H.C(this,"X",0)
y=H.n([],[z])
x=new P.K(0,$.p,null,[[P.i,z]])
this.as(new P.iL(this,y),!0,new P.iM(y,x),x.gb9())
return x},
V:function(a,b){if(b<0)H.v(P.b_(b))
return new P.jV(b,this,[H.C(this,"X",0)])},
gaV:function(a){var z,y
z={}
y=new P.K(0,$.p,null,[H.C(this,"X",0)])
z.a=null
z.a=this.as(new P.iH(z,this,y),!0,new P.iI(y),y.gb9())
return y}},
iJ:{"^":"e:1;a",
$1:[function(a){++this.a.a},null,null,2,0,null,4,"call"]},
iK:{"^":"e:0;a,b",
$0:[function(){this.b.aj(this.a.a)},null,null,0,0,null,"call"]},
iL:{"^":"e;a,b",
$1:[function(a){this.b.push(a)},null,null,2,0,null,9,"call"],
$S:function(){return H.bR(function(a){return{func:1,args:[a]}},this.a,"X")}},
iM:{"^":"e:0;a,b",
$0:[function(){this.b.aj(this.a)},null,null,0,0,null,"call"]},
iH:{"^":"e;a,b,c",
$1:[function(a){P.k4(this.a.a,this.c,a)},null,null,2,0,null,8,"call"],
$S:function(){return H.bR(function(a){return{func:1,args:[a]}},this.b,"X")}},
iI:{"^":"e:0;a",
$0:[function(){var z,y,x,w
try{x=H.cc()
throw H.a(x)}catch(w){z=H.P(w)
y=H.O(w)
P.k7(this.a,z,y)}},null,null,0,0,null,"call"]},
iG:{"^":"b;"},
j6:{"^":"b;ao:d<,ab:e<",
bO:function(a,b,c,d){var z=this.d
z.toString
this.a=a
this.b=P.ej(b,z)
this.c=c},
bv:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.cA()
if((z&4)===0&&(this.e&32)===0)this.c5(this.gcb())},
cQ:function(a){return this.bv(a,null)},
cT:function(a){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gY(z)}else z=!1
if(z)this.r.b2(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.c5(this.gcd())}}}},
bn:function(a){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.b6()
z=this.f
return z==null?$.$get$b4():z},
gbr:function(){return this.e>=128},
b6:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.cA()
if((this.e&32)===0)this.r=null
this.f=this.ca()},
aL:["dt",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.cm(b)
else this.b5(new P.jb(b,null))}],
ax:["du",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.co(a,b)
else this.b5(new P.jd(a,b,null))}],
dM:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.cn()
else this.b5(C.u)},
cc:[function(){},"$0","gcb",0,0,2],
ce:[function(){},"$0","gcd",0,0,2],
ca:function(){return},
b5:function(a){var z,y
z=this.r
if(z==null){z=new P.jX(null,null,0)
this.r=z}z.a4(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.b2(this)}},
cm:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.by(this.a,a)
this.e=(this.e&4294967263)>>>0
this.b7((z&4)!==0)},
co:function(a,b){var z,y
z=this.e
y=new P.j8(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.b6()
z=this.f
if(!!J.r(z).$isM&&z!==$.$get$b4())z.bD(y)
else y.$0()}else{y.$0()
this.b7((z&4)!==0)}},
cn:function(){var z,y
z=new P.j7(this)
this.b6()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.r(y).$isM&&y!==$.$get$b4())y.bD(z)
else z.$0()},
c5:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.b7((z&4)!==0)},
b7:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.gY(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.gY(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.cc()
else this.ce()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.b2(this)}},
j8:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.aj(y,{func:1,args:[P.b,P.a6]})
w=z.d
v=this.b
u=z.b
if(x)w.f_(u,v,this.c)
else w.by(u,v)
z.e=(z.e&4294967263)>>>0}},
j7:{"^":"e:2;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.cX(z.c)
z.e=(z.e&4294967263)>>>0}},
e8:{"^":"b;aY:a*"},
jb:{"^":"e8;G:b>,a",
bw:function(a){a.cm(this.b)}},
jd:{"^":"e8;N:b>,a1:c<,a",
bw:function(a){a.co(this.b,this.c)}},
jc:{"^":"b;",
bw:function(a){a.cn()},
gaY:function(a){return},
saY:function(a,b){throw H.a(new P.aQ("No events after a done."))}},
jM:{"^":"b;ab:a<",
b2:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.eD(new P.jN(this,a))
this.a=1},
cA:function(){if(this.a===1)this.a=3}},
jN:{"^":"e:0;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=x.gaY(x)
z.b=w
if(w==null)z.c=null
x.bw(this.b)}},
jX:{"^":"jM;b,c,a",
gY:function(a){return this.c==null},
a4:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{z.saY(0,b)
this.c=b}}},
jY:{"^":"b;a,b,c,$ti"},
k5:{"^":"e:0;a,b",
$0:function(){return this.a.aj(this.b)}},
au:{"^":"X;$ti",
as:function(a,b,c,d){return this.c0(a,d,c,!0===b)},
cK:function(a,b,c){return this.as(a,null,b,c)},
c0:function(a,b,c,d){return P.jl(this,a,b,c,d,H.C(this,"au",0),H.C(this,"au",1))},
be:function(a,b){b.aL(0,a)},
c6:function(a,b,c){c.ax(a,b)},
$asX:function(a,b){return[b]}},
bL:{"^":"j6;x,y,a,b,c,d,e,f,r,$ti",
bP:function(a,b,c,d,e,f,g){this.y=this.x.a.cK(this.gdW(),this.gdX(),this.gdY())},
aL:function(a,b){if((this.e&2)!==0)return
this.dt(0,b)},
ax:function(a,b){if((this.e&2)!==0)return
this.du(a,b)},
cc:[function(){var z=this.y
if(z==null)return
z.cQ(0)},"$0","gcb",0,0,2],
ce:[function(){var z=this.y
if(z==null)return
z.cT(0)},"$0","gcd",0,0,2],
ca:function(){var z=this.y
if(z!=null){this.y=null
return z.bn(0)}return},
f6:[function(a){this.x.be(a,this)},"$1","gdW",2,0,function(){return H.bR(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"bL")},9],
f8:[function(a,b){this.x.c6(a,b,this)},"$2","gdY",4,0,15,1,2],
f7:[function(){this.dM()},"$0","gdX",0,0,2],
v:{
jl:function(a,b,c,d,e,f,g){var z,y
z=$.p
y=e?1:0
y=new P.bL(a,null,null,null,null,z,y,null,null,[f,g])
y.bO(b,c,d,e)
y.bP(a,b,c,d,e,f,g)
return y}}},
jJ:{"^":"au;b,a,$ti",
be:function(a,b){var z,y,x,w
z=null
try{z=this.b.$1(a)}catch(w){y=H.P(w)
x=H.O(w)
P.eh(b,y,x)
return}b.aL(0,z)}},
jz:{"^":"au;b,c,a,$ti",
c6:function(a,b,c){var z,y,x,w,v
z=!0
if(z===!0)try{P.kb(this.b,a,b)}catch(w){y=H.P(w)
x=H.O(w)
v=y
if(v==null?a==null:v===a)c.ax(a,b)
else P.eh(c,y,x)
return}else c.ax(a,b)},
$asX:null,
$asau:function(a){return[a,a]}},
jW:{"^":"bL;dy,x,y,a,b,c,d,e,f,r,$ti",
gba:function(a){return this.dy},
sba:function(a,b){this.dy=b},
$asbL:function(a){return[a,a]}},
jV:{"^":"au;b,a,$ti",
c0:function(a,b,c,d){var z,y,x
z=H.a_(this,0)
y=$.p
x=d?1:0
x=new P.jW(this.b,this,null,null,null,null,y,x,null,null,this.$ti)
x.bO(a,b,c,d)
x.bP(this,a,b,c,d,z,z)
return x},
be:function(a,b){var z=b.gba(b)
if(z>0){b.sba(0,z-1)
return}b.aL(0,a)},
$asX:null,
$asau:function(a){return[a,a]}},
mY:{"^":"b;"},
bq:{"^":"b;N:a>,a1:b<",
j:function(a){return H.d(this.a)},
$isG:1},
k0:{"^":"b;"},
ke:{"^":"e:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bB()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.al(y)
throw x}},
jR:{"^":"k0;",
cX:function(a){var z,y,x
try{if(C.d===$.p){a.$0()
return}P.ek(null,null,this,a)}catch(x){z=H.P(x)
y=H.O(x)
P.bj(null,null,this,z,y)}},
by:function(a,b){var z,y,x
try{if(C.d===$.p){a.$1(b)
return}P.em(null,null,this,a,b)}catch(x){z=H.P(x)
y=H.O(x)
P.bj(null,null,this,z,y)}},
f_:function(a,b,c){var z,y,x
try{if(C.d===$.p){a.$2(b,c)
return}P.el(null,null,this,a,b,c)}catch(x){z=H.P(x)
y=H.O(x)
P.bj(null,null,this,z,y)}},
eg:function(a){return new P.jT(this,a)},
bm:function(a){return new P.jS(this,a)},
eh:function(a){return new P.jU(this,a)},
h:function(a,b){return},
cW:function(a){if($.p===C.d)return a.$0()
return P.ek(null,null,this,a)},
bx:function(a,b){if($.p===C.d)return a.$1(b)
return P.em(null,null,this,a,b)},
eZ:function(a,b,c){if($.p===C.d)return a.$2(b,c)
return P.el(null,null,this,a,b,c)}},
jT:{"^":"e:0;a,b",
$0:function(){return this.a.cW(this.b)}},
jS:{"^":"e:0;a,b",
$0:function(){return this.a.cX(this.b)}},
jU:{"^":"e:1;a,b",
$1:[function(a){return this.a.by(this.b,a)},null,null,2,0,null,21,"call"]}}],["","",,P,{"^":"",
aq:function(){return new H.ae(0,null,null,null,null,null,0,[null,null])},
aK:function(a){return H.ku(a,new H.ae(0,null,null,null,null,null,0,[null,null]))},
hL:function(a,b,c){var z,y
if(P.cF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aV()
y.push(a)
try{P.kc(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.dQ(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bw:function(a,b,c){var z,y,x
if(P.cF(a))return b+"..."+c
z=new P.bH(b)
y=$.$get$aV()
y.push(a)
try{x=z
x.sP(P.dQ(x.gP(),a,", "))}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.sP(y.gP()+c)
y=z.gP()
return y.charCodeAt(0)==0?y:y},
cF:function(a){var z,y
for(z=0;y=$.$get$aV(),z<y.length;++z)if(a===y[z])return!0
return!1},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.d(z.gC())
b.push(w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gC();++x
if(!z.w()){if(x<=4){b.push(H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC();++x
for(;z.w();t=s,s=r){r=z.gC();++x
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
aL:function(a,b,c,d){return new P.jC(0,null,null,null,null,null,0,[d])},
bz:function(a){var z,y,x
z={}
if(P.cF(a))return"{...}"
y=new P.bH("")
try{$.$get$aV().push(a)
x=y
x.sP(x.gP()+"{")
z.a=!0
J.eR(a,new P.hZ(z,y))
z=y
z.sP(z.gP()+"}")}finally{z=$.$get$aV()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
ee:{"^":"ae;a,b,c,d,e,f,r,$ti",
aD:function(a){return H.kM(a)&0x3ffffff},
aE:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gcJ()
if(x==null?b==null:x===b)return y}return-1},
v:{
aS:function(a,b){return new P.ee(0,null,null,null,null,null,0,[a,b])}}},
jC:{"^":"jA;a,b,c,d,e,f,r,$ti",
gK:function(a){var z=new P.cC(this,this.r,null,null)
z.c=this.e
return z},
gi:function(a){return this.a},
ek:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dT(b)},
dT:function(a){var z=this.d
if(z==null)return!1
return this.aO(z[this.aM(a)],a)>=0},
cL:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.ek(0,a)?a:null
else return this.e0(a)},
e0:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.aM(a)]
x=this.aO(y,a)
if(x<0)return
return J.cS(y,x).gbb()},
a4:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.bQ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.bQ(x,b)}else return this.a2(0,b)},
a2:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.jE()
this.d=z}y=this.aM(b)
x=z[y]
if(x==null)z[y]=[this.b8(b)]
else{if(this.aO(x,b)>=0)return!1
x.push(this.b8(b))}return!0},
aF:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bY(this.c,b)
else return this.e4(0,b)},
e4:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aM(b)]
x=this.aO(y,b)
if(x<0)return!1
this.bZ(y.splice(x,1)[0])
return!0},
ap:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bQ:function(a,b){if(a[b]!=null)return!1
a[b]=this.b8(b)
return!0},
bY:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bZ(z)
delete a[b]
return!0},
b8:function(a){var z,y
z=new P.jD(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bZ:function(a){var z,y
z=a.gbX()
y=a.gbW()
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.sbX(z);--this.a
this.r=this.r+1&67108863},
aM:function(a){return J.U(a)&0x3ffffff},
aO:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].gbb(),b))return y
return-1},
v:{
jE:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jD:{"^":"b;bb:a<,bW:b<,bX:c@"},
cC:{"^":"b;a,b,c,d",
gC:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(new P.a4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.gbb()
this.c=this.c.gbW()
return!0}}}},
jA:{"^":"iu;"},
lY:{"^":"b;$ti",$ish:1},
j:{"^":"b;$ti",
gK:function(a){return new H.dv(a,this.gi(a),0,null)},
u:function(a,b){return this.h(a,b)},
S:function(a,b){return new H.ck(a,b,[H.C(a,"j",0),null])},
bp:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(new P.a4(a))}return y},
V:function(a,b){return H.bI(a,b,null,H.C(a,"j",0))},
L:function(a,b){var z,y,x
z=H.n([],[H.C(a,"j",0)])
C.a.si(z,this.gi(a))
for(y=0;y<this.gi(a);++y){x=this.h(a,y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
a7:function(a){return this.L(a,!0)},
B:function(a,b){var z,y,x
z=H.n([],[H.C(a,"j",0)])
y=this.gi(a)
x=J.R(b)
if(typeof x!=="number")return H.t(x)
C.a.si(z,y+x)
C.a.aJ(z,0,this.gi(a),a)
C.a.aJ(z,this.gi(a),z.length,b)
return z},
j:function(a){return P.bw(a,"[","]")}},
hY:{"^":"cj;"},
hZ:{"^":"e:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
cj:{"^":"b;$ti",
R:function(a,b){var z,y
for(z=J.ak(this.gar(a));z.w();){y=z.gC()
b.$2(y,this.h(a,y))}},
S:function(a,b){var z,y,x,w,v
z=P.aq()
for(y=J.ak(this.gar(a));y.w();){x=y.gC()
w=b.$2(x,this.h(a,x))
v=J.k(w)
z.k(0,v.gad(w),v.gG(w))}return z},
gi:function(a){return J.R(this.gar(a))},
j:function(a){return P.bz(a)}},
k_:{"^":"b;",
k:function(a,b,c){throw H.a(new P.q("Cannot modify unmodifiable map"))}},
i_:{"^":"b;",
h:function(a,b){return this.a.h(0,b)},
k:function(a,b,c){this.a.k(0,b,c)},
R:function(a,b){this.a.R(0,b)},
gi:function(a){var z=this.a
return z.gi(z)},
j:function(a){return P.bz(this.a)},
S:function(a,b){var z=this.a
return z.S(z,b)}},
iX:{"^":"i0;"},
hX:{"^":"ar;a,b,c,d,$ti",
dA:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.n(z,[b])},
gK:function(a){return new P.jF(this,this.c,this.d,this.b,null)},
gY:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var z,y,x,w
z=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=z)H.v(P.u(b,this,"index",null,z))
y=this.a
x=y.length
w=(this.b+b&x-1)>>>0
if(w<0||w>=x)return H.c(y,w)
return y[w]},
L:function(a,b){var z=H.n([],this.$ti)
C.a.si(z,this.gi(this))
this.ed(z)
return z},
a7:function(a){return this.L(a,!0)},
ap:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.c(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
j:function(a){return P.bw(this,"{","}")},
cS:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.a(H.cc());++this.d
y=this.a
x=y.length
if(z>=x)return H.c(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
a2:function(a,b){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.c(z,y)
z[y]=b
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.c4();++this.d},
c4:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.n(z,this.$ti)
z=this.a
x=this.b
w=z.length-x
C.a.ai(y,0,w,z,x)
C.a.ai(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
ed:function(a){var z,y,x,w,v
z=this.b
y=this.c
x=this.a
if(z<=y){w=y-z
C.a.ai(a,0,w,x,z)
return w}else{v=x.length-z
C.a.ai(a,0,v,x,z)
C.a.ai(a,v,v+this.c,this.a,0)
return this.c+v}},
v:{
ch:function(a,b){var z=new P.hX(null,0,0,0,[b])
z.dA(a,b)
return z}}},
jF:{"^":"b;a,b,c,d,e",
gC:function(){return this.e},
w:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.v(new P.a4(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.c(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
iv:{"^":"b;$ti",
L:function(a,b){var z,y,x,w,v
z=H.n([],this.$ti)
C.a.si(z,this.a)
for(y=new P.cC(this,this.r,null,null),y.c=this.e,x=0;y.w();x=v){w=y.d
v=x+1
if(x>=z.length)return H.c(z,x)
z[x]=w}return z},
a7:function(a){return this.L(a,!0)},
S:function(a,b){return new H.dd(this,b,[H.a_(this,0),null])},
j:function(a){return P.bw(this,"{","}")},
V:function(a,b){return H.dO(this,b,H.a_(this,0))},
$ish:1},
iu:{"^":"iv;"},
i0:{"^":"i_+k_;"}}],["","",,P,{"^":"",
aF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fO(a)},
fO:function(a){var z=J.r(a)
if(!!z.$ise)return z.j(a)
return H.bD(a)},
ao:function(a){return new P.jk(a)},
b7:function(a,b,c){var z,y
z=H.n([],[c])
for(y=J.ak(a);y.w();)z.push(y.gC())
if(b)return z
z.fixed$length=Array
return z},
ci:function(a,b,c,d){var z,y,x
z=H.n(new Array(a),[d])
for(y=0;y<a;++y){x=b.$1(y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
cN:function(a){H.kN(H.d(a))},
i9:{"^":"e:16;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.b_(0,y.a)
z.b_(0,a.ge1())
z.b_(0,": ")
z.b_(0,P.aF(b))
y.a=", "}},
kn:{"^":"b;"},
"+bool":0,
d7:{"^":"b;a,b",
dz:function(a,b){var z=this.a
if(!(C.b.aK(z)>864e13)){C.b.aK(z)
z=!1}else z=!0
if(z)throw H.a(P.b_("DateTime is outside valid range: "+this.geP()))},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.d7))return!1
return this.a===b.a&&!0},
gF:function(a){var z=this.a
return(z^C.b.cp(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t,s
z=P.fu(H.io(this))
y=P.b2(H.il(this))
x=P.b2(H.ih(this))
w=P.b2(H.ii(this))
v=P.b2(H.ik(this))
u=P.b2(H.im(this))
t=P.fv(H.ij(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
return s},
geP:function(){return this.a},
v:{
fu:function(a){var z,y
z=C.b.aK(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.d(z)
if(z>=10)return y+"00"+H.d(z)
return y+"000"+H.d(z)},
fv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b2:function(a){if(a>=10)return""+a
return"0"+a}}},
Z:{"^":"bl;"},
"+double":0,
ad:{"^":"b;aN:a<",
B:function(a,b){return new P.ad(this.a+b.gaN())},
J:function(a,b){return new P.ad(this.a-b.gaN())},
A:function(a,b){if(typeof b!=="number")return H.t(b)
return new P.ad(C.c.eY(this.a*b))},
a9:function(a,b){if(b===0)throw H.a(new P.fX())
return new P.ad(C.b.a9(this.a,b))},
ag:function(a,b){return this.a<b.gaN()},
af:function(a,b){return C.b.af(this.a,b.gaN())},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.ad))return!1
return this.a===b.a},
gF:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fN()
y=this.a
if(y<0)return"-"+new P.ad(0-y).j(0)
x=z.$1(C.b.M(y,6e7)%60)
w=z.$1(C.b.M(y,1e6)%60)
v=new P.fM().$1(y%1e6)
return""+C.b.M(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
gbq:function(a){return this.a<0},
a0:function(a){return new P.ad(0-this.a)}},
fM:{"^":"e:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fN:{"^":"e:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
G:{"^":"b;",
ga1:function(){return H.O(this.$thrownJsError)}},
f8:{"^":"G;a",
j:function(a){return"Assertion failed"}},
bB:{"^":"G;",
j:function(a){return"Throw of null."}},
am:{"^":"G;a,b,c,d",
gbd:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbc:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gbd()+y+x
if(!this.a)return w
v=this.gbc()
u=P.aF(this.b)
return w+v+": "+H.d(u)},
v:{
b_:function(a){return new P.am(!1,null,null,a)},
c6:function(a,b,c){return new P.am(!0,a,b,c)}}},
cp:{"^":"am;e,f,a,b,c,d",
gbd:function(){return"RangeError"},
gbc:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
v:{
iq:function(a){return new P.cp(null,null,!1,null,null,a)},
bE:function(a,b,c){return new P.cp(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cp(b,c,!0,a,d,"Invalid value")},
dK:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.a5(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.a5(b,a,c,"end",f))
return b}}},
fW:{"^":"am;e,i:f>,a,b,c,d",
gbd:function(){return"RangeError"},
gbc:function(){if(J.bn(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
v:{
u:function(a,b,c,d,e){var z=e!=null?e:J.R(b)
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
i8:{"^":"G;a,b,c,d,e",
j:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
y=new P.bH("")
z.a=""
for(x=this.c,w=x.length,v=0,u="",t="";v<w;++v,t=", "){s=x[v]
y.a=u+t
u=y.a+=H.d(P.aF(s))
z.a=", "}this.d.R(0,new P.i9(z,y))
r=P.aF(this.a)
q=y.j(0)
x="NoSuchMethodError: method not found: '"+H.d(this.b.a)+"'\nReceiver: "+H.d(r)+"\nArguments: ["+q+"]"
return x},
v:{
dE:function(a,b,c,d,e){return new P.i8(a,b,c,d,e)}}},
q:{"^":"G;a",
j:function(a){return"Unsupported operation: "+this.a}},
cy:{"^":"G;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.d(z):"UnimplementedError"}},
aQ:{"^":"G;a",
j:function(a){return"Bad state: "+this.a}},
a4:{"^":"G;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.aF(z))+"."}},
ia:{"^":"b;",
j:function(a){return"Out of Memory"},
ga1:function(){return},
$isG:1},
dP:{"^":"b;",
j:function(a){return"Stack Overflow"},
ga1:function(){return},
$isG:1},
ft:{"^":"G;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.d(z)+"' during its initialization"}},
lm:{"^":"b;"},
jk:{"^":"b;a",
j:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.d(z)}},
fX:{"^":"b;",
j:function(a){return"IntegerDivisionByZeroException"}},
fP:{"^":"b;a,b",
j:function(a){return"Expando:"+H.d(this.a)},
h:function(a,b){var z,y
z=this.b
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.v(P.c6(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.cn(b,"expando$values")
return y==null?null:H.cn(y,z)},
k:function(a,b,c){var z,y
z=this.b
if(typeof z!=="string")z.set(b,c)
else{y=H.cn(b,"expando$values")
if(y==null){y=new P.b()
H.dJ(b,"expando$values",y)}H.dJ(y,z,c)}}},
w:{"^":"bl;"},
"+int":0,
V:{"^":"b;$ti",
S:function(a,b){return H.bA(this,b,H.C(this,"V",0),null)},
L:function(a,b){return P.b7(this,b,H.C(this,"V",0))},
a7:function(a){return this.L(a,!0)},
gi:function(a){var z,y
z=this.gK(this)
for(y=0;z.w();)++y
return y},
V:function(a,b){return H.dO(this,b,H.C(this,"V",0))},
u:function(a,b){var z,y,x
if(b<0)H.v(P.a5(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.w();){x=z.gC()
if(b===y)return x;++y}throw H.a(P.u(b,this,"index",null,y))},
j:function(a){return P.hL(this,"(",")")}},
cd:{"^":"b;"},
i:{"^":"b;$ti",$ish:1},
"+List":0,
by:{"^":"b;$ti"},
S:{"^":"b;",
gF:function(a){return P.b.prototype.gF.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
bl:{"^":"b;"},
"+num":0,
b:{"^":";",
D:function(a,b){return this===b},
gF:function(a){return H.ag(this)},
j:function(a){return H.bD(this)},
bu:[function(a,b){throw H.a(P.dE(this,b.gcM(),b.gcR(),b.gcO(),null))},null,"gcP",2,0,null,3],
toString:function(){return this.j(this)}},
a6:{"^":"b;"},
y:{"^":"b;"},
"+String":0,
bH:{"^":"b;P:a@",
gi:function(a){return this.a.length},
b_:function(a,b){this.a+=H.d(b)},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
v:{
dQ:function(a,b,c){var z=J.ak(b)
if(!z.w())return a
if(c.length===0){do a+=H.d(z.gC())
while(z.w())}else{a+=H.d(z.gC())
for(;z.w();)a=a+c+H.d(z.gC())}return a}}},
aR:{"^":"b;"}}],["","",,W,{"^":"",
dp:function(a,b,c,d,e,f,g,h){var z,y,x,w
z=W.cb
y=new P.K(0,$.p,null,[z])
x=new P.cz(y,[z])
w=new XMLHttpRequest()
C.v.eS(w,"GET",a,!0)
W.a7(w,"load",new W.fV(x,w),!1)
W.a7(w,"error",x.gej(),!1)
w.send()
return y},
ah:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ed:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k9:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ja(a)
if(!!J.r(z).$isD)return z
return}else return a},
cG:function(a){var z=$.p
if(z===C.d)return a
if(a==null)return
return z.eh(a)},
E:{"^":"df;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLKeygenElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMetaElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kV:{"^":"E;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kX:{"^":"E;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
l_:{"^":"dl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$iso:1,
$aso:function(){return[W.b0]},
$asj:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$asl:function(){return[W.b0]},
"%":"AudioTrackList"},
l1:{"^":"E;G:value=","%":"HTMLButtonElement"},
bs:{"^":"E;q:height=,l:width=",
d4:function(a,b,c){return a.getContext(b)},
bF:function(a,b){return this.d4(a,b,null)},
$isbs:1,
"%":"HTMLCanvasElement"},
l2:{"^":"B;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l6:{"^":"fY;i:length=",
bU:function(a,b){var z,y
z=$.$get$d6()
y=z[b]
if(typeof y==="string")return y
y=this.ec(a,b)
z[b]=y
return y},
ec:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fI()+b
if(z in a)return z
return b},
gq:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fr:{"^":"b;",
gq:function(a){var z=a.getPropertyValue(this.bU(a,"height"))
return z==null?"":z},
gl:function(a){var z=a.getPropertyValue(this.bU(a,"width"))
return z==null?"":z}},
l8:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lc:{"^":"f;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
I:function(a){return a.z.$0()},
"%":"DeviceAcceleration"},
ld:{"^":"aG;G:value=","%":"DeviceLightEvent"},
lf:{"^":"f;",
j:function(a){return String(a)},
"%":"DOMException"},
lg:{"^":"fK;",
gae:function(a){return a.w},
gm:function(a){return a.x},
gp:function(a){return a.y},
gZ:function(a){return a.z},
au:function(a){return this.gae(a).$0()},
n:function(a){return this.gm(a).$0()},
t:function(a){return this.gp(a).$0()},
I:function(a){return this.gZ(a).$0()},
"%":"DOMPoint"},
fK:{"^":"f;",
gae:function(a){return a.w},
gm:function(a){return a.x},
gp:function(a){return a.y},
gZ:function(a){return a.z},
au:function(a){return this.gae(a).$0()},
n:function(a){return this.gm(a).$0()},
t:function(a){return this.gp(a).$0()},
I:function(a){return this.gZ(a).$0()},
"%":";DOMPointReadOnly"},
fL:{"^":"f;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gl(a))+" x "+H.d(this.gq(a))},
D:function(a,b){var z
if(b==null)return!1
z=J.r(b)
if(!z.$isW)return!1
return a.left===z.gbt(b)&&a.top===z.gbB(b)&&this.gl(a)===z.gl(b)&&this.gq(a)===z.gq(b)},
gF:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gl(a)
w=this.gq(a)
return W.ed(W.ah(W.ah(W.ah(W.ah(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gq:function(a){return a.height},
gbt:function(a){return a.left},
gbB:function(a){return a.top},
gl:function(a){return a.width},
gm:function(a){return a.x},
gp:function(a){return a.y},
n:function(a){return this.gm(a).$0()},
t:function(a){return this.gp(a).$0()},
$isW:1,
$asW:I.ai,
"%":";DOMRectReadOnly"},
lh:{"^":"hB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]},
$iso:1,
$aso:function(){return[P.y]},
$asj:function(){return[P.y]},
$isi:1,
$asi:function(){return[P.y]},
$asl:function(){return[P.y]},
"%":"DOMStringList"},
li:{"^":"f;i:length=,G:value=","%":"DOMTokenList"},
df:{"^":"B;",
j:function(a){return a.localName},
"%":";Element"},
lk:{"^":"E;q:height=,l:width=","%":"HTMLEmbedElement"},
ll:{"^":"aG;N:error=","%":"ErrorEvent"},
aG:{"^":"f;",
geo:function(a){return W.k9(a.currentTarget)},
"%":"AnimationEvent|AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|GamepadEvent|GeofencingEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|ServicePortConnectEvent|ServiceWorkerMessageEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
D:{"^":"f;",
dJ:function(a,b,c,d){return a.addEventListener(b,H.ac(c,1),!1)},
e5:function(a,b,c,d){return a.removeEventListener(b,H.ac(c,1),!1)},
$isD:1,
"%":"AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioContext|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioSourceNode|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|CompositorWorker|CompositorWorkerGlobalScope|ConvolverNode|CrossOriginServiceWorkerClient|DOMApplicationCache|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|NetworkInformation|Notification|OfflineAudioContext|OfflineResourceList|Oscillator|OscillatorNode|PannerNode|Performance|PermissionStatus|PresentationReceiver|PresentationRequest|RTCDTMFSender|RTCPeerConnection|RealtimeAnalyserNode|ScreenOrientation|ScriptProcessorNode|ServicePortCollection|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VTTCue|WaveShaperNode|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioContext|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dg|dl|dh|dk|di|dj"},
lF:{"^":"hz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$iso:1,
$aso:function(){return[W.b3]},
$asj:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$asl:function(){return[W.b3]},
"%":"FileList"},
lG:{"^":"D;N:error=",
gH:function(a){var z,y
z=a.result
if(!!J.r(z).$isfb){y=new Uint8Array(z,0)
return y}return z},
"%":"FileReader"},
lH:{"^":"D;N:error=,i:length=","%":"FileWriter"},
lK:{"^":"E;i:length=","%":"HTMLFormElement"},
lM:{"^":"f;G:value=","%":"GamepadButton"},
lO:{"^":"f;i:length=","%":"History"},
lP:{"^":"hx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.B]},
$ish:1,
$ash:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$asj:function(){return[W.B]},
$isi:1,
$asi:function(){return[W.B]},
$asl:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cb:{"^":"fU;eW:responseText=",
f9:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
eS:function(a,b,c,d){return a.open(b,c,d)},
a8:function(a,b){return a.send(b)},
$iscb:1,
"%":"XMLHttpRequest"},
fV:{"^":"e:1;a,b",
$1:function(a){var z,y,x,w,v
z=this.b
y=z.status
if(typeof y!=="number")return y.f3()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.a
if(y)v.aq(0,z)
else v.cC(a)}},
fU:{"^":"D;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lQ:{"^":"E;q:height=,l:width=","%":"HTMLIFrameElement"},
dq:{"^":"f;q:height=,l:width=",$isdq:1,"%":"ImageBitmap"},
dr:{"^":"f;q:height=,l:width=",$isdr:1,"%":"ImageData"},
bv:{"^":"E;q:height=,l:width=",
aq:function(a,b){return a.complete.$1(b)},
$isbv:1,
"%":"HTMLImageElement"},
lS:{"^":"E;q:height=,G:value=,l:width=","%":"HTMLInputElement"},
lV:{"^":"e2;ad:key=","%":"KeyboardEvent"},
lW:{"^":"E;G:value=","%":"HTMLLIElement"},
hT:{"^":"ct;","%":"CalcLength;LengthValue"},
lZ:{"^":"f;",
j:function(a){return String(a)},
"%":"Location"},
i2:{"^":"E;N:error=","%":"HTMLAudioElement;HTMLMediaElement"},
m0:{"^":"f;i:length=","%":"MediaList"},
m1:{"^":"E;G:value=","%":"HTMLMeterElement"},
m2:{"^":"i3;",
f4:function(a,b,c){return a.send(b,c)},
a8:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
i3:{"^":"D;","%":"MIDIInput;MIDIPort"},
m3:{"^":"hv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$iso:1,
$aso:function(){return[W.b8]},
$asj:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$asl:function(){return[W.b8]},
"%":"MimeTypeArray"},
i6:{"^":"e2;",
gaX:function(a){return new P.b9(a.movementX,a.movementY)},
"%":"WheelEvent;DragEvent|MouseEvent"},
B:{"^":"D;",
j:function(a){var z=a.nodeValue
return z==null?this.dq(a):z},
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mb:{"^":"hk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.B]},
$ish:1,
$ash:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$asj:function(){return[W.B]},
$isi:1,
$asi:function(){return[W.B]},
$asl:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
md:{"^":"ct;G:value=","%":"NumberValue"},
me:{"^":"E;q:height=,l:width=","%":"HTMLObjectElement"},
mf:{"^":"f;q:height=,l:width=","%":"OffscreenCanvas"},
mg:{"^":"E;G:value=","%":"HTMLOptionElement"},
mh:{"^":"E;G:value=","%":"HTMLOutputElement"},
mi:{"^":"E;G:value=","%":"HTMLParamElement"},
mk:{"^":"cx;i:length=","%":"Perspective"},
aN:{"^":"f;i:length=","%":"Plugin"},
ml:{"^":"hi;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aN]},
$ish:1,
$ash:function(){return[W.aN]},
$iso:1,
$aso:function(){return[W.aN]},
$asj:function(){return[W.aN]},
$isi:1,
$asi:function(){return[W.aN]},
$asl:function(){return[W.aN]},
"%":"PluginArray"},
mo:{"^":"i6;q:height=,l:width=","%":"PointerEvent"},
mp:{"^":"ct;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"PositionValue"},
mq:{"^":"D;G:value=","%":"PresentationAvailability"},
mr:{"^":"D;",
a8:function(a,b){return a.send(b)},
"%":"PresentationConnection"},
ms:{"^":"E;G:value=","%":"HTMLProgressElement"},
mA:{"^":"cx;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
I:function(a){return a.z.$0()},
"%":"Rotation"},
mB:{"^":"D;",
a8:function(a,b){return a.send(b)},
"%":"DataChannel|RTCDataChannel"},
cr:{"^":"f;",$iscr:1,"%":"RTCStatsReport"},
mC:{"^":"f;",
fa:[function(a){return a.result()},"$0","gH",0,0,17],
"%":"RTCStatsResponse"},
mD:{"^":"f;q:height=,l:width=","%":"Screen"},
mE:{"^":"E;i:length=,G:value=","%":"HTMLSelectElement"},
mG:{"^":"hT;G:value=","%":"SimpleLength"},
mH:{"^":"dk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$iso:1,
$aso:function(){return[W.ba]},
$asj:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$asl:function(){return[W.ba]},
"%":"SourceBufferList"},
mI:{"^":"hj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$iso:1,
$aso:function(){return[W.bb]},
$asj:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$asl:function(){return[W.bb]},
"%":"SpeechGrammarList"},
mJ:{"^":"aG;N:error=","%":"SpeechRecognitionError"},
aP:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
mN:{"^":"hC;",
h:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
R:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.n([],[P.y])
this.R(a,new W.iF(z))
return z},
gi:function(a){return a.length},
$ascj:function(){return[P.y,P.y]},
"%":"Storage"},
iF:{"^":"e:3;a",
$2:function(a,b){return this.a.push(a)}},
mO:{"^":"aG;ad:key=","%":"StorageEvent"},
ct:{"^":"f;","%":"KeywordValue|TransformValue;StyleValue"},
mS:{"^":"E;G:value=","%":"HTMLTextAreaElement"},
mT:{"^":"f;l:width=","%":"TextMetrics"},
mV:{"^":"hu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$iso:1,
$aso:function(){return[W.be]},
$asj:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$asl:function(){return[W.be]},
"%":"TextTrackCueList"},
mW:{"^":"dj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$iso:1,
$aso:function(){return[W.bd]},
$asj:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$asl:function(){return[W.bd]},
"%":"TextTrackList"},
mX:{"^":"f;i:length=","%":"TimeRanges"},
mZ:{"^":"hl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$iso:1,
$aso:function(){return[W.bf]},
$asj:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$asl:function(){return[W.bf]},
"%":"TouchList"},
n_:{"^":"f;i:length=","%":"TrackDefaultList"},
cx:{"^":"f;","%":"Matrix|Skew;TransformComponent"},
n3:{"^":"cx;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
I:function(a){return a.z.$0()},
"%":"Translation"},
e2:{"^":"aG;","%":"CompositionEvent|FocusEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
n4:{"^":"f;",
j:function(a){return String(a)},
"%":"URL"},
e3:{"^":"i2;q:height=,l:width=",$ise3:1,"%":"HTMLVideoElement"},
n7:{"^":"D;i:length=","%":"VideoTrackList"},
n8:{"^":"f;q:height=,l:width=","%":"VTTRegion"},
n9:{"^":"f;i:length=","%":"VTTRegionList"},
na:{"^":"D;",
a8:function(a,b){return a.send(b)},
"%":"WebSocket"},
iZ:{"^":"D;",
cj:function(a,b){return a.requestAnimationFrame(H.ac(b,1))},
c2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nb:{"^":"D;"},
nf:{"^":"B;G:value=","%":"Attr"},
ng:{"^":"f;q:height=,bt:left=,bB:top=,l:width=",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
D:function(a,b){var z,y,x
if(b==null)return!1
z=J.r(b)
if(!z.$isW)return!1
y=a.left
x=z.gbt(b)
if(y==null?x==null:y===x){y=a.top
x=z.gbB(b)
if(y==null?x==null:y===x){y=a.width
x=z.gl(b)
if(y==null?x==null:y===x){y=a.height
z=z.gq(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gF:function(a){var z,y,x,w
z=J.U(a.left)
y=J.U(a.top)
x=J.U(a.width)
w=J.U(a.height)
return W.ed(W.ah(W.ah(W.ah(W.ah(0,z),y),x),w))},
$isW:1,
$asW:I.ai,
"%":"ClientRect"},
nh:{"^":"hm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]},
$iso:1,
$aso:function(){return[P.W]},
$asj:function(){return[P.W]},
$isi:1,
$asi:function(){return[P.W]},
$asl:function(){return[P.W]},
"%":"ClientRectList|DOMRectList"},
ni:{"^":"hn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$iso:1,
$aso:function(){return[W.b1]},
$asj:function(){return[W.b1]},
$isi:1,
$asi:function(){return[W.b1]},
$asl:function(){return[W.b1]},
"%":"CSSRuleList"},
nj:{"^":"fL;",
gq:function(a){return a.height},
gl:function(a){return a.width},
gm:function(a){return a.x},
gp:function(a){return a.y},
n:function(a){return this.gm(a).$0()},
t:function(a){return this.gp(a).$0()},
"%":"DOMRect"},
nk:{"^":"ho;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$iso:1,
$aso:function(){return[W.b5]},
$asj:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$asl:function(){return[W.b5]},
"%":"GamepadList"},
nl:{"^":"ht;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.B]},
$ish:1,
$ash:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$asj:function(){return[W.B]},
$isi:1,
$asi:function(){return[W.B]},
$asl:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nm:{"^":"hq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aP]},
$ish:1,
$ash:function(){return[W.aP]},
$iso:1,
$aso:function(){return[W.aP]},
$asj:function(){return[W.aP]},
$isi:1,
$asi:function(){return[W.aP]},
$asl:function(){return[W.aP]},
"%":"SpeechRecognitionResultList"},
nn:{"^":"hs;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$iso:1,
$aso:function(){return[W.bc]},
$asj:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$asl:function(){return[W.bc]},
"%":"StyleSheetList"},
jh:{"^":"X;$ti",
as:function(a,b,c,d){return W.a7(this.a,this.b,a,!1)},
cK:function(a,b,c){return this.as(a,null,b,c)}},
je:{"^":"jh;a,b,c,$ti"},
ji:{"^":"iG;a,b,c,d,e",
dG:function(a,b,c,d){this.cr()},
bn:function(a){if(this.b==null)return
this.ct()
this.b=null
this.d=null
return},
bv:function(a,b){if(this.b==null)return;++this.a
this.ct()},
cQ:function(a){return this.bv(a,null)},
gbr:function(){return this.a>0},
cT:function(a){if(this.b==null||this.a<=0)return;--this.a
this.cr()},
cr:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
if(y)J.eM(x,this.c,z,!1)}},
ct:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eN(x,this.c,z,!1)}},
v:{
a7:function(a,b,c,d){var z=W.cG(new W.jj(c))
z=new W.ji(0,a,b,z,!1)
z.dG(a,b,c,!1)
return z}}},
jj:{"^":"e:1;a",
$1:[function(a){return this.a.$1(a)},null,null,2,0,null,5,"call"]},
l:{"^":"b;$ti",
gK:function(a){return new W.fQ(a,this.gi(a),-1,null)}},
fQ:{"^":"b;a,b,c,d",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.cS(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(){return this.d}},
j9:{"^":"b;a",$isf:1,$isD:1,v:{
ja:function(a){if(a===window)return a
else return new W.j9(a)}}},
dg:{"^":"D+j;"},
dh:{"^":"D+j;"},
di:{"^":"D+j;"},
dj:{"^":"di+l;"},
dk:{"^":"dh+l;"},
dl:{"^":"dg+l;"},
fY:{"^":"f+fr;"},
h1:{"^":"f+j;"},
h3:{"^":"f+j;"},
h0:{"^":"f+j;"},
hb:{"^":"f+j;"},
hd:{"^":"f+j;"},
he:{"^":"f+j;"},
hf:{"^":"f+j;"},
hg:{"^":"f+j;"},
hh:{"^":"f+j;"},
fZ:{"^":"f+j;"},
h2:{"^":"f+j;"},
h4:{"^":"f+j;"},
h6:{"^":"f+j;"},
h7:{"^":"f+j;"},
h9:{"^":"f+j;"},
hi:{"^":"h6+l;"},
hj:{"^":"h7+l;"},
hk:{"^":"h3+l;"},
hu:{"^":"h4+l;"},
hv:{"^":"h2+l;"},
hs:{"^":"fZ+l;"},
hx:{"^":"h9+l;"},
ht:{"^":"hb+l;"},
hz:{"^":"h1+l;"},
hB:{"^":"hg+l;"},
hl:{"^":"hh+l;"},
hm:{"^":"hf+l;"},
hn:{"^":"he+l;"},
ho:{"^":"hd+l;"},
hq:{"^":"h0+l;"},
hC:{"^":"f+cj;"}}],["","",,P,{"^":"",
ko:function(a){return a},
ks:function(a){var z,y,x,w,v
if(a==null)return
z=P.aq()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.cP)(y),++w){v=y[w]
z.k(0,v,a[v])}return z},
kp:function(a){var z,y
z=new P.K(0,$.p,null,[null])
y=new P.cz(z,[null])
a.then(H.ac(new P.kq(y),1))["catch"](H.ac(new P.kr(y),1))
return z},
dc:function(){var z=$.db
if(z==null){z=J.c2(window.navigator.userAgent,"Opera",0)
$.db=z}return z},
fI:function(){var z,y
z=$.d8
if(z!=null)return z
y=$.d9
if(y==null){y=J.c2(window.navigator.userAgent,"Firefox",0)
$.d9=y}if(y)z="-moz-"
else{y=$.da
if(y==null){y=P.dc()!==!0&&J.c2(window.navigator.userAgent,"Trident/",0)
$.da=y}if(y)z="-ms-"
else z=P.dc()===!0?"-o-":"-webkit-"}$.d8=z
return z},
j_:{"^":"b;",
cF:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aZ:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.d7(y,!0)
x.dz(y,!0)
return x}if(a instanceof RegExp)throw H.a(new P.cy("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kp(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.cF(a)
x=this.b
u=x.length
if(v>=u)return H.c(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.aq()
z.a=t
if(v>=u)return H.c(x,v)
x[v]=t
this.ex(a,new P.j0(z,this))
return z.a}if(a instanceof Array){s=a
v=this.cF(s)
x=this.b
if(v>=x.length)return H.c(x,v)
t=x[v]
if(t!=null)return t
u=J.N(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.c(x,v)
x[v]=t
for(x=J.aA(t),q=0;q<r;++q)x.k(t,q,this.aZ(u.h(s,q)))
return t}return a}},
j0:{"^":"e:3;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aZ(b)
J.cT(z,a,y)
return y}},
e4:{"^":"j_;a,b,c",
ex:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.cP)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kq:{"^":"e:1;a",
$1:[function(a){return this.a.aq(0,a)},null,null,2,0,null,0,"call"]},
kr:{"^":"e:1;a",
$1:[function(a){return this.a.cC(a)},null,null,2,0,null,0,"call"]}}],["","",,P,{"^":"",fs:{"^":"f;ad:key=","%":";IDBCursor"},l7:{"^":"fs;",
gG:function(a){return new P.e4([],[],!1).aZ(a.value)},
"%":"IDBCursorWithValue"},mx:{"^":"D;N:error=",
gH:function(a){return new P.e4([],[],!1).aZ(a.result)},
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},n0:{"^":"D;N:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
k8:function(a){var z,y
z=a.$dart_jsFunction
if(z!=null)return z
y=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.k3,a)
y[$.$get$c9()]=a
a.$dart_jsFunction=y
return y},
k3:[function(a,b){var z=H.ie(a,b)
return z},null,null,4,0,null,24,25],
ki:function(a){if(typeof a=="function")return a
else return P.k8(a)}}],["","",,P,{"^":"",
ec:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eE:function(a){return Math.sqrt(a)},
jO:{"^":"b;a,b",
dH:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.b.M(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.b.M(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.b.M(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.b.M(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.b.M(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.b.M(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.b.M(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.al()
this.al()
this.al()
this.al()},
al:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.b.M(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
eQ:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.a(P.iq("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)===0){this.al()
return(this.a&z)>>>0}do{this.al()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
v:{
jP:function(a){var z=new P.jO(0,0)
z.dH(a)
return z}}},
b9:{"^":"b;m:a>,p:b>",
j:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
D:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.b9))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gF:function(a){var z,y,x
z=J.U(this.a)
y=J.U(this.b)
y=P.ec(P.ec(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)},
B:function(a,b){var z,y,x,w
z=this.a
y=J.k(b)
x=y.gm(b)
if(typeof z!=="number")return z.B()
if(typeof x!=="number")return H.t(x)
w=this.b
y=y.gp(b)
if(typeof w!=="number")return w.B()
if(typeof y!=="number")return H.t(y)
return new P.b9(z+x,w+y)},
J:function(a,b){var z,y,x,w
z=this.a
y=J.k(b)
x=y.gm(b)
if(typeof z!=="number")return z.J()
if(typeof x!=="number")return H.t(x)
w=this.b
y=y.gp(b)
if(typeof w!=="number")return w.J()
if(typeof y!=="number")return H.t(y)
return new P.b9(z-x,w-y)},
A:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new P.b9(z*b,y*b)},
n:function(a){return this.a.$0()},
t:function(a){return this.b.$0()}},
mu:{"^":"b;"},
jQ:{"^":"b;"},
W:{"^":"jQ;"}}],["","",,P,{"^":"",kW:{"^":"f;G:value=","%":"SVGAngle"},ln:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEBlendElement"},lo:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEColorMatrixElement"},lp:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEComponentTransferElement"},lq:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFECompositeElement"},lr:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEConvolveMatrixElement"},ls:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEDiffuseLightingElement"},lt:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEDisplacementMapElement"},lu:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEFloodElement"},lv:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEGaussianBlurElement"},lw:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEImageElement"},lx:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEMergeElement"},ly:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEMorphologyElement"},lz:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEOffsetElement"},lA:{"^":"A;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
I:function(a){return a.z.$0()},
"%":"SVGFEPointLightElement"},lB:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFESpecularLightingElement"},lC:{"^":"A;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
I:function(a){return a.z.$0()},
"%":"SVGFESpotLightElement"},lD:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFETileElement"},lE:{"^":"A;q:height=,H:result=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFETurbulenceElement"},lI:{"^":"A;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFilterElement"},lJ:{"^":"aH;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGForeignObjectElement"},fT:{"^":"aH;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aH:{"^":"A;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lR:{"^":"aH;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGImageElement"},bx:{"^":"f;G:value=","%":"SVGLength"},lX:{"^":"hA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.bx]},
$asj:function(){return[P.bx]},
$isi:1,
$asi:function(){return[P.bx]},
$asl:function(){return[P.bx]},
"%":"SVGLengthList"},m_:{"^":"A;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGMaskElement"},bC:{"^":"f;G:value=","%":"SVGNumber"},mc:{"^":"hy;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.bC]},
$asj:function(){return[P.bC]},
$isi:1,
$asi:function(){return[P.bC]},
$asl:function(){return[P.bC]},
"%":"SVGNumberList"},mj:{"^":"A;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGPatternElement"},mm:{"^":"f;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGPoint"},mn:{"^":"f;i:length=","%":"SVGPointList"},mv:{"^":"f;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGRect"},mw:{"^":"fT;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGRectElement"},mQ:{"^":"hr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.y]},
$asj:function(){return[P.y]},
$isi:1,
$asi:function(){return[P.y]},
$asl:function(){return[P.y]},
"%":"SVGStringList"},A:{"^":"df;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGCursorElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mR:{"^":"aH;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGSVGElement"},iO:{"^":"aH;","%":"SVGTextPathElement;SVGTextContentElement"},mU:{"^":"iO;m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},n2:{"^":"hp;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.cw]},
$asj:function(){return[P.cw]},
$isi:1,
$asi:function(){return[P.cw]},
$asl:function(){return[P.cw]},
"%":"SVGTransformList"},n5:{"^":"aH;q:height=,l:width=,m:x=,p:y=",
n:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGUseElement"},hc:{"^":"f+j;"},h_:{"^":"f+j;"},h5:{"^":"f+j;"},h8:{"^":"f+j;"},hA:{"^":"hc+l;"},hp:{"^":"h_+l;"},hr:{"^":"h8+l;"},hy:{"^":"h5+l;"}}],["","",,P,{"^":"",kY:{"^":"f;i:length=","%":"AudioBuffer"},kZ:{"^":"f;G:value=","%":"AudioParam"}}],["","",,P,{"^":"",cq:{"^":"f;",
f1:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.r(g)
if(!!z.$isdr||g==null)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ko(g))
return}if(!!z.$isbv)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbs)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$ise3)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isdq)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.b_("Incorrect number or type of arguments"))},
f0:function(a,b,c,d,e,f,g){return this.f1(a,b,c,d,e,f,g,null,null,null)},
$iscq:1,
"%":"WebGLRenderingContext"}}],["","",,P,{"^":"",mL:{"^":"hw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return P.ks(a.item(b))},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.by]},
$asj:function(){return[P.by]},
$isi:1,
$asi:function(){return[P.by]},
$asl:function(){return[P.by]},
"%":"SQLResultSetRowList"},ha:{"^":"f+j;"},hw:{"^":"ha+l;"}}],["","",,Z,{"^":"",
c5:function(){var z=0,y=P.a3(),x,w,v
var $async$c5=P.ab(function(a,b){if(a===1)return P.a8(b,y)
while(true)switch(z){case 0:w=Z.bp
v=new P.K(0,$.p,null,[w])
J.cY(self.Ammo(),P.ki(new Z.f6(new P.cz(v,[w]))))
x=v
z=1
break
case 1:return P.a9(x,y)}})
return P.aa($async$c5,y)},
bp:{"^":"F;","%":""},
f6:{"^":"e:18;a",
$1:[function(a){this.a.aq(0,a)},null,null,2,0,null,22,"call"]},
kU:{"^":"F;","%":""},
n1:{"^":"F;","%":""},
n6:{"^":"F;","%":""},
mt:{"^":"F;","%":""},
fa:{"^":"F;","%":""},
l9:{"^":"fa;","%":""},
fj:{"^":"F;","%":""},
la:{"^":"fj;","%":""},
l4:{"^":"F;","%":""},
lj:{"^":"F;","%":""},
le:{"^":"F;","%":""},
fp:{"^":"F;","%":""},
mF:{"^":"fp;","%":""},
fJ:{"^":"F;","%":""},
l3:{"^":"fJ;","%":""},
i5:{"^":"F;","%":""},
lb:{"^":"i5;","%":""},
mz:{"^":"F;","%":""},
fk:{"^":"F;","%":""},
my:{"^":"fk;","%":""},
d2:{"^":"F;","%":""},
fq:{"^":"d2;","%":""},
d5:{"^":"fq;","%":""},
d3:{"^":"d2;","%":""},
ic:{"^":"d5;","%":""},
l0:{"^":"ic;","%":""},
mK:{"^":"d5;","%":""},
lN:{"^":"d3;","%":""},
mM:{"^":"d3;","%":""}}],["","",,A,{"^":"",
bV:function(a){var z,y
z=C.F.bp(a,0,new A.kx())
if(typeof z!=="number")return H.t(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kx:{"^":"e:19;",
$2:function(a,b){var z,y
z=J.I(a,J.U(b))
if(typeof z!=="number")return H.t(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aM:{"^":"b;c8:a<",
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
j:function(a){return"[0] "+this.a_(0).j(0)+"\n[1] "+this.a_(1).j(0)+"\n[2] "+this.a_(2).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=9)return H.c(z,b)
z[b]=c},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aM){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gF:function(a){return A.bV(this.a)},
a_:function(a){var z,y,x
z=new Float32Array(H.x(3))
y=this.a
if(a>=9)return H.c(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.c(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.c(y,x)
z[2]=y[x]
return new T.J(z)},
A:function(a,b){var z,y
z=new Float32Array(H.x(9))
y=new T.aM(z)
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
B:function(a,b){var z,y,x
z=new Float32Array(H.x(9))
y=new T.aM(z)
y.E(this)
x=b.gc8()
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
J:function(a,b){var z,y,x
z=new Float32Array(H.x(9))
y=new T.aM(z)
y.E(this)
x=b.gc8()
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
a0:function(a){var z,y
z=new Float32Array(H.x(9))
y=new T.aM(z)
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
z[8]=1}},Y:{"^":"b;c9:a<",
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
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
j:function(a){return"[0] "+this.a_(0).j(0)+"\n[1] "+this.a_(1).j(0)+"\n[2] "+this.a_(2).j(0)+"\n[3] "+this.a_(3).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=16)return H.c(z,b)
z[b]=c},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.Y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gF:function(a){return A.bV(this.a)},
a_:function(a){var z,y,x
z=new Float32Array(H.x(4))
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
return new T.at(z)},
a0:function(a){var z,y
z=new Float32Array(H.x(16))
y=new T.Y(z)
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
A:function(a,b){var z=new T.Y(new Float32Array(H.x(16)))
z.E(this)
z.bI(0,b,null,null)
return z},
B:function(a,b){var z,y,x
z=new Float32Array(H.x(16))
y=new T.Y(z)
y.E(this)
x=b.gc9()
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
J:function(a,b){var z,y,x
z=new Float32Array(H.x(16))
y=new T.Y(z)
y.E(this)
x=b.gc9()
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
d_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=J.r(b)
y=!!z.$isat
x=y?b.a[3]:1
if(!!z.$isJ){z=b.a
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
cU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
cV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
bI:function(a,b,c,d){var z,y,x,w,v
if(b instanceof T.J){z=b.a
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
ah:function(a,b){return this.bI(a,b,null,null)},
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
d0:function(){var z,y
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
b1:function(a){var z,y
z=new Float32Array(H.x(9))
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
return new T.aM(z)},
en:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
cN:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},aO:{"^":"b;bj:a<",
gm:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gZ:function(a){return this.a[2]},
gae:function(a){return this.a[3]},
E:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
dj:function(a,b,c,d){var z=this.a
z[0]=a
z[1]=b
z[2]=c
z[3]=d},
gi:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
A:function(a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=this.a
y=z[3]
x=z[2]
w=z[1]
v=z[0]
u=a1.gbj()
t=u.h(0,3)
s=u.h(0,2)
r=u.h(0,1)
q=u.h(0,0)
z=C.c.A(y,q)
p=C.c.A(v,t)
o=C.c.A(w,s)
n=C.c.A(x,r)
m=C.c.A(y,r)
l=C.c.A(w,t)
k=C.c.A(x,q)
j=C.c.A(v,s)
i=C.c.A(y,s)
h=C.c.A(x,t)
g=C.c.A(v,r)
f=C.c.A(w,q)
e=C.c.A(y,t)
d=C.c.A(v,q)
c=C.c.A(w,r)
b=C.c.A(x,s)
a=new T.aO(new Float32Array(H.x(4)))
a.dj(z+p+o-n,m+l+k-j,i+h+g-f,e-d-c-b)
return a},
B:function(a,b){var z,y,x
z=new Float32Array(H.x(4))
y=new T.aO(z)
y.E(this)
x=b.gbj()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
z[3]=z[3]+x[3]
return y},
J:function(a,b){var z,y,x
z=new Float32Array(H.x(4))
y=new T.aO(z)
y.E(this)
x=b.gbj()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
a0:function(a){var z,y
z=new Float32Array(H.x(4))
y=new T.aO(z)
y.E(this)
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=4)return H.c(z,b)
z[b]=c},
j:function(a){var z=this.a
return H.d(z[0])+", "+H.d(z[1])+", "+H.d(z[2])+" @ "+H.d(z[3])},
n:function(a){return this.gm(this).$0()},
t:function(a){return this.gp(this).$0()},
I:function(a){return this.gZ(this).$0()},
au:function(a){return this.gae(this).$0()}},iw:{"^":"b;a,b",
dC:function(a){var z,y,x
z=P.w
y=P.ci(256,new T.iy(a),!1,z)
x=P.ci(y.length*2,new T.iz(y),!1,z)
this.a=x
this.b=P.ci(x.length,new T.iA(this),!1,z)},
v:{
ix:function(a){var z,y
z={}
z.a=a
y=new T.iw(null,null)
y.dC(z)
return y}}},iy:{"^":"e:1;a",
$1:function(a){return this.a.a.eQ(256)}},iz:{"^":"e:7;a",
$1:function(a){var z=this.a
return z[C.b.aI(a,z.length)]}},iA:{"^":"e:7;a",
$1:function(a){var z=this.a.a
if(a>=z.length)return H.c(z,a)
return J.eI(z[a],12)}},J:{"^":"b;cu:a<",
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
if(b instanceof T.J){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gF:function(a){return A.bV(this.a)},
a0:function(a){var z,y
z=new Float32Array(H.x(3))
y=new T.J(z)
y.E(this)
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]
return y},
J:function(a,b){var z,y,x
z=new Float32Array(H.x(3))
y=new T.J(z)
y.E(this)
x=b.gcu()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
B:function(a,b){var z,y,x
z=new Float32Array(H.x(3))
y=new T.J(z)
y.E(this)
x=b.gcu()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
return y},
A:function(a,b){var z=new T.J(new Float32Array(H.x(3)))
z.E(this)
z.ah(0,b)
return z},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=3)return H.c(z,b)
z[b]=c},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
eR:function(a){var z,y,x,w,v,u
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
ah:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
aC:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])},
gm:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gZ:function(a){return this.a[2]},
n:function(a){return this.gm(this).$0()},
t:function(a){return this.gp(this).$0()},
I:function(a){return this.gZ(this).$0()}},at:{"^":"b;cv:a<",
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
if(b instanceof T.at){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gF:function(a){return A.bV(this.a)},
a0:function(a){var z,y
z=new Float32Array(H.x(4))
y=new T.at(z)
y.E(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
return y},
J:function(a,b){var z,y,x
z=new Float32Array(H.x(4))
y=new T.at(z)
y.E(this)
x=b.gcv()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
B:function(a,b){var z,y,x
z=new Float32Array(H.x(4))
y=new T.at(z)
y.E(this)
x=b.gcv()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
z[3]=z[3]+x[3]
return y},
A:function(a,b){var z=new T.at(new Float32Array(H.x(4)))
z.E(this)
z.ah(0,b)
return z},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=4)return H.c(z,b)
z[b]=c},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ah:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
aC:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])
z[3]=Math.floor(z[3])},
gm:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gZ:function(a){return this.a[2]},
gae:function(a){return this.a[3]},
n:function(a){return this.gm(this).$0()},
t:function(a){return this.gp(this).$0()},
I:function(a){return this.gZ(this).$0()},
au:function(a){return this.gae(this).$0()}}}],["","",,Q,{"^":"",fd:{"^":"b;m:a>,b,l:c>,aU:d<,e,f",
gbz:function(){return this.e},
ga6:function(){return this.f},
dw:function(a2,a3,a4,a5,a6,a7,a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[P.Z]
y=H.n([],z)
x=H.n([],[P.w])
w=H.n([],z)
v=H.n([],z)
for(u=this.a,z=this.c,t=J.bT(u),s=this.b,r=this.d,q=J.bT(s),p=u;o=J.z(p),o.ag(p,t.B(u,z));p=o.B(p,1))for(n=s;m=J.z(n),m.ag(n,q.B(s,r));n=m.B(n,1)){l=a8.$2(p,n)
k=a8.$2(p,m.B(n,1))
j=a8.$2(o.B(p,1),m.B(n,1))
i=a8.$2(o.B(p,1),n)
C.a.X(y,[p,l,n,p,k,m.B(n,1),o.B(p,1),j,m.B(n,1),o.B(p,1),i,n])}z=y.length
if(C.b.aI(z,12)!==0)throw H.a(new P.f8("Total vertex component count for chunks must be divisible by 12. "+z+" vertex components were created."))
h=z/12
for(g=0;g<h;++g){f=g*4
z=f+2
C.a.X(x,[f,f+1,z,f,z,f+3])
C.a.X(w,[0,0,1,0,1,1,0,1])
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
new T.J(q).E(new T.J(r))
q[0]=q[0]-z[0]
q[1]=q[1]-z[1]
q[2]=q[2]-z[2]
r=new Float32Array(3)
new T.J(r).E(new T.J(t))
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
new T.J(z).eR(0)
t=z[0]
r=z[1]
z=z[2]
C.a.X(v,[t,r,z,t,r,z,t,r,z,t,r,z])}this.f=Q.dx(a2.d,y,w,v,x)},
bH:function(){var z,y,x,w,v
for(z=this.f.a,y=z.length,x=17976931348623157e292,w=1;w<y;w+=3){v=z[w]
if(v<x)x=v}return x},
bG:function(){var z,y,x,w,v
for(z=this.f.a,y=z.length,x=-17976931348623157e292,w=1;w<y;w+=3){v=z[w]
if(v>x)x=v}return x},
d7:function(){var z,y,x,w,v,u,t,s
z=this.c
y=H.x(C.b.at((z+1)*(this.d+1)))
x=new Float32Array(y)
for(w=0;w<this.f.a.length;w+=12){v=C.b.M(w,12)
u=C.c.at(C.b.aI(v,z)*z+v/z)
t=this.f.a
s=w+1
if(s>=t.length)return H.c(t,s)
s=t[s]
if(u<0||u>=y)return H.c(x,u)
x[u]=s}return x},
n:function(a){return this.a.$0()},
I:function(a){return this.b.$0()},
v:{
fe:function(a,b,c,d,e,f,g){var z=new Q.fd(c,d,e,f,b,null)
z.dw(a,b,c,d,e,f,g)
return z},
bt:function(a,b,c,d,e,f){var z=0,y=P.a3(),x,w,v,u,t,s,r,q
var $async$bt=P.ab(function(g,h){if(g===1)return P.a8(h,y)
while(true)switch(z){case 0:w=a.d
z=3
return P.a2(a.aW("asset/resources.png"),$async$bt)
case 3:v=h
u=new V.iP(null,null)
t=w.createTexture()
w.bindTexture(3553,t)
C.G.f0(w,3553,0,6408,6408,5121,v)
s=J.k(v)
r=s.gl(v)
q=J.z(r)
if(q.bE(r,q.J(r,1))===0){s=s.gq(v)
r=J.z(s)
s=r.bE(s,r.J(s,1))===0}else s=!1
if(s)w.generateMipmap(3553)
else{w.texParameteri(3553,10242,33071)
w.texParameteri(3553,10243,33071)
w.texParameteri(3553,10241,9729)}u.a=t
u.b=v
x=Q.fe(a,u,b,c,d,e,f)
z=1
break
case 1:return P.a9(x,y)}})
return P.aa($async$bt,y)}}}}],["","",,N,{"^":"",fw:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx",
bS:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fr
if(z==null)y=new self.Ammo.btVector3(0,0,0)
else{z=z.b
x=new self.Ammo.btTransform()
J.aZ(J.aY(z),x)
y=J.c3(x)}z=this.c.a
w=new self.Ammo.btSphereShape(z)
v=new self.Ammo.btTransform()
z=J.k(v)
z.U(v)
u=new self.Ammo.btVector3(0,0,0)
J.eO(w,1,u)
t=a==null?J.I(J.f3(y),Math.cos(this.x-1.5707963267948966)*Math.cos(this.r)*10):a
s=c==null?J.c0(J.f4(y),Math.sin(this.r)*10):c
r=J.I(s,this.c.a)
q=e==null?J.I(J.f5(y),Math.sin(this.x-1.5707963267948966)*Math.cos(this.r)*10):e
z.b3(v,new self.Ammo.btVector3(t,r,q))
p=new self.Ammo.btDefaultMotionState(v)
o=new self.Ammo.btRigidBodyConstructionInfo(1,p,w,u)
n=new self.Ammo.btRigidBody(o)
z=J.k(n)
z.bL(n,0,0)
z.bK(n,new self.Ammo.btVector3(b,d,f))
J.c1(this.dx,n)
this.dy.push(new X.dn(this.c.b,n))},
dL:function(a,b,c){return this.bS(null,a,null,b,null,c)},
dK:function(a,b,c){return this.bS(a,0,b,0,c,0)},
e6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a
y=z.a
z.d.viewport(0,0,y.width,y.height)
z.d.clearColor(0,0,0,1)
z.d.clearDepth(1)
z.d.enable(2929)
z.d.depthFunc(515)
z.d.clear(16640)
for(y=this.b,y=y.gbC(y),y=y.gK(y);y.w();){x=y.gC()
z.d.bindBuffer(34962,x.ga6().e)
z.d.vertexAttribPointer(this.d.b,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.b)
z.d.bindBuffer(34962,x.ga6().f)
z.d.vertexAttribPointer(this.d.c,2,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.c)
z.d.bindBuffer(34962,x.ga6().r)
z.d.vertexAttribPointer(this.d.d,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.d)
z.d.bindBuffer(34963,x.ga6().x)
z.d.useProgram(this.d.a)
w=new self.Ammo.btTransform()
J.aZ(J.aY(this.fr.b),w)
v=J.k(w)
u=v.b0(w)
t=v.b1(w)
v=new Float32Array(3)
v[0]=0
v[1]=0
v[2]=0
s=J.k(t)
r=s.n(t)
q=s.t(t)
p=s.I(t)
s=s.au(t)
o=new Float32Array(4)
o[0]=r
o[1]=q
o[2]=p
o[3]=s
s=new Float32Array(3)
s[0]=1
s[1]=1
s[2]=1
n=new T.Y(new Float32Array(16))
n.bJ(new T.J(v),new T.aO(o))
n.ah(0,new T.J(s))
v=new Float32Array(16)
m=new T.Y(v)
m.U(0)
m.cU(this.r)
m.cV(this.x)
s=J.k(u)
m.d_(0,J.aC(s.n(u)),J.aC(s.t(u)),J.aC(s.I(u)))
m.cN(0,n)
s=new Float32Array(16)
l=new T.Y(s)
l.U(0)
l.d0()
z.d.uniformMatrix4fv(this.d.e,!1,this.f.a)
z.d.uniformMatrix4fv(this.d.f,!1,v)
z.d.uniformMatrix4fv(this.d.r,!1,s)
z.d.activeTexture(33984)
z.d.bindTexture(3553,x.gbz().gbz())
z.d.uniform1i(this.d.x,0)
z.d.drawElements(4,x.ga6().d.length,5123,0)}for(y=C.a.gK(this.dy),v=new H.iY(y,new N.fB(this));v.w();){k=y.gC()
z.d.bindBuffer(34962,this.c.b.e)
z.d.vertexAttribPointer(this.d.b,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.b)
z.d.bindBuffer(34962,this.c.b.r)
z.d.vertexAttribPointer(this.d.d,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.d)
z.d.bindBuffer(34963,this.c.b.x)
z.d.useProgram(this.d.a)
w=new self.Ammo.btTransform()
J.aZ(J.aY(k.geX()),w)
s=J.k(w)
j=s.b0(w)
i=s.b1(w)
s=this.fr.b
h=new self.Ammo.btTransform()
J.aZ(J.aY(s),h)
g=J.c3(h)
s=new Float32Array(3)
s[0]=0
s[1]=0
s[2]=0
r=J.k(i)
q=r.n(i)
p=r.t(i)
o=r.I(i)
r=r.au(i)
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
n=new T.Y(q)
n.bJ(new T.J(s),new T.aO(f))
n.ah(0,new T.J(r))
s=new Float32Array(16)
m=new T.Y(s)
m.U(0)
m.cU(this.r)
m.cV(this.x)
r=J.k(g)
p=J.k(j)
m.d_(0,J.I(J.aC(r.n(g)),p.n(j)),J.I(J.aC(r.t(g)),p.t(j)),J.I(J.aC(r.I(g)),p.I(j)))
m.cN(0,n)
n.en(n)
n.d0()
z.d.uniformMatrix4fv(this.d.e,!1,this.f.a)
z.d.uniformMatrix4fv(this.d.f,!1,s)
z.d.uniformMatrix4fv(this.d.r,!1,q)
z.d.drawElements(4,this.c.b.d.length,5123,0)}},
aP:function(){var z=0,y=P.a3(),x,w=this,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$aP=P.ab(function(a0,a1){if(a0===1)return P.a8(a1,y)
while(true)$async$outer:switch(z){case 0:v=N.fA(w.fr.b)
u=J.k(v)
t=J.bo(J.cR(u.n(v),100),100)
s=J.bo(J.cR(u.I(v),100),100)
u=J.z(t)
if(u.gbq(t)||J.eT(s)){z=1
break}u=J.eH(J.bo(u.B(t,s),J.I(u.B(t,s),1)),2)
if(typeof s!=="number"){x=H.t(s)
z=1
break}r=u+s
u=w.b
z=!u.az(0,r)?3:4
break
case 3:b=u
a=r
z=5
return P.a2(Q.bt(w.a,t,s,100,100,new N.fx(w)),$async$aP)
case 5:b.k(0,a,a1)
q=new self.Ammo.btTransform()
p=J.k(q)
p.U(q)
o=J.bo(J.aX(u.h(0,r)),0.5)
n=u.h(0,r).bH()
m=u.h(0,r).bG()
l=u.h(0,r).gaU()
p.b3(q,new self.Ammo.btVector3(o,(n+m)*0.5,l*0.5))
l=J.c4(J.aX(u.h(0,r)))
m=C.b.at(u.h(0,r).gaU())
k=self.Ammo._malloc(4*(l+1)*(m+1))
j=u.h(0,r).d7()
for(p=J.bT(k),o=j.length,i=0;i<=u.h(0,r).gaU();++i){h=0
while(!0){n=J.aX(u.h(0,r))
if(typeof n!=="number"){x=H.t(n)
z=1
break $async$outer}if(!(h<=n))break
g=i*J.c4(J.aX(u.h(0,r)))+h
n=self.Ammo.HEAPF32
m=J.eJ(p.B(k,g*4),2)
if(g<0||g>=o){x=H.c(j,g)
z=1
break $async$outer}J.cT(n,m,j[g]);++h}}p=J.c4(J.aX(u.h(0,r)))
o=C.b.at(u.h(0,r).gaU())
n=u.h(0,r).bH()
u=u.h(0,r).bG()
f=new self.Ammo.btHeightfieldTerrainShape(p,o,k,1,n,u,1,"PHY_FLOAT",!1)
e=new self.Ammo.btDefaultMotionState(q)
u=new self.Ammo.btVector3(0,0,0)
d=new self.Ammo.btRigidBodyConstructionInfo(0,e,f,u)
c=new self.Ammo.btRigidBody(d)
J.c1(w.dx,c)
case 4:case 1:return P.a9(x,y)}})
return P.aa($async$aP,y)},
aT:function(a,b){var z=0,y=P.a3(),x,w=this,v,u,t,s,r,q,p,o,n,m,l,k
var $async$aT=P.ab(function(c,d){if(c===1)return P.a8(d,y)
while(true)$async$outer:switch(z){case 0:z=3
return P.a2(w.aP(),$async$aT)
case 3:v=J.eV(w.fr.b)
u=J.k(v)
t=u.n(v)
s=u.t(v)
r=u.I(v)
u=w.y
if(u.h(0," ")===!0)s=J.I(s,1)
if(u.h(0,"w")===!0){t=J.I(t,Math.cos(w.x-1.5707963267948966)*Math.cos(w.r))
r=J.I(r,Math.sin(w.x-1.5707963267948966)*Math.cos(w.r))}if(u.h(0,"s")===!0){t=J.c0(t,Math.cos(w.x-1.5707963267948966)*Math.cos(w.r))
r=J.c0(r,Math.sin(w.x-1.5707963267948966)*Math.cos(w.r))}if(J.bn(t,-2))t=-2
if(J.bm(t,2))t=2
if(J.bn(s,-2))s=-2
if(J.bm(s,2))s=2
if(J.bn(r,-2))r=-2
if(J.bm(r,2))r=2
if(!J.Q(t,0)||!J.Q(s,0)||!J.Q(r,0))J.eZ(w.fr.b,new self.Ammo.btVector3(t,s,r))
for(u=w.z,q=u.length,p=0;p<q;++p){o=u[p]
n=o.b===C.r?-1:1
m=w.r
if(typeof b!=="number"){x=H.t(b)
z=1
break $async$outer}l=0.2*b
m+=l*o.d*n
w.r=m
k=o.a===C.q?-1:1
w.x=w.x+l*o.c*k
if(m<-1.5707963267948966){w.r=-1.5707963267948966
m=-1.5707963267948966}if(m>1.5707963267948966)w.r=1.5707963267948966}C.a.si(u,0)
case 1:return P.a9(x,y)}})
return P.aa($async$aT,y)},
bi:[function(a){var z=0,y=P.a3(),x=this,w,v,u
var $async$bi=P.ab(function(b,c){if(b===1)return P.a8(c,y)
while(true)switch(z){case 0:++x.fx
w=J.z(a)
if(!J.Q(w.a9(a,1000),J.eQ(x.Q))){v=""+x.fx+" updates/sec"
if(typeof console!="undefined")console.log(v)
x.fx=0}a=w.A(a,0.001)
w=J.z(a)
u=w.J(a,x.Q)
x.Q=a
J.f0(x.dx,w.f2(a),10)
z=2
return P.a2(x.aT(0,u),$async$bi)
case 2:x.e6()
w=window
C.e.c2(w)
C.e.cj(w,W.cG(x.gcg()))
return P.a9(null,y)}})
return P.aa($async$bi,y)},"$1","gcg",2,0,20,23],
ay:function(){var z=0,y=P.a3(),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$ay=P.ab(function(a2,a3){if(a2===1){v=a3
z=w}while(true)switch(z){case 0:w=4
a1=J
z=7
return P.a2(W.dp("asset/shader/3d_vertex_shader.glsl",null,null,null,null,null,null,null),$async$ay)
case 7:s=a1.cW(a3)
a1=J
z=8
return P.a2(W.dp("asset/shader/3d_fragment_shader.glsl",null,null,null,null,null,null,null),$async$ay)
case 8:r=a1.cW(a3)
o=t.a
n=o.d
m=n.createShader(35633)
n.shaderSource(m,s)
n.compileShader(m)
if(H.cH(n.getShaderParameter(m,35713))!==!0){l=n.getShaderInfoLog(m)
n.deleteShader(m)
H.v(P.ao("Unable to compile vertex shader: "+H.d(l)))}k=n.createShader(35632)
n.shaderSource(k,r)
n.compileShader(k)
if(H.cH(n.getShaderParameter(k,35713))!==!0){l=n.getShaderInfoLog(k)
n.deleteShader(k)
H.v(P.ao("Unable to compile fragment shader: "+H.d(l)))}j=n.createProgram()
n.attachShader(j,m)
n.attachShader(j,k)
n.linkProgram(j)
if(H.cH(n.getProgramParameter(j,35714))!==!0){l=n.getProgramInfoLog(j)
n.deleteProgram(j)
H.v(P.ao("Unable to link program: "+H.d(l)))}q=j
t.d=new T.ip(q,o.d.getAttribLocation(q,"aVertexPosition"),o.d.getAttribLocation(q,"aTextureCoord"),o.d.getAttribLocation(q,"aVertexNormal"),o.d.getUniformLocation(q,"uProjectionMatrix"),o.d.getUniformLocation(q,"uModelViewMatrix"),o.d.getUniformLocation(q,"uNormalMatrix"),o.d.getUniformLocation(q,"uSampler"))
w=2
z=6
break
case 4:w=3
a0=v
H.P(a0)
p="Failed to load shader source files."
if(typeof console!="undefined")console.error(p)
x=P.fR(p,null,P.y)
z=1
break
z=6
break
case 3:z=2
break
case 6:o=t.a
n=o.d3()
h=new Float32Array(H.x(16))
g=Math.tan(0.39269908169872414)
h[0]=0
h[1]=0
h[2]=0
h[3]=0
h[4]=0
h[5]=0
h[6]=0
h[7]=0
h[8]=0
h[9]=0
h[10]=0
h[11]=0
h[12]=0
h[13]=0
h[14]=0
h[15]=0
h[0]=1/(g*n)
h[5]=1/g
h[10]=-1.0002000200020003
h[11]=-1
h[14]=-0.20002000200020004
t.f=new T.Y(h)
t.c=S.iD(o.d,2)
o=new self.Ammo.btDefaultCollisionConfiguration()
t.ch=o
t.cx=new self.Ammo.btCollisionDispatcher(o)
t.cy=new self.Ammo.btDbvtBroadphase()
o=new self.Ammo.btSequentialImpulseConstraintSolver()
t.db=o
h=t.cx
n=t.cy
f=t.ch
f=new self.Ammo.btDiscreteDynamicsWorld(h,n,o,f)
t.dx=f
J.eY(f,new self.Ammo.btVector3(0,-0.2,0))
f=new self.Ammo.btVector3(2,2,2)
e=new self.Ammo.btBoxShape(f)
d=new self.Ammo.btTransform()
f=J.k(d)
f.U(d)
f.b3(d,new self.Ammo.btVector3(40,40,40))
c=new self.Ammo.btDefaultMotionState(d)
f=new self.Ammo.btVector3(0,0,0)
b=new self.Ammo.btRigidBodyConstructionInfo(1,c,e,f)
a=new self.Ammo.btRigidBody(b)
J.f_(a,0,0)
J.c1(t.dx,a)
f=t.dy
f.push(new X.dn(null,a))
t.fr=C.a.gaV(f)
case 1:return P.a9(x,y)
case 2:return P.a8(v,y)}})
return P.aa($async$ay,y)},
aw:function(a){var z=0,y=P.a3(),x=this,w,v
var $async$aw=P.ab(function(b,c){if(b===1)return P.a8(c,y)
while(true)switch(z){case 0:W.a7(window,"keydown",new N.fC(x),!1)
W.a7(window,"keyup",new N.fD(x),!1)
W.a7(window,"mousemove",new N.fE(x),!1)
w=x.a
w.cE()
z=2
return P.a2(x.ay(),$async$aw)
case 2:w=w.a
w.toString
W.a7(w,"mousedown",new N.fF(x),!1)
W.a7(window,"mouseup",new N.fG(x),!1)
W.a7(window,"resize",new N.fH(x),!1)
w=window
z=3
return P.a2(x.gcg(),$async$aw)
case 3:v=c
C.e.c2(w)
C.e.cj(w,W.cG(v))
return P.a9(null,y)}})
return P.aa($async$aw,y)},
v:{
fA:function(a){var z=new self.Ammo.btTransform()
J.aZ(J.aY(a),z)
return J.c3(z)},
fy:function(a7,a8,a9,b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(z=J.z(a8),y=J.z(a9),x=0,w=0;w<4;++w){v=Math.pow(2,w)
u=v*(z.av(a8,100)-0.5)
t=v*(y.av(a9,100)-0.5)
s=$.$get$dM()
if(typeof s!=="number")return H.t(s)
r=(u+t)*s
q=C.c.aC(u+r)
p=C.c.aC(t+r)
s=$.$get$dN()
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
u=$.$get$bG()
if(b>>>0!==b||b>=12)return H.c(u,b)
u=u[b]
a2=a1*a1*(u[0]*n+u[1]*m)}a3=0.5-j*j-i*i
if(a3<0)a4=0
else{a3*=a3
u=$.$get$bG()
if(a>>>0!==a||a>=12)return H.c(u,a)
u=u[a]
a4=a3*a3*(u[0]*j+u[1]*i)}a5=0.5-h*h-g*g
if(a5<0)a6=0
else{a5*=a5
u=$.$get$bG()
if(a0>>>0!==a0||a0>=12)return H.c(u,a0)
u=u[a0]
a6=a5*a5*(u[0]*h+u[1]*g)}x+=b0[w]*(70*(a2+a4+a6)/2+0.5)}z=C.a.bp(b0,0,new N.fz())
if(typeof z!=="number")return H.t(z)
return Math.pow(x/z*8,2.2)-25}}},fB:{"^":"e:1;a",
$1:function(a){return!J.Q(a,this.a.fr)&&a.ga6()!=null}},fx:{"^":"e:3;a",
$2:function(a,b){return N.fy(this.a.e,a,b,[1,0.25,0.125,0.0625])}},fz:{"^":"e:21;",
$2:function(a,b){return J.I(a,b)}},fC:{"^":"e:1;a",
$1:function(a){var z,y,x,w
z=this.a
y=J.k(a)
z.y.k(0,y.gad(a),!0)
if(J.Q(y.gad(a),"h"))for(x=0;x<100;x+=10)for(w=0;w<100;w+=10)z.dK(w,50,x)}},fD:{"^":"e:1;a",
$1:function(a){this.a.y.k(0,J.eU(a),!1)
return!1}},fE:{"^":"e:1;a",
$1:function(a){var z,y,x
z=J.k(a)
y=z.gaX(a).a
if(typeof y!=="number")return y.af()
y=y>0?C.I:C.q
x=z.gaX(a).b
if(typeof x!=="number")return x.af()
x=x>0?C.J:C.r
this.a.z.push(new N.jK(y,x,J.cU(z.gaX(a).a),J.cU(z.gaX(a).b)))}},fF:{"^":"e:1;a",
$1:function(a){return this.a.a.a.requestPointerLock()}},fG:{"^":"e:1;a",
$1:function(a){var z=this.a
z.dL(Math.cos(z.x-1.5707963267948966)*Math.cos(z.r)*10,-Math.sin(z.r)*10,Math.sin(z.x-1.5707963267948966)*Math.cos(z.r)*10)}},fH:{"^":"e:1;a",
$1:function(a){return this.a.a.cE()}},eb:{"^":"b;a,b",
j:function(a){return this.b}},eg:{"^":"b;a,b",
j:function(a){return this.b}},jK:{"^":"b;a,b,c,d"}}],["","",,T,{"^":"",fS:{"^":"b;a,b,c,d",
dV:function(){var z,y
z=this.a
y=(z&&C.h).bF(z,"experimental-webgl")
return H.bW(y==null?C.h.bF(z,"webgl"):y,"$iscq")},
cE:function(){var z,y,x,w,v,u
z=window.innerHeight
y=window.innerWidth
if(typeof z!=="number")return z.av()
if(typeof y!=="number")return H.t(y)
x=this.b
w=this.a
if(z/y<=x){z=window.innerHeight
if(typeof z!=="number")return z.a9()
w.width=C.b.a9(z,x)
w.height=window.innerHeight}else{w.width=window.innerWidth
z=window.innerWidth
if(typeof z!=="number")return z.A()
w.height=C.c.at(z*x)}z=window.innerWidth
y=w.width
if(typeof z!=="number")return z.J()
if(typeof y!=="number")return H.t(y)
x=window.innerHeight
v=w.height
if(typeof x!=="number")return x.J()
if(typeof v!=="number")return H.t(v)
u=w.style
y=C.j.j((z-y)/2)
u.marginLeft=y
z=w.style
v=C.j.j((x-v)/2)
z.marginTop=v},
d3:function(){var z,y
z=this.a
if(z==null)return 1
y=z.width
z=z.height
z.toString
if(typeof y!=="number")return y.av()
if(typeof z!=="number")return H.t(z)
return y/z},
aW:function(a){var z=0,y=P.a3(),x,w,v,u
var $async$aW=P.ab(function(b,c){if(b===1)return P.a8(c,y)
while(true)switch(z){case 0:w=document.createElement("img")
H.bW(w,"$isbv")
w.src=a
w=new W.je(w,"load",!1,[W.aG])
v=H
u=J
z=3
return P.a2(w.gaV(w),$async$aW)
case 3:x=v.bW(u.eS(c),"$isbv")
z=1
break
case 1:return P.a9(x,y)}})
return P.aa($async$aW,y)}}}],["","",,X,{"^":"",dn:{"^":"b;a,b",
ga6:function(){return this.a},
geX:function(){return this.b}}}],["","",,F,{"^":"",
cL:[function(){var z=0,y=P.a3(),x,w,v,u,t,s
var $async$cL=P.ab(function(a,b){if(a===1)return P.a8(b,y)
while(true)switch(z){case 0:x=document
w=x.createElement("canvas")
H.bW(w,"$isbs")
t=T
s=w
z=2
return P.a2(Z.c5(),$async$cL)
case 2:v=new t.fS(s,0.5625,b,null)
u=v.dV()
v.d=u
if(u==null)H.v(new P.q("Browser does not support WebGL"))
x.body.appendChild(w)
x=P.jP(3)
new N.fw(v,P.aq(),null,null,T.ix(x),null,0,1.5707963267948966,P.aq(),[],0,null,null,null,null,null,[],null,0).aw(0)
return P.a9(null,y)}})
return P.aa($async$cL,y)},"$0","ez",0,0,22]},1],["","",,Q,{"^":"",i4:{"^":"b;a,b,c,d,e,f,r,x",
dB:function(a,b,c,d,e){this.a=new Float32Array(H.bP(b))
this.b=new Float32Array(H.bP(c))
this.c=new Float32Array(H.bP(d))
this.d=new Uint16Array(H.bP(e))
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
v:{
dx:function(a,b,c,d,e){var z=new Q.i4(null,null,null,null,null,null,null,null)
z.dB(a,b,c,d,e)
return z}}}}],["","",,T,{"^":"",ip:{"^":"b;a,b,c,d,e,f,r,x"}}],["","",,S,{"^":"",iC:{"^":"b;a,b",
dD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=[P.Z]
y=H.n([],z)
x=H.n([],z)
w=H.n([],z)
v=H.n([],[P.w])
for(z=this.a,u=0;u<=30;++u){t=u*3.141592653589793/30
s=Math.sin(t)
r=Math.cos(t)
for(q=1-u/30,p=z*r,o=0;o<=30;++o){n=o*2*3.141592653589793/30
m=Math.sin(n)
l=Math.cos(n)*s
k=m*s
C.a.X(w,[l,r,k])
C.a.X(x,[1-o/30,q])
C.a.X(y,[z*l,p,z*k])}}for(u=0;u<30;++u)for(z=u*31,o=0;o<30;++o){j=z+o
i=j+30+1
p=j+1
C.a.X(v,[j,i,p,i,i+1,p])}this.b=Q.dx(a,y,x,w,v)},
ga6:function(){return this.b},
v:{
iD:function(a,b){var z=new S.iC(b,null)
z.dD(a,b)
return z}}}}],["","",,V,{"^":"",iP:{"^":"b;a,b",
gbz:function(){return this.a}}}]]
setupProgram(dart,0,0)
J.r=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ce.prototype
return J.du.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.hP.prototype
if(typeof a=="boolean")return J.hN.prototype
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.b)return a
return J.bk(a)}
J.bT=function(a){if(typeof a=="number")return J.ap.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.b)return a
return J.bk(a)}
J.N=function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.b)return a
return J.bk(a)}
J.aA=function(a){if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.b)return a
return J.bk(a)}
J.et=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ce.prototype
return J.ap.prototype}if(a==null)return a
if(!(a instanceof P.b))return J.bg.prototype
return a}
J.z=function(a){if(typeof a=="number")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bg.prototype
return a}
J.kv=function(a){if(typeof a=="number")return J.ap.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bg.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.b)return a
return J.bk(a)}
J.I=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.bT(a).B(a,b)}
J.eH=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.z(a).av(a,b)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).D(a,b)}
J.bm=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.z(a).af(a,b)}
J.bn=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.z(a).ag(a,b)}
J.eI=function(a,b){return J.z(a).aI(a,b)}
J.bo=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kv(a).A(a,b)}
J.aC=function(a){if(typeof a=="number")return-a
return J.et(a).a0(a)}
J.cQ=function(a,b){return J.z(a).dk(a,b)}
J.eJ=function(a,b){return J.z(a).bM(a,b)}
J.c0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.z(a).J(a,b)}
J.cR=function(a,b){return J.z(a).a9(a,b)}
J.eK=function(a,b){if(typeof a=="number"&&typeof b=="number")return(a^b)>>>0
return J.z(a).dv(a,b)}
J.cS=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ex(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.N(a).h(a,b)}
J.cT=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ex(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).k(a,b,c)}
J.eL=function(a,b){return J.k(a).dI(a,b)}
J.eM=function(a,b,c,d){return J.k(a).dJ(a,b,c,d)}
J.eN=function(a,b,c,d){return J.k(a).e5(a,b,c,d)}
J.cU=function(a){return J.et(a).cw(a)}
J.c1=function(a,b){return J.k(a).ef(a,b)}
J.eO=function(a,b,c){return J.k(a).ei(a,b,c)}
J.eP=function(a,b){return J.k(a).aq(a,b)}
J.c2=function(a,b,c){return J.N(a).el(a,b,c)}
J.cV=function(a,b){return J.aA(a).u(a,b)}
J.eQ=function(a){return J.z(a).aC(a)}
J.eR=function(a,b){return J.aA(a).R(a,b)}
J.eS=function(a){return J.k(a).geo(a)}
J.aW=function(a){return J.k(a).gN(a)}
J.U=function(a){return J.r(a).gF(a)}
J.eT=function(a){return J.z(a).gbq(a)}
J.ak=function(a){return J.aA(a).gK(a)}
J.eU=function(a){return J.k(a).gad(a)}
J.R=function(a){return J.N(a).gi(a)}
J.cW=function(a){return J.k(a).geW(a)}
J.cX=function(a){return J.k(a).gH(a)}
J.aX=function(a){return J.k(a).gl(a)}
J.eV=function(a){return J.k(a).d5(a)}
J.aY=function(a){return J.k(a).d6(a)}
J.c3=function(a){return J.k(a).b0(a)}
J.aZ=function(a,b){return J.k(a).d8(a,b)}
J.eW=function(a,b){return J.aA(a).S(a,b)}
J.eX=function(a,b){return J.r(a).bu(a,b)}
J.aD=function(a,b){return J.k(a).a8(a,b)}
J.eY=function(a,b){return J.k(a).di(a,b)}
J.eZ=function(a,b){return J.k(a).bK(a,b)}
J.f_=function(a,b,c){return J.k(a).bL(a,b,c)}
J.f0=function(a,b,c){return J.k(a).dl(a,b,c)}
J.cY=function(a,b){return J.k(a).cZ(a,b)}
J.f1=function(a,b,c){return J.k(a).bA(a,b,c)}
J.c4=function(a){return J.z(a).at(a)}
J.f2=function(a){return J.aA(a).a7(a)}
J.al=function(a){return J.r(a).j(a)}
J.f3=function(a){return J.k(a).n(a)}
J.f4=function(a){return J.k(a).t(a)}
J.f5=function(a){return J.k(a).I(a)}
I.bY=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.h=W.bs.prototype
C.v=W.cb.prototype
C.w=J.f.prototype
C.a=J.aI.prototype
C.j=J.du.prototype
C.b=J.ce.prototype
C.c=J.ap.prototype
C.k=J.b6.prototype
C.D=J.aJ.prototype
C.F=H.i7.prototype
C.p=J.ib.prototype
C.G=P.cq.prototype
C.f=J.bg.prototype
C.e=W.iZ.prototype
C.t=new P.ia()
C.u=new P.jc()
C.d=new P.jR()
C.i=new P.ad(0)
C.x=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.l=function(hooks) { return hooks; }
C.y=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.z=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.A=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.m=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.B=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.C=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.n=I.bY([])
C.E=H.n(I.bY([]),[P.aR])
C.o=new H.fo(0,{},C.E,[P.aR,null])
C.H=new H.cu("call")
C.q=new N.eb(0,"_HorizontalMouseMovementDirection.Left")
C.I=new N.eb(1,"_HorizontalMouseMovementDirection.Right")
C.r=new N.eg(0,"_VerticalMouseMovementDirection.Up")
C.J=new N.eg(1,"_VerticalMouseMovementDirection.Down")
$.dH="$cachedFunction"
$.dI="$cachedInvocation"
$.a0=0
$.aE=null
$.cZ=null
$.cJ=null
$.eo=null
$.eB=null
$.bS=null
$.bX=null
$.cK=null
$.ax=null
$.aT=null
$.aU=null
$.cE=!1
$.p=C.d
$.dm=0
$.db=null
$.da=null
$.d9=null
$.d8=null
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
I.$lazy(y,x,w)}})(["c9","$get$c9",function(){return H.eu("_$dart_dartClosure")},"cf","$get$cf",function(){return H.eu("_$dart_js")},"ds","$get$ds",function(){return H.hJ()},"dt","$get$dt",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.dm
$.dm=z+1
z="expando$key$"+z}return new P.fP(null,z)},"dS","$get$dS",function(){return H.a1(H.bJ({
toString:function(){return"$receiver$"}}))},"dT","$get$dT",function(){return H.a1(H.bJ({$method$:null,
toString:function(){return"$receiver$"}}))},"dU","$get$dU",function(){return H.a1(H.bJ(null))},"dV","$get$dV",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dZ","$get$dZ",function(){return H.a1(H.bJ(void 0))},"e_","$get$e_",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dX","$get$dX",function(){return H.a1(H.dY(null))},"dW","$get$dW",function(){return H.a1(function(){try{null.$method$}catch(z){return z.message}}())},"e1","$get$e1",function(){return H.a1(H.dY(void 0))},"e0","$get$e0",function(){return H.a1(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cA","$get$cA",function(){return P.j1()},"b4","$get$b4",function(){return P.jm(null,P.S)},"aV","$get$aV",function(){return[]},"d6","$get$d6",function(){return{}},"bG","$get$bG",function(){var z=[P.Z]
return H.n([H.n([1,1,0],z),H.n([-1,1,0],z),H.n([1,-1,0],z),H.n([-1,-1,0],z),H.n([1,0,1],z),H.n([-1,0,1],z),H.n([1,0,-1],z),H.n([-1,0,-1],z),H.n([0,1,1],z),H.n([0,-1,1],z),H.n([0,1,-1],z),H.n([0,-1,-1],z)],[[P.i,P.Z]])},"dM","$get$dM",function(){return 0.5*(P.eE(3)-1)},"dN","$get$dN",function(){return(3-P.eE(3))/6}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=["result","error","stackTrace","invocation","_","e","x",null,"value","data","object","sender","closure","isolate","numberOfArguments","arg1","arg2","arg3","arg4","each","errorCode","arg","instance","now","callback","arguments"]
init.types=[{func:1},{func:1,args:[,]},{func:1,v:true},{func:1,args:[,,]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,v:true,args:[P.b],opt:[P.a6]},{func:1,ret:P.y,args:[P.w]},{func:1,args:[P.w]},{func:1,args:[P.y,,]},{func:1,args:[,P.y]},{func:1,args:[P.y]},{func:1,args:[{func:1,v:true}]},{func:1,args:[,P.a6]},{func:1,args:[P.w,,]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.a6]},{func:1,args:[P.aR,,]},{func:1,ret:[P.i,W.cr]},{func:1,args:[Z.bp]},{func:1,args:[P.w,P.b]},{func:1,ret:P.M,args:[P.bl]},{func:1,args:[P.Z,,]},{func:1,ret:P.M}]
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
if(x==y)H.kS(d||a)
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
Isolate.bY=a.bY
Isolate.ai=a.ai
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.eF(F.ez(),b)},[])
else (function(b){H.eF(F.ez(),b)})([])})})()