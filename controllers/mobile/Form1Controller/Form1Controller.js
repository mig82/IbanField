define(function(){
	return {
		postShow: function(){
			this.view.accountField1.onValidIban = (iban)=>{
				kony.print(`${iban} is a valid IBAN`);
			};
			this.view.accountField1.onInvalidIban = (iban)=>{
				kony.print(`${iban} is NOT a valid IBAN`);
			};
		},
		onNavigate: function(){
			this.view.postShow = this.postShow;
		}
	};
});
