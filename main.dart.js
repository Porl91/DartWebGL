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
function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cx(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ag=function(){}
var dart=[["","",,H,{"^":"",lG:{"^":"b;a"}}],["","",,J,{"^":"",
r:function(a){return void 0},
bR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bg:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cz==null){H.ko()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(new P.cn("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c4()]
if(v!=null)return v
v=H.kw(a)
if(v!=null)return v
if(typeof a=="function")return C.D
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$c4(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
f:{"^":"b;",
B:function(a,b){return a===b},
gC:function(a){return H.ae(a)},
j:["di",function(a){return H.bw(a)}],
bn:["dh",function(a,b){throw H.a(P.ds(a,b.gcF(),b.gcJ(),b.gcG(),null))},null,"gcH",2,0,null,3],
$isbi:1,
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationTimeline|AppBannerPromptResult|AudioListener|AudioTrack|BarProp|Blob|Bluetooth|BluetoothAdvertisingData|BluetoothCharacteristicProperties|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|CHROMIUMSubscribeUniform|CHROMIUMValuebuffer|CSS|CSSCharsetRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|CircularGeofencingRegion|Client|Clients|CompositorProxy|ConsoleBase|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|EXTBlendMinMax|EXTColorBufferFloat|EXTDisjointTimerQuery|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|EffectModel|Entry|EntrySync|FederatedCredential|File|FileEntry|FileEntrySync|FileError|FileReaderSync|FileWriterSync|FontFace|FormData|Gamepad|Geofencing|GeofencingRegion|Geolocation|Geoposition|HMDVRDevice|HTMLAllCollection|Headers|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IdleDeadline|ImageBitmapRenderingContext|InjectedScriptHost|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|Iterator|KeyframeEffect|MIDIInputMap|MIDIOutputMap|MediaDeviceInfo|MediaDevices|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaMetadata|MediaSession|MemoryInfo|MessageChannel|Metadata|MimeType|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|Navigator|NavigatorStorageUtils|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|PagePopupController|PasswordCredential|Path2D|PerformanceCompositeTiming|PerformanceEntry|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceObserver|PerformanceObserverEntryList|PerformanceRenderTiming|PerformanceResourceTiming|PerformanceTiming|PeriodicWave|Permissions|PositionError|PositionSensorVRDevice|Presentation|PushManager|PushMessageData|PushSubscription|RTCCertificate|RTCIceCandidate|RTCSessionDescription|Range|ReadableByteStream|ReadableByteStreamReader|ReadableStreamReader|Request|Response|SQLError|SQLResultSet|SQLTransaction|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|SVGViewSpec|ScrollState|Selection|ServicePort|SharedArrayBuffer|SourceInfo|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StorageInfo|StorageManager|StorageQuota|Stream|StyleMedia|StylePropertyMap|StyleSheet|SubtleCrypto|SyncManager|Touch|TrackDefault|TreeWalker|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRDevice|VREyeParameters|VRFieldOfView|VRPositionState|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitCSSMatrix|WebKitMutationObserver|WindowClient|WorkerConsole|WorkerLocation|WorkerNavigator|Worklet|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hy:{"^":"f;",
j:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isk8:1},
hA:{"^":"f;",
B:function(a,b){return null==b},
j:function(a){return"null"},
gC:function(a){return 0},
bn:[function(a,b){return this.dh(a,b)},null,"gcH",2,0,null,3],
$isP:1},
D:{"^":"f;",
gC:function(a){return 0},
j:["dj",function(a){return String(a)}],
cR:function(a,b){return a.then(b)},
a_:function(a){return a.setIdentity()},
d_:function(a){return a.getOrigin()},
bD:function(a,b){return a.setOrigin(b)},
bB:function(a){return a.getRotation()},
gm:function(a){return a.x},
q:function(a){return a.x()},
gn:function(a){return a.y},
t:function(a){return a.y()},
gU:function(a){return a.z},
M:function(a){return a.z()},
gac:function(a){return a.w},
aU:function(a){return a.w()},
da:function(a,b){return a.setGravity(b)},
e8:function(a,b){return a.addRigidBody(b)},
df:function(a,b,c){return a.stepSimulation(b,c)},
d1:function(a,b){return a.getWorldTransform(b)},
cZ:function(a){return a.getMotionState()},
dd:function(a,b,c){return a.setSleepingThresholds(b,c)},
dc:function(a,b){return a.setLinearVelocity(b)},
eb:function(a,b,c){return a.calculateLocalInertia(b,c)},
$ishB:1},
hX:{"^":"D;"},
bc:{"^":"D;"},
aH:{"^":"D;",
j:function(a){var z=a[$.$get$bZ()]
return z==null?this.dj(a):J.ak(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aG:{"^":"f;$ti",
cr:function(a,b){if(!!a.immutable$list)throw H.a(new P.q(b))},
bh:function(a,b){if(!!a.fixed$length)throw H.a(new P.q(b))},
a3:function(a,b){this.bh(a,"add")
a.push(b)},
X:function(a,b){var z
this.bh(a,"addAll")
for(z=J.aj(b);z.w();)a.push(z.gA())},
S:function(a,b){return new H.c9(a,b,[H.X(a,0),null])},
V:function(a,b){return H.bB(a,b,null,H.X(a,0))},
bj:function(a,b,c){var z,y,x
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(new P.a2(a))}return y},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
gbi:function(a){if(a.length>0)return a[0]
throw H.a(H.c1())},
ad:function(a,b,c,d,e){var z,y,x,w,v
this.cr(a,"setRange")
P.dy(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.v(P.a4(e,0,null,"skipCount",null))
y=J.r(d)
if(!!y.$isi){x=e
w=d}else{w=y.V(d,e).J(0,!1)
x=0}y=J.K(w)
if(x+z>y.gi(w))throw H.a(H.hx())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
aG:function(a,b,c,d){return this.ad(a,b,c,d,0)},
j:function(a){return P.bp(a,"[","]")},
J:function(a,b){var z=H.n(a.slice(0),[H.X(a,0)])
return z},
a6:function(a){return this.J(a,!0)},
gH:function(a){return new J.eT(a,a.length,0,null)},
gC:function(a){return H.ae(a)},
gi:function(a){return a.length},
si:function(a,b){this.bh(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.bW(b,"newLength",null))
if(b<0)throw H.a(P.a4(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.F(a,b))
if(b>=a.length||b<0)throw H.a(H.F(a,b))
return a[b]},
k:function(a,b,c){this.cr(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.F(a,b))
if(b>=a.length||b<0)throw H.a(H.F(a,b))
a[b]=c},
K:function(a,b){var z,y,x
z=a.length
y=J.O(b)
if(typeof y!=="number")return H.m(y)
x=z+y
y=H.n([],[H.X(a,0)])
this.si(y,x)
this.aG(y,0,a.length,a)
this.aG(y,a.length,x,b)
return y},
$isl:1,
$asl:I.ag,
$ish:1,
$isi:1},
lF:{"^":"aG;$ti"},
eT:{"^":"b;a,b,c,d",
gA:function(){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.cE(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ap:{"^":"f;",
gcC:function(a){return a===0?1/a<0:a<0},
co:["aH",function(a){return Math.abs(a)}],
ap:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(new P.q(""+a+".toInt()"))},
ay:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(new P.q(""+a+".floor()"))},
eS:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(new P.q(""+a+".round()"))},
eX:function(a){return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
K:function(a,b){if(typeof b!=="number")throw H.a(H.J(b))
return a+b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.J(b))
return a-b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.J(b))
return a*b},
aF:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ae:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ci(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.ci(a,b)},
ci:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(new P.q("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+H.d(b)))},
de:function(a,b){if(b<0)throw H.a(H.J(b))
return b>31?0:a<<b>>>0},
bE:function(a,b){var z
if(b<0)throw H.a(H.J(b))
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
cg:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
bx:function(a,b){if(typeof b!=="number")throw H.a(H.J(b))
return(a&b)>>>0},
dm:function(a,b){if(typeof b!=="number")throw H.a(H.J(b))
return(a^b)>>>0},
aq:function(a,b){if(typeof b!=="number")throw H.a(H.J(b))
return a<b},
aE:function(a,b){if(typeof b!=="number")throw H.a(H.J(b))
return a>b},
$isW:1,
$isbh:1},
c3:{"^":"ap;",
co:function(a){return this.aH(a)},
$isw:1},
dh:{"^":"ap;"},
b1:{"^":"f;",
dL:function(a,b){if(b>=a.length)throw H.a(H.F(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(typeof b!=="string")throw H.a(P.bW(b,null,null))
return a+b},
bF:function(a,b,c){var z
if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.J(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.v(H.J(c))
z=J.N(b)
if(z.aq(b,0))throw H.a(P.bx(b,null,null))
if(z.aE(b,c))throw H.a(P.bx(b,null,null))
if(J.ev(c,a.length))throw H.a(P.bx(c,null,null))
return a.substring(b,c)},
dg:function(a,b){return this.bF(a,b,null)},
L:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ee:function(a,b,c){if(c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
return H.kD(a,b,c)},
j:function(a){return a},
gC:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.F(a,b))
if(b>=a.length||b<0)throw H.a(H.F(a,b))
return a[b]},
$isl:1,
$asl:I.ag,
$isx:1}}],["","",,H,{"^":"",
bH:function(a){if(a<0)H.v(P.a4(a,0,null,"count",null))
return a},
c1:function(){return new P.aM("No element")},
hx:function(){return new P.aM("Too few elements")},
h:{"^":"T;"},
ar:{"^":"h;$ti",
gH:function(a){return new H.di(this,this.gi(this),0,null)},
S:function(a,b){return new H.c9(this,b,[H.A(this,"ar",0),null])},
V:function(a,b){return H.bB(this,b,null,H.A(this,"ar",0))},
J:function(a,b){var z,y,x
z=H.n([],[H.A(this,"ar",0)])
C.a.si(z,this.gi(this))
for(y=0;y<this.gi(this);++y){x=this.u(0,y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
a6:function(a){return this.J(a,!0)}},
iy:{"^":"ar;a,b,c,$ti",
dv:function(a,b,c,d){var z=this.b
if(z<0)H.v(P.a4(z,0,null,"start",null))},
gdN:function(){var z=J.O(this.a)
return z},
ge4:function(){var z,y
z=J.O(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.O(this.a)
y=this.b
if(y>=z)return 0
return z-y},
u:function(a,b){var z,y
z=this.ge4()+b
if(b>=0){y=this.gdN()
if(typeof y!=="number")return H.m(y)
y=z>=y}else y=!0
if(y)throw H.a(P.u(b,this,"index",null,null))
return J.cK(this.a,z)},
V:function(a,b){if(b<0)H.v(P.a4(b,0,null,"count",null))
return H.bB(this.a,this.b+b,this.c,H.X(this,0))},
J:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.K(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=this.$ti
if(b){t=H.n([],u)
C.a.si(t,v)}else t=H.n(new Array(v),u)
for(s=0;s<v;++s){u=x.u(y,z+s)
if(s>=t.length)return H.c(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(new P.a2(this))}return t},
a6:function(a){return this.J(a,!0)},
v:{
bB:function(a,b,c,d){var z=new H.iy(a,b,c,[d])
z.dv(a,b,c,d)
return z}}},
di:{"^":"b;a,b,c,d",
gA:function(){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.K(z)
x=y.gi(z)
if(this.b!==x)throw H.a(new P.a2(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
dj:{"^":"T;a,b,$ti",
gH:function(a){return new H.hN(null,J.aj(this.a),this.b)},
gi:function(a){return J.O(this.a)},
$asT:function(a,b){return[b]},
v:{
bt:function(a,b,c,d){if(!!J.r(a).$ish)return new H.d2(a,b,[c,d])
return new H.dj(a,b,[c,d])}}},
d2:{"^":"dj;a,b,$ti",$ish:1,
$ash:function(a,b){return[b]}},
hN:{"^":"c2;a,b,c",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gA())
return!0}this.a=null
return!1},
gA:function(){return this.a}},
c9:{"^":"ar;a,b,$ti",
gi:function(a){return J.O(this.a)},
u:function(a,b){return this.b.$1(J.cK(this.a,b))},
$ash:function(a,b){return[b]},
$asar:function(a,b){return[b]},
$asT:function(a,b){return[b]}},
iJ:{"^":"c2;a,b",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gA())===!0)return!0
return!1},
gA:function(){return this.a.gA()}},
ch:{"^":"T;a,b,$ti",
V:function(a,b){return new H.ch(this.a,this.b+H.bH(b),this.$ti)},
gH:function(a){return new H.il(J.aj(this.a),this.b)},
v:{
dC:function(a,b,c){if(!!J.r(a).$ish)return new H.d3(a,H.bH(b),[c])
return new H.ch(a,H.bH(b),[c])}}},
d3:{"^":"ch;a,b,$ti",
gi:function(a){var z,y
z=J.O(this.a)
if(typeof z!=="number")return z.I()
y=z-this.b
if(y>=0)return y
return 0},
V:function(a,b){return new H.d3(this.a,this.b+H.bH(b),this.$ti)},
$ish:1},
il:{"^":"c2;a,b",
w:function(){var z,y
for(z=this.a,y=0;y<this.b;++y)z.w()
this.b=0
return z.w()},
gA:function(){return this.a.gA()}},
bn:{"^":"b;$ti"},
cj:{"^":"b;dV:a<",
B:function(a,b){if(b==null)return!1
return b instanceof H.cj&&J.Y(this.a,b.a)},
gC:function(a){var z,y
z=this._hashCode
if(z!=null)return z
y=J.S(this.a)
if(typeof y!=="number")return H.m(y)
z=536870911&664597*y
this._hashCode=z
return z},
j:function(a){return'Symbol("'+H.d(this.a)+'")'},
$isaN:1}}],["","",,H,{"^":"",
be:function(a,b){var z=a.ax(b)
if(!init.globalState.d.cy)init.globalState.f.aC()
return z},
et:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.r(y).$isi)throw H.a(P.aV("Arguments to main must be a List: "+H.d(y)))
init.globalState=new H.js(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$df()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.j0(P.c6(null,H.bd),0)
x=P.w
y.z=new H.ac(0,null,null,null,null,null,0,[x,H.cq])
y.ch=new H.ac(0,null,null,null,null,null,0,[x,null])
if(y.x===!0){w=new H.jr()
y.Q=w
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.hq,w)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.jt)}if(init.globalState.x===!0)return
y=init.globalState.a++
w=P.aJ(null,null,null,x)
v=new H.by(0,null,!1)
u=new H.cq(y,new H.ac(0,null,null,null,null,null,0,[x,H.by]),w,init.createNewIsolate(),v,new H.am(H.bS()),new H.am(H.bS()),!1,!1,[],P.aJ(null,null,null,null),null,null,!1,!0,P.aJ(null,null,null,null))
w.a3(0,0)
u.bJ(0,v)
init.globalState.e=u
init.globalState.z.k(0,y,u)
init.globalState.d=u
if(H.ah(a,{func:1,args:[P.P]}))u.ax(new H.kB(z,a))
else if(H.ah(a,{func:1,args:[P.P,P.P]}))u.ax(new H.kC(z,a))
else u.ax(a)
init.globalState.f.aC()},
hu:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.hv()
return},
hv:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.a(new P.q("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.a(new P.q('Cannot extract URI from "'+z+'"'))},
hq:[function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.bD(!0,[]).aa(b.data)
y=J.K(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.bD(!0,[]).aa(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.bD(!0,[]).aa(y.h(z,"replyTo"))
y=init.globalState.a++
q=P.w
p=P.aJ(null,null,null,q)
o=new H.by(0,null,!1)
n=new H.cq(y,new H.ac(0,null,null,null,null,null,0,[q,H.by]),p,init.createNewIsolate(),o,new H.am(H.bS()),new H.am(H.bS()),!1,!1,[],P.aJ(null,null,null,null),null,null,!1,!0,P.aJ(null,null,null,null))
p.a3(0,0)
n.bJ(0,o)
init.globalState.f.a.a1(0,new H.bd(n,new H.hr(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.aC()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)J.aB(y.h(z,"port"),y.h(z,"msg"))
init.globalState.f.aC()
break
case"close":init.globalState.ch.aB(0,$.$get$dg().h(0,a))
a.terminate()
init.globalState.f.aC()
break
case"log":H.hp(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.aI(["command","print","msg",z])
q=new H.av(!0,P.aP(null,P.w)).O(q)
y.toString
self.postMessage(q)}else P.cC(y.h(z,"msg"))
break
case"error":throw H.a(y.h(z,"msg"))}},null,null,4,0,null,11,5],
hp:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.aI(["command","log","msg",a])
x=new H.av(!0,P.aP(null,P.w)).O(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.M(w)
z=H.L(w)
y=P.ao(z)
throw H.a(y)}},
hs:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.dv=$.dv+("_"+y)
$.dw=$.dw+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.aB(f,["spawned",new H.bG(y,x),w,z.r])
x=new H.ht(a,b,c,d,z)
if(e===!0){z.cp(w,w)
init.globalState.f.a.a1(0,new H.bd(z,x,"start isolate"))}else x.$0()},
jS:function(a){return new H.bD(!0,[]).aa(new H.av(!1,P.aP(null,P.w)).O(a))},
kB:{"^":"e:0;a,b",
$0:function(){this.b.$1(this.a.a)}},
kC:{"^":"e:0;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
js:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",v:{
jt:[function(a){var z=P.aI(["command","print","msg",a])
return new H.av(!0,P.aP(null,P.w)).O(z)},null,null,2,0,null,10]}},
cq:{"^":"b;a,b,c,eF:d<,ef:e<,f,r,eB:x?,bk:y<,ej:z<,Q,ch,cx,cy,db,dx",
cp:function(a,b){if(!this.f.B(0,a))return
if(this.Q.a3(0,b)&&!this.y)this.y=!0
this.be()},
eP:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.aB(0,a)
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
if(w===y.c)y.bX();++y.d}this.y=!1}this.be()},
e7:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.B(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.c(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
eO:function(a){var z,y,x
if(this.ch==null)return
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.B(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.v(new P.q("removeRange"))
P.dy(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
d9:function(a,b){if(!this.r.B(0,a))return
this.db=b},
ev:function(a,b,c){var z=J.r(b)
if(!z.B(b,0))z=z.B(b,1)&&!this.cy
else z=!0
if(z){J.aB(a,c)
return}z=this.cx
if(z==null){z=P.c6(null,null)
this.cx=z}z.a1(0,new H.jm(a,c))},
eu:function(a,b){var z
if(!this.r.B(0,a))return
z=J.r(b)
if(!z.B(b,0))z=z.B(b,1)&&!this.cy
else z=!0
if(z){this.bl()
return}z=this.cx
if(z==null){z=P.c6(null,null)
this.cx=z}z.a1(0,this.geG())},
ew:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.cC(a)
if(b!=null)P.cC(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.ak(a)
y[1]=b==null?null:J.ak(b)
for(x=new P.cr(z,z.r,null,null),x.c=z.e;x.w();)J.aB(x.d,y)},
ax:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){w=H.M(u)
v=H.L(u)
this.ew(w,v)
if(this.db===!0){this.bl()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.geF()
if(this.cx!=null)for(;t=this.cx,!t.gY(t);)this.cx.cK().$0()}return y},
er:function(a){var z=J.K(a)
switch(z.h(a,0)){case"pause":this.cp(z.h(a,1),z.h(a,2))
break
case"resume":this.eP(z.h(a,1))
break
case"add-ondone":this.e7(z.h(a,1),z.h(a,2))
break
case"remove-ondone":this.eO(z.h(a,1))
break
case"set-errors-fatal":this.d9(z.h(a,1),z.h(a,2))
break
case"ping":this.ev(z.h(a,1),z.h(a,2),z.h(a,3))
break
case"kill":this.eu(z.h(a,1),z.h(a,2))
break
case"getErrors":this.dx.a3(0,z.h(a,1))
break
case"stopErrors":this.dx.aB(0,z.h(a,1))
break}},
cE:function(a){return this.b.h(0,a)},
bJ:function(a,b){var z=this.b
if(z.av(0,a))throw H.a(P.ao("Registry: ports must be registered only once."))
z.k(0,a,b)},
be:function(){var z=this.b
if(z.gi(z)-this.c.a>0||this.y||!this.x)init.globalState.z.k(0,this.a,this)
else this.bl()},
bl:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.al(0)
for(z=this.b,y=z.gbv(z),y=y.gH(y);y.w();)y.gA().dK()
z.al(0)
this.c.al(0)
init.globalState.z.aB(0,this.a)
this.dx.al(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.c(z,v)
J.aB(w,z[v])}this.ch=null}},"$0","geG",0,0,2]},
jm:{"^":"e:2;a,b",
$0:[function(){J.aB(this.a,this.b)},null,null,0,0,null,"call"]},
j0:{"^":"b;a,b",
ek:function(){var z=this.a
if(z.b===z.c)return
return z.cK()},
cQ:function(){var z,y,x
z=this.ek()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.av(0,init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gY(y)}else y=!1
else y=!1
else y=!1
if(y)H.v(P.ao("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gY(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.aI(["command","close"])
x=new H.av(!0,new P.e2(0,null,null,null,null,null,0,[null,P.w])).O(x)
y.toString
self.postMessage(x)}return!1}z.eN()
return!0},
cc:function(){if(self.window!=null)new H.j1(this).$0()
else for(;this.cQ(););},
aC:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.cc()
else try{this.cc()}catch(x){z=H.M(x)
y=H.L(x)
w=init.globalState.Q
v=P.aI(["command","error","msg",H.d(z)+"\n"+H.d(y)])
v=new H.av(!0,P.aP(null,P.w)).O(v)
w.toString
self.postMessage(v)}}},
j1:{"^":"e:2;a",
$0:function(){if(!this.a.cQ())return
P.iF(C.i,this)}},
bd:{"^":"b;a,b,c",
eN:function(){var z=this.a
if(z.gbk()){z.gej().push(this)
return}z.ax(this.b)}},
jr:{"^":"b;"},
hr:{"^":"e:0;a,b,c,d,e,f",
$0:function(){H.hs(this.a,this.b,this.c,this.d,this.e,this.f)}},
ht:{"^":"e:2;a,b,c,d,e",
$0:function(){var z,y
z=this.e
z.seB(!0)
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
if(H.ah(y,{func:1,args:[P.P,P.P]}))y.$2(this.b,this.c)
else if(H.ah(y,{func:1,args:[P.P]}))y.$1(this.b)
else y.$0()}z.be()}},
dV:{"^":"b;"},
bG:{"^":"dV;b,a",
a7:function(a,b){var z,y,x
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gc_())return
x=H.jS(b)
if(z.gef()===y){z.er(x)
return}init.globalState.f.a.a1(0,new H.bd(z,new H.jw(this,x),"receive"))},
B:function(a,b){if(b==null)return!1
return b instanceof H.bG&&J.Y(this.b,b.b)},
gC:function(a){return this.b.gb9()}},
jw:{"^":"e:0;a,b",
$0:function(){var z=this.a.b
if(!z.gc_())J.eB(z,this.b)}},
cs:{"^":"dV;b,c,a",
a7:function(a,b){var z,y,x
z=P.aI(["command","message","port",this,"msg",b])
y=new H.av(!0,P.aP(null,P.w)).O(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
B:function(a,b){if(b==null)return!1
return b instanceof H.cs&&J.Y(this.b,b.b)&&J.Y(this.a,b.a)&&J.Y(this.c,b.c)},
gC:function(a){var z,y,x
z=J.cF(this.b,16)
y=J.cF(this.a,8)
x=this.c
if(typeof x!=="number")return H.m(x)
return(z^y^x)>>>0}},
by:{"^":"b;b9:a<,b,c_:c<",
dK:function(){this.c=!0
this.b=null},
dB:function(a,b){if(this.c)return
this.b.$1(b)},
$isia:1},
iB:{"^":"b;a,b,c,d",
dw:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.a1(0,new H.bd(y,new H.iD(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.ab(new H.iE(this,b),0),a)}else throw H.a(new P.q("Timer greater than 0."))},
v:{
iC:function(a,b){var z=new H.iB(!0,!1,null,0)
z.dw(a,b)
return z}}},
iD:{"^":"e:2;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
iE:{"^":"e:2;a,b",
$0:[function(){var z=this.a
z.c=null;--init.globalState.f.b
z.d=1
this.b.$0()},null,null,0,0,null,"call"]},
am:{"^":"b;b9:a<",
gC:function(a){var z,y,x
z=this.a
y=J.N(z)
x=y.bE(z,0)
y=y.ae(z,4294967296)
if(typeof y!=="number")return H.m(y)
z=x^y
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
B:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.am){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
av:{"^":"b;a,b",
O:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.k(0,a,z.gi(z))
z=J.r(a)
if(!!z.$isdl)return["buffer",a]
if(!!z.$iscb)return["typed",a]
if(!!z.$isl)return this.d5(a)
if(!!z.$isho){x=this.gd2()
w=z.gan(a)
w=H.bt(w,x,H.A(w,"T",0),null)
w=P.b2(w,!0,H.A(w,"T",0))
z=z.gbv(a)
z=H.bt(z,x,H.A(z,"T",0),null)
return["map",w,P.b2(z,!0,H.A(z,"T",0))]}if(!!z.$ishB)return this.d6(a)
if(!!z.$isf)this.cU(a)
if(!!z.$isia)this.aD(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isbG)return this.d7(a)
if(!!z.$iscs)return this.d8(a)
if(!!z.$ise){v=a.$static_name
if(v==null)this.aD(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isam)return["capability",a.a]
if(!(a instanceof P.b))this.cU(a)
return["dart",init.classIdExtractor(a),this.d4(init.classFieldsExtractor(a))]},"$1","gd2",2,0,1,6],
aD:function(a,b){throw H.a(new P.q((b==null?"Can't transmit:":b)+" "+H.d(a)))},
cU:function(a){return this.aD(a,null)},
d5:function(a){var z=this.d3(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.aD(a,"Can't serialize indexable: ")},
d3:function(a){var z,y,x
z=[]
C.a.si(z,a.length)
for(y=0;y<a.length;++y){x=this.O(a[y])
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
d4:function(a){var z
for(z=0;z<a.length;++z)C.a.k(a,z,this.O(a[z]))
return a},
d6:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.aD(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.a.si(y,z.length)
for(x=0;x<z.length;++x){w=this.O(a[z[x]])
if(x>=y.length)return H.c(y,x)
y[x]=w}return["js-object",z,y]},
d8:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d7:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gb9()]
return["raw sendport",a]}},
bD:{"^":"b;a,b",
aa:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.a(P.aV("Bad serialized message: "+H.d(a)))
switch(C.a.gbi(a)){case"ref":if(1>=a.length)return H.c(a,1)
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
y=H.n(this.aw(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return H.n(this.aw(x),[null])
case"mutable":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return this.aw(x)
case"const":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
y=H.n(this.aw(x),[null])
y.fixed$length=Array
return y
case"map":return this.en(a)
case"sendport":return this.eo(a)
case"raw sendport":if(1>=a.length)return H.c(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.em(a)
case"function":if(1>=a.length)return H.c(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.c(a,1)
return new H.am(a[1])
case"dart":y=a.length
if(1>=y)return H.c(a,1)
w=a[1]
if(2>=y)return H.c(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.aw(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.a("couldn't deserialize: "+H.d(a))}},"$1","gel",2,0,1,6],
aw:function(a){var z,y,x
z=J.K(a)
y=0
while(!0){x=z.gi(a)
if(typeof x!=="number")return H.m(x)
if(!(y<x))break
z.k(a,y,this.aa(z.h(a,y)));++y}return a},
en:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
w=P.aq()
this.b.push(w)
y=J.eR(J.eM(y,this.gel()))
for(z=J.K(y),v=J.K(x),u=0;u<z.gi(y);++u)w.k(0,z.h(y,u),this.aa(v.h(x,u)))
return w},
eo:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
if(3>=z)return H.c(a,3)
w=a[3]
if(J.Y(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.cE(w)
if(u==null)return
t=new H.bG(u,x)}else t=new H.cs(y,w,x)
this.b.push(t)
return t},
em:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.c(a,1)
y=a[1]
if(2>=z)return H.c(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.K(y)
v=J.K(x)
u=0
while(!0){t=z.gi(y)
if(typeof t!=="number")return H.m(t)
if(!(u<t))break
w[z.h(y,u)]=this.aa(v.h(x,u));++u}return w}}}],["","",,H,{"^":"",
f7:function(){throw H.a(new P.q("Cannot modify unmodifiable Map"))},
ki:function(a){return init.types[a]},
el:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.r(a).$iso},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ak(a)
if(typeof z!=="string")throw H.a(H.J(a))
return z},
ae:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
cd:function(a){var z,y,x,w,v,u,t,s,r
z=J.r(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.w||!!J.r(a).$isbc){v=C.m(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.k.dL(w,0)===36)w=C.k.dg(w,1)
r=H.em(H.bM(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
bw:function(a){return"Instance of '"+H.cd(a)+"'"},
as:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i7:function(a){var z=H.as(a).getUTCFullYear()+0
return z},
i5:function(a){var z=H.as(a).getUTCMonth()+1
return z},
i1:function(a){var z=H.as(a).getUTCDate()+0
return z},
i2:function(a){var z=H.as(a).getUTCHours()+0
return z},
i4:function(a){var z=H.as(a).getUTCMinutes()+0
return z},
i6:function(a){var z=H.as(a).getUTCSeconds()+0
return z},
i3:function(a){var z=H.as(a).getUTCMilliseconds()+0
return z},
cc:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.a(H.J(a))
return a[b]},
dx:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.a(H.J(a))
a[b]=c},
du:function(a,b,c){var z,y,x,w
z={}
z.a=0
y=[]
x=[]
if(b!=null){w=J.O(b)
if(typeof w!=="number")return H.m(w)
z.a=0+w
C.a.X(y,b)}z.b=""
if(c!=null&&!c.gY(c))c.R(0,new H.i0(z,y,x))
return J.eN(a,new H.hz(C.H,""+"$"+H.d(z.a)+z.b,0,null,y,x,null))},
i_:function(a,b){var z,y
if(b!=null)z=b instanceof Array?b:P.b2(b,!0,null)
else z=[]
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.hZ(a,z)},
hZ:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.r(a)["call*"]
if(y==null)return H.du(a,b,null)
x=H.dz(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.du(a,b,null)
b=P.b2(b,!0,null)
for(u=z;u<v;++u)C.a.a3(b,init.metadata[x.ei(0,u)])}return y.apply(a,b)},
m:function(a){throw H.a(H.J(a))},
c:function(a,b){if(a==null)J.O(a)
throw H.a(H.F(a,b))},
F:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,"index",null)
z=J.O(a)
if(!(b<0)){if(typeof z!=="number")return H.m(z)
y=b>=z}else y=!0
if(y)return P.u(b,a,"index",null,z)
return P.bx(b,"index",null)},
J:function(a){return new P.al(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bu()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eu})
z.name=""}else z.toString=H.eu
return z},
eu:[function(){return J.ak(this.dartException)},null,null,0,0,null],
v:function(a){throw H.a(a)},
cE:function(a){throw H.a(new P.a2(a))},
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kF(a)
if(a==null)return
if(a instanceof H.c_)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.cg(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c5(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.d(y)+" (Error "+w+")"
return z.$1(new H.dt(v,null))}}if(a instanceof TypeError){u=$.$get$dG()
t=$.$get$dH()
s=$.$get$dI()
r=$.$get$dJ()
q=$.$get$dN()
p=$.$get$dO()
o=$.$get$dL()
$.$get$dK()
n=$.$get$dQ()
m=$.$get$dP()
l=u.T(y)
if(l!=null)return z.$1(H.c5(y,l))
else{l=t.T(y)
if(l!=null){l.method="call"
return z.$1(H.c5(y,l))}else{l=s.T(y)
if(l==null){l=r.T(y)
if(l==null){l=q.T(y)
if(l==null){l=p.T(y)
if(l==null){l=o.T(y)
if(l==null){l=r.T(y)
if(l==null){l=n.T(y)
if(l==null){l=m.T(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.dt(y,l==null?null:l.method))}}return z.$1(new H.iH(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dD()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.al(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dD()
return a},
L:function(a){var z
if(a instanceof H.c_)return a.b
if(a==null)return new H.e3(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e3(a,null)},
ky:function(a){if(a==null||typeof a!='object')return J.S(a)
else return H.ae(a)},
kf:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
kq:[function(a,b,c,d,e,f,g){switch(c){case 0:return H.be(b,new H.kr(a))
case 1:return H.be(b,new H.ks(a,d))
case 2:return H.be(b,new H.kt(a,d,e))
case 3:return H.be(b,new H.ku(a,d,e,f))
case 4:return H.be(b,new H.kv(a,d,e,f,g))}throw H.a(P.ao("Unsupported number of arguments for wrapped closure"))},null,null,14,0,null,12,13,14,15,16,17,18],
ab:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.kq)
a.$identity=z
return z},
f3:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.r(c).$isi){z.$reflectionInfo=c
x=H.dz(z).r}else x=c
w=d?Object.create(new H.ip().constructor.prototype):Object.create(new H.bX(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Z
$.Z=J.ai(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cR(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.ki,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cP:H.bY
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cR(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
f0:function(a,b,c,d){var z=H.bY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cR:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f2(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f0(y,!w,z,b)
if(y===0){w=$.Z
$.Z=J.ai(w,1)
u="self"+H.d(w)
w="return function(){var "+u+" = this."
v=$.aC
if(v==null){v=H.bk("self")
$.aC=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Z
$.Z=J.ai(w,1)
t+=H.d(w)
w="return function("+t+"){return this."
v=$.aC
if(v==null){v=H.bk("self")
$.aC=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
f1:function(a,b,c,d){var z,y
z=H.bY
y=H.cP
switch(b?-1:a){case 0:throw H.a(new H.ic("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f2:function(a,b){var z,y,x,w,v,u,t,s
z=H.eV()
y=$.cO
if(y==null){y=H.bk("receiver")
$.cO=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f1(w,!u,x,b)
if(w===1){y="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
u=$.Z
$.Z=J.ai(u,1)
return new Function(y+H.d(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
u=$.Z
$.Z=J.ai(u,1)
return new Function(y+H.d(u)+"}")()},
cx:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.r(c).$isi){c.fixed$length=Array
z=c}else z=c
return H.f3(a,b,z,!!d,e,f)},
cw:function(a){if(typeof a==="boolean"||a==null)return a
throw H.a(H.cQ(a,"bool"))},
kA:function(a,b){var z=J.K(b)
throw H.a(H.cQ(a,z.bF(b,3,z.gi(b))))},
bO:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else z=!0
if(z)return a
H.kA(a,b)},
eg:function(a){var z=J.r(a)
return"$S" in z?z.$S():null},
ah:function(a,b){var z,y
if(a==null)return!1
z=H.eg(a)
if(z==null)y=!1
else y=H.ek(z,b)
return y},
k1:function(a){var z
if(a instanceof H.e){z=H.eg(a)
if(z!=null)return H.eq(z,null)
return"Closure"}return H.cd(a)},
kE:function(a){throw H.a(new P.fe(a))},
bS:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ei:function(a){return init.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
bM:function(a){if(a==null)return
return a.$ti},
ej:function(a,b){return H.cD(a["$as"+H.d(b)],H.bM(a))},
A:function(a,b,c){var z=H.ej(a,b)
return z==null?null:z[c]},
X:function(a,b){var z=H.bM(a)
return z==null?null:z[b]},
eq:function(a,b){var z=H.aA(a,b)
return z},
aA:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.em(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aA(z,b)
return H.jW(a,b)}return"unknown-reified-type"},
jW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aA(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aA(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aA(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.ke(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aA(r[p],b)+(" "+H.d(p))}w+="}"}return"("+w+") => "+z},
em:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bA("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aA(u,c)}return w?"":"<"+z.j(0)+">"},
cD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bJ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bM(a)
y=J.r(a)
if(y[b]==null)return!1
return H.ee(H.cD(y[d],z),c)},
ee:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.R(a[y],b[y]))return!1
return!0},
bK:function(a,b,c){return a.apply(b,H.ej(b,c))},
R:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="P")return!0
if('func' in b)return H.ek(a,b)
if('func' in a)return b.builtin$cls==="lx"||b.builtin$cls==="b"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.eq(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ee(H.cD(u,z),x)},
ed:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.R(z,v)||H.R(v,z)))return!1}return!0},
k4:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.R(v,u)||H.R(u,v)))return!1}return!0},
ek:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.R(z,y)||H.R(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ed(x,w,!1))return!1
if(!H.ed(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.R(o,n)||H.R(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.R(o,n)||H.R(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.R(o,n)||H.R(n,o)))return!1}}return H.k4(a.named,b.named)},
nd:function(a){var z=$.cy
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
nc:function(a){return H.ae(a)},
nb:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kw:function(a){var z,y,x,w,v,u
z=$.cy.$1(a)
y=$.bL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ec.$2(a,z)
if(z!=null){y=$.bL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cB(x)
$.bL[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bP[z]=x
return x}if(v==="-"){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eo(a,x)
if(v==="*")throw H.a(new P.cn(z))
if(init.leafTags[z]===true){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eo(a,x)},
eo:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bR(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cB:function(a){return J.bR(a,!1,null,!!a.$iso)},
kx:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.bR(z,!1,null,!!z.$iso)
else return J.bR(z,c,null,null)},
ko:function(){if(!0===$.cz)return
$.cz=!0
H.kp()},
kp:function(){var z,y,x,w,v,u,t,s
$.bL=Object.create(null)
$.bP=Object.create(null)
H.kk()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ep.$1(v)
if(u!=null){t=H.kx(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kk:function(){var z,y,x,w,v,u,t
z=C.x()
z=H.ay(C.y,H.ay(C.z,H.ay(C.l,H.ay(C.l,H.ay(C.B,H.ay(C.A,H.ay(C.C(C.m),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.cy=new H.kl(v)
$.ec=new H.km(u)
$.ep=new H.kn(t)},
ay:function(a,b){return a(b)||b},
kD:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f6:{"^":"iI;a,$ti"},
cU:{"^":"b;$ti",
j:function(a){return P.bs(this)},
k:function(a,b,c){return H.f7()},
S:function(a,b){var z=P.aq()
this.R(0,new H.f8(this,b,z))
return z}},
f8:{"^":"e;a,b,c",
$2:function(a,b){var z,y
z=this.b.$2(a,b)
y=J.t(z)
this.c.k(0,y.gab(z),y.gD(z))},
$S:function(){return H.bK(function(a,b){return{func:1,args:[a,b]}},this.a,"cU")}},
f9:{"^":"cU;a,b,c,$ti",
gi:function(a){return this.a},
av:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.av(0,b))return
return this.bW(b)},
bW:function(a){return this.b[a]},
R:function(a,b){var z,y,x,w
z=this.c
for(y=z.length,x=0;x<y;++x){w=z[x]
b.$2(w,this.bW(w))}}},
hz:{"^":"b;a,b,c,d,e,f,r",
gcF:function(){var z=this.a
return z},
gcJ:function(){var z,y,x,w
if(this.c===1)return C.n
z=this.e
y=z.length-this.f.length
if(y===0)return C.n
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
gcG:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.o
z=this.f
y=z.length
x=this.e
w=x.length-y
if(y===0)return C.o
v=P.aN
u=new H.ac(0,null,null,null,null,null,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.c(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.c(x,r)
u.k(0,new H.cj(s),x[r])}return new H.f6(u,[v,null])}},
ib:{"^":"b;a,b,c,d,e,f,r,x",
ei:function(a,b){var z=this.d
if(typeof b!=="number")return b.aq()
if(b<z)return
return this.b[3+b-z]},
v:{
dz:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.ib(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
i0:{"^":"e:8;a,b,c",
$2:function(a,b){var z=this.a
z.b=z.b+"$"+H.d(a)
this.c.push(a)
this.b.push(b);++z.a}},
iG:{"^":"b;a,b,c,d,e,f",
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
a_:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dM:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
dt:{"^":"E;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+H.d(z)+"' on null"}},
hD:{"^":"E;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
v:{
c5:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hD(a,y,z?null:b.receiver)}}},
iH:{"^":"E;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
c_:{"^":"b;a,a0:b<"},
kF:{"^":"e:1;a",
$1:function(a){if(!!J.r(a).$isE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e3:{"^":"b;a,b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa5:1},
kr:{"^":"e:0;a",
$0:function(){return this.a.$0()}},
ks:{"^":"e:0;a,b",
$0:function(){return this.a.$1(this.b)}},
kt:{"^":"e:0;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
ku:{"^":"e:0;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
kv:{"^":"e:0;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
e:{"^":"b;",
j:function(a){return"Closure '"+H.cd(this).trim()+"'"},
gcV:function(){return this},
gcV:function(){return this}},
dF:{"^":"e;"},
ip:{"^":"dF;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bX:{"^":"dF;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.ae(this.a)
else y=typeof z!=="object"?J.S(z):H.ae(z)
return J.eA(y,H.ae(this.b))},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+H.bw(z)},
v:{
bY:function(a){return a.a},
cP:function(a){return a.c},
eV:function(){var z=$.aC
if(z==null){z=H.bk("self")
$.aC=z}return z},
bk:function(a){var z,y,x,w,v
z=new H.bX("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
eY:{"^":"E;a",
j:function(a){return this.a},
v:{
cQ:function(a,b){return new H.eY("CastError: "+H.d(P.aD(a))+": type '"+H.k1(a)+"' is not a subtype of type '"+b+"'")}}},
ic:{"^":"E;a",
j:function(a){return"RuntimeError: "+H.d(this.a)}},
ac:{"^":"hJ;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gY:function(a){return this.a===0},
gan:function(a){return new H.hG(this,[H.X(this,0)])},
gbv:function(a){return H.bt(this.gan(this),new H.hC(this),H.X(this,0),H.X(this,1))},
av:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bS(y,b)}else return this.eC(b)},
eC:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.aM(z,this.az(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ag(z,b)
return y==null?null:y.ga4()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.ag(x,b)
return y==null?null:y.ga4()}else return this.eD(b)},
eD:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aM(z,this.az(a))
x=this.aA(y,a)
if(x<0)return
return y[x].ga4()},
k:function(a,b,c){var z,y,x,w,v,u,t
if(typeof b==="string"){z=this.b
if(z==null){z=this.bb()
this.b=z}y=this.ag(z,b)
if(y==null)this.aO(z,b,this.aN(b,c))
else y.sa4(c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){x=this.bb()
this.c=x}y=this.ag(x,b)
if(y==null)this.aO(x,b,this.aN(b,c))
else y.sa4(c)}else{w=this.d
if(w==null){w=this.bb()
this.d=w}v=this.az(b)
u=this.aM(w,v)
if(u==null)this.aO(w,v,[this.aN(b,c)])
else{t=this.aA(u,b)
if(t>=0)u[t].sa4(c)
else u.push(this.aN(b,c))}}},
aB:function(a,b){if(typeof b==="string")return this.c9(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c9(this.c,b)
else return this.eE(b)},
eE:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.aM(z,this.az(a))
x=this.aA(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.ck(w)
return w.ga4()},
al:function(a){if(this.a>0){this.f=null
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
if(y!==this.r)throw H.a(new P.a2(this))
z=z.c}},
c9:function(a,b){var z
if(a==null)return
z=this.ag(a,b)
if(z==null)return
this.ck(z)
this.bU(a,b)
return z.ga4()},
aN:function(a,b){var z,y
z=new H.hF(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
ck:function(a){var z,y
z=a.gdX()
y=a.gdW()
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
az:function(a){return J.S(a)&0x3ffffff},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Y(a[y].gcB(),b))return y
return-1},
j:function(a){return P.bs(this)},
ag:function(a,b){return a[b]},
aM:function(a,b){return a[b]},
aO:function(a,b,c){a[b]=c},
bU:function(a,b){delete a[b]},
bS:function(a,b){return this.ag(a,b)!=null},
bb:function(){var z=Object.create(null)
this.aO(z,"<non-identifier-key>",z)
this.bU(z,"<non-identifier-key>")
return z},
$isho:1},
hC:{"^":"e:1;a",
$1:[function(a){return this.a.h(0,a)},null,null,2,0,null,19,"call"]},
hF:{"^":"b;cB:a<,a4:b@,dW:c<,dX:d<"},
hG:{"^":"h;a,$ti",
gi:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.hH(z,z.r,null,null)
y.c=z.e
return y}},
hH:{"^":"b;a,b,c,d",
gA:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(new P.a2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kl:{"^":"e:1;a",
$1:function(a){return this.a(a)}},
km:{"^":"e:9;a",
$2:function(a,b){return this.a(a,b)}},
kn:{"^":"e:10;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
ke:function(a){var z=H.n(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
kz:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
G:function(a){return a},
bI:function(a){return a},
dl:{"^":"f;",$isdl:1,$iseX:1,"%":"ArrayBuffer"},
cb:{"^":"f;",$iscb:1,"%":"DataView;ArrayBufferView;ca|dp|dq|dm|dn|dr|ad"},
ca:{"^":"cb;",
gi:function(a){return a.length},
$isl:1,
$asl:I.ag,
$iso:1,
$aso:I.ag},
dm:{"^":"dq;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
k:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
a[b]=c},
$ish:1,
$ash:function(){return[P.W]},
$asbn:function(){return[P.W]},
$asj:function(){return[P.W]},
$isi:1,
$asi:function(){return[P.W]},
"%":"Float64Array"},
ad:{"^":"dr;",
k:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
a[b]=c},
$ish:1,
$ash:function(){return[P.w]},
$asbn:function(){return[P.w]},
$asj:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]}},
hT:{"^":"dm;","%":"Float32Array"},
lR:{"^":"ad;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
"%":"Int16Array"},
lS:{"^":"ad;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
"%":"Int32Array"},
lT:{"^":"ad;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
"%":"Int8Array"},
lU:{"^":"ad;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
"%":"Uint16Array"},
lV:{"^":"ad;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
"%":"Uint32Array"},
lW:{"^":"ad;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lX:{"^":"ad;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.F(a,b))
return a[b]},
"%":";Uint8Array"},
dn:{"^":"ca+j;"},
dp:{"^":"ca+j;"},
dq:{"^":"dp+bn;"},
dr:{"^":"dn+bn;"}}],["","",,P,{"^":"",
iN:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k5()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ab(new P.iP(z),1)).observe(y,{childList:true})
return new P.iO(z,y,x)}else if(self.setImmediate!=null)return P.k6()
return P.k7()},
mZ:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.ab(new P.iQ(a),0))},"$1","k5",2,0,4],
n_:[function(a){++init.globalState.f.b
self.setImmediate(H.ab(new P.iR(a),0))},"$1","k6",2,0,4],
n0:[function(a){P.ck(C.i,a)},"$1","k7",2,0,4],
a9:function(a,b){P.e6(null,a)
return b.geq()},
a0:function(a,b){P.e6(a,b)},
a8:function(a,b){J.eF(b,a)},
a7:function(a,b){b.ct(H.M(a),H.L(a))},
e6:function(a,b){var z,y,x,w
z=new P.jN(b)
y=new P.jO(b)
x=J.r(a)
if(!!x.$isH)a.bd(z,y)
else if(!!x.$isI)x.bt(a,z,y)
else{w=new P.H(0,$.p,null,[null])
w.a=4
w.c=a
w.bd(z,null)}},
aa:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
$.p.toString
return new P.k2(z)},
jX:function(a,b,c){if(H.ah(a,{func:1,args:[P.P,P.P]}))return a.$2(b,c)
else return a.$1(b)},
e7:function(a,b){if(H.ah(a,{func:1,args:[P.P,P.P]})){b.toString
return a}else{b.toString
return a}},
fB:function(a,b,c){var z
if(a==null)a=new P.bu()
z=$.p
if(z!==C.c)z.toString
z=new P.H(0,z,null,[c])
z.bL(a,b)
return z},
a1:function(a){return new P.jK(new P.H(0,$.p,null,[a]),[a])},
jT:function(a,b,c){$.p.toString
a.W(b,c)},
jZ:function(){var z,y
for(;z=$.aw,z!=null;){$.aR=null
y=z.b
$.aw=y
if(y==null)$.aQ=null
z.a.$0()}},
na:[function(){$.ct=!0
try{P.jZ()}finally{$.aR=null
$.ct=!1
if($.aw!=null)$.$get$cp().$1(P.ef())}},"$0","ef",0,0,2],
eb:function(a){var z=new P.dU(a,null)
if($.aw==null){$.aQ=z
$.aw=z
if(!$.ct)$.$get$cp().$1(P.ef())}else{$.aQ.b=z
$.aQ=z}},
k0:function(a){var z,y,x
z=$.aw
if(z==null){P.eb(a)
$.aR=$.aQ
return}y=new P.dU(a,null)
x=$.aR
if(x==null){y.b=z
$.aR=y
$.aw=y}else{y.b=x.b
x.b=y
$.aR=y
if(y.b==null)$.aQ=y}},
er:function(a){var z=$.p
if(C.c===z){P.ax(null,null,C.c,a)
return}z.toString
P.ax(null,null,z,z.bf(a))},
mB:function(a,b){return new P.jJ(null,a,!1,[b])},
jQ:function(a,b,c){var z=a.bg(0)
if(!!J.r(z).$isI&&z!==$.$get$b_())z.bw(new P.jR(b,c))
else b.af(c)},
e5:function(a,b,c){$.p.toString
a.at(b,c)},
iF:function(a,b){var z=$.p
if(z===C.c){z.toString
return P.ck(a,b)}return P.ck(a,z.bf(b))},
ck:function(a,b){var z=C.b.G(a.a,1000)
return H.iC(z<0?0:z,b)},
bf:function(a,b,c,d,e){var z={}
z.a=d
P.k0(new P.k_(z,e))},
e8:function(a,b,c,d){var z,y
y=$.p
if(y===c)return d.$0()
$.p=c
z=y
try{y=d.$0()
return y}finally{$.p=z}},
ea:function(a,b,c,d,e){var z,y
y=$.p
if(y===c)return d.$1(e)
$.p=c
z=y
try{y=d.$1(e)
return y}finally{$.p=z}},
e9:function(a,b,c,d,e,f){var z,y
y=$.p
if(y===c)return d.$2(e,f)
$.p=c
z=y
try{y=d.$2(e,f)
return y}finally{$.p=z}},
ax:function(a,b,c,d){var z=C.c!==c
if(z){if(z){c.toString
z=!1}else z=!0
d=!z?c.bf(d):c.e9(d)}P.eb(d)},
iP:{"^":"e:1;a",
$1:[function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()},null,null,2,0,null,4,"call"]},
iO:{"^":"e:11;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iQ:{"^":"e:0;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
iR:{"^":"e:0;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
jN:{"^":"e:1;a",
$1:[function(a){return this.a.$2(0,a)},null,null,2,0,null,0,"call"]},
jO:{"^":"e:12;a",
$2:[function(a,b){this.a.$2(1,new H.c_(a,b))},null,null,4,0,null,1,2,"call"]},
k2:{"^":"e:13;a",
$2:[function(a,b){this.a(a,b)},null,null,4,0,null,20,0,"call"]},
I:{"^":"b;$ti"},
kS:{"^":"b;$ti"},
dW:{"^":"b;eq:a<,$ti",
ct:[function(a,b){if(a==null)a=new P.bu()
if(this.a.a!==0)throw H.a(new P.aM("Future already completed"))
$.p.toString
this.W(a,b)},function(a){return this.ct(a,null)},"cs","$2","$1","gec",2,2,5]},
co:{"^":"dW;a,$ti",
am:function(a,b){var z=this.a
if(z.a!==0)throw H.a(new P.aM("Future already completed"))
z.dG(b)},
W:function(a,b){this.a.bL(a,b)}},
jK:{"^":"dW;a,$ti",
am:function(a,b){var z=this.a
if(z.a!==0)throw H.a(new P.aM("Future already completed"))
z.af(b)},
W:function(a,b){this.a.W(a,b)}},
dY:{"^":"b;a2:a@,E:b>,c,d,e",
gak:function(){return this.b.b},
gcA:function(){return(this.c&1)!==0},
gez:function(){return(this.c&2)!==0},
gcz:function(){return this.c===8},
geA:function(){return this.e!=null},
ex:function(a){return this.b.b.bq(this.d,a)},
eH:function(a){if(this.c!==6)return!0
return this.b.b.bq(this.d,J.aT(a))},
cw:function(a){var z,y,x
z=this.e
y=J.t(a)
x=this.b.b
if(H.ah(z,{func:1,args:[P.b,P.a5]}))return x.eT(z,y.gN(a),a.ga0())
else return x.bq(z,y.gN(a))},
ey:function(){return this.b.b.cO(this.d)}},
H:{"^":"b;a9:a<,ak:b<,aj:c<,$ti",
gdT:function(){return this.a===2},
gba:function(){return this.a>=4},
gdS:function(){return this.a===8},
e0:function(a){this.a=2
this.c=a},
bt:function(a,b,c){var z=$.p
if(z!==C.c){z.toString
if(c!=null)c=P.e7(c,z)}return this.bd(b,c)},
cR:function(a,b){return this.bt(a,b,null)},
bd:function(a,b){var z=new P.H(0,$.p,null,[null])
this.aY(new P.dY(null,z,b==null?1:3,a,b))
return z},
bw:function(a){var z,y
z=$.p
y=new P.H(0,z,null,this.$ti)
if(z!==C.c)z.toString
this.aY(new P.dY(null,y,8,a,null))
return y},
e2:function(){this.a=1},
dJ:function(){this.a=0},
ga8:function(){return this.c},
gdI:function(){return this.c},
e3:function(a){this.a=4
this.c=a},
e1:function(a){this.a=8
this.c=a},
bN:function(a){this.a=a.ga9()
this.c=a.gaj()},
aY:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gba()){y.aY(a)
return}this.a=y.ga9()
this.c=y.gaj()}z=this.b
z.toString
P.ax(null,null,z,new P.j8(this,a))}},
c7:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.ga2()!=null;)w=w.ga2()
w.sa2(x)}}else{if(y===2){v=this.c
if(!v.gba()){v.c7(a)
return}this.a=v.ga9()
this.c=v.gaj()}z.a=this.cb(a)
y=this.b
y.toString
P.ax(null,null,y,new P.jf(z,this))}},
ai:function(){var z=this.c
this.c=null
return this.cb(z)},
cb:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.ga2()
z.sa2(y)}return y},
af:function(a){var z,y,x
z=this.$ti
y=H.bJ(a,"$isI",z,"$asI")
if(y){z=H.bJ(a,"$isH",z,null)
if(z)P.bF(a,this)
else P.dZ(a,this)}else{x=this.ai()
this.a=4
this.c=a
P.au(this,x)}},
W:[function(a,b){var z=this.ai()
this.a=8
this.c=new P.bj(a,b)
P.au(this,z)},function(a){return this.W(a,null)},"f_","$2","$1","gb2",2,2,5,7,1,2],
dG:function(a){var z=H.bJ(a,"$isI",this.$ti,"$asI")
if(z){this.dH(a)
return}this.a=1
z=this.b
z.toString
P.ax(null,null,z,new P.ja(this,a))},
dH:function(a){var z=H.bJ(a,"$isH",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.ax(null,null,z,new P.je(this,a))}else P.bF(a,this)
return}P.dZ(a,this)},
bL:function(a,b){var z
this.a=1
z=this.b
z.toString
P.ax(null,null,z,new P.j9(this,a,b))},
$isI:1,
v:{
j7:function(a,b){var z=new P.H(0,$.p,null,[b])
z.a=4
z.c=a
return z},
dZ:function(a,b){var z,y,x
b.e2()
try{J.eQ(a,new P.jb(b),new P.jc(b))}catch(x){z=H.M(x)
y=H.L(x)
P.er(new P.jd(b,z,y))}},
bF:function(a,b){var z
for(;a.gdT();)a=a.gdI()
if(a.gba()){z=b.ai()
b.bN(a)
P.au(b,z)}else{z=b.gaj()
b.e0(a)
a.c7(z)}},
au:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.gdS()
if(b==null){if(w){v=z.a.ga8()
y=z.a.gak()
u=J.aT(v)
t=v.ga0()
y.toString
P.bf(null,null,y,u,t)}return}for(;b.ga2()!=null;b=s){s=b.ga2()
b.sa2(null)
P.au(z.a,b)}r=z.a.gaj()
x.a=w
x.b=r
y=!w
if(!y||b.gcA()||b.gcz()){q=b.gak()
if(w){u=z.a.gak()
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){v=z.a.ga8()
y=z.a.gak()
u=J.aT(v)
t=v.ga0()
y.toString
P.bf(null,null,y,u,t)
return}p=$.p
if(p==null?q!=null:p!==q)$.p=q
else p=null
if(b.gcz())new P.ji(z,x,w,b).$0()
else if(y){if(b.gcA())new P.jh(x,b,r).$0()}else if(b.gez())new P.jg(z,x,b).$0()
if(p!=null)$.p=p
y=x.b
if(!!J.r(y).$isI){o=J.cM(b)
if(y.a>=4){b=o.ai()
o.bN(y)
z.a=y
continue}else P.bF(y,o)
return}}o=J.cM(b)
b=o.ai()
y=x.a
u=x.b
if(!y)o.e3(u)
else o.e1(u)
z.a=o
y=o}}}},
j8:{"^":"e:0;a,b",
$0:function(){P.au(this.a,this.b)}},
jf:{"^":"e:0;a,b",
$0:function(){P.au(this.b,this.a.a)}},
jb:{"^":"e:1;a",
$1:[function(a){var z=this.a
z.dJ()
z.af(a)},null,null,2,0,null,8,"call"]},
jc:{"^":"e:14;a",
$2:[function(a,b){this.a.W(a,b)},function(a){return this.$2(a,null)},"$1",null,null,null,2,2,null,7,1,2,"call"]},
jd:{"^":"e:0;a,b,c",
$0:function(){this.a.W(this.b,this.c)}},
ja:{"^":"e:0;a,b",
$0:function(){var z,y
z=this.a
y=z.ai()
z.a=4
z.c=this.b
P.au(z,y)}},
je:{"^":"e:0;a,b",
$0:function(){P.bF(this.b,this.a)}},
j9:{"^":"e:0;a,b,c",
$0:function(){this.a.W(this.b,this.c)}},
ji:{"^":"e:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.d.ey()}catch(w){y=H.M(w)
x=H.L(w)
if(this.c){v=J.aT(this.a.a.ga8())
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.ga8()
else u.b=new P.bj(y,x)
u.a=!0
return}if(!!J.r(z).$isI){if(z instanceof P.H&&z.ga9()>=4){if(z.ga9()===8){v=this.b
v.b=z.gaj()
v.a=!0}return}t=this.a.a
v=this.b
v.b=J.cN(z,new P.jj(t))
v.a=!1}}},
jj:{"^":"e:1;a",
$1:[function(a){return this.a},null,null,2,0,null,4,"call"]},
jh:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ex(this.c)}catch(x){z=H.M(x)
y=H.L(x)
w=this.a
w.b=new P.bj(z,y)
w.a=!0}}},
jg:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.ga8()
w=this.c
if(w.eH(z)===!0&&w.geA()){v=this.b
v.b=w.cw(z)
v.a=!1}}catch(u){y=H.M(u)
x=H.L(u)
w=this.a
v=J.aT(w.a.ga8())
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.ga8()
else s.b=new P.bj(y,x)
s.a=!0}}},
dU:{"^":"b;a,b"},
V:{"^":"b;$ti",
S:function(a,b){return new P.ju(b,this,[H.A(this,"V",0),null])},
es:function(a,b){return new P.jk(a,b,this,[H.A(this,"V",0)])},
cw:function(a){return this.es(a,null)},
gi:function(a){var z,y
z={}
y=new P.H(0,$.p,null,[P.w])
z.a=0
this.ao(new P.iu(z),!0,new P.iv(z,y),y.gb2())
return y},
a6:function(a){var z,y,x
z=H.A(this,"V",0)
y=H.n([],[z])
x=new P.H(0,$.p,null,[[P.i,z]])
this.ao(new P.iw(this,y),!0,new P.ix(y,x),x.gb2())
return x},
V:function(a,b){if(b<0)H.v(P.aV(b))
return new P.jG(b,this,[H.A(this,"V",0)])},
gbi:function(a){var z,y
z={}
y=new P.H(0,$.p,null,[H.A(this,"V",0)])
z.a=null
z.a=this.ao(new P.is(z,this,y),!0,new P.it(y),y.gb2())
return y}},
iu:{"^":"e:1;a",
$1:[function(a){++this.a.a},null,null,2,0,null,4,"call"]},
iv:{"^":"e:0;a,b",
$0:[function(){this.b.af(this.a.a)},null,null,0,0,null,"call"]},
iw:{"^":"e;a,b",
$1:[function(a){this.b.push(a)},null,null,2,0,null,9,"call"],
$S:function(){return H.bK(function(a){return{func:1,args:[a]}},this.a,"V")}},
ix:{"^":"e:0;a,b",
$0:[function(){this.b.af(this.a)},null,null,0,0,null,"call"]},
is:{"^":"e;a,b,c",
$1:[function(a){P.jQ(this.a.a,this.c,a)},null,null,2,0,null,8,"call"],
$S:function(){return H.bK(function(a){return{func:1,args:[a]}},this.b,"V")}},
it:{"^":"e:0;a",
$0:[function(){var z,y,x,w
try{x=H.c1()
throw H.a(x)}catch(w){z=H.M(w)
y=H.L(w)
P.jT(this.a,z,y)}},null,null,0,0,null,"call"]},
ir:{"^":"b;"},
iS:{"^":"b;ak:d<,a9:e<",
bG:function(a,b,c,d){var z=this.d
z.toString
this.a=a
this.b=P.e7(b,z)
this.c=c},
bo:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.cq()
if((z&4)===0&&(this.e&32)===0)this.bY(this.gc3())},
cI:function(a){return this.bo(a,null)},
cL:function(a){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gY(z)}else z=!1
if(z)this.r.aX(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.bY(this.gc5())}}}},
bg:function(a){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.b_()
z=this.f
return z==null?$.$get$b_():z},
gbk:function(){return this.e>=128},
b_:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.cq()
if((this.e&32)===0)this.r=null
this.f=this.c2()},
aI:["dk",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.cd(b)
else this.aZ(new P.iX(b,null))}],
at:["dl",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.cf(a,b)
else this.aZ(new P.iZ(a,b,null))}],
dF:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.ce()
else this.aZ(C.u)},
c4:[function(){},"$0","gc3",0,0,2],
c6:[function(){},"$0","gc5",0,0,2],
c2:function(){return},
aZ:function(a){var z,y
z=this.r
if(z==null){z=new P.jI(null,null,0)
this.r=z}z.a3(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.aX(this)}},
cd:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.br(this.a,a)
this.e=(this.e&4294967263)>>>0
this.b0((z&4)!==0)},
cf:function(a,b){var z,y
z=this.e
y=new P.iU(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.b_()
z=this.f
if(!!J.r(z).$isI&&z!==$.$get$b_())z.bw(y)
else y.$0()}else{y.$0()
this.b0((z&4)!==0)}},
ce:function(){var z,y
z=new P.iT(this)
this.b_()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.r(y).$isI&&y!==$.$get$b_())y.bw(z)
else z.$0()},
bY:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.b0((z&4)!==0)},
b0:function(a){var z,y
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
if(y)this.c4()
else this.c6()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.aX(this)}},
iU:{"^":"e:2;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.ah(y,{func:1,args:[P.b,P.a5]})
w=z.d
v=this.b
u=z.b
if(x)w.eU(u,v,this.c)
else w.br(u,v)
z.e=(z.e&4294967263)>>>0}},
iT:{"^":"e:2;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.cP(z.c)
z.e=(z.e&4294967263)>>>0}},
dX:{"^":"b;aT:a*"},
iX:{"^":"dX;D:b>,a",
bp:function(a){a.cd(this.b)}},
iZ:{"^":"dX;N:b>,a0:c<,a",
bp:function(a){a.cf(this.b,this.c)}},
iY:{"^":"b;",
bp:function(a){a.ce()},
gaT:function(a){return},
saT:function(a,b){throw H.a(new P.aM("No events after a done."))}},
jx:{"^":"b;a9:a<",
aX:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.er(new P.jy(this,a))
this.a=1},
cq:function(){if(this.a===1)this.a=3}},
jy:{"^":"e:0;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=x.gaT(x)
z.b=w
if(w==null)z.c=null
x.bp(this.b)}},
jI:{"^":"jx;b,c,a",
gY:function(a){return this.c==null},
a3:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{z.saT(0,b)
this.c=b}}},
jJ:{"^":"b;a,b,c,$ti"},
jR:{"^":"e:0;a,b",
$0:function(){return this.a.af(this.b)}},
at:{"^":"V;$ti",
ao:function(a,b,c,d){return this.bT(a,d,c,!0===b)},
cD:function(a,b,c){return this.ao(a,null,b,c)},
bT:function(a,b,c,d){return P.j6(this,a,b,c,d,H.A(this,"at",0),H.A(this,"at",1))},
b8:function(a,b){b.aI(0,a)},
bZ:function(a,b,c){c.at(a,b)},
$asV:function(a,b){return[b]}},
bE:{"^":"iS;x,y,a,b,c,d,e,f,r,$ti",
bH:function(a,b,c,d,e,f,g){this.y=this.x.a.cD(this.gdP(),this.gdQ(),this.gdR())},
aI:function(a,b){if((this.e&2)!==0)return
this.dk(0,b)},
at:function(a,b){if((this.e&2)!==0)return
this.dl(a,b)},
c4:[function(){var z=this.y
if(z==null)return
z.cI(0)},"$0","gc3",0,0,2],
c6:[function(){var z=this.y
if(z==null)return
z.cL(0)},"$0","gc5",0,0,2],
c2:function(){var z=this.y
if(z!=null){this.y=null
return z.bg(0)}return},
f0:[function(a){this.x.b8(a,this)},"$1","gdP",2,0,function(){return H.bK(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"bE")},9],
f2:[function(a,b){this.x.bZ(a,b,this)},"$2","gdR",4,0,15,1,2],
f1:[function(){this.dF()},"$0","gdQ",0,0,2],
v:{
j6:function(a,b,c,d,e,f,g){var z,y
z=$.p
y=e?1:0
y=new P.bE(a,null,null,null,null,z,y,null,null,[f,g])
y.bG(b,c,d,e)
y.bH(a,b,c,d,e,f,g)
return y}}},
ju:{"^":"at;b,a,$ti",
b8:function(a,b){var z,y,x,w
z=null
try{z=this.b.$1(a)}catch(w){y=H.M(w)
x=H.L(w)
P.e5(b,y,x)
return}b.aI(0,z)}},
jk:{"^":"at;b,c,a,$ti",
bZ:function(a,b,c){var z,y,x,w,v
z=!0
if(z===!0)try{P.jX(this.b,a,b)}catch(w){y=H.M(w)
x=H.L(w)
v=y
if(v==null?a==null:v===a)c.at(a,b)
else P.e5(c,y,x)
return}else c.at(a,b)},
$asV:null,
$asat:function(a){return[a,a]}},
jH:{"^":"bE;dy,x,y,a,b,c,d,e,f,r,$ti",
gb3:function(a){return this.dy},
sb3:function(a,b){this.dy=b},
$asbE:function(a){return[a,a]}},
jG:{"^":"at;b,a,$ti",
bT:function(a,b,c,d){var z,y,x
z=H.X(this,0)
y=$.p
x=d?1:0
x=new P.jH(this.b,this,null,null,null,null,y,x,null,null,this.$ti)
x.bG(a,b,c,d)
x.bH(this,a,b,c,d,z,z)
return x},
b8:function(a,b){var z=b.gb3(b)
if(z>0){b.sb3(0,z-1)
return}b.aI(0,a)},
$asV:null,
$asat:function(a){return[a,a]}},
mK:{"^":"b;"},
bj:{"^":"b;N:a>,a0:b<",
j:function(a){return H.d(this.a)},
$isE:1},
jM:{"^":"b;"},
k_:{"^":"e:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bu()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ak(y)
throw x}},
jC:{"^":"jM;",
cP:function(a){var z,y,x
try{if(C.c===$.p){a.$0()
return}P.e8(null,null,this,a)}catch(x){z=H.M(x)
y=H.L(x)
P.bf(null,null,this,z,y)}},
br:function(a,b){var z,y,x
try{if(C.c===$.p){a.$1(b)
return}P.ea(null,null,this,a,b)}catch(x){z=H.M(x)
y=H.L(x)
P.bf(null,null,this,z,y)}},
eU:function(a,b,c){var z,y,x
try{if(C.c===$.p){a.$2(b,c)
return}P.e9(null,null,this,a,b,c)}catch(x){z=H.M(x)
y=H.L(x)
P.bf(null,null,this,z,y)}},
e9:function(a){return new P.jE(this,a)},
bf:function(a){return new P.jD(this,a)},
ea:function(a){return new P.jF(this,a)},
h:function(a,b){return},
cO:function(a){if($.p===C.c)return a.$0()
return P.e8(null,null,this,a)},
bq:function(a,b){if($.p===C.c)return a.$1(b)
return P.ea(null,null,this,a,b)},
eT:function(a,b,c){if($.p===C.c)return a.$2(b,c)
return P.e9(null,null,this,a,b,c)}},
jE:{"^":"e:0;a,b",
$0:function(){return this.a.cO(this.b)}},
jD:{"^":"e:0;a,b",
$0:function(){return this.a.cP(this.b)}},
jF:{"^":"e:1;a,b",
$1:[function(a){return this.a.br(this.b,a)},null,null,2,0,null,21,"call"]}}],["","",,P,{"^":"",
aq:function(){return new H.ac(0,null,null,null,null,null,0,[null,null])},
aI:function(a){return H.kf(a,new H.ac(0,null,null,null,null,null,0,[null,null]))},
hw:function(a,b,c){var z,y
if(P.cu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aS()
y.push(a)
try{P.jY(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.dE(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bp:function(a,b,c){var z,y,x
if(P.cu(a))return b+"..."+c
z=new P.bA(b)
y=$.$get$aS()
y.push(a)
try{x=z
x.sP(P.dE(x.gP(),a,", "))}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.sP(y.gP()+c)
y=z.gP()
return y.charCodeAt(0)==0?y:y},
cu:function(a){var z,y
for(z=0;y=$.$get$aS(),z<y.length;++z)if(a===y[z])return!0
return!1},
jY:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.d(z.gA())
b.push(w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gA();++x
if(!z.w()){if(x<=4){b.push(H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA();++x
for(;z.w();t=s,s=r){r=z.gA();++x
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
aJ:function(a,b,c,d){return new P.jn(0,null,null,null,null,null,0,[d])},
bs:function(a){var z,y,x
z={}
if(P.cu(a))return"{...}"
y=new P.bA("")
try{$.$get$aS().push(a)
x=y
x.sP(x.gP()+"{")
z.a=!0
J.eH(a,new P.hK(z,y))
z=y
z.sP(z.gP()+"}")}finally{z=$.$get$aS()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
e2:{"^":"ac;a,b,c,d,e,f,r,$ti",
az:function(a){return H.ky(a)&0x3ffffff},
aA:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gcB()
if(x==null?b==null:x===b)return y}return-1},
v:{
aP:function(a,b){return new P.e2(0,null,null,null,null,null,0,[a,b])}}},
jn:{"^":"jl;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.cr(this,this.r,null,null)
z.c=this.e
return z},
gi:function(a){return this.a},
ed:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dM(b)},
dM:function(a){var z=this.d
if(z==null)return!1
return this.aK(z[this.aJ(a)],a)>=0},
cE:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.ed(0,a)?a:null
else return this.dU(a)},
dU:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.aJ(a)]
x=this.aK(y,a)
if(x<0)return
return J.cG(y,x).gb5()},
a3:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.bI(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.bI(x,b)}else return this.a1(0,b)},
a1:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.jp()
this.d=z}y=this.aJ(b)
x=z[y]
if(x==null)z[y]=[this.b1(b)]
else{if(this.aK(x,b)>=0)return!1
x.push(this.b1(b))}return!0},
aB:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bQ(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aJ(b)]
x=this.aK(y,b)
if(x<0)return!1
this.bR(y.splice(x,1)[0])
return!0},
al:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bI:function(a,b){if(a[b]!=null)return!1
a[b]=this.b1(b)
return!0},
bQ:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bR(z)
delete a[b]
return!0},
b1:function(a){var z,y
z=new P.jo(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bR:function(a){var z,y
z=a.gbP()
y=a.gbO()
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.sbP(z);--this.a
this.r=this.r+1&67108863},
aJ:function(a){return J.S(a)&0x3ffffff},
aK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Y(a[y].gb5(),b))return y
return-1},
v:{
jp:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jo:{"^":"b;b5:a<,bO:b<,bP:c@"},
cr:{"^":"b;a,b,c,d",
gA:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(new P.a2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.gb5()
this.c=this.c.gbO()
return!0}}}},
jl:{"^":"id;"},
lK:{"^":"b;$ti",$ish:1},
j:{"^":"b;$ti",
gH:function(a){return new H.di(a,this.gi(a),0,null)},
u:function(a,b){return this.h(a,b)},
S:function(a,b){return new H.c9(a,b,[H.A(a,"j",0),null])},
bj:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(new P.a2(a))}return y},
V:function(a,b){return H.bB(a,b,null,H.A(a,"j",0))},
J:function(a,b){var z,y,x
z=H.n([],[H.A(a,"j",0)])
C.a.si(z,this.gi(a))
for(y=0;y<this.gi(a);++y){x=this.h(a,y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
a6:function(a){return this.J(a,!0)},
K:function(a,b){var z,y,x
z=H.n([],[H.A(a,"j",0)])
y=this.gi(a)
x=J.O(b)
if(typeof x!=="number")return H.m(x)
C.a.si(z,y+x)
C.a.aG(z,0,this.gi(a),a)
C.a.aG(z,this.gi(a),z.length,b)
return z},
j:function(a){return P.bp(a,"[","]")}},
hJ:{"^":"c8;"},
hK:{"^":"e:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
c8:{"^":"b;$ti",
R:function(a,b){var z,y
for(z=J.aj(this.gan(a));z.w();){y=z.gA()
b.$2(y,this.h(a,y))}},
S:function(a,b){var z,y,x,w,v
z=P.aq()
for(y=J.aj(this.gan(a));y.w();){x=y.gA()
w=b.$2(x,this.h(a,x))
v=J.t(w)
z.k(0,v.gab(w),v.gD(w))}return z},
gi:function(a){return J.O(this.gan(a))},
j:function(a){return P.bs(a)}},
jL:{"^":"b;",
k:function(a,b,c){throw H.a(new P.q("Cannot modify unmodifiable map"))}},
hL:{"^":"b;",
h:function(a,b){return this.a.h(0,b)},
k:function(a,b,c){this.a.k(0,b,c)},
R:function(a,b){this.a.R(0,b)},
gi:function(a){var z=this.a
return z.gi(z)},
j:function(a){return P.bs(this.a)},
S:function(a,b){var z=this.a
return z.S(z,b)}},
iI:{"^":"hM;"},
hI:{"^":"ar;a,b,c,d,$ti",
dr:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.n(z,[b])},
gH:function(a){return new P.jq(this,this.c,this.d,this.b,null)},
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
J:function(a,b){var z=H.n([],this.$ti)
C.a.si(z,this.gi(this))
this.e6(z)
return z},
a6:function(a){return this.J(a,!0)},
al:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.c(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
j:function(a){return P.bp(this,"{","}")},
cK:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.a(H.c1());++this.d
y=this.a
x=y.length
if(z>=x)return H.c(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
a1:function(a,b){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.c(z,y)
z[y]=b
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.bX();++this.d},
bX:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.n(z,this.$ti)
z=this.a
x=this.b
w=z.length-x
C.a.ad(y,0,w,z,x)
C.a.ad(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
e6:function(a){var z,y,x,w,v
z=this.b
y=this.c
x=this.a
if(z<=y){w=y-z
C.a.ad(a,0,w,x,z)
return w}else{v=x.length-z
C.a.ad(a,0,v,x,z)
C.a.ad(a,v,v+this.c,this.a,0)
return this.c+v}},
v:{
c6:function(a,b){var z=new P.hI(null,0,0,0,[b])
z.dr(a,b)
return z}}},
jq:{"^":"b;a,b,c,d,e",
gA:function(){return this.e},
w:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.v(new P.a2(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.c(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
ie:{"^":"b;$ti",
J:function(a,b){var z,y,x,w,v
z=H.n([],this.$ti)
C.a.si(z,this.a)
for(y=new P.cr(this,this.r,null,null),y.c=this.e,x=0;y.w();x=v){w=y.d
v=x+1
if(x>=z.length)return H.c(z,x)
z[x]=w}return z},
a6:function(a){return this.J(a,!0)},
S:function(a,b){return new H.d2(this,b,[H.X(this,0),null])},
j:function(a){return P.bp(this,"{","}")},
V:function(a,b){return H.dC(this,b,H.X(this,0))},
$ish:1},
id:{"^":"ie;"},
hM:{"^":"hL+jL;"}}],["","",,P,{"^":"",
aD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ak(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fy(a)},
fy:function(a){var z=J.r(a)
if(!!z.$ise)return z.j(a)
return H.bw(a)},
ao:function(a){return new P.j5(a)},
b2:function(a,b,c){var z,y
z=H.n([],[c])
for(y=J.aj(a);y.w();)z.push(y.gA())
if(b)return z
z.fixed$length=Array
return z},
c7:function(a,b,c,d){var z,y,x
z=H.n(new Array(a),[d])
for(y=0;y<a;++y){x=b.$1(y)
if(y>=z.length)return H.c(z,y)
z[y]=x}return z},
cC:function(a){H.kz(H.d(a))},
hV:{"^":"e:16;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.aW(0,y.a)
z.aW(0,a.gdV())
z.aW(0,": ")
z.aW(0,P.aD(b))
y.a=", "}},
k8:{"^":"b;"},
"+bool":0,
cX:{"^":"b;a,b",
dq:function(a,b){var z=this.a
if(!(C.b.aH(z)>864e13)){C.b.aH(z)
z=!1}else z=!0
if(z)throw H.a(P.aV("DateTime is outside valid range: "+this.geI()))},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.cX))return!1
return this.a===b.a&&!0},
gC:function(a){var z=this.a
return(z^C.b.cg(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t,s
z=P.ff(H.i7(this))
y=P.aY(H.i5(this))
x=P.aY(H.i1(this))
w=P.aY(H.i2(this))
v=P.aY(H.i4(this))
u=P.aY(H.i6(this))
t=P.fg(H.i3(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
return s},
geI:function(){return this.a},
v:{
ff:function(a){var z,y
z=C.b.aH(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.d(z)
if(z>=10)return y+"00"+H.d(z)
return y+"000"+H.d(z)},
fg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aY:function(a){if(a>=10)return""+a
return"0"+a}}},
W:{"^":"bh;"},
"+double":0,
an:{"^":"b;b4:a<",
K:function(a,b){return new P.an(this.a+b.gb4())},
I:function(a,b){return new P.an(this.a-b.gb4())},
L:function(a,b){return new P.an(C.d.eS(this.a*b))},
ae:function(a,b){if(b===0)throw H.a(new P.fI())
return new P.an(C.b.ae(this.a,b))},
aq:function(a,b){return C.b.aq(this.a,b.gb4())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fx()
y=this.a
if(y<0)return"-"+new P.an(0-y).j(0)
x=z.$1(C.b.G(y,6e7)%60)
w=z.$1(C.b.G(y,1e6)%60)
v=new P.fw().$1(y%1e6)
return""+C.b.G(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)}},
fw:{"^":"e:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fx:{"^":"e:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
E:{"^":"b;",
ga0:function(){return H.L(this.$thrownJsError)}},
eU:{"^":"E;a",
j:function(a){return"Assertion failed"}},
bu:{"^":"E;",
j:function(a){return"Throw of null."}},
al:{"^":"E;a,b,c,d",
gb7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb6:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gb7()+y+x
if(!this.a)return w
v=this.gb6()
u=P.aD(this.b)
return w+v+": "+H.d(u)},
v:{
aV:function(a){return new P.al(!1,null,null,a)},
bW:function(a,b,c){return new P.al(!0,a,b,c)}}},
ce:{"^":"al;e,f,a,b,c,d",
gb7:function(){return"RangeError"},
gb6:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
v:{
i9:function(a){return new P.ce(null,null,!1,null,null,a)},
bx:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
dy:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.a4(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.a4(b,a,c,"end",f))
return b}}},
fH:{"^":"al;e,i:f>,a,b,c,d",
gb7:function(){return"RangeError"},
gb6:function(){if(J.ew(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
v:{
u:function(a,b,c,d,e){var z=e!=null?e:J.O(b)
return new P.fH(b,z,!0,a,c,"Index out of range")}}},
hU:{"^":"E;a,b,c,d,e",
j:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
y=new P.bA("")
z.a=""
for(x=this.c,w=x.length,v=0,u="",t="";v<w;++v,t=", "){s=x[v]
y.a=u+t
u=y.a+=H.d(P.aD(s))
z.a=", "}this.d.R(0,new P.hV(z,y))
r=P.aD(this.a)
q=y.j(0)
x="NoSuchMethodError: method not found: '"+H.d(this.b.a)+"'\nReceiver: "+H.d(r)+"\nArguments: ["+q+"]"
return x},
v:{
ds:function(a,b,c,d,e){return new P.hU(a,b,c,d,e)}}},
q:{"^":"E;a",
j:function(a){return"Unsupported operation: "+this.a}},
cn:{"^":"E;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.d(z):"UnimplementedError"}},
aM:{"^":"E;a",
j:function(a){return"Bad state: "+this.a}},
a2:{"^":"E;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.aD(z))+"."}},
hW:{"^":"b;",
j:function(a){return"Out of Memory"},
ga0:function(){return},
$isE:1},
dD:{"^":"b;",
j:function(a){return"Stack Overflow"},
ga0:function(){return},
$isE:1},
fe:{"^":"E;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.d(z)+"' during its initialization"}},
l8:{"^":"b;"},
j5:{"^":"b;a",
j:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.d(z)}},
fI:{"^":"b;",
j:function(a){return"IntegerDivisionByZeroException"}},
fz:{"^":"b;a,b",
j:function(a){return"Expando:"+H.d(this.a)},
h:function(a,b){var z,y
z=this.b
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.v(P.bW(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.cc(b,"expando$values")
return y==null?null:H.cc(y,z)},
k:function(a,b,c){var z,y
z=this.b
if(typeof z!=="string")z.set(b,c)
else{y=H.cc(b,"expando$values")
if(y==null){y=new P.b()
H.dx(b,"expando$values",y)}H.dx(y,z,c)}}},
w:{"^":"bh;"},
"+int":0,
T:{"^":"b;$ti",
S:function(a,b){return H.bt(this,b,H.A(this,"T",0),null)},
J:function(a,b){return P.b2(this,b,H.A(this,"T",0))},
a6:function(a){return this.J(a,!0)},
gi:function(a){var z,y
z=this.gH(this)
for(y=0;z.w();)++y
return y},
V:function(a,b){return H.dC(this,b,H.A(this,"T",0))},
u:function(a,b){var z,y,x
if(b<0)H.v(P.a4(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.w();){x=z.gA()
if(b===y)return x;++y}throw H.a(P.u(b,this,"index",null,y))},
j:function(a){return P.hw(this,"(",")")}},
c2:{"^":"b;"},
i:{"^":"b;$ti",$ish:1},
"+List":0,
br:{"^":"b;$ti"},
P:{"^":"b;",
gC:function(a){return P.b.prototype.gC.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
bh:{"^":"b;"},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gC:function(a){return H.ae(this)},
j:function(a){return H.bw(this)},
bn:[function(a,b){throw H.a(P.ds(this,b.gcF(),b.gcJ(),b.gcG(),null))},null,"gcH",2,0,null,3],
toString:function(){return this.j(this)}},
a5:{"^":"b;"},
x:{"^":"b;"},
"+String":0,
bA:{"^":"b;P:a@",
gi:function(a){return this.a.length},
aW:function(a,b){this.a+=H.d(b)},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
v:{
dE:function(a,b,c){var z=J.aj(b)
if(!z.w())return a
if(c.length===0){do a+=H.d(z.gA())
while(z.w())}else{a+=H.d(z.gA())
for(;z.w();)a=a+c+H.d(z.gA())}return a}}},
aN:{"^":"b;"}}],["","",,W,{"^":"",
dc:function(a,b,c,d,e,f,g,h){var z,y,x,w
z=W.c0
y=new P.H(0,$.p,null,[z])
x=new P.co(y,[z])
w=new XMLHttpRequest()
C.v.eM(w,"GET",a,!0)
W.a6(w,"load",new W.fG(x,w),!1)
W.a6(w,"error",x.gec(),!1)
w.send()
return y},
af:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jV:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iW(a)
if(!!J.r(z).$isB)return z
return}else return a},
cv:function(a){var z=$.p
if(z===C.c)return a
if(a==null)return
return z.ea(a)},
C:{"^":"d4;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLKeygenElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMetaElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kH:{"^":"C;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kJ:{"^":"C;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
kM:{"^":"da;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aW]},
$ish:1,
$ash:function(){return[W.aW]},
$iso:1,
$aso:function(){return[W.aW]},
$asj:function(){return[W.aW]},
$isi:1,
$asi:function(){return[W.aW]},
$ask:function(){return[W.aW]},
"%":"AudioTrackList"},
kO:{"^":"C;D:value=","%":"HTMLButtonElement"},
bl:{"^":"C;p:height=,l:width=",
cY:function(a,b,c){return a.getContext(b)},
by:function(a,b){return this.cY(a,b,null)},
$isbl:1,
"%":"HTMLCanvasElement"},
kP:{"^":"z;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kT:{"^":"fJ;i:length=",
bM:function(a,b){var z,y
z=$.$get$cW()
y=z[b]
if(typeof y==="string")return y
y=this.e5(a,b)
z[b]=y
return y},
e5:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fs()+b
if(z in a)return z
return b},
gp:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fc:{"^":"b;",
gp:function(a){var z=a.getPropertyValue(this.bM(a,"height"))
return z==null?"":z},
gl:function(a){var z=a.getPropertyValue(this.bM(a,"width"))
return z==null?"":z}},
kV:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kZ:{"^":"f;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
M:function(a){return a.z.$0()},
"%":"DeviceAcceleration"},
l_:{"^":"aE;D:value=","%":"DeviceLightEvent"},
l1:{"^":"f;",
j:function(a){return String(a)},
"%":"DOMException"},
l2:{"^":"fu;",
gac:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gU:function(a){return a.z},
aU:function(a){return this.gac(a).$0()},
q:function(a){return this.gm(a).$0()},
t:function(a){return this.gn(a).$0()},
M:function(a){return this.gU(a).$0()},
"%":"DOMPoint"},
fu:{"^":"f;",
gac:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gU:function(a){return a.z},
aU:function(a){return this.gac(a).$0()},
q:function(a){return this.gm(a).$0()},
t:function(a){return this.gn(a).$0()},
M:function(a){return this.gU(a).$0()},
"%":";DOMPointReadOnly"},
fv:{"^":"f;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gl(a))+" x "+H.d(this.gp(a))},
B:function(a,b){var z
if(b==null)return!1
z=J.r(b)
if(!z.$isU)return!1
return a.left===z.gbm(b)&&a.top===z.gbu(b)&&this.gl(a)===z.gl(b)&&this.gp(a)===z.gp(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gl(a)
w=this.gp(a)
return W.e1(W.af(W.af(W.af(W.af(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gp:function(a){return a.height},
gbm:function(a){return a.left},
gbu:function(a){return a.top},
gl:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
q:function(a){return this.gm(a).$0()},
t:function(a){return this.gn(a).$0()},
$isU:1,
$asU:I.ag,
"%":";DOMRectReadOnly"},
l3:{"^":"hm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]},
$iso:1,
$aso:function(){return[P.x]},
$asj:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
$ask:function(){return[P.x]},
"%":"DOMStringList"},
l4:{"^":"f;i:length=,D:value=","%":"DOMTokenList"},
d4:{"^":"z;",
j:function(a){return a.localName},
"%":";Element"},
l6:{"^":"C;p:height=,l:width=","%":"HTMLEmbedElement"},
l7:{"^":"aE;N:error=","%":"ErrorEvent"},
aE:{"^":"f;",
geh:function(a){return W.jV(a.currentTarget)},
"%":"AnimationEvent|AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|GamepadEvent|GeofencingEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|ServicePortConnectEvent|ServiceWorkerMessageEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"f;",
dC:function(a,b,c,d){return a.addEventListener(b,H.ab(c,1),!1)},
dZ:function(a,b,c,d){return a.removeEventListener(b,H.ab(c,1),!1)},
$isB:1,
"%":"AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioContext|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioSourceNode|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|CompositorWorker|CompositorWorkerGlobalScope|ConvolverNode|CrossOriginServiceWorkerClient|DOMApplicationCache|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|NetworkInformation|Notification|OfflineAudioContext|OfflineResourceList|Oscillator|OscillatorNode|PannerNode|Performance|PermissionStatus|PresentationReceiver|PresentationRequest|RTCDTMFSender|RTCPeerConnection|RealtimeAnalyserNode|ScreenOrientation|ScriptProcessorNode|ServicePortCollection|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VTTCue|WaveShaperNode|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioContext|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;d5|da|d6|d9|d7|d8"},
lr:{"^":"hk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$iso:1,
$aso:function(){return[W.aZ]},
$asj:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$ask:function(){return[W.aZ]},
"%":"FileList"},
ls:{"^":"B;N:error=",
gE:function(a){var z,y
z=a.result
if(!!J.r(z).$iseX){y=new Uint8Array(z,0)
return y}return z},
"%":"FileReader"},
lt:{"^":"B;N:error=,i:length=","%":"FileWriter"},
lw:{"^":"C;i:length=","%":"HTMLFormElement"},
ly:{"^":"f;D:value=","%":"GamepadButton"},
lA:{"^":"f;i:length=","%":"History"},
lB:{"^":"hi;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asj:function(){return[W.z]},
$isi:1,
$asi:function(){return[W.z]},
$ask:function(){return[W.z]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c0:{"^":"fF;eQ:responseText=",
f3:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
eM:function(a,b,c,d){return a.open(b,c,d)},
a7:function(a,b){return a.send(b)},
$isc0:1,
"%":"XMLHttpRequest"},
fG:{"^":"e:1;a,b",
$1:function(a){var z,y,x,w,v
z=this.b
y=z.status
if(typeof y!=="number")return y.eY()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.a
if(y)v.am(0,z)
else v.cs(a)}},
fF:{"^":"B;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lC:{"^":"C;p:height=,l:width=","%":"HTMLIFrameElement"},
dd:{"^":"f;p:height=,l:width=",$isdd:1,"%":"ImageBitmap"},
de:{"^":"f;p:height=,l:width=",$isde:1,"%":"ImageData"},
bo:{"^":"C;p:height=,l:width=",
am:function(a,b){return a.complete.$1(b)},
$isbo:1,
"%":"HTMLImageElement"},
lE:{"^":"C;p:height=,D:value=,l:width=","%":"HTMLInputElement"},
lH:{"^":"dR;ab:key=","%":"KeyboardEvent"},
lI:{"^":"C;D:value=","%":"HTMLLIElement"},
hE:{"^":"ci;","%":"CalcLength;LengthValue"},
lL:{"^":"f;",
j:function(a){return String(a)},
"%":"Location"},
hO:{"^":"C;N:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lN:{"^":"f;i:length=","%":"MediaList"},
lO:{"^":"C;D:value=","%":"HTMLMeterElement"},
lP:{"^":"hP;",
eZ:function(a,b,c){return a.send(b,c)},
a7:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
hP:{"^":"B;","%":"MIDIInput;MIDIPort"},
lQ:{"^":"hg;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$iso:1,
$aso:function(){return[W.b4]},
$asj:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$ask:function(){return[W.b4]},
"%":"MimeTypeArray"},
hS:{"^":"dR;",
gaS:function(a){return new P.b5(a.movementX,a.movementY)},
"%":"WheelEvent;DragEvent|MouseEvent"},
z:{"^":"B;",
j:function(a){var z=a.nodeValue
return z==null?this.di(a):z},
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lY:{"^":"h5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asj:function(){return[W.z]},
$isi:1,
$asi:function(){return[W.z]},
$ask:function(){return[W.z]},
"%":"NodeList|RadioNodeList"},
m_:{"^":"ci;D:value=","%":"NumberValue"},
m0:{"^":"C;p:height=,l:width=","%":"HTMLObjectElement"},
m1:{"^":"f;p:height=,l:width=","%":"OffscreenCanvas"},
m2:{"^":"C;D:value=","%":"HTMLOptionElement"},
m3:{"^":"C;D:value=","%":"HTMLOutputElement"},
m4:{"^":"C;D:value=","%":"HTMLParamElement"},
m6:{"^":"cm;i:length=","%":"Perspective"},
aK:{"^":"f;i:length=","%":"Plugin"},
m7:{"^":"h3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aK]},
$ish:1,
$ash:function(){return[W.aK]},
$iso:1,
$aso:function(){return[W.aK]},
$asj:function(){return[W.aK]},
$isi:1,
$asi:function(){return[W.aK]},
$ask:function(){return[W.aK]},
"%":"PluginArray"},
ma:{"^":"hS;p:height=,l:width=","%":"PointerEvent"},
mb:{"^":"ci;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"PositionValue"},
mc:{"^":"B;D:value=","%":"PresentationAvailability"},
md:{"^":"B;",
a7:function(a,b){return a.send(b)},
"%":"PresentationConnection"},
me:{"^":"C;D:value=","%":"HTMLProgressElement"},
mm:{"^":"cm;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
M:function(a){return a.z.$0()},
"%":"Rotation"},
mn:{"^":"B;",
a7:function(a,b){return a.send(b)},
"%":"DataChannel|RTCDataChannel"},
cg:{"^":"f;",$iscg:1,"%":"RTCStatsReport"},
mo:{"^":"f;",
f4:[function(a){return a.result()},"$0","gE",0,0,17],
"%":"RTCStatsResponse"},
mp:{"^":"f;p:height=,l:width=","%":"Screen"},
mq:{"^":"C;i:length=,D:value=","%":"HTMLSelectElement"},
ms:{"^":"hE;D:value=","%":"SimpleLength"},
mt:{"^":"d9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$iso:1,
$aso:function(){return[W.b6]},
$asj:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$ask:function(){return[W.b6]},
"%":"SourceBufferList"},
mu:{"^":"h4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$iso:1,
$aso:function(){return[W.b7]},
$asj:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$ask:function(){return[W.b7]},
"%":"SpeechGrammarList"},
mv:{"^":"aE;N:error=","%":"SpeechRecognitionError"},
aL:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
mz:{"^":"hn;",
h:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
R:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gan:function(a){var z=H.n([],[P.x])
this.R(a,new W.iq(z))
return z},
gi:function(a){return a.length},
$asc8:function(){return[P.x,P.x]},
"%":"Storage"},
iq:{"^":"e:3;a",
$2:function(a,b){return this.a.push(a)}},
mA:{"^":"aE;ab:key=","%":"StorageEvent"},
ci:{"^":"f;","%":"KeywordValue|TransformValue;StyleValue"},
mE:{"^":"C;D:value=","%":"HTMLTextAreaElement"},
mF:{"^":"f;l:width=","%":"TextMetrics"},
mH:{"^":"hf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$iso:1,
$aso:function(){return[W.ba]},
$asj:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$ask:function(){return[W.ba]},
"%":"TextTrackCueList"},
mI:{"^":"d8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$iso:1,
$aso:function(){return[W.b9]},
$asj:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$ask:function(){return[W.b9]},
"%":"TextTrackList"},
mJ:{"^":"f;i:length=","%":"TimeRanges"},
mL:{"^":"h6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$iso:1,
$aso:function(){return[W.bb]},
$asj:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$ask:function(){return[W.bb]},
"%":"TouchList"},
mM:{"^":"f;i:length=","%":"TrackDefaultList"},
cm:{"^":"f;","%":"Matrix|Skew;TransformComponent"},
mQ:{"^":"cm;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
M:function(a){return a.z.$0()},
"%":"Translation"},
dR:{"^":"aE;","%":"CompositionEvent|FocusEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
mR:{"^":"f;",
j:function(a){return String(a)},
"%":"URL"},
dS:{"^":"hO;p:height=,l:width=",$isdS:1,"%":"HTMLVideoElement"},
mU:{"^":"B;i:length=","%":"VideoTrackList"},
mV:{"^":"f;p:height=,l:width=","%":"VTTRegion"},
mW:{"^":"f;i:length=","%":"VTTRegionList"},
mX:{"^":"B;",
a7:function(a,b){return a.send(b)},
"%":"WebSocket"},
iK:{"^":"B;",
ca:function(a,b){return a.requestAnimationFrame(H.ab(b,1))},
bV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mY:{"^":"B;"},
n1:{"^":"z;D:value=","%":"Attr"},
n2:{"^":"f;p:height=,bm:left=,bu:top=,l:width=",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
B:function(a,b){var z,y,x
if(b==null)return!1
z=J.r(b)
if(!z.$isU)return!1
y=a.left
x=z.gbm(b)
if(y==null?x==null:y===x){y=a.top
x=z.gbu(b)
if(y==null?x==null:y===x){y=a.width
x=z.gl(b)
if(y==null?x==null:y===x){y=a.height
z=z.gp(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gC:function(a){var z,y,x,w
z=J.S(a.left)
y=J.S(a.top)
x=J.S(a.width)
w=J.S(a.height)
return W.e1(W.af(W.af(W.af(W.af(0,z),y),x),w))},
$isU:1,
$asU:I.ag,
"%":"ClientRect"},
n3:{"^":"h7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.U]},
$ish:1,
$ash:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]},
$asj:function(){return[P.U]},
$isi:1,
$asi:function(){return[P.U]},
$ask:function(){return[P.U]},
"%":"ClientRectList|DOMRectList"},
n4:{"^":"h8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aX]},
$ish:1,
$ash:function(){return[W.aX]},
$iso:1,
$aso:function(){return[W.aX]},
$asj:function(){return[W.aX]},
$isi:1,
$asi:function(){return[W.aX]},
$ask:function(){return[W.aX]},
"%":"CSSRuleList"},
n5:{"^":"fv;",
gp:function(a){return a.height},
gl:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
q:function(a){return this.gm(a).$0()},
t:function(a){return this.gn(a).$0()},
"%":"DOMRect"},
n6:{"^":"h9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$iso:1,
$aso:function(){return[W.b0]},
$asj:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$ask:function(){return[W.b0]},
"%":"GamepadList"},
n7:{"^":"he;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asj:function(){return[W.z]},
$isi:1,
$asi:function(){return[W.z]},
$ask:function(){return[W.z]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n8:{"^":"hb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aL]},
$ish:1,
$ash:function(){return[W.aL]},
$iso:1,
$aso:function(){return[W.aL]},
$asj:function(){return[W.aL]},
$isi:1,
$asi:function(){return[W.aL]},
$ask:function(){return[W.aL]},
"%":"SpeechRecognitionResultList"},
n9:{"^":"hd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$iso:1,
$aso:function(){return[W.b8]},
$asj:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$ask:function(){return[W.b8]},
"%":"StyleSheetList"},
j2:{"^":"V;$ti",
ao:function(a,b,c,d){return W.a6(this.a,this.b,a,!1)},
cD:function(a,b,c){return this.ao(a,null,b,c)}},
j_:{"^":"j2;a,b,c,$ti"},
j3:{"^":"ir;a,b,c,d,e",
dz:function(a,b,c,d){this.cj()},
bg:function(a){if(this.b==null)return
this.cl()
this.b=null
this.d=null
return},
bo:function(a,b){if(this.b==null)return;++this.a
this.cl()},
cI:function(a){return this.bo(a,null)},
gbk:function(){return this.a>0},
cL:function(a){if(this.b==null||this.a<=0)return;--this.a
this.cj()},
cj:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
if(y)J.eC(x,this.c,z,!1)}},
cl:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eD(x,this.c,z,!1)}},
v:{
a6:function(a,b,c,d){var z=W.cv(new W.j4(c))
z=new W.j3(0,a,b,z,!1)
z.dz(a,b,c,!1)
return z}}},
j4:{"^":"e:1;a",
$1:[function(a){return this.a.$1(a)},null,null,2,0,null,5,"call"]},
k:{"^":"b;$ti",
gH:function(a){return new W.fA(a,this.gi(a),-1,null)}},
fA:{"^":"b;a,b,c,d",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.cG(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(){return this.d}},
iV:{"^":"b;a",$isf:1,$isB:1,v:{
iW:function(a){if(a===window)return a
else return new W.iV(a)}}},
d5:{"^":"B+j;"},
d6:{"^":"B+j;"},
d7:{"^":"B+j;"},
d8:{"^":"d7+k;"},
d9:{"^":"d6+k;"},
da:{"^":"d5+k;"},
fJ:{"^":"f+fc;"},
fN:{"^":"f+j;"},
fP:{"^":"f+j;"},
fM:{"^":"f+j;"},
fX:{"^":"f+j;"},
fZ:{"^":"f+j;"},
h_:{"^":"f+j;"},
h0:{"^":"f+j;"},
h1:{"^":"f+j;"},
h2:{"^":"f+j;"},
fK:{"^":"f+j;"},
fO:{"^":"f+j;"},
fQ:{"^":"f+j;"},
fS:{"^":"f+j;"},
fT:{"^":"f+j;"},
fV:{"^":"f+j;"},
h3:{"^":"fS+k;"},
h4:{"^":"fT+k;"},
h5:{"^":"fP+k;"},
hf:{"^":"fQ+k;"},
hg:{"^":"fO+k;"},
hd:{"^":"fK+k;"},
hi:{"^":"fV+k;"},
he:{"^":"fX+k;"},
hk:{"^":"fN+k;"},
hm:{"^":"h1+k;"},
h6:{"^":"h2+k;"},
h7:{"^":"h0+k;"},
h8:{"^":"h_+k;"},
h9:{"^":"fZ+k;"},
hb:{"^":"fM+k;"},
hn:{"^":"f+c8;"}}],["","",,P,{"^":"",
k9:function(a){return a},
kd:function(a){var z,y,x,w,v
if(a==null)return
z=P.aq()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.cE)(y),++w){v=y[w]
z.k(0,v,a[v])}return z},
ka:function(a){var z,y
z=new P.H(0,$.p,null,[null])
y=new P.co(z,[null])
a.then(H.ab(new P.kb(y),1))["catch"](H.ab(new P.kc(y),1))
return z},
d1:function(){var z=$.d0
if(z==null){z=J.bT(window.navigator.userAgent,"Opera",0)
$.d0=z}return z},
fs:function(){var z,y
z=$.cY
if(z!=null)return z
y=$.cZ
if(y==null){y=J.bT(window.navigator.userAgent,"Firefox",0)
$.cZ=y}if(y)z="-moz-"
else{y=$.d_
if(y==null){y=P.d1()!==!0&&J.bT(window.navigator.userAgent,"Trident/",0)
$.d_=y}if(y)z="-ms-"
else z=P.d1()===!0?"-o-":"-webkit-"}$.cY=z
return z},
iL:{"^":"b;",
cv:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aV:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.cX(y,!0)
x.dq(y,!0)
return x}if(a instanceof RegExp)throw H.a(new P.cn("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.ka(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.cv(a)
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
this.ep(a,new P.iM(z,this))
return z.a}if(a instanceof Array){s=a
v=this.cv(s)
x=this.b
if(v>=x.length)return H.c(x,v)
t=x[v]
if(t!=null)return t
u=J.K(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.c(x,v)
x[v]=t
for(x=J.az(t),q=0;q<r;++q)x.k(t,q,this.aV(u.h(s,q)))
return t}return a}},
iM:{"^":"e:3;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aV(b)
J.cH(z,a,y)
return y}},
dT:{"^":"iL;a,b,c",
ep:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.cE)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kb:{"^":"e:1;a",
$1:[function(a){return this.a.am(0,a)},null,null,2,0,null,0,"call"]},
kc:{"^":"e:1;a",
$1:[function(a){return this.a.cs(a)},null,null,2,0,null,0,"call"]}}],["","",,P,{"^":"",fd:{"^":"f;ab:key=","%":";IDBCursor"},kU:{"^":"fd;",
gD:function(a){return new P.dT([],[],!1).aV(a.value)},
"%":"IDBCursorWithValue"},mj:{"^":"B;N:error=",
gE:function(a){return new P.dT([],[],!1).aV(a.result)},
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mN:{"^":"B;N:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
jU:function(a){var z,y
z=a.$dart_jsFunction
if(z!=null)return z
y=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.jP,a)
y[$.$get$bZ()]=a
a.$dart_jsFunction=y
return y},
jP:[function(a,b){var z=H.i_(a,b)
return z},null,null,4,0,null,24,25],
k3:function(a){if(typeof a=="function")return a
else return P.jU(a)}}],["","",,P,{"^":"",
e0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
es:function(a){return Math.sqrt(a)},
jz:{"^":"b;a,b",
dA:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.b.G(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.b.G(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.b.G(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.b.G(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.b.G(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.b.G(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.b.G(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.ah()
this.ah()
this.ah()
this.ah()},
ah:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.b.G(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
eK:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.a(P.i9("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)===0){this.ah()
return(this.a&z)>>>0}do{this.ah()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
v:{
jA:function(a){var z=new P.jz(0,0)
z.dA(a)
return z}}},
b5:{"^":"b;m:a>,n:b>",
j:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
B:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.b5))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y,x
z=J.S(this.a)
y=J.S(this.b)
y=P.e0(P.e0(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)},
K:function(a,b){var z,y,x,w
z=this.a
y=J.t(b)
x=y.gm(b)
if(typeof z!=="number")return z.K()
if(typeof x!=="number")return H.m(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.K()
if(typeof y!=="number")return H.m(y)
return new P.b5(z+x,w+y)},
I:function(a,b){var z,y,x,w
z=this.a
y=J.t(b)
x=y.gm(b)
if(typeof z!=="number")return z.I()
if(typeof x!=="number")return H.m(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.I()
if(typeof y!=="number")return H.m(y)
return new P.b5(z-x,w-y)},
L:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.L()
y=this.b
if(typeof y!=="number")return y.L()
return new P.b5(z*b,y*b)},
q:function(a){return this.a.$0()},
t:function(a){return this.b.$0()}},
mg:{"^":"b;"},
jB:{"^":"b;"},
U:{"^":"jB;"}}],["","",,P,{"^":"",kI:{"^":"f;D:value=","%":"SVGAngle"},l9:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEBlendElement"},la:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEColorMatrixElement"},lb:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEComponentTransferElement"},lc:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFECompositeElement"},ld:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEConvolveMatrixElement"},le:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEDiffuseLightingElement"},lf:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEDisplacementMapElement"},lg:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEFloodElement"},lh:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEGaussianBlurElement"},li:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEImageElement"},lj:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEMergeElement"},lk:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEMorphologyElement"},ll:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFEOffsetElement"},lm:{"^":"y;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
M:function(a){return a.z.$0()},
"%":"SVGFEPointLightElement"},ln:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFESpecularLightingElement"},lo:{"^":"y;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
M:function(a){return a.z.$0()},
"%":"SVGFESpotLightElement"},lp:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFETileElement"},lq:{"^":"y;p:height=,E:result=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFETurbulenceElement"},lu:{"^":"y;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGFilterElement"},lv:{"^":"aF;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGForeignObjectElement"},fE:{"^":"aF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aF:{"^":"y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lD:{"^":"aF;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGImageElement"},bq:{"^":"f;D:value=","%":"SVGLength"},lJ:{"^":"hl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.bq]},
$asj:function(){return[P.bq]},
$isi:1,
$asi:function(){return[P.bq]},
$ask:function(){return[P.bq]},
"%":"SVGLengthList"},lM:{"^":"y;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGMaskElement"},bv:{"^":"f;D:value=","%":"SVGNumber"},lZ:{"^":"hj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.bv]},
$asj:function(){return[P.bv]},
$isi:1,
$asi:function(){return[P.bv]},
$ask:function(){return[P.bv]},
"%":"SVGNumberList"},m5:{"^":"y;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGPatternElement"},m8:{"^":"f;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGPoint"},m9:{"^":"f;i:length=","%":"SVGPointList"},mh:{"^":"f;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGRect"},mi:{"^":"fE;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGRectElement"},mC:{"^":"hc;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.x]},
$asj:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
$ask:function(){return[P.x]},
"%":"SVGStringList"},y:{"^":"d4;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGCursorElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mD:{"^":"aF;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGSVGElement"},iz:{"^":"aF;","%":"SVGTextPathElement;SVGTextContentElement"},mG:{"^":"iz;m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mP:{"^":"ha;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.cl]},
$asj:function(){return[P.cl]},
$isi:1,
$asi:function(){return[P.cl]},
$ask:function(){return[P.cl]},
"%":"SVGTransformList"},mS:{"^":"aF;p:height=,l:width=,m:x=,n:y=",
q:function(a){return a.x.$0()},
t:function(a){return a.y.$0()},
"%":"SVGUseElement"},fY:{"^":"f+j;"},fL:{"^":"f+j;"},fR:{"^":"f+j;"},fU:{"^":"f+j;"},hl:{"^":"fY+k;"},ha:{"^":"fL+k;"},hc:{"^":"fU+k;"},hj:{"^":"fR+k;"}}],["","",,P,{"^":"",kK:{"^":"f;i:length=","%":"AudioBuffer"},kL:{"^":"f;D:value=","%":"AudioParam"}}],["","",,P,{"^":"",cf:{"^":"f;",
eW:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.r(g)
if(!!z.$isde||g==null)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k9(g))
return}if(!!z.$isbo)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbl)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isdS)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isdd)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.aV("Incorrect number or type of arguments"))},
eV:function(a,b,c,d,e,f,g){return this.eW(a,b,c,d,e,f,g,null,null,null)},
$iscf:1,
"%":"WebGLRenderingContext"}}],["","",,P,{"^":"",mx:{"^":"hh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return P.kd(a.item(b))},
k:function(a,b,c){throw H.a(new P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.br]},
$asj:function(){return[P.br]},
$isi:1,
$asi:function(){return[P.br]},
$ask:function(){return[P.br]},
"%":"SQLResultSetRowList"},fW:{"^":"f+j;"},hh:{"^":"fW+k;"}}],["","",,Z,{"^":"",
bV:function(){var z=0,y=P.a1(),x,w,v
var $async$bV=P.aa(function(a,b){if(a===1)return P.a7(b,y)
while(true)switch(z){case 0:w=Z.bi
v=new P.H(0,$.p,null,[w])
J.cN(self.Ammo(),P.k3(new Z.eS(new P.co(v,[w]))))
x=v
z=1
break
case 1:return P.a8(x,y)}})
return P.a9($async$bV,y)},
bi:{"^":"D;","%":""},
eS:{"^":"e:18;a",
$1:[function(a){this.a.am(0,a)},null,null,2,0,null,22,"call"]},
kG:{"^":"D;","%":""},
mO:{"^":"D;","%":""},
mT:{"^":"D;","%":""},
mf:{"^":"D;","%":""},
eW:{"^":"D;","%":""},
kW:{"^":"eW;","%":""},
f4:{"^":"D;","%":""},
kX:{"^":"f4;","%":""},
kR:{"^":"D;","%":""},
l5:{"^":"D;","%":""},
l0:{"^":"D;","%":""},
fa:{"^":"D;","%":""},
mr:{"^":"fa;","%":""},
ft:{"^":"D;","%":""},
kQ:{"^":"ft;","%":""},
hR:{"^":"D;","%":""},
kY:{"^":"hR;","%":""},
ml:{"^":"D;","%":""},
f5:{"^":"D;","%":""},
mk:{"^":"f5;","%":""},
cS:{"^":"D;","%":""},
fb:{"^":"cS;","%":""},
cV:{"^":"fb;","%":""},
cT:{"^":"cS;","%":""},
hY:{"^":"cV;","%":""},
kN:{"^":"hY;","%":""},
mw:{"^":"cV;","%":""},
lz:{"^":"cT;","%":""},
my:{"^":"cT;","%":""}}],["","",,A,{"^":"",
bN:function(a){var z,y
z=C.F.bj(a,0,new A.kj())
if(typeof z!=="number")return H.m(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kj:{"^":"e:19;",
$2:function(a,b){var z,y
z=J.ai(a,J.S(b))
if(typeof z!=="number")return H.m(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",b3:{"^":"b;c0:a<",
F:function(a){var z,y
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
j:function(a){return"[0] "+this.Z(0).j(0)+"\n[1] "+this.Z(1).j(0)+"\n[2] "+this.Z(2).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=9)return H.c(z,b)
z[b]=c},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b3){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.bN(this.a)},
Z:function(a){var z,y,x
z=new Float32Array(H.G(3))
y=this.a
if(a>=9)return H.c(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.c(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.c(y,x)
z[2]=y[x]
return new T.Q(z)},
L:function(a,b){var z,y
z=new Float32Array(H.G(9))
y=new T.b3(z)
y.F(this)
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
K:function(a,b){var z,y,x
z=new Float32Array(H.G(9))
y=new T.b3(z)
y.F(this)
x=b.gc0()
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
I:function(a,b){var z,y,x
z=new Float32Array(H.G(9))
y=new T.b3(z)
y.F(this)
x=b.gc0()
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
a_:function(a){var z=this.a
z[0]=1
z[1]=0
z[2]=0
z[3]=0
z[4]=1
z[5]=0
z[6]=0
z[7]=0
z[8]=1}},a3:{"^":"b;c1:a<",
F:function(a){var z,y
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
j:function(a){return"[0] "+this.Z(0).j(0)+"\n[1] "+this.Z(1).j(0)+"\n[2] "+this.Z(2).j(0)+"\n[3] "+this.Z(3).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.c(z,b)
return z[b]},
k:function(a,b,c){var z=this.a
if(b>=16)return H.c(z,b)
z[b]=c},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a3){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.bN(this.a)},
Z:function(a){var z,y,x
z=new Float32Array(H.G(4))
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
return new T.aO(z)},
L:function(a,b){var z=new T.a3(new Float32Array(H.G(16)))
z.F(this)
z.bC(0,b,null,null)
return z},
K:function(a,b){var z,y,x
z=new Float32Array(H.G(16))
y=new T.a3(z)
y.F(this)
x=b.gc1()
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
I:function(a,b){var z,y,x
z=new Float32Array(H.G(16))
y=new T.a3(z)
y.F(this)
x=b.gc1()
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
cS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=J.r(b)
y=!!z.$isaO
x=y?z.gac(b):1
if(!!z.$isQ){w=z.gm(b)
v=z.gn(b)
u=z.gU(b)}else if(y){w=z.gm(b)
v=z.gn(b)
u=z.gU(b)}else if(typeof b==="number"){u=d
v=c
w=b}else{w=null
v=null
u=null}z=this.a
y=z[0]
if(typeof w!=="number")return H.m(w)
t=z[4]
if(typeof v!=="number")return H.m(v)
s=z[8]
if(typeof u!=="number")return H.m(u)
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
cM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
cN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
bC:function(a,b,c,d){var z,y,x,w,v
if(b instanceof T.Q){z=b.a
y=z[0]
x=z[1]
w=z[2]}else if(typeof b==="number"){w=b
x=w
y=x}else{y=null
x=null
w=null}z=this.a
v=z[0]
if(typeof y!=="number")return H.m(y)
z[0]=v*y
z[1]=z[1]*y
z[2]=z[2]*y
z[3]=z[3]*y
v=z[4]
if(typeof x!=="number")return H.m(x)
z[4]=v*x
z[5]=z[5]*x
z[6]=z[6]*x
z[7]=z[7]*x
v=z[8]
if(typeof w!=="number")return H.m(w)
z[8]=v*w
z[9]=z[9]*w
z[10]=z[10]*w
z[11]=z[11]*w
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]},
ar:function(a,b){return this.bC(a,b,null,null)},
a_:function(a){var z=this.a
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
cT:function(){var z,y
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
bB:function(a){var z,y
z=new Float32Array(H.G(9))
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
return new T.b3(z)},
eg:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
if(a3===0){this.F(a8)
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
eJ:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},ig:{"^":"b;a,b",
dt:function(a){var z,y,x
z=P.w
y=P.c7(256,new T.ii(a),!1,z)
x=P.c7(y.length*2,new T.ij(y),!1,z)
this.a=x
this.b=P.c7(x.length,new T.ik(this),!1,z)},
v:{
ih:function(a){var z,y
z={}
z.a=a
y=new T.ig(null,null)
y.dt(z)
return y}}},ii:{"^":"e:1;a",
$1:function(a){return this.a.a.eK(256)}},ij:{"^":"e:7;a",
$1:function(a){var z=this.a
return z[C.b.aF(a,z.length)]}},ik:{"^":"e:7;a",
$1:function(a){var z=this.a.a
if(a>=z.length)return H.c(z,a)
return J.ex(z[a],12)}},Q:{"^":"b;cm:a<",
F:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.Q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.bN(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(H.G(3))
y=new T.Q(z)
y.F(this)
x=b.gcm()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
K:function(a,b){var z,y,x
z=new Float32Array(H.G(3))
y=new T.Q(z)
y.F(this)
x=b.gcm()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
return y},
L:function(a,b){var z=new T.Q(new Float32Array(H.G(3)))
z.F(this)
z.ar(0,b)
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
eL:function(a){var z,y,x,w,v,u
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
ar:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
ay:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gU:function(a){return this.a[2]},
q:function(a){return this.gm(this).$0()},
t:function(a){return this.gn(this).$0()},
M:function(a){return this.gU(this).$0()}},aO:{"^":"b;cn:a<",
a_:function(a){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=1},
F:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
j:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aO){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.bN(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(H.G(4))
y=new T.aO(z)
y.F(this)
x=b.gcn()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
K:function(a,b){var z,y,x
z=new Float32Array(H.G(4))
y=new T.aO(z)
y.F(this)
x=b.gcn()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
z[3]=z[3]+x[3]
return y},
L:function(a,b){var z=new T.aO(new Float32Array(H.G(4)))
z.F(this)
z.ar(0,b)
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
ar:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
ay:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])
z[3]=Math.floor(z[3])},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gU:function(a){return this.a[2]},
gac:function(a){return this.a[3]},
q:function(a){return this.gm(this).$0()},
t:function(a){return this.gn(this).$0()},
M:function(a){return this.gU(this).$0()},
aU:function(a){return this.gac(this).$0()}}}],["","",,Q,{"^":"",eZ:{"^":"b;m:a>,b,l:c>,aQ:d<,e,f",
gbs:function(){return this.e},
ga5:function(){return this.f},
dn:function(a,a0,a1,a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[P.W]
y=H.n([],z)
x=H.n([],[P.w])
w=H.n([],z)
v=H.n([],z)
for(u=this.a,z=u+this.c,t=this.b,s=t+this.d;u<z;u=r)for(r=u+1,q=t;q<s;q=p){p=q+1
C.a.X(y,[u,a5.$2(u,q),q,u,a5.$2(u,p),p,r,a5.$2(r,p),p,r,a5.$2(r,q),q])}z=y.length
if(C.b.aF(z,12)!==0)throw H.a(new P.eU("Total vertex component count for chunks must be divisible by 12. "+z+" vertex components were created."))
o=z/12
for(n=0;n<o;++n){m=n*4
z=m+2
C.a.X(x,[m,m+1,z,m,z,m+3])
C.a.X(w,[0,0,1,0,1,1,0,1])
l=n*12
z=y.length
if(l>=z)return H.c(y,l)
s=y[l]
k=l+1
if(k>=z)return H.c(y,k)
k=y[k]
j=l+2
if(j>=z)return H.c(y,j)
j=y[j]
z=new Float32Array(3)
z[0]=s
z[1]=k
z[2]=j
j=l+3
k=y.length
if(j>=k)return H.c(y,j)
j=y[j]
s=l+4
if(s>=k)return H.c(y,s)
s=y[s]
i=l+5
if(i>=k)return H.c(y,i)
i=y[i]
k=new Float32Array(3)
k[0]=j
k[1]=s
k[2]=i
i=l+6
s=y.length
if(i>=s)return H.c(y,i)
i=y[i]
j=l+7
if(j>=s)return H.c(y,j)
j=y[j]
h=l+8
if(h>=s)return H.c(y,h)
h=y[h]
s=new Float32Array(3)
s[0]=i
s[1]=j
s[2]=h
j=new Float32Array(3)
new T.Q(j).F(new T.Q(k))
j[0]=j[0]-z[0]
j[1]=j[1]-z[1]
j[2]=j[2]-z[2]
k=new Float32Array(3)
new T.Q(k).F(new T.Q(s))
k[0]=k[0]-z[0]
k[1]=k[1]-z[1]
k[2]=k[2]-z[2]
g=j[0]
f=j[1]
e=j[2]
d=k[0]
c=k[1]
b=k[2]
z=new Float32Array(3)
z[0]=f*b-e*c
z[1]=e*d-g*b
z[2]=g*c-f*d
new T.Q(z).eL(0)
s=z[0]
k=z[1]
z=z[2]
C.a.X(v,[s,k,z,s,k,z,s,k,z,s,k,z])}this.f=Q.dk(a.d,y,w,v,x)},
bA:function(){var z,y,x,w,v
for(z=this.f.a,y=z.length,x=17976931348623157e292,w=1;w<y;w+=3){v=z[w]
if(v<x)x=v}return x},
bz:function(){var z,y,x,w,v
for(z=this.f.a,y=z.length,x=-17976931348623157e292,w=1;w<y;w+=3){v=z[w]
if(v>x)x=v}return x},
d0:function(){var z,y,x,w,v,u,t,s
z=this.c
y=H.G(C.b.ap((z+1)*(this.d+1)))
x=new Float32Array(y)
for(w=0;w<this.f.a.length;w+=12){v=C.b.G(w,12)
u=C.d.ap(C.b.aF(v,z)*z+v/z)
t=this.f.a
s=w+1
if(s>=t.length)return H.c(t,s)
s=t[s]
if(u<0||u>=y)return H.c(x,u)
x[u]=s}return x},
q:function(a){return this.a.$0()},
M:function(a){return this.b.$0()},
v:{
f_:function(a,b,c,d,e,f,g){var z=new Q.eZ(c,d,e,f,b,null)
z.dn(a,b,c,d,e,f,g)
return z},
bm:function(a,b,c,d,e,f){var z=0,y=P.a1(),x,w,v,u,t,s,r,q
var $async$bm=P.aa(function(g,h){if(g===1)return P.a7(h,y)
while(true)switch(z){case 0:w=a.d
z=3
return P.a0(a.aR("asset/resources.png"),$async$bm)
case 3:v=h
u=new V.iA(null,null)
t=w.createTexture()
w.bindTexture(3553,t)
C.G.eV(w,3553,0,6408,6408,5121,v)
s=J.t(v)
r=s.gl(v)
q=J.N(r)
if(q.bx(r,q.I(r,1))===0){s=s.gp(v)
r=J.N(s)
s=r.bx(s,r.I(s,1))===0}else s=!1
if(s)w.generateMipmap(3553)
else{w.texParameteri(3553,10242,33071)
w.texParameteri(3553,10243,33071)
w.texParameteri(3553,10241,9729)}u.a=t
u.b=v
x=Q.f_(a,u,b,c,d,e,f)
z=1
break
case 1:return P.a8(x,y)}})
return P.a9($async$bm,y)}}}}],["","",,N,{"^":"",fh:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
bK:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p
z=this.c.a
y=new self.Ammo.btSphereShape(z)
x=new self.Ammo.btTransform()
z=J.t(x)
z.a_(x)
w=new self.Ammo.btVector3(0,0,0)
J.eE(y,1,w)
v=a==null?this.r+Math.cos(this.dy-1.5707963267948966)*Math.cos(this.dx)*10:a
u=c==null?this.x-Math.sin(this.dx)*10:c
t=this.c.a
s=e==null?this.y+Math.sin(this.dy-1.5707963267948966)*Math.cos(this.dx)*10:e
z.bD(x,new self.Ammo.btVector3(v,u+t,s))
r=new self.Ammo.btDefaultMotionState(x)
q=new self.Ammo.btRigidBodyConstructionInfo(1,r,y,w)
p=new self.Ammo.btRigidBody(q)
z=J.t(p)
z.dd(p,0,0)
z.dc(p,new self.Ammo.btVector3(b,d,f))
J.cJ(this.k4,p)
this.r1.push(new X.fD(this.c.b,p))},
dE:function(a,b,c){return this.bK(null,a,null,b,null,c)},
dD:function(a,b,c){return this.bK(a,0,b,0,c,0)},
e_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
z=this.a
y=z.a
z.d.viewport(0,0,y.width,y.height)
z.d.clearColor(0,0,0,1)
z.d.clearDepth(1)
z.d.enable(2929)
z.d.depthFunc(515)
z.d.clear(16640)
for(y=this.b,y=y.gbv(y),y=y.gH(y);y.w();){x=y.gA()
z.d.bindBuffer(34962,x.ga5().e)
z.d.vertexAttribPointer(this.d.b,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.b)
z.d.bindBuffer(34962,x.ga5().f)
z.d.vertexAttribPointer(this.d.c,2,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.c)
z.d.bindBuffer(34962,x.ga5().r)
z.d.vertexAttribPointer(this.d.d,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.d)
z.d.bindBuffer(34963,x.ga5().x)
z.d.useProgram(this.d.a)
w=new Float32Array(16)
v=new T.a3(w)
v.a_(0)
v.cM(this.dx)
v.cN(this.dy)
v.cS(0,-this.r,-2-this.x,-this.y)
u=new Float32Array(16)
t=new T.a3(u)
t.a_(0)
t.cT()
z.d.uniformMatrix4fv(this.d.e,!1,this.f.a)
z.d.uniformMatrix4fv(this.d.f,!1,w)
z.d.uniformMatrix4fv(this.d.r,!1,u)
z.d.activeTexture(33984)
z.d.bindTexture(3553,x.gbs().gbs())
z.d.uniform1i(this.d.x,0)
z.d.drawElements(4,x.ga5().d.length,5123,0)}for(y=C.a.gH(this.r1),w=new H.iJ(y,new N.fl());w.w();){s=y.gA()
z.d.bindBuffer(34962,this.c.b.e)
z.d.vertexAttribPointer(this.d.b,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.b)
z.d.bindBuffer(34962,this.c.b.r)
z.d.vertexAttribPointer(this.d.d,3,5126,!1,0,0)
z.d.enableVertexAttribArray(this.d.d)
z.d.bindBuffer(34963,this.c.b.x)
z.d.useProgram(this.d.a)
r=new self.Ammo.btTransform()
J.eL(J.eK(s.geR()),r)
u=J.t(r)
q=u.d_(r)
p=u.bB(r)
u=new Float32Array(3)
u[0]=0
u[1]=0
u[2]=0
o=J.t(p)
n=o.q(p)
m=o.t(p)
l=o.M(p)
o=o.aU(p)
k=new Float32Array(4)
k[0]=n
k[1]=m
k[2]=l
k[3]=o
o=new Float32Array(3)
o[0]=1
o[1]=1
o[2]=1
n=new Float32Array(16)
j=new T.a3(n)
i=k[0]
h=k[1]
g=k[2]
f=k[3]
e=i+i
d=h+h
c=g+g
b=i*e
a=i*d
a0=i*c
a1=h*d
a2=h*c
a3=g*c
a4=f*e
a5=f*d
a6=f*c
n[0]=1-(a1+a3)
n[1]=a+a6
n[2]=a0-a5
n[3]=0
n[4]=a-a6
n[5]=1-(b+a3)
n[6]=a2+a4
n[7]=0
n[8]=a0+a5
n[9]=a2-a4
n[10]=1-(b+a1)
n[11]=0
n[12]=u[0]
n[13]=u[1]
n[14]=u[2]
n[15]=1
j.ar(0,new T.Q(o))
u=new Float32Array(16)
v=new T.a3(u)
v.a_(0)
v.cM(this.dx)
v.cN(this.dy)
o=this.r
m=J.t(q)
l=m.q(q)
if(typeof l!=="number")return H.m(l)
k=this.x
a7=m.t(q)
if(typeof a7!=="number")return H.m(a7)
a8=this.y
m=m.M(q)
if(typeof m!=="number")return H.m(m)
v.cS(0,-o+l,-2-k+a7,-a8+m)
v.eJ(0,j)
j.eg(j)
j.cT()
z.d.uniformMatrix4fv(this.d.e,!1,this.f.a)
z.d.uniformMatrix4fv(this.d.f,!1,u)
z.d.uniformMatrix4fv(this.d.r,!1,n)
z.d.drawElements(4,this.c.b.d.length,5123,0)}},
aL:function(){var z=0,y=P.a1(),x,w=this,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$aL=P.aa(function(a,a0){if(a===1)return P.a7(a0,y)
while(true)$async$outer:switch(z){case 0:v=C.d.G(w.r,100)*100
u=C.d.G(w.y,100)*100
if(C.d.gcC(v)||C.d.gcC(u)){z=1
break}t=v+u
s=t*(t+1)/2+u
t=w.b
z=!t.av(0,s)?3:4
break
case 3:c=t
b=s
z=5
return P.a0(Q.bm(w.a,v,u,100,100,new N.fi(w)),$async$aL)
case 5:c.k(0,b,a0)
r=new self.Ammo.btTransform()
q=J.t(r)
q.a_(r)
p=J.ey(J.aU(t.h(0,s)),0.5)
o=t.h(0,s).bA()
n=t.h(0,s).bz()
m=t.h(0,s).gaQ()
q.bD(r,new self.Ammo.btVector3(p,(o+n)*0.5,m*0.5))
m=J.bU(J.aU(t.h(0,s)))
n=C.b.ap(t.h(0,s).gaQ())
l=self.Ammo._malloc(4*(m+1)*(n+1))
k=t.h(0,s).d0()
for(q=J.eh(l),p=k.length,j=0;j<=t.h(0,s).gaQ();++j){i=0
while(!0){o=J.aU(t.h(0,s))
if(typeof o!=="number"){x=H.m(o)
z=1
break $async$outer}if(!(i<=o))break
h=j*J.bU(J.aU(t.h(0,s)))+i
o=self.Ammo.HEAPF32
n=J.ez(q.K(l,h*4),2)
if(h<0||h>=p){x=H.c(k,h)
z=1
break $async$outer}J.cH(o,n,k[h]);++i}}q=J.bU(J.aU(t.h(0,s)))
p=C.b.ap(t.h(0,s).gaQ())
o=t.h(0,s).bA()
t=t.h(0,s).bz()
g=new self.Ammo.btHeightfieldTerrainShape(q,p,l,1,o,t,1,"PHY_FLOAT",!1)
f=new self.Ammo.btDefaultMotionState(r)
t=new self.Ammo.btVector3(0,0,0)
e=new self.Ammo.btRigidBodyConstructionInfo(0,f,g,t)
d=new self.Ammo.btRigidBody(e)
J.cJ(w.k4,d)
case 4:case 1:return P.a8(x,y)}})
return P.a9($async$aL,y)},
aP:function(a,b){var z=0,y=P.a1(),x,w=this,v,u,t,s,r,q,p,o,n
var $async$aP=P.aa(function(c,d){if(c===1)return P.a7(d,y)
while(true)$async$outer:switch(z){case 0:z=3
return P.a0(w.aL(),$async$aP)
case 3:v=w.cy-=0.0005
u=w.z
t=w.cx
u+=t
w.z=u
v=w.Q+=v
s=w.ch
r=w.db
s+=r
w.ch=s
w.r+=u
v=w.x+=v
w.y+=s
w.z=u*0.5
w.ch=s*0.5
w.cx=t*0.5
w.db=r*0.5
if(v<0){w.x=0
w.z=0
w.Q=0
w.ch=0
w.cx=0
w.cy=0
w.db=0
w.fr=!1}v=w.fx
if(v.h(0," ")===!0&&!w.fr){w.Q+=0.2
w.fr=!0}if(v.h(0,"w")===!0){u=w.cx
t=Math.cos(w.dy+1.5707963267948966)
if(typeof b!=="number"){x=H.m(b)
z=1
break}w.cx=u-t*15.5*b
w.db=w.db-Math.sin(w.dy+1.5707963267948966)*15.5*b}if(v.h(0,"s")===!0){u=w.cx
t=Math.cos(w.dy+1.5707963267948966)
if(typeof b!=="number"){x=H.m(b)
z=1
break}w.cx=u+t*15.5*b
w.db=w.db+Math.sin(w.dy+1.5707963267948966)*15.5*b}if(v.h(0,"a")===!0){u=w.cx
t=Math.cos(w.dy)
if(typeof b!=="number"){x=H.m(b)
z=1
break}w.cx=u-t*15.5*b
w.db=w.db-Math.sin(w.dy)*15.5*b}if(v.h(0,"d")===!0){v=w.cx
u=Math.cos(w.dy)
if(typeof b!=="number"){x=H.m(b)
z=1
break}w.cx=v+u*15.5*b
w.db=w.db+Math.sin(w.dy)*15.5*b}for(v=w.fy,u=v.length,q=0;q<u;++q){p=v[q]
o=p.b===C.r?-1:1
t=w.dx
if(typeof b!=="number"){x=H.m(b)
z=1
break $async$outer}s=0.2*b
t+=s*p.d*o
w.dx=t
n=p.a===C.q?-1:1
w.dy=w.dy+s*p.c*n
if(t<-1.5707963267948966){w.dx=-1.5707963267948966
t=-1.5707963267948966}if(t>1.5707963267948966)w.dx=1.5707963267948966}C.a.si(v,0)
case 1:return P.a8(x,y)}})
return P.a9($async$aP,y)},
bc:[function(a){var z=0,y=P.a1(),x=this,w,v,u
var $async$bc=P.aa(function(b,c){if(b===1)return P.a7(c,y)
while(true)switch(z){case 0:++x.r2
w=J.N(a)
if(!J.Y(w.ae(a,1000),J.eG(x.go))){v=""+x.r2+" updates/sec"
if(typeof console!="undefined")console.log(v)
x.r2=0}a=w.L(a,0.001)
w=J.N(a)
u=w.I(a,x.go)
x.go=a
J.eP(x.k4,w.eX(a),10)
z=2
return P.a0(x.aP(0,u),$async$bc)
case 2:x.e_()
w=window
C.e.bV(w)
C.e.ca(w,W.cv(x.gc8()))
return P.a8(null,y)}})
return P.a9($async$bc,y)},"$1","gc8",2,0,20,23],
au:function(){var z=0,y=P.a1(),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$au=P.aa(function(a,b){if(a===1){v=b
z=w}while(true)switch(z){case 0:w=4
d=J
z=7
return P.a0(W.dc("asset/shader/3d_vertex_shader.glsl",null,null,null,null,null,null,null),$async$au)
case 7:s=d.cL(b)
d=J
z=8
return P.a0(W.dc("asset/shader/3d_fragment_shader.glsl",null,null,null,null,null,null,null),$async$au)
case 8:r=d.cL(b)
o=t.a
n=o.d
m=n.createShader(35633)
n.shaderSource(m,s)
n.compileShader(m)
if(H.cw(n.getShaderParameter(m,35713))!==!0){l=n.getShaderInfoLog(m)
n.deleteShader(m)
H.v(P.ao("Unable to compile vertex shader: "+H.d(l)))}k=n.createShader(35632)
n.shaderSource(k,r)
n.compileShader(k)
if(H.cw(n.getShaderParameter(k,35713))!==!0){l=n.getShaderInfoLog(k)
n.deleteShader(k)
H.v(P.ao("Unable to compile fragment shader: "+H.d(l)))}j=n.createProgram()
n.attachShader(j,m)
n.attachShader(j,k)
n.linkProgram(j)
if(H.cw(n.getProgramParameter(j,35714))!==!0){l=n.getProgramInfoLog(j)
n.deleteProgram(j)
H.v(P.ao("Unable to link program: "+H.d(l)))}q=j
t.d=new T.i8(q,o.d.getAttribLocation(q,"aVertexPosition"),o.d.getAttribLocation(q,"aTextureCoord"),o.d.getAttribLocation(q,"aVertexNormal"),o.d.getUniformLocation(q,"uProjectionMatrix"),o.d.getUniformLocation(q,"uModelViewMatrix"),o.d.getUniformLocation(q,"uNormalMatrix"),o.d.getUniformLocation(q,"uSampler"))
w=2
z=6
break
case 4:w=3
e=v
H.M(e)
p="Failed to load shader source files."
if(typeof console!="undefined")console.error(p)
x=P.fB(p,null,P.x)
z=1
break
z=6
break
case 3:z=2
break
case 6:o=t.a
n=o.cX()
h=new Float32Array(H.G(16))
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
t.f=new T.a3(h)
t.c=S.io(o.d,2)
o=new self.Ammo.btDefaultCollisionConfiguration()
t.id=o
t.k1=new self.Ammo.btCollisionDispatcher(o)
t.k2=new self.Ammo.btDbvtBroadphase()
o=new self.Ammo.btSequentialImpulseConstraintSolver()
t.k3=o
h=t.k1
n=t.k2
f=t.id
f=new self.Ammo.btDiscreteDynamicsWorld(h,n,o,f)
t.k4=f
J.eO(f,new self.Ammo.btVector3(0,-0.1,0))
case 1:return P.a8(x,y)
case 2:return P.a7(v,y)}})
return P.a9($async$au,y)},
as:function(a){var z=0,y=P.a1(),x=this,w,v
var $async$as=P.aa(function(b,c){if(b===1)return P.a7(c,y)
while(true)switch(z){case 0:W.a6(window,"keydown",new N.fm(x),!1)
W.a6(window,"keyup",new N.fn(x),!1)
W.a6(window,"mousemove",new N.fo(x),!1)
w=x.a
w.cu()
z=2
return P.a0(x.au(),$async$as)
case 2:w=w.a
w.toString
W.a6(w,"mousedown",new N.fp(x),!1)
W.a6(window,"mouseup",new N.fq(x),!1)
W.a6(window,"resize",new N.fr(x),!1)
w=window
z=3
return P.a0(x.gc8(),$async$as)
case 3:v=c
C.e.bV(w)
C.e.ca(w,W.cv(v))
return P.a8(null,y)}})
return P.a9($async$as,y)},
v:{
fj:function(a5,a6,a7,a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
for(z=a6/100-0.5,y=a7/100-0.5,x=0,w=0;w<4;++w){v=Math.pow(2,w)
u=v*z
t=v*y
s=$.$get$dA()
if(typeof s!=="number")return H.m(s)
r=(u+t)*s
q=C.d.ay(u+r)
p=C.d.ay(t+r)
s=$.$get$dB()
if(typeof s!=="number")return H.m(s)
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
u=a5.b
t=a5.a
s=t.length
if(e>=s)return H.c(t,e)
d=t[e]
if(typeof d!=="number")return H.m(d)
d=f+d
c=u.length
if(d>>>0!==d||d>=c)return H.c(u,d)
b=u[d]
d=e+k
if(d>=s)return H.c(t,d)
d=t[d]
if(typeof d!=="number")return H.m(d)
d=f+l+d
if(d>>>0!==d||d>=c)return H.c(u,d)
a=u[d]
d=e+1
if(d>=s)return H.c(t,d)
d=t[d]
if(typeof d!=="number")return H.m(d)
d=f+1+d
if(d>>>0!==d||d>=c)return H.c(u,d)
a0=u[d]
a1=0.5-n*n-m*m
if(a1<0)a2=0
else{a1*=a1
u=$.$get$bz()
if(b>>>0!==b||b>=12)return H.c(u,b)
u=u[b]
a2=a1*a1*(u[0]*n+u[1]*m)}u=0.5-j*j-i*i
if(u<0)a3=0
else{u*=u
t=$.$get$bz()
if(a>>>0!==a||a>=12)return H.c(t,a)
t=t[a]
a3=u*u*(t[0]*j+t[1]*i)}t=0.5-h*h-g*g
if(t<0)a4=0
else{t*=t
u=$.$get$bz()
if(a0>>>0!==a0||a0>=12)return H.c(u,a0)
u=u[a0]
a4=t*t*(u[0]*h+u[1]*g)}x+=a8[w]*(70*(a2+a3+a4)/2+0.5)}u=C.a.bj(a8,0,new N.fk())
if(typeof u!=="number")return H.m(u)
return Math.pow(x/u*8,2.2)-25}}},fl:{"^":"e:1;",
$1:function(a){a.ga5()
return!0}},fi:{"^":"e:3;a",
$2:function(a,b){return N.fj(this.a.e,a,b,[1,0.25,0.125,0.0625])}},fk:{"^":"e:21;",
$2:function(a,b){return J.ai(a,b)}},fm:{"^":"e:1;a",
$1:function(a){var z,y,x,w
z=this.a
y=J.t(a)
z.fx.k(0,y.gab(a),!0)
if(J.Y(y.gab(a),"h"))for(x=0;x<100;x+=10)for(w=0;w<100;w+=10)z.dD(w,50,x)}},fn:{"^":"e:1;a",
$1:function(a){this.a.fx.k(0,J.eJ(a),!1)
return!1}},fo:{"^":"e:1;a",
$1:function(a){var z,y,x
z=J.t(a)
y=z.gaS(a).a
if(typeof y!=="number")return y.aE()
y=y>0?C.I:C.q
x=z.gaS(a).b
if(typeof x!=="number")return x.aE()
x=x>0?C.J:C.r
this.a.fy.push(new N.jv(y,x,J.cI(z.gaS(a).a),J.cI(z.gaS(a).b)))}},fp:{"^":"e:1;a",
$1:function(a){return this.a.a.a.requestPointerLock()}},fq:{"^":"e:1;a",
$1:function(a){var z=this.a
z.dE(Math.cos(z.dy-1.5707963267948966)*Math.cos(z.dx)*10,-Math.sin(z.dx)*10,Math.sin(z.dy-1.5707963267948966)*Math.cos(z.dx)*10)}},fr:{"^":"e:1;a",
$1:function(a){return this.a.a.cu()}},e_:{"^":"b;a,b",
j:function(a){return this.b}},e4:{"^":"b;a,b",
j:function(a){return this.b}},jv:{"^":"b;a,b,c,d"}}],["","",,T,{"^":"",fC:{"^":"b;a,b,c,d",
dO:function(){var z,y
z=this.a
y=(z&&C.h).by(z,"experimental-webgl")
return H.bO(y==null?C.h.by(z,"webgl"):y,"$iscf")},
cu:function(){var z,y,x,w,v,u
z=window.innerHeight
y=window.innerWidth
if(typeof z!=="number")return z.cW()
if(typeof y!=="number")return H.m(y)
x=this.b
w=this.a
if(z/y<=x){z=window.innerHeight
if(typeof z!=="number")return z.ae()
w.width=C.b.ae(z,x)
w.height=window.innerHeight}else{w.width=window.innerWidth
z=window.innerWidth
if(typeof z!=="number")return z.L()
w.height=C.d.ap(z*x)}z=window.innerWidth
y=w.width
if(typeof z!=="number")return z.I()
if(typeof y!=="number")return H.m(y)
x=window.innerHeight
v=w.height
if(typeof x!=="number")return x.I()
if(typeof v!=="number")return H.m(v)
u=w.style
y=C.j.j((z-y)/2)
u.marginLeft=y
z=w.style
v=C.j.j((x-v)/2)
z.marginTop=v},
cX:function(){var z,y
z=this.a
if(z==null)return 1
y=z.width
z=z.height
z.toString
if(typeof y!=="number")return y.cW()
if(typeof z!=="number")return H.m(z)
return y/z},
aR:function(a){var z=0,y=P.a1(),x,w,v,u
var $async$aR=P.aa(function(b,c){if(b===1)return P.a7(c,y)
while(true)switch(z){case 0:w=document.createElement("img")
H.bO(w,"$isbo")
w.src=a
w=new W.j_(w,"load",!1,[W.aE])
v=H
u=J
z=3
return P.a0(w.gbi(w),$async$aR)
case 3:x=v.bO(u.eI(c),"$isbo")
z=1
break
case 1:return P.a8(x,y)}})
return P.a9($async$aR,y)}}}],["","",,X,{"^":"",fD:{"^":"b;a,b",
ga5:function(){return this.a},
geR:function(){return this.b}}}],["","",,F,{"^":"",
cA:[function(){var z=0,y=P.a1(),x,w,v,u,t,s
var $async$cA=P.aa(function(a,b){if(a===1)return P.a7(b,y)
while(true)switch(z){case 0:x=document
w=x.createElement("canvas")
H.bO(w,"$isbl")
t=T
s=w
z=2
return P.a0(Z.bV(),$async$cA)
case 2:v=new t.fC(s,0.5625,b,null)
u=v.dO()
v.d=u
if(u==null)H.v(new P.q("Browser does not support WebGL"))
x.body.appendChild(w)
x=P.jA(3)
new N.fh(v,P.aq(),null,null,T.ih(x),null,0,0,0,0,0,0,0,0,0,0,1.5707963267948966,!1,P.aq(),[],0,null,null,null,null,null,[],0).as(0)
return P.a8(null,y)}})
return P.a9($async$cA,y)},"$0","en",0,0,22]},1],["","",,Q,{"^":"",hQ:{"^":"b;a,b,c,d,e,f,r,x",
ds:function(a,b,c,d,e){this.a=new Float32Array(H.bI(b))
this.b=new Float32Array(H.bI(c))
this.c=new Float32Array(H.bI(d))
this.d=new Uint16Array(H.bI(e))
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
dk:function(a,b,c,d,e){var z=new Q.hQ(null,null,null,null,null,null,null,null)
z.ds(a,b,c,d,e)
return z}}}}],["","",,T,{"^":"",i8:{"^":"b;a,b,c,d,e,f,r,x"}}],["","",,S,{"^":"",im:{"^":"b;a,b",
du:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=[P.W]
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
C.a.X(v,[j,i,p,i,i+1,p])}this.b=Q.dk(a,y,x,w,v)},
ga5:function(){return this.b},
v:{
io:function(a,b){var z=new S.im(b,null)
z.du(a,b)
return z}}}}],["","",,V,{"^":"",iA:{"^":"b;a,b",
gbs:function(){return this.a}}}]]
setupProgram(dart,0,0)
J.r=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c3.prototype
return J.dh.prototype}if(typeof a=="string")return J.b1.prototype
if(a==null)return J.hA.prototype
if(typeof a=="boolean")return J.hy.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.eh=function(a){if(typeof a=="number")return J.ap.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.K=function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.az=function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.kg=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c3.prototype
return J.ap.prototype}if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.N=function(a){if(typeof a=="number")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.kh=function(a){if(typeof a=="number")return J.ap.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.t=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.ai=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.eh(a).K(a,b)}
J.Y=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).B(a,b)}
J.ev=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.N(a).aE(a,b)}
J.ew=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.N(a).aq(a,b)}
J.ex=function(a,b){return J.N(a).aF(a,b)}
J.ey=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kh(a).L(a,b)}
J.cF=function(a,b){return J.N(a).de(a,b)}
J.ez=function(a,b){return J.N(a).bE(a,b)}
J.eA=function(a,b){if(typeof a=="number"&&typeof b=="number")return(a^b)>>>0
return J.N(a).dm(a,b)}
J.cG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.el(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)}
J.cH=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.el(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.az(a).k(a,b,c)}
J.eB=function(a,b){return J.t(a).dB(a,b)}
J.eC=function(a,b,c,d){return J.t(a).dC(a,b,c,d)}
J.eD=function(a,b,c,d){return J.t(a).dZ(a,b,c,d)}
J.cI=function(a){return J.kg(a).co(a)}
J.cJ=function(a,b){return J.t(a).e8(a,b)}
J.eE=function(a,b,c){return J.t(a).eb(a,b,c)}
J.eF=function(a,b){return J.t(a).am(a,b)}
J.bT=function(a,b,c){return J.K(a).ee(a,b,c)}
J.cK=function(a,b){return J.az(a).u(a,b)}
J.eG=function(a){return J.N(a).ay(a)}
J.eH=function(a,b){return J.az(a).R(a,b)}
J.eI=function(a){return J.t(a).geh(a)}
J.aT=function(a){return J.t(a).gN(a)}
J.S=function(a){return J.r(a).gC(a)}
J.aj=function(a){return J.az(a).gH(a)}
J.eJ=function(a){return J.t(a).gab(a)}
J.O=function(a){return J.K(a).gi(a)}
J.cL=function(a){return J.t(a).geQ(a)}
J.cM=function(a){return J.t(a).gE(a)}
J.aU=function(a){return J.t(a).gl(a)}
J.eK=function(a){return J.t(a).cZ(a)}
J.eL=function(a,b){return J.t(a).d1(a,b)}
J.eM=function(a,b){return J.az(a).S(a,b)}
J.eN=function(a,b){return J.r(a).bn(a,b)}
J.aB=function(a,b){return J.t(a).a7(a,b)}
J.eO=function(a,b){return J.t(a).da(a,b)}
J.eP=function(a,b,c){return J.t(a).df(a,b,c)}
J.cN=function(a,b){return J.t(a).cR(a,b)}
J.eQ=function(a,b,c){return J.t(a).bt(a,b,c)}
J.bU=function(a){return J.N(a).ap(a)}
J.eR=function(a){return J.az(a).a6(a)}
J.ak=function(a){return J.r(a).j(a)}
I.bQ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.h=W.bl.prototype
C.v=W.c0.prototype
C.w=J.f.prototype
C.a=J.aG.prototype
C.j=J.dh.prototype
C.b=J.c3.prototype
C.d=J.ap.prototype
C.k=J.b1.prototype
C.D=J.aH.prototype
C.F=H.hT.prototype
C.p=J.hX.prototype
C.G=P.cf.prototype
C.f=J.bc.prototype
C.e=W.iK.prototype
C.t=new P.hW()
C.u=new P.iY()
C.c=new P.jC()
C.i=new P.an(0)
C.x=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.l=function(hooks) { return hooks; }
C.y=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.z=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.A=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.m=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.B=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.C=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.n=I.bQ([])
C.E=H.n(I.bQ([]),[P.aN])
C.o=new H.f9(0,{},C.E,[P.aN,null])
C.H=new H.cj("call")
C.q=new N.e_(0,"_HorizontalMouseMovementDirection.Left")
C.I=new N.e_(1,"_HorizontalMouseMovementDirection.Right")
C.r=new N.e4(0,"_VerticalMouseMovementDirection.Up")
C.J=new N.e4(1,"_VerticalMouseMovementDirection.Down")
$.dv="$cachedFunction"
$.dw="$cachedInvocation"
$.Z=0
$.aC=null
$.cO=null
$.cy=null
$.ec=null
$.ep=null
$.bL=null
$.bP=null
$.cz=null
$.aw=null
$.aQ=null
$.aR=null
$.ct=!1
$.p=C.c
$.db=0
$.d0=null
$.d_=null
$.cZ=null
$.cY=null
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
I.$lazy(y,x,w)}})(["bZ","$get$bZ",function(){return H.ei("_$dart_dartClosure")},"c4","$get$c4",function(){return H.ei("_$dart_js")},"df","$get$df",function(){return H.hu()},"dg","$get$dg",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.db
$.db=z+1
z="expando$key$"+z}return new P.fz(null,z)},"dG","$get$dG",function(){return H.a_(H.bC({
toString:function(){return"$receiver$"}}))},"dH","$get$dH",function(){return H.a_(H.bC({$method$:null,
toString:function(){return"$receiver$"}}))},"dI","$get$dI",function(){return H.a_(H.bC(null))},"dJ","$get$dJ",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dN","$get$dN",function(){return H.a_(H.bC(void 0))},"dO","$get$dO",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dL","$get$dL",function(){return H.a_(H.dM(null))},"dK","$get$dK",function(){return H.a_(function(){try{null.$method$}catch(z){return z.message}}())},"dQ","$get$dQ",function(){return H.a_(H.dM(void 0))},"dP","$get$dP",function(){return H.a_(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cp","$get$cp",function(){return P.iN()},"b_","$get$b_",function(){return P.j7(null,P.P)},"aS","$get$aS",function(){return[]},"cW","$get$cW",function(){return{}},"bz","$get$bz",function(){var z=[P.W]
return H.n([H.n([1,1,0],z),H.n([-1,1,0],z),H.n([1,-1,0],z),H.n([-1,-1,0],z),H.n([1,0,1],z),H.n([-1,0,1],z),H.n([1,0,-1],z),H.n([-1,0,-1],z),H.n([0,1,1],z),H.n([0,-1,1],z),H.n([0,1,-1],z),H.n([0,-1,-1],z)],[[P.i,P.W]])},"dA","$get$dA",function(){return 0.5*(P.es(3)-1)},"dB","$get$dB",function(){return(3-P.es(3))/6}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=["result","error","stackTrace","invocation","_","e","x",null,"value","data","object","sender","closure","isolate","numberOfArguments","arg1","arg2","arg3","arg4","each","errorCode","arg","instance","now","callback","arguments"]
init.types=[{func:1},{func:1,args:[,]},{func:1,v:true},{func:1,args:[,,]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,v:true,args:[P.b],opt:[P.a5]},{func:1,ret:P.x,args:[P.w]},{func:1,args:[P.w]},{func:1,args:[P.x,,]},{func:1,args:[,P.x]},{func:1,args:[P.x]},{func:1,args:[{func:1,v:true}]},{func:1,args:[,P.a5]},{func:1,args:[P.w,,]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.a5]},{func:1,args:[P.aN,,]},{func:1,ret:[P.i,W.cg]},{func:1,args:[Z.bi]},{func:1,args:[P.w,P.b]},{func:1,ret:P.I,args:[P.bh]},{func:1,args:[P.W,,]},{func:1,ret:P.I}]
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
if(x==y)H.kE(d||a)
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
Isolate.bQ=a.bQ
Isolate.ag=a.ag
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.et(F.en(),b)},[])
else (function(b){H.et(F.en(),b)})([])})})()