define(["./isValidIban"], function(isValidIban) {

	return {
		validateIban: function(){
			var iban = this.view.ibanTextBox.text;
			if(isValidIban(iban)){
				if(typeof this.onValidIban === "function"){
					this.onValidIban(iban);
				}
			}
			else{
				if(typeof this.onInvalidIban === "function"){
					this.onInvalidIban(iban);
				}
			}
		},

		preShow: function(){},

		postShow: function(){
			this.view.ibanTextBox.onEndEditing = this.validateIban;
		},

		constructor: function(/*baseConfig, layoutConfig, pspConfig*/) {
			this.view.preShow = this.preShow;
			this.view.postShow = this.postShow;
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});
