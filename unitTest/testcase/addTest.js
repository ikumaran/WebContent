// Test suite
describe("Test Add", function() {
	var first;
	var second;

	beforeEach(function() {
		console.log("Starting Test");
	});

	afterEach(function() {
		console.log("Completed Test");
	});

	it("add test", function() {
		first = 5;
		second = 15;
		spyOn(window, "displayResult");
		add(first, second);
		expect(window.displayResult).toHaveBeenCalled();
		expect(window.displayResult).toHaveBeenCalledWith(20);
	});

	it("add test", function() {
		first = "5";
		second = "15";
		spyOn(window, "displayResult");
		add(first, second);
		expect(window.displayResult).toHaveBeenCalled();
		expect(window.displayResult).toHaveBeenCalledWith("Invalid Inputs");
	});

	it("add test", function() {
		first = 5;
		second = 15;
		spyOn(window, "validate").and.callFake(function() {
			throw new Error;
		});
		spyOn(window, "alert");
		add(first, second);
		expect(window.alert).toHaveBeenCalledWith("Invalid Inputs");		
	});
	
	it("add test", function() {
		first = 5;
		second = 15;
		spyOn(window, "displayResult");
		spyOn(window, "validate").and.callFake(function() {
			return false;
		});
		add(first, second);
		expect(window.displayResult).toHaveBeenCalledWith("Invalid Inputs");
	});
});