(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1002:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.loginTypes.RC_PHONE,"RingCentral Office phone"),o(a,r.loginTypes.externalPhone,"Use external phone"),o(a,r.loginTypes.integratedSoftphone,"Integrated softphone"),o(a,r.dropDownOptions.None,"None"),o(a,"multipleLoginsConfirm","Continue"),o(a,"multipleLoginsCancel","Cancel"),o(a,"multipleLoginsTitle","Multiple logins"),o(a,"multipleLoginsContent","This username is still logged in. Press continue to end the existing session and start a new one."),a);t.default=l},1003:function(e,t,n){"use strict";var a;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var o=(r(a={},n(61).dropDownOptions.None,"None"),r(a,"multiple","Multiple assignments"),r(a,"phone","Phone"),r(a,"loginStyle","Login style"),r(a,"loginTime","Login time"),r(a,"skillProfile","Skill profile"),r(a,"dialGroup","Dial group"),r(a,"saveEditionModalTitle","Confirm Update"),r(a,"saveEditionModalContent","Your changes have not been saved."),r(a,"save","Save"),r(a,"cancel","Cancel"),a);t.default=o},1004:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={default:"Default",us:"North America Domestic"}},1005:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={inviteModalTitle:"Start session",inviteModalContent:"Incoming call from {displayName}",inviteModalAnswer:"Answer",inviteModalReject:"Reject"}},1006:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={default:"Default",manualDialSettings:"Manual dial settings",callerId:"Caller ID",queue:"Queue",country:"Country",ringTime:"Ring time (seconds)",us:"United States"}},1007:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={unKnown:"Unknown"}},1008:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={phone:"Phone",loginStyle:"Login style",loginTime:"Login time",skillProfile:"Skill profile",noneSkillProfile:"N/A",integratedPhone:"Integrated Phone",ringCentralPhone:"RingCentral Phone",externalPhone:"External Phone",unKnown:"Unknown"}},1009:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={sendVoicemail:"Send to voicemail",transferFailedContent:"Routing failed. The person is not accepting the call at this time.",transferRejectedContent:"The transfer was rejected by the agent. How would you like to proceed?",transferCancelContent:"Request Cancelled.",transferTimeOutContent:"Time Out Waiting For Agent.",selectOtherAgents:"Try another agent",incomingTransferTitle:"Incoming direct transfer",incomingTransferContent:"To accept this call, we must change your state. This may take up to 5s, would you like to proceed?",acceptIncomingTransfer:"Accept Call",ignoreIncomingTransfer:"Ignore",transferModalTitle:"Call transfer failed"}},1010:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(498);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={callRecipient:"Call recipient",phoneNumber:"Phone number",callRecipientName:"Call recipient name",callRecipientNumber:"Call recipient number",enterThePhoneNumberPlaceholder:"Enter the phone number",callRecipientNamePlaceholder:"Please select",callRecipientNumberPlaceholder:"None",queueGroup:"Queue group",queueDetail:"Queue"},r.transferTypes.internal,"Internal transfer"),o(a,r.transferTypes.phoneBook,"Phone book transfer"),o(a,r.transferTypes.manualEntry,"Enter a number"),o(a,r.transferTypes.queue,"Queue transfer"),a);t.default=l},1014:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var r=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},((a=n(989))&&a.__esModule?a:{default:a}).default.userMediaPermission,"Please grant {application} to access your audio.");t.default=r},1031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(381))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.internalError,"Login failed due to internal errors. Please try again later."),l(r,o.default.accessDenied,"Access denied. Please contact support."),l(r,o.default.sessionExpired,"Session expired. Please sign in."),r);t.default=i},1048:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(380))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.noToNumber,"Please enter a valid phone number."),l(r,o.default.noAreaCode,"Please set {areaCodeLink} to use 7-digit local phone numbers."),l(r,o.default.specialNumber,"Dialing emergency or special service numbers is not supported."),l(r,o.default.connectFailed,"Connection failed. Please try again later."),l(r,o.default.internalError,"Cannot connect due to internal errors. Please try again later."),l(r,o.default.notAnExtension,"The extension number does not exist."),l(r,o.default.networkError,"Cannot connect due to network issues. Please try again later."),l(r,o.default.noInternational,"You don't have permissions to make international calls. Please contact your {brand} account administrator for an upgrade."),l(r,o.default.noRingoutEnable,"Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options\n    please contact your account administrator for an upgrade."),l(r,"areaCode","area code"),l(r,"telus911","Emergency dialing is not supported."),r);t.default=i},1065:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(990))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=o.default.holdConflictError,u=o.default.unHoldConflictError,d=o.default.muteConflictError,s=o.default.unMuteConflictError,c=o.default.generalError,f=o.default.forwardSuccess,p=(l(r={},d,"This call had been muted on other device. Please unmute the call before you control in this App."),l(r,i,"This call had been held on other device. Please unhold the call before you control in this App."),l(r,s,"This call had been unmuted on other device. Please mute the call before you control in this App."),l(r,u,"This call had been unheld on other device. Please hold the call before you control in this App."),l(r,c,"Unexpected server error. Please try again later."),l(r,f,"Call forwarded"),r);t.default=p},1082:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(992))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={title:"Calling"},o.default.softphone,"{brand} for Desktop"),l(r,o.default.browser,"Browser"),l(r,o.default.jupiter,"{brand}"),l(r,"makeCallsWith","Make my calls with"),l(r,"ringoutHint","Ring me at my location first, then connect the called party"),l(r,"myLocationLabel","My Location"),l(r,"press1ToStartCallLabel","Prompt me to dial 1 before connecting the call"),l(r,"".concat(o.default.browser,"Tooltip"),"Use this option to make and receive calls using your computer’s microphone and speaker."),l(r,"".concat(o.default.softphone,"Tooltip"),"Use this option to make and receive calls using your {brand}."),l(r,"".concat(o.default.ringout,"Tooltip"),"Use this option to make calls using your selected or entered phone number."),l(r,"".concat(o.default.ringout,"Tooltip1"),"For the call you make, this phone will ring first then the party you called."),l(r,"".concat(o.default.jupiter,"Tooltip"),"Use this option to make and receive calls using your {brand}."),r);t.default=i},1099:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={save:"Save"}},1116:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ringtones:"Ringtones",incomingRingtone:"Incoming Ringtone",outgoingRingtone:"Outgoing Ringtone",play:"Play",stop:"Stop",upload:"Upload",reset:"Reset",save:"Save"}},1133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(991))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.saveSuccess,"Settings saved successfully."),l(r,o.default.saveSuccessWithSoftphone,"Settings saved successfully. Please make sure you have {brand} installed in your computer."),l(r,o.default.permissionChanged,"Your permissions have been changed recently. Please go to {link} to check your Calling options."),l(r,o.default.phoneNumberChanged,"Your phone number information has been changed recently. Please go to {link} to check your Calling options."),l(r,"link","Settings > Calling"),l(r,o.default.webphonePermissionRemoved,"Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator."),l(r,o.default.emergencyCallingNotAvailable,"Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number."),l(r,o.default.saveSuccessWithJupiter,"Settings saved successfully. Please make sure you have {brand} installed in your computer."),r);t.default=i},1150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(993))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.logCallLogFailed,"Failed to load call log form due to unexpected error. Please refresh the page and try again."),l(r,o.default.logFailed,"Sorry, we've failed to log your call. Please try again later."),l(r,o.default.fieldRequired,"Mandatory fields are required."),r);t.default=i},1167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(994))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.requireAdditionalNumbers,"Please select the additional dial-in numbers."),l(r,o.default.scheduledSuccess,"Conference is scheduled."),r);t.default=i},1184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(995))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.bringInFailed,"Failed to merge the calls due to unexpected errors. Please try again later."),l(r,o.default.makeConferenceFailed,"Failed to merge the calls due to unexpected errors. Please try again later."),l(r,o.default.terminateConferenceFailed,"Failed to hangup the conference due to unexpected errors. Please try again later."),l(r,o.default.removeFromConferenceFailed,"Failed to remove the participant due to unexpected errors. Please try again later."),l(r,o.default.callIsRecording,"Call recording in progress. Please stop recording and try again."),r);t.default=i},1201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(378))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.networkLoss,"Sorry, something went wrong, check your network connection and try again."),l(r,o.default.offline,"Cannot connect to the server. Please retry later."),l(r,o.default.serverUnavailable,"Sorry, something went wrong on our end. Try again later."),l(r,o.default.voipOnly,"Sorry, something went wrong on our end, but we are working hard to fix it. You can still make calls, but other functions are currently limited."),l(r,o.default.survival,"Sorry, something went wrong on our end, but we are working hard to fix it. You may have limited access to certain features. The app will recover automatically as soon as it’s available."),r);t.default=i},1218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(996))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.emptyTopic,"Please enter meeting topic."),l(r,o.default.noPassword,"Please provide meeting password."),l(r,o.default.insufficientPermissions,"{application} do not have {permissionName} permission."),l(r,o.default.scheduledSuccess,"Meeting added"),l(r,o.default.updatedSuccess,"Meeting updated"),l(r,o.default.meetingIsDeleted,"Meeting has been deleted"),l(r,o.default.internalError,"Sorry, something went wrong on our end. Try again."),r);t.default=i},1235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=l(n(997)),o=l(n(1e3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=(i(a={},r.default.sendSuccess,"Send Success."),i(a,r.default.sendError,"Something wrong happened when send message."),i(a,r.default.numberValidateError,"Phone Number Validate Error."),i(a,r.default.textEmpty,"Please enter the text to be sent."),i(a,r.default.noPermission,"You have no permission to send message."),i(a,r.default.senderEmpty,"You must select a number from your phone numbers to send"),i(a,r.default.noToNumber,"Please enter a valid phone number."),i(a,r.default.recipientsEmpty,"Please enter a valid receiver number."),i(a,r.default.textTooLong,"Text is too long, 1000 Limited"),i(a,r.default.multipartTextTooLong,"Text is too long, 5000 Limited"),i(a,r.default.recipientNumberInvalids,"Please enter a valid phone number."),i(a,r.default.noAreaCode,"Please set {areaCodeLink} to use 7-digit local phone numbers."),i(a,r.default.specialNumber,"Sending text to emergency/special service numbers is not supported."),i(a,r.default.connectFailed,"Connection failed. Please try again later."),i(a,r.default.internalError,"Cannot connect due to internal errors. Please try again later."),i(a,r.default.notAnExtension,"The extension number does not exist."),i(a,r.default.networkError,"Cannot connect due to network issues. Please try again later."),i(a,r.default.senderNumberInvalid,"A valid Phone Number is required to send text message to recipients outside of your company, Please contact your Administrator to add a direct number to your account."),i(a,r.default.notSmsToExtension,"Cannot send To a extension number with main phone number. If you want to sent to a extension Number, please just enter extension Number."),i(a,r.default.internationalSMSNotSupported,"Sending SMS to international phone number is not supported."),i(a,r.default.noInternalSMSPermission,"You don't have permission to send messages. Please contact your {brand} account administrator for upgrade."),i(a,r.default.noSMSPermission,"You don't have permission to send messages to recipients outside of your organization."),i(a,o.default.attachmentCountLimitation,"Maximum 10 attachments."),i(a,o.default.attachmentSizeLimitation,"Attachments size is limited to 1.5M bytes."),i(a,o.default.noAttachmentToExtension,"It isn't supported to send MMS to an extension."),i(a,"areaCode","area code"),i(a,r.default.sending,"Message being sent…It may take a couple of minutes to complete."),a);t.default=u},1252:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var r=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},((a=n(998))&&a.__esModule?a:{default:a}).default.deleteFailed,"Cannot delete the voicemail due to internal server error.");t.default=r},1269:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={rateExceeded:"Request limit exceeded. App will resume in {ttl} seconds."}},1286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(495))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={region:"Region"},o.default.saveSuccess,"Settings saved successfully."),l(r,o.default.dialingPlansChanged,"The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}."),l(r,"regionSettings","region settings"),l(r,o.default.areaCodeInvalid,"Please enter a valid area code."),r);t.default=i},1303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(311))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.invalidTier,"Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition."),l(r,o.default.insufficientPrivilege,"Insufficient privilege. Please contact your account representative for an upgrade."),r);t.default=i},1320:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=l(n(999)),o=l(n(1001));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=(i(a={},r.default.connectFailed,"Sorry, phone features are currently unavailable. Please retry later. "),i(a,r.default.connected,"Web phone registered."),i(a,r.default.browserNotSupported,"Sorry, making calls using this browser is not supported."),i(a,r.default.webphoneCountOverLimit,"A maximum of 5 web phones could be registered."),i(a,r.default.checkDLError,"Unable to make outgoing call. Contact {brandName} for support if this error keeps showing."),i(a,r.default.noOutboundCallWithoutDL,"Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade."),i(a,r.default.provisionUpdate,"Sorry, something went wrong on our end. We will automatically try to reconnect shortly."),i(a,r.default.serverConnecting,"Sorry, we are having an issue connecting to the phone server."),i(a,r.default.toVoiceMailError,"Cannot send call to voicemail due to internal error"),i(a,r.default.muteError,"Call cannot be muted at the moment."),i(a,r.default.holdError,"Call cannot be hold at the moment."),i(a,r.default.flipError,"Cannot flip the call. Please try again later."),i(a,r.default.recordError,"You cannot record the call at the moment. Error code: {errorCode}"),i(a,r.default.recordDisabled,"Sorry, your account does not have the feature to record a call. Please contact your account administrator."),i(a,r.default.transferError,"Cannot transfer the call. Please try again later."),i(a,o.default.parked,"Your call is parked at location: {parkedNumber}"),i(a,"failWithStatusCode","Sorry, we've encountered an error: {errorCode}. If the problem persists, report this error to {brandName} support."),i(a,"registeringWithStatusCode","Sorry, something went wrong. We are trying to reconnect. If the problem persists, please report this error to {brandName} support. Error code: {errorCode}."),i(a,"failWithoutStatusCode","Sorry, something went wrong on our end. If the error persists, report this error to {brandName} support."),i(a,"registeringWithoutStatusCode","Sorry, something went wrong. We are trying to reconnect. If the problem persists, please report this error to {brandName} support."),a);t.default=u},1334:function(e,t,n){"use strict";var a;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var o=(r(a={dispositionError:"Please choose a disposition before submitting."},n(61).dropDownOptions.None,"None"),r(a,"pleaseSelect","Please select"),r(a,"agentScriptTitle","Find agent script setting"),r(a,"agentScriptContent","Click to agent script page"),a);t.default=o},1335:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.messageTypes.NO_AGENT,"This RC account has not being assigned any EV agent account and please contact your admin or suprervisor."),o(a,r.messageTypes.CONNECT_ERROR,"Authenticated error. Please retry later."),o(a,r.messageTypes.UNEXPECTED_AGENT,"This RC account has being assigned an unexpected EV agent account and please contact your admin or suprervisor."),o(a,r.messageTypes.INVALID_BROWSER,"WebSocket NOT supported by your browser."),o(a,r.messageTypes.CONNECT_TIMEOUT,"Authorization timeout. Please retry later."),o(a,r.messageTypes.OPEN_SOCKET_ERROR,"Connect socket error. Please retry later."),o(a,r.messageTypes.EXISTING_LOGIN_ENGAGED,"Existing login engaged"),o(a,r.messageTypes.FORCE_LOGOUT,"Your logon session has been terminated"),a);t.default=l},1336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.messageTypes.NO_SUPPORT_COUNTRY,"Sorry, outbound call to the outside of the U.S. and Canada is not yet supported."),o(a,r.messageTypes.FAILED_TO_CALL,"Sorry, the line is busy or is at pending disposition."),o(a,r.messageTypes.OFFHOOK_INIT_ERROR,"Internal error offhook init occurred."),o(a,r.messageTypes.OFFHOOK_TERM_ERROR,"Internal error offhook term occurred."),o(a,r.messageTypes.ADD_SESSION_ERROR,"Internal error add session occurred."),o(a,r.messageTypes.DROP_SESSION_ERROR,"Internal error drop session occurred."),o(a,r.messageTypes.HOLD_ERROR,"Internal error hold/unhold call occurred."),o(a,r.messageTypes.LOGOUT_FAIL_WITH_CALL_CONNECTED,"Logout is not working while the call is still connected."),a);t.default=l},1337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.logTypes.CALL_DISPOSITION_SUCCESS,"Log is saved successfully."),o(a,r.logTypes.CALL_DISPOSITION_FAILURE,"Failed to log, try again later."),a);t.default=l},1338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61),o=n(312);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(a={},r.EvSoftphoneEvents.AUDIO_STREAM_REJECTED,"We need your audio permission for browser using your device, please allow permission in browser setting"),l(a,o.EvCallbackTypes.SIP_REGISTRATION_FAILED,"Integrated softphone registration failed, please try later."),l(a,r.EvSoftphoneEvents.CALL_REJECTED,"The inbound call ended during routing. Please prepare for subsequent calls."),l(a,r.tabManagerEvents.SIP_CONNECTING,"Integrated Softphone connecting..."),l(a,r.tabManagerEvents.SIP_RECONNECTING_WHEN_CALL_CONNECTED,"Try to reconnect Integrated Softphone..."),l(a,r.tabManagerEvents.ASK_AUDIO_PERMISSION,"Wait for accept audio permission."),a);t.default=i},1339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.requeueEvents.FAILURE,"Call queue transfer is failed"),o(a,r.requeueEvents.START,"Call queue transfer in progress"),o(a,r.requeueEvents.SUCCESS,"Call queue transfer is completed"),a);t.default=l},1340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.messageTypes.AGENT_CONFIG_ERROR,"Agent Config Error"),o(a,r.messageTypes.EMPTY_PHONE_NUMBER,"Sorry, we've failed to get your phone number."),o(a,r.messageTypes.INVALID_PHONE_NUMBER,"Sorry, your phone number is invalid."),o(a,r.messageTypes.NO_AGENT_SELECTED,"Sorry, no inbound queues selected."),o(a,r.messageTypes.UPDATE_AGENT_ERROR,"Session update failed"),o(a,r.messageTypes.UPDATE_AGENT_SUCCESS,"Session updated"),a);t.default=l},1341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.transferEvents.START,"Call transfer in progress"),o(a,r.transferErrors.TRANSFER_ERROR,"Call transfer is failed."),o(a,r.transferSuccesses.TRANSFER_CONNECTED,"Call transfer is connected"),o(a,r.transferSuccesses.SEND_VOICEMAIL_SUCCESS,"Send voicemail is succeed"),o(a,r.transferErrors.SEND_VOICEMAIL_ERROR,"Send voicemail is failed"),a);t.default=l},1342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=n(61);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(o(a={},r.messageTypes.OVER_BREAK_TIME,"Your break time is over"),o(a,r.messageTypes.INVALID_STATE_CHANGE,"Unable to process state change event. Invalid transition specified. Manual transition from OFFLINE, ENGAGED, CHAT-ENGAGED or TRANSITION is not currently allowed."),a);t.default=l},1343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a=n(497);var r,o,l,i=(r={},o=a.messageTypes.COPY_UII_SUCCESS,l="Call ID copied",o in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,r);t.default=i},1344:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={manualDialSettings:"Manual dial settings",queueID:"Queue ID",save:"Save",second:"Seconds"}},1348:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={mute:"Mute",unmute:"Unmute",hangup:"Hang up",reject:"Reject",hold:"Hold",onHold:"On Hold",transfer:"Transfer"}},1359:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={activeCall:"Active call",me:"Me",everyone:"Everyone",caller:"Caller",callee:"Callee",unKnown:"Unknown"}},1363:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={noResultFoundFor:"No result found for",search:"Search"}},1380:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={copyToClipboard:"Copy to Clipboard"}},1397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=i(n(379)),o=i(n(223)),l=i(n(191));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=(u(a={},l.default.inbound,"Inbound"),u(a,l.default.outbound,"Outbound"),u(a,"status","Status:"),u(a,"InboundNumber","Caller Id:"),u(a,"OutboundNumber","Called:"),u(a,"InboundDirection","Inbound from:"),u(a,"OutboundDirection","Outbound to:"),u(a,o.default.noCall,"Disconnected"),u(a,o.default.callConnected,"Connected"),u(a,o.default.ringing,"Ringing"),u(a,o.default.onHold,"On Hold"),u(a,o.default.parkedCall,"Parked"),u(a,r.default.unknown,"Unknown"),u(a,r.default.missed,"Missed"),u(a,r.default.callAccepted,"Answered"),u(a,r.default.accepted,"Answered"),u(a,r.default.voicemail,"Voicemail"),u(a,r.default.rejected,"Declined"),u(a,r.default.reply,"Reply"),u(a,r.default.received,"Received"),u(a,r.default.faxReceiptError,"Fax Receipt Error"),u(a,r.default.faxOnDemand,"Fax on Demand"),u(a,r.default.partialReceive,"Partial Receive"),u(a,r.default.blocked,"Blocked"),u(a,r.default.callConnected,"Call connected"),u(a,r.default.noAnswer,"No Answer"),u(a,r.default.internationalDisabled,"International Disabled"),u(a,r.default.busy,"Busy"),u(a,r.default.faxSendError,"Fax Send Error"),u(a,r.default.sent,"Sent"),u(a,r.default.callFailed,"Call Failed"),u(a,r.default.internalError,"Internal Error"),u(a,r.default.IPPhoneOffline,"IP Phone Offline"),u(a,r.default.restrictedNumber,"Restricted Number"),u(a,r.default.wrongNumber,"Wrong Number"),u(a,r.default.stopped,"Stopped"),u(a,r.default.suspendedAccount,"Suspended Account"),u(a,r.default.hangUp,"Hung up"),u(a,r.default.HangUp,"Hung up"),u(a,r.default.abandoned,"Abandoned"),u(a,r.default.declined,"Declined"),u(a,r.default.faxReceipt,"Fax Receipt"),u(a,r.default.disconnected,"Disconnected"),a);t.default=d},1414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r=i(n(379)),o=i(n(223)),l=i(n(191));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=(u(a={},l.default.inbound,"Inbound"),u(a,l.default.outbound,"Outbound"),u(a,"status","Status:"),u(a,"InboundNumber","Caller Id:"),u(a,"OutboundNumber","Called:"),u(a,"InboundDirection","Inbound from:"),u(a,"OutboundDirection","Outbound to:"),u(a,o.default.noCall,"Disconnected"),u(a,o.default.callConnected,"Connected"),u(a,o.default.ringing,"Ringing"),u(a,o.default.onHold,"On Hold"),u(a,o.default.parkedCall,"Parked"),u(a,r.default.unknown,"Unknown"),u(a,r.default.missed,"Missed"),u(a,r.default.callAccepted,"Answered"),u(a,r.default.accepted,"Answered"),u(a,r.default.voicemail,"Voicemail"),u(a,r.default.rejected,"Declined"),u(a,r.default.reply,"Reply"),u(a,r.default.received,"Received"),u(a,r.default.faxReceiptError,"Fax Receipt Error"),u(a,r.default.faxOnDemand,"Fax on Demand"),u(a,r.default.partialReceive,"Partial Receive"),u(a,r.default.blocked,"Blocked"),u(a,r.default.callConnected,"Call connected"),u(a,r.default.noAnswer,"No Answer"),u(a,r.default.internationalDisabled,"International Disabled"),u(a,r.default.busy,"Busy"),u(a,r.default.faxSendError,"Fax Send Error"),u(a,r.default.sent,"Sent"),u(a,r.default.callFailed,"Call Failed"),u(a,r.default.internalError,"Internal Error"),u(a,r.default.IPPhoneOffline,"IP Phone Offline"),u(a,r.default.restrictedNumber,"Restricted Number"),u(a,r.default.wrongNumber,"Wrong Number"),u(a,r.default.stopped,"Stopped"),u(a,r.default.suspendedAccount,"Suspended Account"),u(a,r.default.hangUp,"Hung up"),u(a,r.default.HangUp,"Hung up"),u(a,r.default.abandoned,"Abandoned"),u(a,r.default.declined,"Declined"),u(a,r.default.faxReceipt,"Fax Receipt"),u(a,r.default.disconnected,"Disconnected"),a);t.default=d},1431:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={confirmationInfo:"Your unsaved edits on the previous call will be lost, are you sure you want to work on the new call?",log:"Log",save:"Save & Work on New",discard:"Discard & Work on New",stay:"Stay on Previous Work"}},1448:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={mute:"Mute",unmute:"Unmute",hangup:"Hang up",reject:"Reject"}},1465:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={log:"Log",save:"Save and new",discard:"Discard and new",hangup:"Hangup",reject:"To Voicemail"}},1482:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ringing:"Incoming call",callConnected:"Call connected"}},1499:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={forward:"Forward",ignore:"Ignore",toVoicemail:"To Voicemail",answer:"Answer",endAndAnswer:"End & Answer",holdAndAnswer:"Hold & Answer",custom:"Custom"}},1516:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={createCallLog:"Create call log"}},1530:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={activeCall:"Active Call"}},1531:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={none:"None",submit:"Submit",name:"Name",relatedTo:"Related to",disposition:"Disposition",multipleNameMatch:"Multiple name matches",multipleRelatedToMatch:"Multiple related matches",namePlaceholder:"Search contact/lead",relatedToPlaceholder:"Search account/opportunity...",internalTransfer:"Internal transfer",phoneBookTransfer:"Phone book transfer",queueTransfer:"Queue transfer",enterANumber:"Enter a number"}},1535:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={noResultFoundFor:"No result found for",foundFromServerHint:"Type keyword and press Enter to search in {appName}",notResultFoundFromServer:"No results found",loading:"loading..."}},1552:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={matched:"Matched",other:"Other",associated:"Associated",foundFromServer:"Founds from {appName}"}},1569:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={dialPlaceholder:"Enter Name or Number"}},1583:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={manualDialSettings:"Manual dial settings",dialPlaceholder:"Enter number"}},1587:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={loginButton:"Sign In",signupButton:"New user? Sign Up",version:"Version"}},1598:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={turnOn:"Turn Persistent Voice Connection on",turnOff:"Turn Persistent Voice Connection off",disabled:"Persistent Voice Connection disabled",dialpadLabel:"Dial Pad",settingsLabel:"Settings"}},1599:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={search:"Search "}},1600:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={queueGroup:"Queue Group",search:"Search "}},1601:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={selectCheck:"Select"}},1602:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={assigned:"Assigned",unassigned:"Unassigned",inboundQueues:"Inbound queues",assignment:"Assignment",assignments:"Assignments",update:"Update",search:"Search ",selectedTips:"{assignedInboundQueuesNumber} of {totalInboundQueuesNumber} Selected",selectAll:"Select all"}},1603:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={inboundQueues:"Inbound queues",skillProfile:"Skill profile",voiceConnection:"Voice connection",extensionNumber:"Your phone number",takingCalls:"Persistent Voice Connection",answerCalls:"Auto answer calls",continue:"Continue",enterYourPhoneNumber:"Enter your phone number",warning:"It may take a while to update the change."}},1604:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={inboundQueues:"Inbound queues",skillProfile:"Skill profile",voiceConnection:"Voice connection",extensionNumber:"Your phone number",takingCalls:"Persistent Voice Connection",answerCalls:"Auto answer calls",continue:"Continue",enterYourPhoneNumber:"Enter your phone number"}},1605:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={saveUpdate:"Save update",cancel:"Cancel",editSession:"Edit Session"}},1606:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={logout:"Logout",version:"Version",offhookStatus:"Offhook status",connected:"Connected",connecting:"Connecting",disconnected:"Disconnected",disconnecting:"Disconnecting",sessionInfo:"Session info",editSession:"Edit Session"}},1607:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={transferType:"Transfer type",stayOnCall:"Stay on call",transfer:"Transfer",cancel:"Cancel",transferModalTitle:"Call transfer failed"}},1608:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={search:"Search "}},1609:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={internalCallRecipient:"Internal call recipient",available:"Available",unavailable:"Unavailable"}},1610:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={callRecipient:"Call recipient",dialPlaceholder:"Enter number",next:"Next",transferCountry:"Country"}},1611:function(e,t,n){"use strict";n(1),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={phoneBookTransfer:"Phone book transfer"}},1615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(1);var a,r,o=(a=n(378))&&a.__esModule?a:{default:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(l(r={},o.default.webphoneUnavailable,"Web Phone Unavailable"),l(r,o.default.offline,"Offline"),l(r,o.default.voipOnly,"VoIP Only"),l(r,o.default.survival,"Limited Mode"),r);t.default=i}}]);