import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";

function Login() {
	const navigate = useNavigate(); // Hook de navegación

	return (
		<div className="font-text">
			{/* {showAlert && <Alert />} */}

			<div className="md:flex md:flex-row w-full ">
				{/* PARTE DERECHA */}
				<form className="flex w-full justify-center items-center">
					<div className="flex p-4 flex-col justify-center h-full w-full max-w-md  rounded-3xl mt-8 md:bg-slate-100">
						{/* CAMPO DE EMAIL, PASSWORD, BOTON DE REGISTER */}
						<div className="flex flex-col items-center justify-center">
							<p className="font-bold text-3xl pt-6 pb-10 ">Iniciar sesión</p>

							{/* CAMPO DE EMAIL, PASSWORD, BOTON DE LOGIN */}
							<div className="flex flex-col items-center justify-center w-full pb-2">
								<input
									id="email"
									type="email"
									className="max-w-sm w-full h-9 text-center border-2 rounded-xl focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="E-mail"
									// onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
								<input
									id="password"
									type="password"
									className="max-w-sm w-full h-9 text-center border-2 rounded-xl focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="Contraseña"
									// onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
								/>

								<button
									id="submit"
									type="submit"
									className="max-w-sm bg-[#1b4471] text-white w-full h-9 text-center border-2 rounded-xl md:border-0 focus:outline-none "
									// onSubmit={(e) => e.preventDefault()}
								>
									Iniciar sesión
								</button>
								<button className="pt-12" onClick={() => navigate("/register")}>
									Crear una cuenta
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
