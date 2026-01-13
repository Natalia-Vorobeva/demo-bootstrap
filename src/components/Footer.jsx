import React from 'react';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className="footer bg-dark text-white py-4"
			role="contentinfo"
			aria-label="Подвал сайта"
		>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mb-3 mb-md-0">
						<h3 className="h5">О демо-проекте</h3>
						<p className="small text-light">
							Этот проект создан для демонстрации навыков работы с Bootstrap 4,
							React и современными фронтенд-технологиями.
						</p>
					</div>

					<div className="col-md-3 mb-3 mb-md-0">
						<h4 className="h6">Технологии</h4>
						<ul className="list-unstyled small">
							<li>
								<a
									href="https://getbootstrap.com/docs/4.6/"
									className="text-light"
									target="_blank"
									rel="noopener noreferrer"
								>
									Bootstrap 4
								</a>
							</li>
							<li>
								<a
									href="https://reactjs.org"
									className="text-light"
									target="_blank"
									rel="noopener noreferrer"
								>
									React
								</a>
							</li>
							<li>
								<a
									href="https://vitejs.dev"
									className="text-light"
									target="_blank"
									rel="noopener noreferrer"
								>
									Vite
								</a>
							</li>
						</ul>
					</div>

					<div className="col-md-3">
						<h4 className="h6">Ссылки</h4>
						<ul className="list-unstyled small">
							<li>
								<a
									href="https://getbootstrap.com/docs/4.6/"
									className="text-light"
									target="_blank"
									rel="noopener noreferrer"
								>
									Bootstrap документация
								</a>
							</li>
							<li>
								<a
									href="https://reactjs.org"
									className="text-light"
									target="_blank"
									rel="noopener noreferrer"
								>
									React документация
								</a>
							</li>
							<li>
								<a
									href="https://docs.vite.org/"
									className="text-light"
									target="_blank"
									rel="noopener noreferrer"
								>
									Vite документация
								</a>
							</li>
						</ul>
					</div>
				</div>

				<hr className="bg-secondary my-3" />

				<div className="row align-items-center">
					<div className="col-md-6">
						<p className="mb-0 small">
							© {currentYear} Демо-проект. Для демонстрационных целей.
						</p>
					</div>
					<div className="col-md-6 text-md-right">
						<p className="mb-0 small">
							<a
								href="https://github.com/Natalia-Vorobeva/demo-bootstrap"
								className="text-light"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub репозиторий
							</a>
						</p>
						<p className="mb-0 small">
							<a
								href="https://demo-bootstrap.vercel.app"
								className="text-light"
								target="_blank"
								rel="noopener noreferrer"
							>
								🌐 Демо на Vercel
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;