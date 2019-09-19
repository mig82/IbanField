define(function(){
	const acctFields = ["accountField1", "accountField2"];

	return {
		assignIbanComponentEvents: function(){
			acctFields.forEach((field) => {
				this.view[field].onValidIban = (iban)=>{
					kony.print(`Account ${iban} is a valid IBAN`);
				};
				this.view[field].onInvalidIban = (iban)=>{
					kony.print(`Account ${iban} is NOT a valid IBAN`);
				};
			});
		},

		setTestValue: function(value){
			acctFields.forEach((field) => {
				this.view[field].value = value;
				this.view[field].validateIban();
			});
		},

		bindTestButtons: function(){
			this.view.testAccount1Button.onTouchEnd = ()=>{this.setTestValue("ES26 4141 5000 3000 1210 2699");};
			this.view.testAccount2Button.onTouchEnd = ()=>{this.setTestValue("GB86 UBKL 1234 5698 7654 32");};
		},

		postShow: function(){
			this.assignIbanComponentEvents();
			this.bindTestButtons();
		},
		onNavigate: function(){
			this.view.postShow = this.postShow;
		}
	};
});
