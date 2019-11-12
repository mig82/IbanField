define(function(){
	const acctFields = ["accountField1", "accountField2"];

	return {
		assignIbanComponentEvents: function(){
			acctFields.forEach((field) => {

				var fieldNum = field[field.length-1]; //1 or 2;
				var label = this.view["errorLabel" + fieldNum];

				this.view[field].onValidIban = (iban)=>{
					kony.print(`Account ${iban} is a valid IBAN`);
					label.opacity = 0;
				};
				this.view[field].onInvalidIban = (iban)=>{
					kony.print(`Account ${iban} is NOT a valid IBAN`);
					label.opacity = 1;
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

		preShow: function(){
			this.view.errorLabel1.opacity = 0;
			this.view.errorLabel2.opacity = 0;
		},
		postShow: function(){
			this.assignIbanComponentEvents();
			this.bindTestButtons();
		},
		onNavigate: function(){
			this.view.preShow = this.preShow;
			this.view.postShow = this.postShow;
		}
	};
});
