var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum[UserRoleEnum["ADMIN"] = 0] = "ADMIN";
    UserRoleEnum[UserRoleEnum["DEVELOPER"] = 1] = "DEVELOPER";
    UserRoleEnum[UserRoleEnum["DESIGNER"] = 2] = "DESIGNER";
    UserRoleEnum[UserRoleEnum["TESTER"] = 3] = "TESTER";
    UserRoleEnum[UserRoleEnum["MANAGER"] = 4] = "MANAGER";
})(UserRoleEnum || (UserRoleEnum = {}));
console.log(UserRoleEnum.ADMIN); // Output: 0 (default value for ADMIN)
var COUNTRY_CODE;
(function (COUNTRY_CODE) {
    COUNTRY_CODE["USA"] = "US";
    COUNTRY_CODE["CANADA"] = "CA";
    COUNTRY_CODE["UK"] = "GB";
    COUNTRY_CODE["AUSTRALIA"] = "AU";
    COUNTRY_CODE["INDIA"] = "IN";
})(COUNTRY_CODE || (COUNTRY_CODE = {}));
console.log(COUNTRY_CODE.USA);
