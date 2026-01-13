function Main() {

	const technologies = [
		{
			name: 'Bootstrap 4.6.2', icon: <div style={{
				width: '24px',
				height: '24px',
				backgroundColor: '#412df1',
				borderRadius: '4px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'white',
				fontSize: '12px',
				fontWeight: 'bold'
			}}>B4</div>
		},
		{ name: 'ReactJS', icon: '⚛️' },
		{
			name: 'Vite', icon: <div style={{
				width: '24px',
				height: '24px',
				backgroundColor: '#646cff',
				clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
			}} />
		},
		{
			name: 'Адаптивная верстка', icon: (
				<div style={{
					width: '24px',
					height: '24px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}>
					<div style={{
						width: '8px',
						height: '16px',
						backgroundColor: '#28a745',
						borderRadius: '2px'
					}} />
					<div style={{
						width: '12px',
						height: '12px',
						backgroundColor: '#28a745',
						borderRadius: '2px'
					}} />
				</div>
			)
		},
		{
			name: 'Семантическая разметка', icon: (
				<div style={{
					width: '24px',
					height: '24px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<span style={{
						color: '#007bff',
						fontSize: '18px',
						fontWeight: 'bold',
						fontFamily: 'monospace'
					}}>{'</>'}</span>
				</div>
			)
		},
		{
			name: 'Кроссбраузерность', icon: (
				<div style={{
					width: '24px',
					height: '24px',
					borderRadius: '50%',
					border: '2px solid #17a2b8',
					position: 'relative'
				}}>
					<div style={{
						position: 'absolute',
						width: '6px',
						height: '6px',
						backgroundColor: '#17a2b8',
						borderRadius: '50%',
						top: '6px',
						left: '6px'
					}} />
					<div style={{
						position: 'absolute',
						width: '6px',
						height: '6px',
						backgroundColor: '#17a2b8',
						borderRadius: '50%',
						top: '6px',
						right: '6px'
					}} />
				</div>
			)
		}
	];

	return (
		<section
			className="main-section py-5"
			aria-labelledby="main-heading"
			role="region"
			style={{
				background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
			}}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 mb-5 mb-lg-0">
						<div className="mb-4">
							<span className="badge badge-pill badge-primary mb-3 px-3 py-2"
								style={{
									fontSize: '0.9rem',
									backgroundColor: '#007bff',
									border: 'none'
								}}>
								Демо
							</span>
							<h1 id="main-heading" className="display-4 font-weight-bold mb-4 text-dark">
								Современная верстка на <span style={{ color: '#007bff' }}>Bootstrap 4</span>
							</h1>
							<p className="lead mb-4 text-secondary" style={{ fontSize: '1.2rem' }}>
								Пример реализации адаптивного интерфейса с использованием
								современных фронтенд-технологий и лучших практик разработки.
							</p>
						</div>

						<div className="d-flex flex-wrap mb-4" style={{ gap: '12px' }}>
							<a
								href="#contact"
								className="btn btn-primary btn-lg px-4 py-3 d-flex align-items-center"
								style={{
									backgroundColor: '#007bff',
									border: 'none',
									borderRadius: '8px',
									fontWeight: '500',
									boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
									transition: 'all 0.2s ease',
									flexShrink: 0
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-2px)';
									e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.3)';
									e.currentTarget.style.backgroundColor = '#0056cc';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.2)';
									e.currentTarget.style.backgroundColor = '#007bff';
								}}
							>
								{/* УПРОЩЕННАЯ ИКОНКА КОНВЕРТА */}
								<svg
									width="20"
									height="20"
									fill="white"
									className="mr-2 flex-shrink-0"
									viewBox="0 0 16 16"
									style={{ flexShrink: 0 }}
								>
									<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114V5.383z" />
								</svg>
								<span className="sr-only">Перейти к </span>
								<span style={{ whiteSpace: 'nowrap' }}>Контакты</span>
							</a>

							<a
								href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
								className="btn btn-outline-primary btn-lg px-4 py-3 d-flex align-items-center"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									borderColor: '#007bff',
									color: '#007bff',
									borderRadius: '8px',
									fontWeight: '500',
									transition: 'all 0.2s ease',
									flexShrink: 0
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.05)';
									e.currentTarget.style.transform = 'translateY(-2px)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = 'transparent';
									e.currentTarget.style.transform = 'translateY(0)';
								}}
							>
								{/* УПРОЩЕННАЯ ИКОНКА КНИГИ */}
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="mr-2 flex-shrink-0"
									viewBox="0 0 16 16"
									style={{ flexShrink: 0 }}
								>
									<path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687z" />
								</svg>
								<span style={{ whiteSpace: 'nowrap' }}>Документация</span>
							</a>
						</div>

					</div>
					<div className="col-lg-6">
						<div className="card border-0 shadow-sm"
							style={{
								borderRadius: '16px',
								overflow: 'hidden',
								background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
								border: '1px solid #e9ecef'
							}}>
							<div className="card-header border-0 pt-4 pb-4 px-4 text-white"
								style={{
									background: 'linear-gradient(90deg, #007bff, #0056cc)',
									position: 'relative'
								}}>
								<div className="position-absolute top-0 end-0" style={{ opacity: 0.1 }}>
									<svg width="80" height="80" fill="white" viewBox="0 0 16 16">
										<path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
									</svg>
								</div>
								<h2 className="h5 card-title mb-1 font-weight-bold">
									Технологический стек
								</h2>
								<p className="mb-0 opacity-90" style={{ fontSize: '0.9rem' }}>
									Используемые инструменты и подходы
								</p>
							</div>
							<div className="card-body p-3 p-md-4"> {/* Изменил p-4 на p-3 p-md-4 */}
								<div className="row">
									{technologies.map((tech, index) => (
										<div key={index} className="col-12 col-sm-6 mb-3"> {/* Изменил col-6 на col-12 col-sm-6 */}
											<div className="d-flex align-items-center p-2">
												<div className="mr-3 d-flex align-items-center justify-content-center"
													style={{
														width: '36px',
														height: '36px',
														borderRadius: '8px',
														background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 86, 204, 0.05))',
														flexShrink: 0
													}}>
													<div style={{
														fontSize: '1rem',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}>
														{tech.icon}
													</div>
												</div>
												<div className="flex-grow-1" style={{ minWidth: 0 }}> {/* Добавил minWidth: 0 для правильного переноса текста */}
													<div className="text-dark font-weight-medium" style={{
														fontSize: '0.9rem',
														lineHeight: '1.2',
														wordBreak: 'break-word'
													}}>
														{tech.name}
													</div>
													<div className="text-muted small mt-1" style={{
														fontSize: '0.75rem',
														lineHeight: '1.2'
													}}>
														{index === 0 && 'Фреймворк'}
														{index === 1 && 'Библиотека'}
														{index === 2 && 'Сборщик'}
														{index === 3 && 'Подход'}
														{index === 4 && 'Методология'}
														{index === 5 && 'Поддержка'}
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Main;