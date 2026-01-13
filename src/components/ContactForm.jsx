import { useState } from 'react';

function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [touched, setTouched] = useState({
		name: false,
		email: false,
		message: false
	});

	const validateField = (name, value) => {
		let error = '';

		switch (name) {
			case 'name':
				if (!value.trim()) {
					error = 'Имя обязательно для заполнения';
				} else if (value.length < 2) {
					error = 'Имя должно содержать минимум 2 символа';
				}
				break;

			case 'email':
				if (!value.trim()) {
					error = 'Email обязателен для заполнения';
				} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
					error = 'Введите корректный email адрес';
				}
				break;

			case 'message':
				if (!value.trim()) {
					error = 'Сообщение обязательно для заполнения';
				} else if (value.length < 10) {
					error = 'Сообщение должно содержать минимум 10 символов';
				}
				break;

			default:
				break;
		}

		return error;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData(prev => ({
			...prev,
			[name]: value
		}));

		if (touched[name]) {
			const error = validateField(name, value);
			setErrors(prev => ({
				...prev,
				[name]: error
			}));
		}
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;

		setTouched(prev => ({
			...prev,
			[name]: true
		}));

		const error = validateField(name, value);
		setErrors(prev => ({
			...prev,
			[name]: error
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTouched = {
			name: true,
			email: true,
			message: true
		};

		setTouched(newTouched);

		const newErrors = {
			name: validateField('name', formData.name),
			email: validateField('email', formData.email),
			message: validateField('message', formData.message)
		};

		setErrors(newErrors);

		const hasErrors = Object.values(newErrors).some(error => error !== '');

		if (!hasErrors) {
			alert('Сообщение успешно отправлено! (демо)');
			setFormData({ name: '', email: '', message: '' });
			setTouched({ name: false, email: false, message: false });
			setErrors({ name: '', email: '', message: '' });
		}
	};

	return (
		<section
			id="contact"
			className="contact-section py-5 bg-light"
			aria-labelledby="contact-heading"
			role="region"
		>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="card shadow-lg border-0 overflow-hidden">
							<div className="row no-gutters">
								<div className="col-lg-5 bg-primary text-white p-4 p-lg-5 d-flex flex-column">
									<div className="mb-4">
										<h2 id="contact-heading" className="h3 mb-3">Свяжитесь со мной</h2>
										<p className="mb-0 opacity-75">
											Готова к новым проектам и сотрудничеству
										</p>
									</div>

									<div className="contact-info mt-auto">
										<div className="mb-4">
											<div className="d-flex align-items-center mb-3">
												<div className="contact-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-primary mr-3"
													style={{ width: '40px', height: '40px' }}>
													<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
														<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114V5.383zm-.034 6.876L8.789 8.5l-1.216.728a.5.5 0 0 1-.223.067h-.002a.5.5 0 0 1-.225-.067L2.034 6.26C1.226 7.619 1 8.711 1 9.737c0 .855.114 1.628.377 2.283l4.78-2.876.007-.004.022-.012a.5.5 0 0 1 .226-.067h.002a.5.5 0 0 1 .224.067l4.894 2.936c.477-.535.617-1.28.681-2.028H13c-.043 1.137-.163 2.204-.377 3H2.252C2.516 13.721 3.467 14 4.5 14h7c1.033 0 1.984-.279 2.748-.783-.214-.796-.334-1.863-.377-3h1.043c.064.748.204 1.493.681 2.028l.124.149-.124-.148z" />
													</svg>
												</div>
												<div>
													<strong>Email</strong>
													<div className="opacity-75">vorobjeva.natalia@gmail.com</div>
												</div>
											</div>

											<div className="d-flex align-items-center mb-3">
												<div className="contact-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-primary mr-3"
													style={{ width: '40px', height: '40px' }}>
													<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
														<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
													</svg>
												</div>
												<div>
													<strong>Телефон</strong>
													<div className="opacity-75">+7(911)2080479</div>
												</div>
											</div>

											<div className="d-flex align-items-center mb-3">
												<div className="contact-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-primary mr-3"
													style={{ width: '40px', height: '40px' }}>
													<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
														<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-1.168 0-2.02.918-2.02 2.02 0 1.12.823 2.02 2.02 2.02 1.117 0 2.02-.9 2.02-2.02 0-1.102-.903-2.02-2.02-2.02zm.792 6.014a5.97 5.97 0 0 0 1.091-.416c-.053.186-.115.366-.185.532.301.407.664.758 1.079 1.031a6.059 6.059 0 0 1-2.463.641 6.047 6.047 0 0 1-2.463-.641c.415-.273.778-.624 1.079-1.031-.07-.166-.132-.346-.185-.532a5.97 5.97 0 0 0 1.091.416c.452.081.913.124 1.381.124.468 0 .929-.043 1.381-.124z" />
													</svg>
												</div>
												<div>
													<strong>Telegram</strong>
													<div>
														<a
															href="https://t.me/vorobjevaa"
															target="_blank"
															rel="noopener noreferrer"
															className="text-white text-decoration-underline opacity-75"
														>
															@vorobjevaa
														</a>
													</div>
												</div>
											</div>

											<div className="d-flex align-items-center">
												<div className="contact-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-primary mr-3"
													style={{ width: '40px', height: '40px' }}>
													<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
														<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
													</svg>
												</div>
												<div>
													<strong>GitHub</strong>
													<div>
														<a
															href="https://github.com/Natalia-Vorobeva/demo-bootstrap"
															target="_blank"
															rel="noopener noreferrer"
															className="text-white text-decoration-underline opacity-75"
														>
															github.com
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-7 p-4 p-lg-5">
									<h3 className="h4 mb-4 text-center">Форма обратной связи</h3>

									<form onSubmit={handleSubmit} className="needs-validation" noValidate>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="name" className="form-label">
													Имя <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''} ${touched.name && !errors.name ? 'is-valid' : ''}`}
													id="name"
													name="name"
													value={formData.name}
													onChange={handleChange}
													onBlur={handleBlur}
													required
													aria-required="true"
													placeholder="Ваше имя"
												/>
												{touched.name && errors.name && (
													<div className="invalid-feedback">
														{errors.name}
													</div>
												)}
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="email" className="form-label">
													Email <span className="text-danger">*</span>
												</label>
												<input
													type="email"
													className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''} ${touched.email && !errors.email ? 'is-valid' : ''}`}
													id="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													onBlur={handleBlur}
													required
													aria-required="true"
													placeholder="email@example.com"
												/>
												{touched.email && errors.email && (
													<div className="invalid-feedback">
														{errors.email}
													</div>
												)}
											</div>
										</div>

										<div className="form-group">
											<label htmlFor="message" className="form-label">
												Сообщение <span className="text-danger">*</span>
											</label>
											<textarea
												className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''} ${touched.message && !errors.message ? 'is-valid' : ''}`}
												id="message"
												name="message"
												rows="5"
												value={formData.message}
												onChange={handleChange}
												onBlur={handleBlur}
												required
												aria-required="true"
												placeholder="Расскажите о вашем проекте или задайте вопрос..."
											></textarea>
											{touched.message && errors.message && (
												<div className="invalid-feedback">
													{errors.message}
												</div>
											)}
											<small className="form-text text-muted">
												Минимум 10 символов
											</small>
										</div>

										<div className="form-group form-check">
											<input
												type="checkbox"
												className="form-check-input"
												id="consent"
												required
											/>
											<label className="form-check-label" htmlFor="consent">
												Я согласен(а) на обработку персональных данных
												<span className="text-danger"> *</span>
											</label>
											<div className="invalid-feedback">
												Необходимо согласие на обработку данных
											</div>
										</div>

										<button
											type="submit"
											className="btn btn-primary btn-lg btn-block mt-4 py-3"
											aria-label="Отправить сообщение"
										>
											Отправить сообщение
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactForm;