//
//  DeviceServiceModule.m
//  MobileAppTest
//
//  Created by John Isaac Caasi on 2/8/24.
//

#import <Foundation/Foundation.h>
#import "DeviceServiceModule.h"

@implementation DeviceServiceModule

RCT_EXPORT_MODULE(DeviceServiceModule);

// Get device id method
RCT_EXPORT_METHOD(getDeviceID: (RCTResponseSenderBlock)successCallback errorCallback: (RCTResponseSenderBlock)errorCallback)
{
  @try{
    // Implement get device id logic
    NSString *deviceID = @ "testdeviceId-456";
    successCallback(@[deviceID]);
  }
  @catch(NSException *exception){
    errorCallback(@[exception]);
  }
}

// Get device attributes method
RCT_EXPORT_METHOD(getDeviceAttributes: (RCTResponseSenderBlock)successCallback errorCallback: (RCTResponseSenderBlock)errorCallback)
{
  @try{
    // Implement get device attributes logic
    NSDictionary *deviceAttributes = @{
      @"isDeviceRooted": @"IOSTestRooted",
      @"isDevModeEnabled": @"IOSDevMode",
      @"isADBEnabled" : @"IOSADBEnabled"
    };
    successCallback(@[deviceAttributes]);
  }
  @catch(NSException *exception){
    errorCallback(@[exception]);
  }
}

@end
