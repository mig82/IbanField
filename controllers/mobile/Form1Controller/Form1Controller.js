define(function(){
	return {
		assignIbanComponentEvents: function(){
			this.view.accountField1.onValidIban = (iban)=>{
				kony.print(`Account ${iban} is a valid IBAN`);
			};
			this.view.accountField1.onInvalidIban = (iban)=>{
				kony.print(`Account ${iban} is NOT a valid IBAN`);
			};
		},

		setTestValue: function(value){
			this.view.accountField1.value = value;
			this.view.accountField1.validateIban();
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
