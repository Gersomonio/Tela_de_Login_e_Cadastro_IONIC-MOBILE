import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import do FormGroup, Builder, Validators

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public formLogin: FormGroup; //Declaramos o atributo formLogin

	constructor(
		private formBuilder: FormBuilder // Validações serão feitas aqui
	) {
		this.formLogin = this.formBuilder.group({
			'email': [null, Validators.compose([Validators.required,Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
		});   //Quando todas as condições são satisfeitas, liberamos o botão de submit do formulário.

	}

	ngOnInit() {
	}
	
 /* situacao() {
      window.location.href = "http://www.devmedia.com.br/"; <------- TESTE PRA VER SE DA ERRO
    alert("oi");
  }*/

}