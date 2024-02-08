//
//  DeviceServiceModule.h
//  MobileAppTest
//
//  Created by John Isaac Caasi on 2/8/24.
//

#ifndef DeviceServiceModule_h
#define DeviceServiceModule_h

#import <React/RCTBridgeModule.h>
@interface DeviceServiceModule : NSObject <RCTBridgeModule>

- (void) getDeviceID: (RCTResponseSenderBlock) successCallback errorCallback: (RCTResponseSenderBlock)errorCallback;
- (void) getDeviceAttributes: (RCTResponseSenderBlock)successCallback errorCallback: (RCTResponseSenderBlock)errorCallback;

@end

#endif /* DeviceServiceModule_h */
