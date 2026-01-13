function Advantages() {

	const advantages = [
	{
		title: 'Адаптивный дизайн',
		description: 'Использование Bootstrap сетки для создания полностью адаптивных интерфейсов.',
		icon: (
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
		title: 'Семантическая верстка',
		description: 'Правильное использование HTML5 тегов и ARIA атрибутов для доступности.',
		icon: (
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
		title: 'Кроссбраузерность',
		description: 'Поддержка современных браузеров.',
		icon: (
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
	},
	{
		title: 'Оптимизация производительности',
		description: 'Быстрая загрузка благодаря Vite и оптимизированным ресурсам.',
		icon: <div style={{
			width: '24px',
			height: '24px',
			backgroundColor: '#646cff',
			clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
		}} />
	}
];

	return (
		<section
			id="advantages"
			className="advantages-section py-5"
			aria-labelledby="advantages-heading"
			role="region"
		>
			<div className="container">
				<div className="text-center mb-5">
					<h2 id="advantages-heading" className="h1 mb-3">Ключевые принципы</h2>
					<p className="lead text-muted">
						В этом демо-проекте реализованы ключевые принципы современной фронтенд-разработки
					</p>
				</div>

				<div className="row">
					{advantages.map((advantage, index) => (
						<div key={index} className="col-md-6 col-lg-3 mb-4">
							<div className="card h-100 border-0 shadow-sm hover-shadow" style={{ transition: '0.3s' }}>
								<div className="card-body text-center">
									<div
										className="display-4 mb-3"
										role="img"
										aria-label={advantage.title}
									>
										{advantage.icon}
									</div>
									<h3 className="h5 card-title">{advantage.title}</h3>
									<p className="card-text">{advantage.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Advantages;