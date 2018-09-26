var IosUuid = require("nativescript-ios-uuid").IosUuid;
var iosUuid = new IosUuid();

describe("greet function", function() {
    it("exists", function() {
        expect(iosUuid.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(iosUuid.greet()).toEqual("Hello, NS");
    });
});