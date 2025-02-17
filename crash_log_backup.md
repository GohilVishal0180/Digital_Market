## Crash Details

**Crash Thread**: `Thread[Thread-11,5,main]`  
**Crash Timestamp**: `2025-02-17 10:28:38.368 UTC`  

**Crash Message**:
```
java.io.FileNotFoundException: /data/user/0/com.termux/files/home/.switch/IMG-20250217-WA0002.jpg: open failed: ENOENT (No such file or directory)
```


### Stacktrace

```
java.lang.RuntimeException: java.io.FileNotFoundException: /data/user/0/com.termux/files/home/.switch/IMG-20250217-WA0002.jpg: open failed: ENOENT (No such file or directory)
	at com.termux.app.TermuxActivity$12.run(TermuxActivity.java:1253)
Caused by: java.io.FileNotFoundException: /data/user/0/com.termux/files/home/.switch/IMG-20250217-WA0002.jpg: open failed: ENOENT (No such file or directory)
	at libcore.io.IoBridge.open(IoBridge.java:574)
	at java.io.FileOutputStream.<init>(FileOutputStream.java:259)
	at java.io.FileOutputStream.<init>(FileOutputStream.java:208)
	at com.termux.app.TermuxActivity.importFile(TermuxActivity.java:661)
	at com.termux.app.TermuxActivity.access$1000(TermuxActivity.java:105)
	at com.termux.app.TermuxActivity$12.run(TermuxActivity.java:1251)
Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
	at libcore.io.Linux.open(Native Method)
	at libcore.io.ForwardingOs.open(ForwardingOs.java:563)
	at libcore.io.BlockGuardOs.open(BlockGuardOs.java:274)
	at libcore.io.ForwardingOs.open(ForwardingOs.java:563)
	at android.app.ActivityThread$AndroidOs.open(ActivityThread.java:8721)
	at libcore.io.IoBridge.open(IoBridge.java:560)
	... 5 more

```
##


## NSC App Info

**APP_NAME**: `NSC`  
**PACKAGE_NAME**: `com.termux`  
**VERSION_NAME**: `1.0.1`  
**VERSION_CODE**: `20240420`  
**UID**: `10296`  
**TARGET_SDK**: `28`  
**IS_DEBUGGABLE_BUILD**: `false`  
**SE_PROCESS_CONTEXT**: `u:r:untrusted_app_27:s0:c40,c257,c512,c768`  
**SE_FILE_CONTEXT**: `u:object_r:app_data_file:s0:c40,c257,c512,c768`  
**SE_INFO**: `default:targetSdkVersion=28:complete`  
**TERMUX_APP_PACKAGE_MANAGER**: `APT`  
**TERMUX_APP_PACKAGE_VARIANT**: `APT_ANDROID_7`  
**APK_RELEASE**: `Github`  
**SIGNING_CERTIFICATE_SHA256_DIGEST**: `B6DA01480EEFD5FBF2CD3771B8D1021EC791304BDD6C4BF41D3FAABAD48EE5E1`  
##


## Device Info

### Software

**OS_VERSION**: `5.15.149-android13-8-o-g0c825e5539f2`  
**SDK_INT**: `34`  
**RELEASE**: `14`  
**ID**: `UP1A.231005.007`  
**DISPLAY**: `RMX3999_14.0.1.516(EX01)`  
**INCREMENTAL**: `U.R4T2.1ba66e0_2a3be-1`  
**SECURITY_PATCH**: `2024-12-05`  
**IS_DEBUGGABLE**: `0`  
**IS_TREBLE_ENABLED**: `true`  
**TYPE**: `user`  
**TAGS**: `release-keys`  
**MAX_PHANTOM_PROCESSES**: - (*Requires `DUMP` and `PACKAGE_USAGE_STATS` permission*)  
**MONITOR_PHANTOM_PROCS**: `true`  
**DEVICE_CONFIG_SYNC_DISABLED**: -  

### Hardware

**MANUFACTURER**: `realme`  
**BRAND**: `realme`  
**MODEL**: `RMX3999`  
**PRODUCT**: `RMX3999IN`  
**BOARD**: `k6835v1_64`  
**HARDWARE**: `mt6835`  
**DEVICE**: `RE5C94L1`  
**SUPPORTED_ABIS**: `arm64-v8a, armeabi-v7a, armeabi`  
##
