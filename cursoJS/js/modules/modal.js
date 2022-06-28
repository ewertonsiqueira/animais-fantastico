export default function inicioModal() {
	const botaoAbrir = document.querySelector('[data-modal="abrir"]')
	const botaoFechar = document.querySelector('[data-modal="fechar"]')
	const botaoModal = document.querySelector('[data-modal="container"]')
	
	if(botaoAbrir && botaoFechar && botaoModal) {
		function abrirModal(event) {
				event.preventDefault()
				botaoModal.classList.add('ativo')
		}
	
		function fecharModal(event) {
				event.preventDefault()
				botaoModal.classList.remove('ativo')
		}
	
		function clickForaModal(event) {
				if(event.target === this) {
						fecharModal(event)
	
					}
		}
	
		botaoAbrir.addEventListener('click', abrirModal)
		botaoFechar.addEventListener('click', fecharModal)
		botaoModal.addEventListener('click', clickForaModal )
	}
}

